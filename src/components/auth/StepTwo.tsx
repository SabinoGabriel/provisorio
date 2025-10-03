import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/Form"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/Select";
import { Input } from "@/components/ui/Input"
import { useForm } from "react-hook-form";
import { PsychologistFormData } from "@/types/form";

export function StepTwo({ form }: { form: ReturnType<typeof useForm<PsychologistFormData>> }) {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-5">
        <FormField 
            control={form.control}
            name="crp"
            render={({ field }) => (
                <FormItem className="col-span-2 self-start">
                    <FormControl>
                        <div>
                            <FormLabel>CRP <span className="text-red-500">*</span></FormLabel>
                            <Input {...field} type="text" placeholder="00000" />
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
        )}
        />

        <FormField 
            control={form.control}
            name="professionalDescription"
            render={({ field }) => (
                <FormItem className="col-span-1 self-start">
                    <FormControl>
                        <div>
                            <FormLabel>Experiências Profissionais <span className="text-red-500">*</span></FormLabel>
                            <Input {...field} placeholder="Informe sua descrição sobre as suas experiências profissionais" />
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        <FormField 
            control={form.control}
            name="howFoundUs"
            render={({ field }) => (
                <FormItem className="col-span-1 self-start">
                    <FormControl>
                    <div>
                        <FormLabel>Como você nos encontrou? <span className="text-red-500">*</span></FormLabel>
                        <Select {...field} onValueChange={field.onChange} value={field.value || ""}>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
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
            control={form.control}
            name="academicBackground"
            render={({ field }) => (
                <FormItem className="col-span-1 self-start">
                    <FormControl>
                        <div>
                            <FormLabel>Formação e Especializações <span className="text-red-500">*</span></FormLabel>
                            <Input {...field} placeholder="Inclua: graduação, pós-graduações, especializações, abordagens terapêuticas, etc." maxLength={11} />
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        <FormField 
            control={form.control}
            name="platformExpectation"
            render={({ field }) => (
                <FormItem className="col-span-1 self-start">
                    <FormControl>
                        <div>
                            <FormLabel>Qual sua expectativa de uso da plataforma? <span className="text-red-500">*</span></FormLabel>
                            <Input {...field} placeholder="Descreva sua expectativa brevemente" />
                        </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    </div>
  )
}
