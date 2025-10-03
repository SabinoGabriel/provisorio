import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/Form"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/Select";
import { Eye } from "lucide-react";
import { Input } from "@/components/ui/Input"
import { useForm } from "react-hook-form";
import { PsychologistFormData } from "@/types/form";

export function StepOne({ form }: { form: ReturnType<typeof useForm<PsychologistFormData>> }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-5">
      <FormField 
        control={form.control}
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
            control={form.control}
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
            control={form.control}
            name="gender"
            render={({ field }) => (
                <FormItem className="col-span-1 self-start">
                    <FormControl>
                        <div>
                            <FormLabel>Gênero <span className="text-red-500">*</span></FormLabel>
                            <Select {...field} onValueChange={field.onChange} value={field.value || ""}>
                                <SelectTrigger className="w-full">
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
            control={form.control}
            name="phone"
            render={({ field }) => (
                <FormItem className="col-span-1 self-start">
                    <FormControl>
                        <div>
                            <FormLabel>Telefone <span className="text-red-500">*</span></FormLabel>
                            <Input {...field} type="tel" placeholder="Informe seu telefone" maxLength={11} />
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        <FormField 
            control={form.control}
            name="birthDate"
            render={({ field }) => (
                <FormItem className="col-span-1 self-start">
                    <FormControl>
                        <div>
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
            control={form.control}
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
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem className="col-span-1 self-start">
                    <FormControl>
                        <div>
                            <FormLabel>E-mail <span className="text-red-500">*</span></FormLabel>
                            <Input {...field} placeholder="Informe seu e-mail" />
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        <FormField 
            control={form.control}
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
            control={form.control}
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
  )
}
