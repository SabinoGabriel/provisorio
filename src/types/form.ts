import { z } from "zod"

// Variáveis para validação de datas
const today = new Date()
const minDate = new Date(today.getFullYear() - 150, today.getMonth(), today.getDate())
const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate())

// Schema de login
export const loginSchema = z.object({
    email: z
    .email({ pattern: z.regexes.html5Email, message: "E-mail inválido" })
    .nonempty("E-mail é obrigatório")
    .toLowerCase(),
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(8, "Senha deve ter ao menos 8 caracteres"),
})

// Schema do cadastro de paciente
export const patientSchema = z.object({
    fullName: z
      .string()
      .trim()
      .nonempty("Nome completo é obrigatório")
      .refine((value) => {
        // Separa o nome completo em palavras
        const words = value.trim().split(" ")
        // Primeiro nome
        const firstName = words[0]
        // Último nome (sobrenome)
        const lastName = words[words.length - 1]
        // Palavras do meio (se houver)
        const middleWords = words.slice(1, -1)
        // Preposições permitidas
        const allowedPrepositions = ["de", "da", "do", "das", "dos"]

        // Nenhuma palavra pode ter apenas 1 letra
        if (words.some((w) => w.length === 1)) return false

        // O primeiro nome deve ter pelo menos 3 letras
        if (firstName.length < 3) return false

        // O sobrenome deve ter pelo menos 3 letras
        if (lastName.length < 3) return false

        // Palavras do meio só podem ter 2 letras se forem preposições
        for (const word of middleWords) {
          if (word.length === 2 && !allowedPrepositions.includes(word.toLowerCase())) {
            return false
          }
        }

        return true
      }, { message: "O nome parece incompleto ou inválido"})
      .regex(
        // Valida se tem ao menos duas palavras com letras (nome e sobrenome)
        /^[A-Za-zÀ-ú]+(?: {1,2}[A-Za-zÀ-ú]+)+$/,
        "Deve conter ao menos nome e sobrenome, apenas letras são permitidas"
      ),
    socialName: z
      .string()
      .trim()
      .regex(/^[A-Za-zÀ-ú\s]*$/, "Só pode conter letras")
      .optional(),
    phone: z
      .string()
      .nonempty("Telefone é obrigatório")
      // remove caracteres não numéricos antes de validar
      .refine((value) => value.replace(/\D/g, "").length === 11, {
        message: "Telefone deve conter 11 dígitos numéricos",
      }),
    birthDate: z
      .coerce.date<Date>({ error: "Data de nascimento é obrigatória" })
      .min(minDate, "Data de nascimento inválida")
      .max(maxDate, "Você deve ser maior de 18 anos para se cadastrar"),
    email: z
      .email({ pattern: z.regexes.html5Email, message: "E-mail inválido" })
      .nonempty("E-mail é obrigatório")
      .toLowerCase(),
    gender: z
      .enum(["woman", "man", "trans-woman", "trans-man", "non-binary", "other", "none"], {
        error: "Selecione uma opção",
      })
      .nonoptional("Campo obrigatório"),
    cpf: z
      .string()
      .nonempty("CPF é obrigatório")
      .refine((value) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value) || /^\d{11}$/.test(value), {
        message: "CPF deve conter 11 dígitos",
      }),
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(8, "Senha fraca, utilize letras e números")
      .refine((val) => /[0-9]/.test(val), "Senha deve conter pelo menos um número")
      .refine((val) => /[A-Za-z]/.test(val), {
        message: "Senha deve conter pelo menos uma letra",
      }),
    confirmPassword: z
      .string()
      .nonempty("Confirmar senha é obrigatório"),
    howFoundUs: z
      .enum(["google", "instagram", "facebook", "other"], {
        error: "Selecione uma opção",
      })
      .nonoptional("Campo obrigatório"),
  }).refine((data) => data.password === data.confirmPassword, {
      message: "As senhas não coincidem",
      path: ["confirmPassword"],
      when(payload) { 
        return patientSchema
        .pick({ password: true, confirmPassword: true })
        .safeParse(payload.value).success
      },  
  })

// Schema do cadastro de psicólogo
export const psychologistSchema = patientSchema.safeExtend({
    crp: z
      .string()
      .nonempty("CRP é obrigatório")
      .refine((value) => /^\d{2}\/\d{6}$/.test(value) || /^\d{8}$/.test(value), {
        message: "CRP deve conter 8 dígitos",
      }),
    professionalDescription: z.
      string()
      .trim()
      .nonempty("Experiência profissional é obrigatória"),
    academicBackground: z
      .string()
      .trim()
      .nonempty("Formação acadêmica é obrigatória"),
    platformExpectation: z
      .string()
      .trim()
      .nonempty("Expectativa é obrigatória"),
  })


export type PsychologistFormData = z.infer<typeof psychologistSchema>

export type PacientFormData = z.infer<typeof patientSchema>

export type LoginFormData = z.infer<typeof loginSchema>