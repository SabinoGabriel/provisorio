"use client"
import { useForm } from "react-hook-form";
import { useState } from "react"
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "@/components/ui/Form"
import { Button } from "@/components/ui/Button";
import { psychologistSchema } from "@/types/form";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/Progress";
import { cn } from "@/utils/lib/tailwind-merge";

type PsychologistFormData = z.infer<typeof psychologistSchema>

export function PsychologistForm() {
    const [step, setStep] = useState(1);

    const psychologistForm = useForm<PsychologistFormData>({
        resolver: zodResolver(psychologistSchema),
        mode: "all",
        defaultValues: {
            fullName: "",
            socialName: "",
            phone: "",
            cpf: "",
            birthDate: undefined,
            gender: undefined,
            email: "",
            password: "",
            confirmPassword: "",
            howFoundUs: undefined,
            crp: "",
            professionalDescription: "",
            academicBackground: "",
            platformExpectation: "",
        },
    })

    const router = useRouter();

    // simula submissão para a API; substitua pela chamada real
    const fakeSubmit = () => new Promise<boolean>((resolve) => setTimeout(() => resolve(true), 800));

    async function onSubmit() {
        const values = psychologistForm.getValues();
        console.log("Psicólogo:", values)
        try {
            const ok = await fakeSubmit();
            if (ok) {
                toast("Cadastro realizado com sucesso!", { description: "Verifique seu e-mail para confirmação." });
                setTimeout(() => router.push('/email-confirm'), 1200);
            } else {
                toast("Não foi possível concluir o cadastro. Tente novamente.");
            }
        } catch (e) {
            toast("Erro ao cadastrar. Verifique sua conexão.");
        }
    }

    return (
        <Form {...psychologistForm}>
            <form onSubmit={psychologistForm.handleSubmit(onSubmit)} className="space-y-5">
                 {/* Barra de progresso */}
                <div className="flex flex-col">
                    <span className="text-sm font-semibold text-[#696969] mb-2">Etapa {step} de 2</span>
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
                                .trigger([ 
                                    "fullName", "phone", "birthDate", "gender", "email", "cpf", "password", "confirmPassword"
                                ])
                                .then((valid) => { 
                                    if (valid) setStep(2)
                                })
                        }
                        if (step === 2 && psychologistForm.formState.isValid) {
                            psychologistForm
                                .trigger([
                                    "crp", "professionalDescription", "academicBackground", "platformExpectation", "howFoundUs",
                                ]).then((valid) => {
                                    if (valid)  onSubmit()
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