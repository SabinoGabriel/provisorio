"use client";

import { Card } from "@/components/ui/Card";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export function PasswordRecoveryConfirmation() {
  const router = useRouter();
  return (
    <Card className="w-full max-w-auth-form min-h-email-form flex flex-col justify-center items-center bg-white border border-[#E5E5E5] rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-8 gap-6 text-center">
      {/* Ícone de sino com e-mail (sugestão: exportar como SVG do PDF) */}
      <div className="w-20 h-20 flex items-center justify-center">
        {/* <Image src="/icons/email-sent-icon.svg" alt="E-mail enviado" width={80} height={80} /> */}
      </div>
      
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-secondary">
          Confira seu e-mail!
        </h1>
        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
          Enviamos um e-mail com instruções para redefinir a sua senha.
          Isso pode levar alguns minutos.
        </p>
      </div>
      <Button
        type="button"
        className="h-[3rem] w-[13rem]"
        onClick={() => router.push("/recuperar-senha/codigo")}
      >
        Já tenho o código
      </Button>
    </Card>
  );
}