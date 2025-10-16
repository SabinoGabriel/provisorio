"use client"

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/Form"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/Select"
import { Input } from "@/components/ui/Input"
import { useForm } from "react-hook-form"
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from "@/components/ui/InputGroup"
import { maskCRP } from "@/utils/masks/masks"
import { PsychologistFormData } from "@/types/form"

export function StepTwo({ form }: { form: ReturnType<typeof useForm<PsychologistFormData>> }) {
  return (
    <div className="grid gap-x-4 gap-y-5">

        {/* Entrada - CRP */}
        <FormField 
            control={form.control}
            name="crp"
            render={({ field }) => (
                <FormItem className="col-span-2 self-start">
                    <FormControl>
                        <div>
                            <FormLabel htmlFor="crp">CRP <span className="text-destructive">*</span></FormLabel>
                            <Input {...field} id="crp" placeholder="00/00000" onChange={(e) => field.onChange(maskCRP(e.target.value))} maxLength={8} />
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
        )}
        />

        {/* Entrada - Experiência Profissional */}
        <FormField 
            control={form.control}
            name="about_you"
            render={({ field }) => (
                <FormItem className="col-span-2">
                    <FormControl>
                        <div>
                            <FormLabel htmlFor="about_you">Experiência Profissional <span className="text-destructive">*</span></FormLabel>
                            <InputGroup>
                                <InputGroupTextarea {...field} 
                                    id="about_you"
                                    placeholder="Conte um pouco sobre sua trajetória profissional"
                                    maxLength={1000}
                                />
                                <InputGroupAddon className="p-0 pr-1 mt-2 mb-1" align="block-end">
                                    <InputGroupText className="text-xs text-gray-500 font-semibold">{field.value.length}/1000</InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* Entrada - Formação e Especializações */}
        <FormField 
            control={form.control}
            name="education_and_specializations"
            render={({ field }) => (
                <FormItem className="col-span-2">
                    <FormControl>
                        <div>
                            <FormLabel htmlFor="education_and_specializations">Formação e Especializações <span className="text-destructive">*</span></FormLabel>
                             <InputGroup>
                                <InputGroupTextarea {...field} 
                                    id="education_and_specializations"
                                    placeholder="Conte um pouco sobre sua formação e áreas de especialização"
                                    maxLength={1000}
                                />
                                <InputGroupAddon className="p-0 pr-1 mt-2 mb-1" align="block-end">
                                    <InputGroupText className="text-xs text-gray-500 font-semibold">{field.value.length}/1000</InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* Entrada - Expectativas sobre a Plataforma */}
        <FormField 
            control={form.control}
            name="platform_expectations"
            render={({ field }) => (
                <FormItem className="col-span-2">
                    <FormControl>
                        <div>
                            <FormLabel htmlFor="platform_expectations">Quais são as suas expectativas em relação à plataforma? <span className="text-destructive">*</span></FormLabel>
                            <InputGroup>
                                <InputGroupTextarea {...field} 
                                    id="platform_expectations"
                                    placeholder="Compartilhe o que espera vivenciar ou alcançar aqui"
                                    maxLength={500}
                                />
                                <InputGroupAddon className="p-0 pr-1 mt-2 mb-1" align="block-end">
                                    <InputGroupText className="text-xs text-gray-500 font-semibold">{field.value.length}/500</InputGroupText>
                                </InputGroupAddon>
                            </InputGroup>
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
        
        {/* Entrada - Como nos encontrou? */}
        <FormField 
            control={form.control}
            name="how_found_us"
            render={({ field }) => (
                <FormItem className="col-span-2">
                    <FormControl>
                    <div>
                        <FormLabel htmlFor="how_found_us">Como você nos encontrou? <span className="text-destructive">*</span></FormLabel>
                        <Select {...field} onValueChange={field.onChange} value={field.value || ""}>
                            <SelectTrigger id="how_found_us">
                                <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent onCloseAutoFocus={() => form.trigger("how_found_us")}>
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
        
    </div>
  )
}
