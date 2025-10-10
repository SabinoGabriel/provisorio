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
import { PatientFormData, patientSchema } from "@/types/form"

export function PatientForm() {
    const router = useRouter()

    // Validação a partir do zod e react-hook-form
    const patientForm = useForm<PatientFormData>({
        resolver: zodResolver(patientSchema),
        mode: "all",
        defaultValues: {
        fullName: "",
            phone: "",
            socialName: "",
            cpf: "",
            birthDate: undefined,
            gender: undefined,
            email: "",
            password: "",
            confirmPassword: "",
            howFoundUs: undefined,
        }
    })

    async function onSubmit() {
        console.log("Paciente:", patientForm.getValues())
        patientForm.trigger().then((isValid) => {
            if (isValid) { 
                showToast("error", "Cadastro realizado com sucesso!", {
                    description: "Redirecionando para a validação de código",
                })
                setTimeout(() => router.push('/email-confirm'), 2000)
            } 
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
                        name="fullName"
                        render={({ field }) => (
                            <FormItem className="col-span-2 self-start">
                                <FormControl>
                                <div>
                                    <FormLabel htmlFor="fullName">Nome Completo <span className="text-red-500">*</span></FormLabel>
                                    <Input {...field} id="fullName" type="text" placeholder="Informe seu nome completo" />
                                </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Entrada - Nome Social */}
                    <FormField 
                        control={patientForm.control}
                        name="socialName"
                        render={({ field }) => (
                        <FormItem className="col-span-1 self-start">
                            <FormControl>
                            <div>
                                <FormLabel htmlFor="socialName">Como você gostaria de ser chamado?</FormLabel>
                                <Input {...field} id="socialName" placeholder="Informe seu nome social" />
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
                                    <FormLabel htmlFor="gender">Com qual gênero você se identifica? <span className="text-red-500">*</span></FormLabel>
                                    <Select {...field} onValueChange={field.onChange} value={field.value || ""}>
                                    <SelectTrigger id="gender">
                                        <SelectValue placeholder="Selecione" />
                                    </SelectTrigger>
                                    <SelectContent onCloseAutoFocus={() => patientForm.trigger("gender")}>
                                        <SelectItem value="woman">Mulher cis</SelectItem>
                                        <SelectItem value="man">Homem cis</SelectItem>
                                        <SelectItem value="trans-woman">Mulher trans</SelectItem>
                                        <SelectItem value="trans-man">Homem trans</SelectItem>
                                        <SelectItem value="non-binary">Não-binárie</SelectItem>
                                        <SelectItem value="other">Outro</SelectItem>
                                        <SelectItem value="none">Prefiro não informar</SelectItem>
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
                        name="phone"
                        render={({ field }) => (
                            <FormItem className="col-span-1 self-start">
                                <FormControl>
                                <div>
                                    <FormLabel htmlFor="phone">Telefone <span className="text-red-500">*</span></FormLabel>
                                   <InputGroup className="gap-2">
                                        <InputGroupAddon align="inline-start">
                                            <InputGroupText className="text-gray-700 font-semibold">+55</InputGroupText>
                                        </InputGroupAddon>
                                        <Input {...field} id="phone" type="tel" autoComplete="tel" placeholder="(99) 99999-9999" onChange={(e) => field.onChange(maskPhone(e.target.value))} maxLength={15} />
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
                        name="birthDate"
                        render={({ field }) => (
                            <FormItem className="col-span-1 self-start">
                                <FormControl>
                                <div className="w-full">
                                    <FormLabel htmlFor="birthDate">Data de Nascimento <span className="text-red-500">*</span></FormLabel>
                                    <Input
                                        {...field} 
                                        id="birthDate"
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
                                <FormLabel htmlFor="cpf">CPF <span className="text-red-500">*</span></FormLabel>
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
                        name="howFoundUs"
                        render={({ field }) => (
                            <FormItem className="col-span-1 self-start">
                                <FormControl>
                                    <div>
                                        <FormLabel htmlFor="howFoundUs">Como você nos conheceu? <span className="text-red-500">*</span></FormLabel>
                                        <Select {...field} onValueChange={field.onChange} value={field.value || ""}>
                                            <SelectTrigger id="howFoundUs">
                                                <SelectValue placeholder="Selecione" />
                                            </SelectTrigger>
                                            <SelectContent onCloseAutoFocus={() => patientForm.trigger("howFoundUs")}>
                                                <SelectItem value="google">Google</SelectItem>
                                                <SelectItem value="instagram">Instagram</SelectItem>
                                                <SelectItem value="facebook">Facebook</SelectItem>
                                                <SelectItem value="other">Outro</SelectItem>
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
                                        <FormLabel htmlFor="email">E-mail <span className="text-red-500">*</span></FormLabel>
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
                                        <FormLabel htmlFor="password">Senha <span className="text-red-500">*</span></FormLabel>
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
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem className="col-span-1 self-start">
                                <FormControl>
                                    <div>
                                        <FormLabel htmlFor="confirmPassword">Confirmar Senha <span className="text-red-500">*</span></FormLabel>
                                        <PasswordField id="confirmPassword" {...field} placeholder="Confirme sua senha" />
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
