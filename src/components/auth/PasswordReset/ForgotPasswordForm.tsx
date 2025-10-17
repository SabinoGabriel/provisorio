"use client"

import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import Image from "next/image" 
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { emailForgotPasswordSchema, EmailForgotPasswordData } from "@/schemas/auth/forgot-password.schema"

export function ForgotPasswordForm() {
  const router = useRouter()

  // Validação via Zod e react-hook-form
  const form = useForm<EmailForgotPasswordData>({
    resolver: zodResolver(emailForgotPasswordSchema),
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

      {/* Título e Subtítulo */}
      <div className="text- flex flex-col items-center justify-center my-2 gap-2">
        <h2 className="text-2xl font-bold text-bluestrong">Recuperação de Senha</h2>
        <p className="text-base font-medium text-gray-650">Informe seu e-mail para a redefinição da sua senha</p>
      </div>

      {/* Formulário */}
      <Form {...form}>
        <form
          className="w-full flex flex-col items-center gap-6"
          onSubmit={form.handleSubmit(() => {
            // Futuro: chamada API para solicitar recuperação
            router.push("/recuperar-senha/confirmacao")
          })}
        >
          
          {/* Entrada - E-mail */}
          <FormField 
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-[32rem] my-6">
                  <FormControl>
                    <div className="w-full">
                        <FormLabel htmlFor="email">E-mail</FormLabel>
                        <Input {...field} id="email" className="w-full"  placeholder="Informe seu e-mail" />
                    </div>
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />

          {/* Botão - Redefinir Senha */}
          <Button type="submit" className="h-[3rem] w-[13rem]">
            Redefinir Senha
          </Button>
        </form>
      </Form>
    </Card>
  )
}