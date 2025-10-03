import { z } from "zod";


export const loginSchema = z.object({
    email: z
    .email({ pattern: z.regexes.html5Email, message: "E-mail inválido" })
    .nonempty("E-mail é obrigatório")
    .toLowerCase(),
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(8, "Senha deve ter ao menos 8 caracteres")
      .refine((val) => /[0-9]/.test(val), "Senha deve conter pelo menos um número"),
})

export const patientSchema = z.object({
    fullName: z
      .string().trim()
      .nonempty("Nome completo é obrigatório")
      .regex(
        /^[A-Za-zÀ-ú]+(?: {1,2}[A-Za-zÀ-ú]+)+$/,
        "Informe o nome completo com nome e sobrenome válidos"
      )
      .refine((value) => {
        const words = value.split(' ');
        const lastName = words[words.length - 1];
        const invalidPrepositions = ["d", "da", "de", "dos", "das", "do"];
        const isInvalid =
          invalidPrepositions.includes(lastName.toLowerCase()) &&
          words.length === 2;
        return !isInvalid;
    }, "Nome completo não pode terminar com uma preposição/artigo sem sobrenome válido.")
      ,
    socialName: z
      .string().trim()
      .optional(),
    phone: z
      .string()
      .nonempty("Telefone é obrigatório")
      .min(11, "Telefone inválido")
      .regex(/^\d{11}$/, "Telefone deve conter apenas números"),
    birthDate: z
      .coerce.date<Date>({ error: "Data de nascimento é obrigatória" })
      .min(new Date("1900-01-01"), "Data de nascimento inválida")
      .max(new Date("2007-01-01"), "Você deve ser maior de 18 anos para se cadastrar"),
    email: z
    .email({ pattern: z.regexes.html5Email, message: "E-mail inválido" })
    .nonempty("E-mail é obrigatório")
    .toLowerCase(),
    gender: z
      .enum(["male", "female", "non-binary", "transgender", "other"], {
        error: "Selecione uma opção",
      })
      .nonoptional("Campo obrigatório"),
    cpf: z
      .string()
      .nonempty("CPF é obrigatório")
      .min(11, "CPF deve ter 11 dígitos")
      .regex(/^\d{11}$/, "CPF deve conter apenas números"),
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(8, "Senha deve ter ao menos 8 caracteres")
      .refine((val) => /[0-9]/.test(val), "Senha deve conter pelo menos um número"),
    confirmPassword: z
      .string()
      .nonempty("Confirmação de senha é obrigatória"),
    howFoundUs: z
      .enum(["google", "instagram", "facebook", "other"], {
        error: "Selecione uma opção",
      })
      .nonoptional("Campo obrigatório"),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "As senhas devem ser iguais",
          path: ["confirmPassword"],
        });
    }
})

export const psychologistSchema = patientSchema.safeExtend({
    crp: z
      .string()
      .nonempty("CRP é obrigatório")
      .min(5, "CRP deve ter ao menos 5 caracteres")
      .regex(/^\d+$/, "CRP deve conter apenas números"),
    professionalDescription: z.
      string()
      .nonempty("Descrição profissional é obrigatória")
      .max(1000, "Máximo de 1000 caracteres")
      .regex(/^[A-Za-zÀ-ú\s]+$/, "Só pode conter letras"),
    academicBackground: z
      .string()
      .nonempty("Formação acadêmica é obrigatória")
      .max(1000, "Máximo de 1000 caracteres")
      .regex(/^[A-Za-zÀ-ú\s]+$/, "Só pode conter letras"),
    platformExpectation: z
      .string()
      .nonempty("Expectativa é obrigatória")
      .max(500, "Máximo de 500 caracteres")
      .regex(/^[A-Za-zÀ-ú\s]+$/, "Só pode conter letras"),
  })


export type PsychologistFormData = z.infer<typeof psychologistSchema>

export type PacientFormData = z.infer<typeof patientSchema>

export type LoginFormData = z.infer<typeof loginSchema>