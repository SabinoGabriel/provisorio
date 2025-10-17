"use client"

import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form"
import { PasswordField } from "@/components/ui/PasswordField"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { showToast } from "@/components/ui/Toast"
import { resetPasswordSchema, ResetPasswordFormData } from "@/schemas/auth/reset-password.schema"

export function ResetPasswordForm() {
  const router = useRouter()
  
  // Validação via Zod e react-hook-form
  const form = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "all",
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  })

  const handleSaveNewPassword = () => {
    showToast("success", "Senha redefinida com sucesso!", {
      description: "Redirecionando para o login",
    })
    setTimeout(() => router.push('/login'), 1200)
  }

  return (
    <Card className="max-w-[42rem] min-h-[28rem] justify-between">
      {/* Ícone */}
      <div className="h-fit w-fit flex items-center justify-center mb-6">
        <Image
          src="/images/icon-lock.svg"
          alt="Psicólogos no Nordeste"
          width={120}
          height={120}
          className="object-cover"
        />
      </div>

      {/* Título e Subtítulo */}
      <div className="text- flex flex-col items-center justify-center my-2 gap-2">
        <h2 className="text-2xl font-bold text-bluestrong">Redefinição de Senha</h2>
        <p className="text-base font-medium text-gray-650">Crie uma nova senha de acesso a plataforma</p>
      </div>

      {/* Formulário */}
      <Form {...form}>
        <form
          className="w-full flex flex-col items-center gap-4 my-6"
          onSubmit={form.handleSubmit(handleSaveNewPassword)}
        >

          {/* Entrada - Nova Senha */}
          <FormField 
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-[32rem]">
                  <FormControl>
                    <div className="w-full">
                        <FormLabel htmlFor="password">Nova senha <span className="text-destructive">*</span></FormLabel>
                        <PasswordField
                          id="password"
                          placeholder="Digite sua nova senha"
                          {...field}
                        />
                    </div>
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />

          {/* Entrada - Nova Senha */}
          <FormField 
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem className="w-[32rem]">
                  <FormControl>
                    <div className="w-full">
                        <FormLabel htmlFor="confirm_password">Confirmar senha <span className="text-destructive">*</span></FormLabel>
                        <PasswordField
                          id="confirm_password"
                          placeholder="Digite sua nova senha"
                          {...field}
                        />
                    </div>
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />

          {/* Botão - Redefinir Senha */}
          <Button type="submit" className="h-[3rem] w-[13rem] mt-4">
            Redefinir Senha
          </Button>
        </form>
      </Form>
    </Card>
  )
}