import { isValidName } from "@/utils/validator/name"
import { validateCPF } from "@/utils/validator/cpf"
import { z } from "zod"

// Variáveis para validação de datas
const today = new Date()
const minDate = new Date(today.getFullYear() - 150, today.getMonth(), today.getDate())
const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate())

// Schema do cadastro de paciente
export const patientSchema = z.object({
    name: z
      .string()
      .trim()
      .nonempty("Nome completo é obrigatório")
      .refine(isValidName, { 
        message: "O nome parece incompleto ou inválido"
      })
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
      // Remove caracteres não numéricos antes de validar
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
      // Verificar se o cpf possui 11 dígitos
      .refine((value) => /^\d{11}$/.test(value), {
        message: "CPF deve conter 11 dígitos",
      })
      // Valida o CPF como no back-end
      .refine(validateCPF, {
        message: "CPF inválido",
      }),
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(8, "Senha fraca, utilize letras e números")
      .refine((val) => /[0-9]/.test(val), "Senha deve conter pelo menos um número")
      .refine((val) => /[A-Za-z]/.test(val), "Senha deve conter pelo menos uma letra")
      .refine((val) => /[\_!@#$%^&*+~=\.\;\-]/.test(val), "Senha deve conter pelo menos um caractere especial"),
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
      path: ["confirm_password"],
      message: "As senhas não coincidem",
      when(payload) { 
        return patientSchema
        .pick({ password: true, confirm_password: true })
        .safeParse(payload.value).success
      },  
 })

 export type PatientFormData = z.infer<typeof patientSchema>