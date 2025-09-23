import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import Link from "next/link";
import Image from "next/image"; // Importe o componente Image

export function LoginForm() {
  return (
    <Card className="w-[400px] p-8 flex flex-col items-center gap-6">
      {/* Adicionando o Logo dentro do Card */}
      <Image 
        src='/images/psicologos-ne.png' 
        alt='Psicólogos no Nordeste - logo' 
        width={250} 
        height={100} 
        priority 
      />

      {/* Título e Descrição */}
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight">Acesse sua conta</h1>
        <p className="text-sm text-muted-foreground">Comece sua jornada do cuidado</p>
      </div>

      {/* Formulário */}
      <form className="w-full">
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="Digite seu e-mail" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" placeholder="Digite sua senha" />
            <Link href="/recuperar-senha"
              className="text-xs text-muted-foreground hover:underline text-right"
            >
              Esqueci a senha
            </Link>
          </div>
        </div>
      </form>

      {/* Botão e link de cadastro */}
      <div className="w-full flex flex-col gap-4 items-center">
        <Button className="w-full">Entrar</Button>
        <p className="text-xs text-center text-muted-foreground">
          Não tem uma conta?{' '}
          <Link href="/cadastro" className="text-primary hover:underline font-semibold">
            Criar Conta
          </Link>
        </p>
      </div>
    </Card>
  );
}