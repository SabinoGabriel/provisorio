"use client"
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import Link from "next/link";
import { Separator } from "@/components/ui/Separator";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/types/form";
import { LoginFormData } from "@/types/form";

export function LoginForm() {

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(data: LoginFormData) {
    console.log("Usuário logado:", data)
  }

  return (
    <div className="flex flex-col justify-center py-16">

      {/* Título e Descrição */}
       <div className="text-center flex flex-col mb-16 gap-2">
        <h1 className="text-4xl text-white font-semibold tracking-tight">Acesse sua conta</h1>
        <p className="text-2xl text-[#EEF5FF] font-normal text-muted-foreground">Comece sua jornada de cuidado</p>
      </div>

      {/* Container do Formulário */}
      <Card 
        className="bg-white border border-[#E5E5E5] w-[36rem] p-8 box-border flex flex-col rounded-3xl"
        style={{
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
      }}>

        {/* Título */}
        <h2 className="text-center text-2xl font-bold text-[#195FB5] mb-8">
          Login
        </h2>

        {/* Formulário */}
        <Form {...form}>
          <form className="w-full space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col w-full gap-4">

              {/* E-mail */}
              <FormField 
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                      <FormControl>
                        <div className="w-full">
                            <FormLabel>E-mail</FormLabel>
                            <Input {...field} className="w-full" type="email" placeholder="Informe seu e-mail" />
                        </div>
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                )}
              />

              {/* Senha */}
              <FormField 
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                      <FormControl>
                        <div>
                            <FormLabel>Senha</FormLabel>
                            <Input {...field} type="password" placeholder="Informe sua senha" />
                        </div>
                      </FormControl>
                      <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Link para Recuperação de Senha */}
            <Link href="#" className="text-[#3D7CDB] w-fit text-sm flex font-semibold hover:underline hover:text-[#1C4B9C]">
                Esqueci a senha
            </Link>

            {/* Botão Entrar */}
            <Button
              type="submit"
              onClick={() => {
                form.trigger().then((valid) => { 
                  if (valid) onSubmit(form.getValues())
                })
              }}
              className="w-full bg-[#983DEB] hover:bg-[#7B26C8] text-white h-12 rounded-xl"
            >
              Entrar
            </Button>
          </form>
        </Form>

        {/* Separador - Linha de divisão */}
        <Separator className="bg-[#E1E7EF] my-6" />

        {/* Link para Cadastro */}
        <div className="text-center text-sm">
          <span className="text-[#666]">Não tem uma conta? </span>
          <Link href="/cadastro" className="text-[#3D7CDB] font-semibold hover:underline hover:text-[#1C4B9C]">
            Criar Conta
          </Link>
        </div>
      </Card>
    </div>
  );
}