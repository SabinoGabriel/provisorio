"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { ContainerInput } from "@/components/ui/ContainerInput";
import Image from "next/image"; // Importe o componente Image do Next.js

export function ForgotPasswordForm() {
  return (
    <Card className="w-full max-w-auth-form min-h-email-form flex flex-col justify-between bg-white border border-[#E5E5E5] rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-8 gap-8">
      <div className="w-full flex flex-col items-center gap-6">
        {/* Logo (conforme protótipo) - Supondo que a imagem esteja em /public/images/psicologos-ne.png */}
        <Image
          src="/images/psicologos-ne.png"
          alt="Psicólogos no Nordeste"
          width={175}
          height={40}
        />
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-secondary">
            Recuperação de Senha
          </h1>
          <p className="text-sm text-muted-foreground">
            Informe seu e-mail para a redefinição da sua senha
          </p>
        </div>

        <form className="w-full flex flex-col items-center gap-6">
          <ContainerInput title="E-mail" className="w-full">
            <Input
              type="email"
              placeholder="Digite seu e-mail"
            />
          </ContainerInput>
          <Button type="submit" className="w-full">
            Redefinir Senha
          </Button>
        </form>
      </div>
    </Card>
  );
}