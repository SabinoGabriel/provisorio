"use client"

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/Form"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/Select"
import { Input } from "@/components/ui/Input"
import { useForm } from "react-hook-form"
import { maskPhone, maskCPF } from "@/utils/masks/masks"
import { PasswordField } from "@/components/ui/PasswordField"
import { InputGroup, InputGroupAddon, InputGroupText } from "@/components/ui/InputGroup"
import { PsychologistFormData } from "@/types/form"

export function StepOne({ form }: { form: ReturnType<typeof useForm<PsychologistFormData>> }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-5">
        
        {/* Entrada - Nome Completo */}
        <FormField 
            control={form.control}
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
            control={form.control}
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
            control={form.control}
            name="gender"
            render={({ field }) => (
                <FormItem className="col-span-1 self-start">
                    <FormControl>
                        <div>
                            <FormLabel htmlFor="gender">Com qual gênero você se identifica? <span className="text-destructive">*</span></FormLabel>
                            <Select {...field} onValueChange={field.onChange} value={field.value || ""}>
                                <SelectTrigger id="gender" className="w-full">
                                    <SelectValue placeholder="Selecione" />
                                </SelectTrigger>
                                <SelectContent onCloseAutoFocus={() => form.trigger("gender")}>
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
            control={form.control}
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
                            <Input {...field} id="phone_number" type="tel" autoComplete="tel" placeholder="(99) 99999-9999" onChange={(e) => field.onChange(maskPhone(e.target.value))} maxLength={15} />
                        </InputGroup>
                    </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* Entrada - Data de Nascimento */}
        <FormField 
            control={form.control}
            name="birth_date"
            render={({ field }) => (
                <FormItem className="col-span-1 self-start">
                    <FormControl>
                        <div>
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
            control={form.control}
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
        
        {/* Entrada - E-mail */}
        <FormField 
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem className="col-span-1 self-start">
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
            control={form.control}
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

        {/* Entrada - Confirmar Senha */}
        <FormField 
            control={form.control}
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
  )
}
