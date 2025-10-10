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
                            <FormLabel htmlFor="crp">CRP <span className="text-red-500">*</span></FormLabel>
                            <Input {...field} id="crp" placeholder="00/000000" onChange={(e) => field.onChange(maskCRP(e.target.value))} maxLength={9} />
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
        )}
        />

        {/* Entrada - Experiência Profissional */}
        <FormField 
            control={form.control}
            name="professionalDescription"
            render={({ field }) => (
                <FormItem className="col-span-2">
                    <FormControl>
                        <div>
                            <FormLabel htmlFor="professionalDescription">Experiência Profissional <span className="text-red-500">*</span></FormLabel>
                            <InputGroup>
                                <InputGroupTextarea {...field} 
                                    id="professionalDescription"
                                    data-slot="input-group-control"
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
            name="academicBackground"
            render={({ field }) => (
                <FormItem className="col-span-2">
                    <FormControl>
                        <div>
                            <FormLabel htmlFor="academicBackground1">Formação e Especializações <span className="text-red-500">*</span></FormLabel>
                             <InputGroup>
                                <InputGroupTextarea {...field} 
                                    id="academicBackground1"
                                    data-slot="input-group-control"
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
            name="platformExpectation"
            render={({ field }) => (
                <FormItem className="col-span-2">
                    <FormControl>
                        <div>
                            <FormLabel htmlFor="platformExpectation">Quais são as suas expectativas em relação à plataforma? <span className="text-red-500">*</span></FormLabel>
                            <InputGroup>
                                <InputGroupTextarea {...field} 
                                    id="platformExpectation"
                                    data-slot="input-group-control"
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
            name="howFoundUs"
            render={({ field }) => (
                <FormItem className="col-span-2">
                    <FormControl>
                    <div>
                        <FormLabel htmlFor="howFoundUs">Como você nos encontrou? <span className="text-red-500">*</span></FormLabel>
                        <Select {...field} onValueChange={field.onChange} value={field.value || ""}>
                            <SelectTrigger id="howFoundUs">
                                <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent onCloseAutoFocus={() => form.trigger("howFoundUs")}>
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
        
    </div>
  )
}
