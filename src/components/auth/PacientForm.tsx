"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/Input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { Eye } from "lucide-react";
import { patientSchema } from "@/types/form";
import { PacientFormData } from "@/types/form";

export function PatientForm() {
  
    const patientForm = useForm<PacientFormData>({
        resolver: zodResolver(patientSchema),
        mode: "onTouched",
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

    function onSubmit(data: PacientFormData) {
        console.log("Paciente:", data)
    }

    return (
        <Form {...patientForm}>
            <form onSubmit={patientForm.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                    <FormField 
                        control={patientForm.control}
                        name="fullName"
                        render={({ field }) => (
                        <FormItem className="col-span-2 self-start">
                            <FormControl>
                            <div>
                                <FormLabel>Nome Completo <span className="text-red-500">*</span></FormLabel>
                                <Input {...field} type="text" placeholder="Informe seu nome completo" />
                            </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <FormField 
                        control={patientForm.control}
                        name="socialName"
                        render={({ field }) => (
                        <FormItem className="col-span-1 self-start">
                            <FormControl>
                            <div>
                                <FormLabel>Como você gostaria de ser chamado?</FormLabel>
                                <Input {...field} placeholder="Informe seu nome social" />
                            </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <FormField 
                        control={patientForm.control}
                        name="gender"
                        render={({ field }) => (
                        <FormItem className="col-span-1 self-start">
                            <FormControl>
                            <div>
                                <FormLabel>Gênero <span className="text-red-500">*</span></FormLabel>
                                <Select {...field} onValueChange={field.onChange} value={field.value || ""}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecione" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">Masculino</SelectItem>
                                    <SelectItem value="female">Feminino</SelectItem>
                                    <SelectItem value="non-binary">Não-binário</SelectItem>
                                    <SelectItem value="transgender">Transgênero</SelectItem>
                                    <SelectItem value="other">Outro</SelectItem>
                                </SelectContent>
                                </Select>
                            </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <FormField 
                        control={patientForm.control}
                        name="phone"
                        render={({ field }) => (
                        <FormItem className="col-span-1 self-start">
                            <FormControl>
                            <div>
                                <FormLabel>Telefone <span className="text-red-500">*</span></FormLabel>
                                <Input {...field} type="tel" autoComplete="tel" placeholder="Informe seu telefone" maxLength={11} />
                            </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <FormField 
                        control={patientForm.control}
                        name="birthDate"
                        render={({ field }) => (
                        <FormItem className="col-span-1 self-start">
                            <FormControl>
                            <div className="w-full">
                                <FormLabel>Data de Nascimento <span className="text-red-500">*</span></FormLabel>
                                <Input
                                {...field} 
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

                    <FormField 
                        control={patientForm.control}
                        name="cpf"
                        render={({ field }) => (
                        <FormItem className="col-span-1 self-start">
                            <FormControl>
                            <div>
                                <FormLabel>CPF <span className="text-red-500">*</span></FormLabel>
                                <Input {...field} placeholder="Informe seu CPF" maxLength={11} />
                            </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <FormField 
                        control={patientForm.control}
                        name="howFoundUs"
                        render={({ field }) => (
                        <FormItem className="col-span-1 self-start">
                            <FormControl>
                            <div>
                                <FormLabel>Como você nos conheceu? <span className="text-red-500">*</span></FormLabel>
                                <Select {...field} onValueChange={field.onChange} value={field.value || ""}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Selecione" />
                                </SelectTrigger>
                                <SelectContent className="bg-white w-full">
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
                    
                    <FormField 
                        control={patientForm.control}
                        name="email"
                        render={({ field }) => (
                        <FormItem className="col-span-2 self-start">
                            <FormControl>
                            <div>
                                <FormLabel>E-mail <span className="text-red-500">*</span></FormLabel>
                                <Input {...field} autoComplete="email" placeholder="Informe seu e-mail" />
                            </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <FormField 
                        control={patientForm.control}
                        name="password"
                        render={({ field }) => (
                        <FormItem className="col-span-1 self-start">
                            <FormControl>
                            <div>
                                <FormLabel>Senha <span className="text-red-500">*</span></FormLabel>
                                <div className="flex items-center">
                                <Input type="password" {...field} placeholder="Crie uma senha" />
                                <Eye className="opacity-50 cursor-pointer h-5 w-5" /> 
                                </div>
                            </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    <FormField 
                        control={patientForm.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem className="col-span-1 self-start">
                                <FormControl>
                                <div>
                                    <FormLabel>Confirmar Senha <span className="text-red-500">*</span></FormLabel>
                                    <div className="flex items-center">
                                    <Input type="password" {...field} placeholder="Confirme sua senha" />
                                    <Eye className="opacity-50 cursor-pointer h-5 w-5" /> 
                                    </div>
                                </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button type="submit" className="w-full mt-8 bg-[#983DEB] hover:bg-[#7B26C8] text-white h-12 rounded-xl">
                    Cadastrar
                </Button>
            </form>
        </Form>
  );
}
