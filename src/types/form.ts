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
})

// Schema do cadastro de paciente
export const patientSchema = z.object({
    name: z
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
    chosen_name: z
      .string()
      .trim()
      .regex(/^[A-Za-zÀ-ú\s]*$/, "Só pode conter letras")
      .optional(),
    phone_number: z
      .string()
      .nonempty("Telefone é obrigatório")
      // remove caracteres não numéricos antes de validar
      .refine((value) => value.replace(/\D/g, "").length === 11, {
        message: "Telefone deve conter 11 dígitos numéricos",
      }),
    birth_date: z
      .coerce.date<Date>({ error: "Data de nascimento é obrigatória" })
      .min(minDate, "Data de nascimento inválida")
      .max(maxDate, "Você deve ser maior de 18 anos para se cadastrar"),
    email: z
      .email({ pattern: z.regexes.html5Email, message: "E-mail inválido" })
      .nonempty("E-mail é obrigatório")
      .toLowerCase(),
    gender: z
      .enum(["CIS_WOMAN", "CIS_MAN", "TRANS_WOMAN", "TRANS_MAN", "NON_BINARY", "OTHER", "PREFER_NOT_TO_SAY"], {
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
      .refine((val) => /[A-Za-z]/.test(val), "Senha deve conter pelo menos uma letra")
      .refine((val) => /[\_!@#$%^&*+~=\.\-]/.test(val), "Senha deve conter pelo menos um caractere especial"),
    confirm_password: z
      .string()
      .nonempty("Confirmar senha é obrigatório"),
    how_found_us: z
      .enum(["GOOGLE", "INSTAGRAM", "FACEBOOK", "OTHER"], {
        error: "Selecione uma opção",
      })
      .nonoptional("Campo obrigatório"),
}).refine((data) => {
    return data.password === data.confirm_password
  }, {
      path: ["confirmPassword"],
      message: "As senhas não coincidem",
      when(payload) { 
        return patientSchema
        .pick({ password: true, confirm_password: true })
        .safeParse(payload.value).success
      },  
 })

// Schema do cadastro de psicólogo
export const psychologistSchema = patientSchema.safeExtend({
    crp: z
      .string()
      .nonempty("CRP é obrigatório")
      .refine((value) => /^\d{2}\/\d{5}$/.test(value) || /^\d{7}$/.test(value), {
        message: "CRP deve conter 7 dígitos",
      }),
    about_you: z.
      string()
      .trim()
      .nonempty("Experiência profissional é obrigatória"),
    education_and_specializations: z
      .string()
      .trim()
      .nonempty("Formação acadêmica é obrigatória"),
    platform_expectations: z
      .string()
      .trim()
      .nonempty("Expectativa é obrigatória"),
})

// Schema do Email da inserção do email para redefinição de senha
export const emailForgotPasswordSchema = z.object({
  email: z
  .email({ pattern: z.regexes.html5Email, message: "E-mail inválido" })
  .nonempty("E-mail é obrigatório")
  .toLowerCase(),
})

// Schema da Redefinição de Senha
export const resetPasswordSchema = z.object({
  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(8, "Senha fraca, utilize letras e números")
    .refine((val) => /[0-9]/.test(val), "Senha deve conter pelo menos um número")
    .refine((val) => /[A-Za-z]/.test(val), "Senha deve conter pelo menos uma letra")
    .refine((val) => /[\_!@#$%^&*+~=\.\-]/.test(val), "Senha deve conter pelo menos um caractere especial"),
  confirmPassword: z
    .string()
    .nonempty("Confirmar senha é obrigatório"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
    when(payload) { 
      return resetPasswordSchema
      .pick({ password: true, confirmPassword: true })
      .safeParse(payload.value).success
    },  
})

// Schema do Código de Verificação
export const verificationCodeSchema = z.object({
  code: z
    .string()
    .nonempty("Código de verificação é obrigatório")
    .regex(/^\d+$/, "Código de verificação deve conter apenas números")
    .refine((value) => /^\d{6}$/.test(value), {
      message: "Código de verificação deve conter 6 dígitos",
    }),
})
  
export type LoginFormData = z.infer<typeof loginSchema>
export type PatientFormData = z.infer<typeof patientSchema>
export type PsychologistFormData = z.infer<typeof psychologistSchema>
export type EmailForgotPasswordData = z.infer<typeof emailForgotPasswordSchema>
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>
export type RecoveryCodeFormData = z.infer<typeof verificationCodeSchema>