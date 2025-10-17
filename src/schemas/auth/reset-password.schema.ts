import { z } from "zod"

// Schema da Redefinição de Senha
export const resetPasswordSchema = z.object({
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
}).refine((data) => data.password === data.confirm_password, {
    message: "As senhas não coincidem",
    path: ["confirm_password"],
    when(payload) { 
      return resetPasswordSchema
      .pick({ password: true, confirm_password: true })
      .safeParse(payload.value).success
    },  
})

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>