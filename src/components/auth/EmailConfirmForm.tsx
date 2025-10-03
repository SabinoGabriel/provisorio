"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/InputOTP";

export function EmailConfirmForm() {
  const router = useRouter();

  const handleResendCode = () => {
    alert("Um novo código de validação foi enviado para o seu e-mail.");
  };

  const handleValidation = () => {
    alert("Código validado com sucesso! Redirecionando para o login...");
    router.push("/login");
  };

  return (
    <Card className="w-full max-w-email-form min-h-email-form flex flex-col justify-end bg-white border border-[#E5E5E5] rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-8 gap-4"> {/* Ajuste de gap */}
      {/* Placeholder para a imagem */}
      <div className="h-[2rem] w-[40%]"></div> {/* Ajuste a altura conforme necessário */}

      <div className="w-full flex flex-col items-center gap-12"> {/* Ajuste de gap */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-secondary">Código de Validação</h1>
          <p className="text-sm text-muted-foreground">Insira o código de 6 dígitos enviado para o seu e-mail</p>
        </div>

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

        <Button type="button" className="w-[13rem] h-[3rem] flex items-center justify-center gap-4" onClick={handleValidation}>
          Validar código
        </Button>
      </div>

      <div className="w-full text-center text-sm text-muted-foreground mt-2"> {/* Ajuste de margem superior */}
        Não chegou?{" "}
        <Button
          type="button"
          variant="link"
          onClick={handleResendCode}
          className="p-0 h-auto"
        >
          Enviar novamente
        </Button>
      </div>
    </Card>
  );
}