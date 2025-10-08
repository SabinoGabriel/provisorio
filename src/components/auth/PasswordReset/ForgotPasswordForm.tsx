"use client"

import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import Image from "next/image" 
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

export function ForgotPasswordForm() {
  const router = useRouter()

  const emailSchema = z.object({
    email: z
    .email({ pattern: z.regexes.html5Email, message: "E-mail inválido" })
    .nonempty("E-mail é obrigatório")
    .toLowerCase(),
  })

  const emailInput = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    mode: "all",
    defaultValues: {
      email: "",
    },
  })

  return (
    <Card className="max-w-[42rem] min-h-[28rem] justify-between">
      {/* Ícone */}
      <div className="h-fit w-fit flex items-center justify-center mb-6">
        <Image
          src="/images/icon-key.svg"
          alt="Psicólogos no Nordeste"
          width={120}
          height={120}
          className="object-cover"
        />
      </div>

      {/* Título e Descrição */}
      <div className="text- flex flex-col items-center justify-center my-2 gap-2">
        <h2 className="text-2xl font-bold text-[#195FB5]">Recuperação de Senha</h2>
        <p className="text-base font-medium text-[#686D95]">Informe seu e-mail para a redefinição da sua senha</p>
      </div>

      {/* Formulário */}
      <Form {...emailInput}>
        <form
          className="w-full flex flex-col items-center gap-6"
          onSubmit={emailInput.handleSubmit(() => {
            // Futuro: chamada API para solicitar recuperação
            router.push("/recuperar-senha/confirmacao")
          })}
        >

          {/* Entrada - E-mail */}
          <FormField 
            control={emailInput.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-[32rem] my-6">
                  <FormControl>
                    <div className="w-full">
                        <FormLabel htmlFor="email">E-mail</FormLabel>
                        <Input {...field} id="email" className="w-full" type="email" placeholder="Informe seu e-mail" />
                    </div>
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />

          {/* Botão - Submit */}
          <Button type="submit" className="h-[3rem] w-[13rem]">
            Redefinir Senha
          </Button>
        </form>
      </Form>
    </Card>
  )
}