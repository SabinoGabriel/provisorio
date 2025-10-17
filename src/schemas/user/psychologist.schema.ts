import { z } from "zod"
import { patientSchema } from "@/schemas/user/patient.schema"

// Schema do cadastro de psicólogo
export const psychologistSchema = patientSchema.safeExtend({
    crp: z
      .string()
      .nonempty("CRP é obrigatório")
      .refine((value) => /^\d{2}\/\d{5}$/.test(value) || /^\d{7}$/.test(value), {
        message: "CRP deve conter 7 dígitos",
      }),
    about_you: z
      .string()
      .trim()
      .nonempty("Descrição é obrigatória"),
    education_and_specializations: z
      .string()
      .trim()
      .nonempty("Formação acadêmica é obrigatória"),
    platform_expectations: z
      .string()
      .trim()
      .nonempty("Expectativa é obrigatória"),
})

export type PsychologistFormData = z.infer<typeof psychologistSchema>