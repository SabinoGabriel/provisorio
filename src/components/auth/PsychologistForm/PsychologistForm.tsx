"use client"

import { useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { showToast } from "@/components/ui/Toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/Form"
import { Button } from "@/components/ui/Button"
import { StepOne } from "./StepOne"
import { StepTwo } from "./StepTwo"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Progress } from "@/components/ui/Progress"
import { cn } from "@/utils/lib/tailwind-merge"
import { psychologistSchema, PsychologistFormData } from "@/schemas/user/psychologist.schema"
import { registerPsychologist } from "@/services/auth"
import { RegisterPsychologistFormData } from "@/types/auth"

export function PsychologistForm() {
    const [step, setStep] = useState(1)
    const router = useRouter()

    // Validação via Zod e react-hook-form
    const psychologistForm = useForm<PsychologistFormData>({
        resolver: zodResolver(psychologistSchema),
        mode: "all",
        defaultValues: {
            name: "",
            chosen_name: "",
            phone_number: "",
            cpf: "",
            birth_date: undefined,
            gender: undefined,
            email: "",
            password: "",
            confirm_password: "",
            how_found_us: undefined,
            crp: "",
            about_you: "",
            education_and_specializations: "",
            platform_expectations: "",
        },
    })

    // Submissão do formulário
    function onSubmit(data: RegisterPsychologistFormData) {
        registerPsychologist(data)
            .then(() => {
                localStorage.setItem("email-psychologist", data.email)
                showToast("success", "Cadastro realizado com sucesso!", {
                    description: "Redirecionando para a validação de código",
                })
                setTimeout(() => router.push('/email-confirm/psicologo'), 1200)
            })
            .catch(error => {
                showToast("error", "Erro", {
                    description: error.message
                })
            })
    }

    return (
        <Form {...psychologistForm}>
            {/* Formulário */}
            <form onSubmit={psychologistForm.handleSubmit(onSubmit)} className="space-y-5">
                
                {/* Barra de progresso */}
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-750 mb-2">Etapa {step} de 2</span>
                    <Progress className="h-1" value={step === 1 ? 50 : 100} />
                </div>

                {/* Renderização do formulário de acordo com a etapa */}
                {step === 1 && <StepOne form={psychologistForm} />}
                {step === 2 && <StepTwo form={psychologistForm} />}

                {/* Botões de Voltar e Avançar/Cadastrar */}
                <div className="flex items-center justify-between my-8">
                    <Button type="button" onClick={() => setStep(1)} variant={step === 1 ? 'disabled' : 'outline'} className="w-28">
                        <ArrowLeft /> Voltar
                    </Button>
                    <Button type="submit" onClick={(e) => {
                        e.preventDefault()
                        if (step === 1) {
                            psychologistForm
                                .trigger(["name", "birth_date", "gender", "email", "cpf", "password", "confirm_password"])
                                .then((valid) => { 
                                    if (valid) {
                                        setStep(2)
                                    }
                                })
                        }
                        if (step === 2 && psychologistForm.formState.isValid) {
                            psychologistForm
                                .trigger(["crp", "about_you", "education_and_specializations", "platform_expectations", "how_found_us"])
                                .then((valid) => {
                                    if (valid) onSubmit(psychologistForm.getValues())
                                })
                        } 
                    }} className={cn("w-32", step === 2 && "w-40")}>
                        {step === 1 ? 'Avançar' :  'Finalizar Cadastro'} 
                        {step === 1 && <ArrowRight />}
                    </Button>
                </div>

            </form>

        </Form>
    )
}