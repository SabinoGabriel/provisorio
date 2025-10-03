// src/components/auth/RecoveryCodeForm.tsx
"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/InputOTP";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function RecoveryCodeForm() {
  const router = useRouter();
  return (
    <Card className="w-full max-w-email-form min-h-email-form flex flex-col justify-end bg-white border border-[#E5E5E5] rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-8 gap-4">
      <div className="w-full flex flex-col items-center gap-12">
        <Image
          src="/images/psicologos-ne.png"
          alt="Psicólogos no Nordeste"
          width={175}
          height={40}
        />
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-secondary">Recuperação de Senha</h1>
          <p className="text-sm text-muted-foreground">Insira o código de verificação enviado para o seu e-mail</p>
        </div>

        <div className="w-full flex flex-col items-center gap-6">
            <InputOTP maxLength={6}>
                <InputOTPGroup className="flex gap-4">
                    <InputOTPSlot index={0} className="w-[2.25rem] h-[2.25rem] bg-[#F5F5F5] border border-[#D2D2D2] rounded-[0.25rem]" />
                    <InputOTPSlot index={1} className="w-[2.25rem] h-[2.25rem] bg-[#F5F5F5] border border-[#D2D2D2] rounded-[0.25rem]" />
                    <InputOTPSlot index={2} className="w-[2.25rem] h-[2.25rem] bg-[#F5F5F5] border border-[#D2D2D2] rounded-[0.25rem]" />
                    <InputOTPSlot index={3} className="w-[2.25rem] h-[2.25rem] bg-[#F5F5F5] border border-[#D2D2D2] rounded-[0.25rem]" />
                    <InputOTPSlot index={4} className="w-[2.25rem] h-[2.25rem] bg-[#F5F5F5] border border-[#D2D2D2] rounded-[0.25rem]" />
                    <InputOTPSlot index={5} className="w-[2.25rem] h-[2.25rem] bg-[#F5F5F5] border border-[#D2D2D2] rounded-[0.25rem]" />
                </InputOTPGroup>
            </InputOTP>
          <Button
            type="button"
            className="w-[13rem] h-[3rem]"
            onClick={() => {
              // Futuro: validação do código antes
              router.push("/recuperar-senha/nova-senha");
            }}
          >
            Confirmar código
          </Button>
        </div>
      </div>

      <div className="w-full text-center text-sm text-muted-foreground">
        Não chegou?{" "}
        <Button
          type="button"
          variant="link"
          className="p-0 h-auto text-[#3D7CDB] font-semibold"
          onClick={() => router.push("/recuperar-senha/confirmacao")}
        >
          Enviar novamente
        </Button>
      </div>
    </Card>
  );
}