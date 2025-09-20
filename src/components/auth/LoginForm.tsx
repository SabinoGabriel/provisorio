import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,

} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export function LoginForm() {
    return (
    <Card className="w-[350px]">
      <CardHeader className="text-center">
        <CardTitle>Acesse sua conta</CardTitle>
        <CardDescription>Comece sua jornada do cuidado</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="Digite seu e-mail" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="Digite sua senha" />
              <Link href="/recuperar-senha" // Criaremos essa página depois
                className="text-xs text-muted-foreground hover:underline text-right"
              >
                Esqueci a senha
              </Link>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button className="w-full">Entrar</Button>
        <p className="text-xs text-center text-muted-foreground">
          Não tem uma conta?{' '}
          <Link href="/cadastro" className="text-primary hover:underline">
            Criar Conta
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}