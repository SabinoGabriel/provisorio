import { z } from "zod"

// Schema do Email da inserção do email para redefinição de senha
export const emailForgotPasswordSchema = z.object({
  email: z
  .email({ pattern: z.regexes.html5Email, message: "E-mail inválido" })
  .nonempty("E-mail é obrigatório")
  .toLowerCase(),
})

export type EmailForgotPasswordData = z.infer<typeof emailForgotPasswordSchema>