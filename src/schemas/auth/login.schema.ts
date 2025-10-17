import { z } from "zod"

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

export type LoginFormData = z.infer<typeof loginSchema>