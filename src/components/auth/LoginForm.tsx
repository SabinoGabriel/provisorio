"use client"

import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Separator } from "@/components/ui/Separator"
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/Form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { PasswordField } from "@/components/ui/PasswordField"
import { loginSchema, LoginFormData } from "@/schemas/auth/login.schema"
import Link from "next/link"
import { login } from "@/services/auth"
import { showToast } from "@/components/ui/Toast"
import { setToken } from "@/utils/lib/api"
import { useRouter } from "next/navigation"

export function LoginForm() {
    const router = useRouter()

    // Validação via Zod e react-hook-form
    const form = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        mode: "all",
        defaultValues: {
            email: "",
            password: "",
        },
    })

    function onSubmit(data: LoginFormData) {
        login(data)
            .then(tokens => {
                showToast('success', 'Login realizado com sucesso!')
                setToken(tokens.accessToken)
                router.push('/dashboard')
            }).catch(error => {
                showToast('error', 'Erro', {
                    description: error.message
                })
            })
    }

    return (
        <div className="flex flex-col justify-center py-16">

            {/* Container do Formulário */}
            <Card className="w-[36rem]">

                {/* Título e Subtítulo */}
                <div className="text-center flex flex-col mb-10 gap-1">
                    <h1 className="text-2xl text-bluestrong font-semibold">Acesse sua conta</h1>
                    <p className="text-lg text-gray-650 font-medium text-muted-foreground">É um prazer ter você de novo com a gente!</p>
                </div>

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
                                                <FormLabel htmlFor="email">E-mail</FormLabel>
                                                <Input {...field} id="email" className="w-full" placeholder="Informe seu e-mail" />
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
                                                <FormLabel htmlFor="password">Senha</FormLabel>
                                                <PasswordField {...field} id="password" className="w-full" placeholder="Informe sua senha" />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        {/* Link para Recuperação de Senha */}
                        <Link href="/recuperar-senha" className="text-blue w-fit text-sm flex font-semibold hover:underline hover:text-bluehover">
                            Esqueci a senha
                        </Link>

                        {/* Botão Entrar */}
                        <Button type="submit" variant="default" className="w-full h-12">
                            Entrar
                        </Button>

                    </form>

                </Form>

                {/* Separador - Linha de divisão */}
                <Separator className="my-4" />

                {/* Link para Cadastro */}
                <div className="text-center text-sm">
                    <span className="text-gray-800">Não tem uma conta? </span>
                    <Link href="/cadastro" className="text-blue font-semibold hover:underline hover:text-bluehover">
                        Criar Conta
                    </Link>
                </div>

            </Card>

        </div>
    )
}