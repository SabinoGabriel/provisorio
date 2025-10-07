"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/Form";
import { PasswordField } from "@/components/ui/PasswordField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

export function ResetPasswordForm() {
  const router = useRouter();
  const resetPasswordSchema = z.object({
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(8, "Senha fraca, utilize letras e números")
      .refine((val) => /[0-9]/.test(val), "Senha deve conter pelo menos um número")
      .refine((val) => /[A-Za-z]/.test(val), {
        message: "Senha deve conter pelo menos uma letra",
      }),
    confirmPassword: z
      .string()
      .nonempty("Confirmar senha é obrigatório"),
  }).refine((data) => data.password === data.confirmPassword, {
      message: "As senhas não coincidem",
      path: ["confirmPassword"],
      when(payload) { 
        return resetPasswordSchema
        .pick({ password: true, confirmPassword: true })
        .safeParse(payload.value).success
      },  
  })

  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "all",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  })

  const handleSaveNewPassword = () => {
    toast("Senha redefinida com sucesso!", { 
        description: "Redirecionando para tela de login", 
    })
    setTimeout(() => router.push('/login'), 2000)
  };

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

      {/* Título e Descrição */}
      <div className="text- flex flex-col items-center justify-center my-2 gap-2">
        <h2 className="text-2xl font-bold text-[#195FB5]">Redefinição de Senha</h2>
        <p className="text-base font-medium text-[#686D95]">Crie uma nova senha de acesso a plataforma</p>
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
                        <FormLabel htmlFor="password">Nova senha <span className="text-red-500">*</span></FormLabel>
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
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="w-[32rem]">
                  <FormControl>
                    <div className="w-full">
                        <FormLabel htmlFor="confirmPassword">Confirmar senha <span className="text-red-500">*</span></FormLabel>
                        <PasswordField
                          id="confirmPassword"
                          placeholder="Digite sua nova senha"
                          {...field}
                        />
                    </div>
                  </FormControl>
                  <FormMessage />
              </FormItem>
            )}
          />

          {/* Botão - Submit */}
          <Button type="submit" className="h-[3rem] w-[13rem] mt-4">
            Redefinir Senha
          </Button>
        </form>
      </Form>
    </Card>
  );
}