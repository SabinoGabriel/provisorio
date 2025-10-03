import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { ContainerInput } from "@/components/ui/ContainerInput";
import Link from "next/link";
import { Separator } from "@/components/ui/Separator";

export function LoginForm() {
  return (
    <div className="flex flex-col justify-center py-16">

      {/* Título e Descrição */}
       <div className="text-center flex flex-col mb-16 gap-2">
        <h1 className="text-4xl text-white font-semibold tracking-tight">Acesse sua conta</h1>
        <p className="text-2xl text-[#EEF5FF] font-normal text-muted-foreground">Comece sua jornada de cuidado</p>
      </div>

      {/* Container do Formulário */}
      <Card 
        className="bg-white border border-[#E5E5E5]"
        style={{
          width: 800,
          padding: 32,
          boxSizing: "border-box",
          borderRadius: 24,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
        }}>

        {/* Título */}
        <h2 className="text-center text-2xl font-bold text-[#195FB5] mb-6">
          Login
        </h2>

        {/* Formulário */}
        <form className="w-full">
          <div className="grid w-full items-center gap-4">

            {/* E-mail */}
            <div className="flex flex-col">
              <ContainerInput title="E-mail">
                <Input
                  type="email"
                  placeholder="Digite seu e-mail"
                />
              </ContainerInput>
            </div>

            {/* Senha */}
            <div className="flex flex-col">
              <ContainerInput title="Senha">
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                />
              </ContainerInput>
            </div>

            {/* Link para Recuperação de Senha */}
            <Link href="/recuperar-senha" className="text-[#3D7CDB] mb-4 text-sm font-semibold hover:underline hover:text-[#1C4B9C]">
                Esqueci a senha
            </Link>
          </div>
        </form>

        {/* Botão Entrar */}
        <div className="flex items-center justify-between mb-8">
          <Button
            type="submit"
            className="w-full bg-[#983DEB] hover:bg-[#7B26C8] text-white h-12 rounded-xl"
          >
            Entrar
          </Button>
        </div>

        {/* Separador - Linha de divisão */}
        <Separator className="bg-[#E1E7EF]" />

        {/* Link para Cadastro */}
        <div className="text-center mt-6 text-sm">
          <span className="text-[#666]">Não tem uma conta? </span>
          <Link href="/cadastro" className="text-[#3D7CDB] font-semibold hover:underline hover:text-[#1C4B9C]">
            Criar Conta
          </Link>
        </div>
      </Card>
    </div>
  );
}