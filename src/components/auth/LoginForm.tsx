import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { ContainerInput } from "@/components/ui/ContainerInput";
import Link from "next/link";
// import Image from "next/image"; // 
import { Separator } from "@/components/ui/Separator";

export function LoginForm() {
  return (
    <div className="flex flex-col justify-center py-16">
      {/* Título e Descrição */}
      <div className="text-center flex flex-col my-8 gap-2">
        <h1 className="text-4xl text-white font-bold tracking-tight">Acesse sua conta</h1>
        <p className="text-md text-white text-muted-foreground">Comece sua jornada do cuidado</p>
      </div>
      <Card 
        className="bg-white border border-[#E5E5E5]"
          style={{
            width: 800,
            padding: 32,
            boxSizing: "border-box",
            borderRadius: 24,
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
          }}>
        {/* Adicionando o Logo dentro do Card */}
        {/* <Image 
          src='/images/psicologos-ne.png' 
          alt='Psicólogos no Nordeste - logo' 
          width={250} 
          height={100} 
          priority 
        /> */}

        {/* Título */}
        <h2 className="text-center text-2xl font-bold text-[#195FB5] mb-6">
          Login
        </h2>

        {/* Formulário */}
        <form className="w-full">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <ContainerInput title="E-mail">
                <Input
                  type="email"
                  placeholder="Digite seu e-mail"
                />
              </ContainerInput>
            </div>
            <div className="flex flex-col space-y-1.5">
              <ContainerInput title="Senha">
                <Input
                  type="password"
                  placeholder="Digite sua senha"
                />
              </ContainerInput>

              <Link href="/recuperar-senha"
                className="text-xs text-muted-foreground hover:underline text-right"
              >
                Esqueci a senha
              </Link>
            </div>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4 mb-8">
          {/* Botão Entrar */}
          <Button
            type="submit"
            className="w-full mt-8 bg-[#983DEB] hover:bg-[#7B26C8] text-white h-12 rounded-xl"
          >
            Entrar
          </Button>
        </div>

        <Separator className="bg-[#E1E7EF]" />

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