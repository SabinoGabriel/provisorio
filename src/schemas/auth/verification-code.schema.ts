import { z } from "zod"

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
  
export type RecoveryCodeFormData = z.infer<typeof verificationCodeSchema>