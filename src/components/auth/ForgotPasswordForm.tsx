"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { ContainerInput } from "@/components/ui/ContainerInput";
import Image from "next/image"; // Importe o componente Image do Next.js
import { useRouter } from "next/navigation";

export function ForgotPasswordForm() {
  const router = useRouter();
  return (
    <Card
      className="w-full max-w-email-form min-h-email-form flex flex-col bg-white border border-[#E5E5E5] rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-8"
    >
      {/* Placeholder / área da ilustração: 7rem x 7rem conforme protótipo */}
      <div className="w-full flex flex-col items-center">
        <div className="h-[7rem] w-[7rem] flex items-center justify-center mb-6">
          <Image
            src="/images/psicologos-ne.png"
            alt="Psicólogos no Nordeste"
            width={112} // 7rem
            height={112} // 7rem
            className="object-contain"
          />
        </div>

        {/* Bloco textual */}
        <div className="text-center space-y-2 mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-secondary">Recuperação de Senha</h1>
          <p className="text-sm text-muted-foreground">Informe seu e-mail para a redefinição da sua senha</p>
        </div>

        {/* Formulário: cada bloco separado por 1.5rem (gap-6) */}
        <form
          className="w-full flex flex-col items-center gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            // Futuro: chamada API para solicitar recuperação
            router.push("/recuperar-senha/confirmacao");
          }}
        >
          <ContainerInput title="E-mail" className="w-full">
            <Input type="email" placeholder="Digite seu e-mail" />
          </ContainerInput>
          <Button
            type="submit"
            className="h-[3rem] w-[13rem] flex items-center justify-center mx-auto"
          >
            Redefinir Senha
          </Button>
        </form>
      </div>
    </Card>
  );
}