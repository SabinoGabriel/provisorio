import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/Form"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/Select";
import { Input } from "@/components/ui/Input"
import { useForm } from "react-hook-form";
import { PsychologistFormData } from "@/types/form";
import { maskPhone, maskCPF } from "@/utils/masks/masks";
import { PasswordField } from "@/components/ui/PasswordField";
import { InputGroup, InputGroupAddon, InputGroupText } from "@/components/ui/InputGroup";

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
                        <FormLabel htmlFor="fullName">Nome Completo <span className="text-red-500">*</span></FormLabel>
                        <Input {...field} id="fullName" type="text" placeholder="Informe seu nome completo" />
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
                            <FormLabel htmlFor="socialName">Como você gostaria de ser chamado?</FormLabel>
                            <Input {...field} id="socialName" placeholder="Informe seu nome social" />
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
                            <FormLabel htmlFor="gender">Com qual gênero você se identifica? <span className="text-red-500">*</span></FormLabel>
                            <Select {...field} onValueChange={field.onChange} value={field.value || ""}>
                                <SelectTrigger id="gender" className="w-full">
                                    <SelectValue placeholder="Selecione" />
                                </SelectTrigger>
                                <SelectContent onCloseAutoFocus={() => form.trigger("gender")}>
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

        <FormField 
            control={form.control}
            name="phone"
            render={({ field }) => (
                <FormItem className="col-span-1 self-start">
                    <FormControl>
                    <div>
                        <FormLabel htmlFor="phone">Telefone <span className="text-red-500">*</span></FormLabel>
                        <InputGroup className="gap-2">
                            <InputGroupAddon align="inline-start">
                                <InputGroupText className="text-[#83828a] font-semibold">+55</InputGroupText>
                            </InputGroupAddon>
                            <Input {...field} id="phone" type="tel" autoComplete="tel" placeholder="(99) 99999-9999" onChange={(e) => field.onChange(maskPhone(e.target.value))} maxLength={15} />
                        </InputGroup>
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

        <FormField 
            control={form.control}
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
        
        <FormField 
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem className="col-span-1 self-start">
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

        <FormField 
            control={form.control}
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

        <FormField 
            control={form.control}
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
  )
}
