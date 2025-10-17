"use client"

import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/Input"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/Select"
import { Button } from "@/components/ui/Button"
import { PasswordField } from "@/components/ui/PasswordField"
import { maskPhone, maskCPF } from "@/utils/masks/masks"
import { InputGroup, InputGroupAddon, InputGroupText } from "@/components/ui/InputGroup"
import { showToast } from "@/components/ui/Toast"
import { PatientFormData, patientSchema } from "@/schemas/user/patient.schema"
import { registerPatient } from "@/services/auth"
import { RegisterPatientFormData } from "@/types/auth"

export function PatientForm() {
    const router = useRouter()

    // Validação a partir do zod e react-hook-form
    const patientForm = useForm<PatientFormData>({
        resolver: zodResolver(patientSchema),
        mode: "all",
        defaultValues: {
            name: "",
            phone_number: "",
            chosen_name: "",
            cpf: "",
            birth_date: undefined,
            gender: undefined,
            email: "",
            password: "",
            confirm_password: "",
            how_found_us: undefined,
        }
    })

    // Submissão do formulário
    function onSubmit(data: RegisterPatientFormData) {
        registerPatient(data)
            .then(() => {
                localStorage.setItem("email-patient", data.email)
                showToast("success", "Cadastro realizado com sucesso!", {
                    description: "Redirecionando para a validação de código",
                })
                setTimeout(() => router.push('/email-confirm/paciente'), 1200)
            })
            .catch(error => {
                showToast("error", "Erro", {
                    description: error.message
                })
            })
    }

    return (
        <Form {...patientForm}>
            {/* Formulário */}
            <form onSubmit={patientForm.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-2 gap-x-4 gap-y-5">

                    {/* Entrada - Nome Completo */}
                    <FormField 
                        control={patientForm.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="col-span-2 self-start">
                                <FormControl>
                                <div>
                                    <FormLabel htmlFor="name">Nome Completo <span className="text-destructive">*</span></FormLabel>
                                    <Input {...field} id="name" autoComplete="name" placeholder="Informe seu nome completo" />
                                </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Entrada - Nome Social */}
                    <FormField 
                        control={patientForm.control}
                        name="chosen_name"
                        render={({ field }) => (
                        <FormItem className="col-span-1 self-start">
                            <FormControl>
                            <div>
                                <FormLabel htmlFor="chosen_name">Como você gostaria de ser chamado?</FormLabel>
                                <Input {...field} id="chosen_name" placeholder="Informe seu nome social" />
                            </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    {/* Entrada - Gênero */}
                    <FormField 
                        control={patientForm.control}
                        name="gender"
                        render={({ field }) => (
                            <FormItem className="col-span-1 self-start">
                                <FormControl>
                                <div>
                                    <FormLabel htmlFor="gender">Com qual gênero você se identifica? <span className="text-destructive">*</span></FormLabel>
                                    <Select {...field} onValueChange={field.onChange} value={field.value || ""}>
                                    <SelectTrigger id="gender">
                                        <SelectValue placeholder="Selecione" />
                                    </SelectTrigger>
                                    <SelectContent onCloseAutoFocus={() => patientForm.trigger("gender")}>
                                        <SelectItem value="CIS_WOMAN">Mulher cis</SelectItem>
                                        <SelectItem value="CIS_MAN">Homem cis</SelectItem>
                                        <SelectItem value="TRANS_WOMAN">Mulher trans</SelectItem>
                                        <SelectItem value="TRANS_MAN">Homem trans</SelectItem>
                                        <SelectItem value="NON_BINARY">Não-binárie</SelectItem>
                                        <SelectItem value="OTHER">Outro</SelectItem>
                                        <SelectItem value="PREFER_NOT_TO_SAY">Prefiro não informar</SelectItem>
                                    </SelectContent>
                                    </Select>
                                </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Entrada - Telefone */}
                    <FormField 
                        control={patientForm.control}
                        name="phone_number"
                        render={({ field }) => (
                            <FormItem className="col-span-1 self-start">
                                <FormControl>
                                <div>
                                    <FormLabel htmlFor="phone_number">Telefone <span className="text-destructive">*</span></FormLabel>
                                   <InputGroup className="gap-2">
                                        <InputGroupAddon align="inline-start">
                                            <InputGroupText className="text-gray-700 font-semibold">+55</InputGroupText>
                                        </InputGroupAddon>
                                        <Input {...field} id="phone_number" type="tel" autoComplete="tel" placeholder="(99) 99999-9999" onChange={(e) => field.onChange(maskPhone(e.target.value))} maxLength={13} />
                                    </InputGroup>
                                </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Entrada - Data de Nascimento */}
                    <FormField 
                        control={patientForm.control}
                        name="birth_date"
                        render={({ field }) => (
                            <FormItem className="col-span-1 self-start">
                                <FormControl>
                                <div className="w-full">
                                    <FormLabel htmlFor="birth_date">Data de Nascimento <span className="text-destructive">*</span></FormLabel>
                                    <Input
                                        {...field} 
                                        id="birth_date"
                                        type="date"
                                        value={field.value ? field.value.toISOString().split("T")[0] : ""}
                                        onChange={(e) => field.onChange(e.target.value ? new Date(e.target.value) : undefined)}
                                    />
                                </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Entrada - CPF */}
                    <FormField 
                        control={patientForm.control}
                        name="cpf"
                        render={({ field }) => (
                        <FormItem className="col-span-1 self-start">
                            <FormControl>
                            <div>
                                <FormLabel htmlFor="cpf">CPF <span className="text-destructive">*</span></FormLabel>
                                <Input {...field} id="cpf" placeholder="999.999.999-99" onChange={(e) => field.onChange(maskCPF(e.target.value))} maxLength={14} />
                            </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    {/* Entrada - Como nos encontrou? */}
                    <FormField 
                        control={patientForm.control}
                        name="how_found_us"
                        render={({ field }) => (
                            <FormItem className="col-span-1 self-start">
                                <FormControl>
                                    <div>
                                        <FormLabel htmlFor="how_found_us">Como você nos conheceu? <span className="text-destructive">*</span></FormLabel>
                                        <Select {...field} onValueChange={field.onChange} value={field.value || ""}>
                                            <SelectTrigger id="how_found_us">
                                                <SelectValue placeholder="Selecione" />
                                            </SelectTrigger>
                                            <SelectContent onCloseAutoFocus={() => patientForm.trigger("how_found_us")}>
                                                <SelectItem value="GOOGLE">Google</SelectItem>
                                                <SelectItem value="INSTAGRAM">Instagram</SelectItem>
                                                <SelectItem value="FACEBOOK">Facebook</SelectItem>
                                                <SelectItem value="OTHER">Outro</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    {/* Entrada - E-mail */}
                    <FormField 
                        control={patientForm.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="col-span-2 self-start">
                                <FormControl>
                                    <div>
                                        <FormLabel htmlFor="email">E-mail <span className="text-destructive">*</span></FormLabel>
                                        <Input {...field} id="email" autoComplete="email" placeholder="Informe seu e-mail" />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Entrada - Senha */}
                    <FormField 
                        control={patientForm.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="col-span-1 self-start">
                                <FormControl>
                                    <div>
                                        <FormLabel htmlFor="password">Senha <span className="text-destructive">*</span></FormLabel>
                                        <PasswordField id="password" {...field} placeholder="Informe sua senha" />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Entrada -Confirmar Senha */}
                    <FormField 
                        control={patientForm.control}
                        name="confirm_password"
                        render={({ field }) => (
                            <FormItem className="col-span-1 self-start">
                                <FormControl>
                                    <div>
                                        <FormLabel htmlFor="confirm_password">Confirmar Senha <span className="text-destructive">*</span></FormLabel>
                                        <PasswordField id="confirm_password" {...field} placeholder="Confirme sua senha" />
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Botão - Cadastrar */}
                <Button type="submit" variant="default" className="w-full h-12">
                    Cadastrar
                </Button>
            </form>
        </Form>
  )
}
