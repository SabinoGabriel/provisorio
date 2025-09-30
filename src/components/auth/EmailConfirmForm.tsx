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

  // Esta função será chamada quando o formulário for submetido
  const handleValidation = () => {
    // Aqui você adicionaria a lógica para validar o código com o backend.
    // Por enquanto, vamos apenas simular o sucesso e navegar para o login.
    alert("Código validado com sucesso! Redirecionando para o login...");
    router.push("/login");
  };

  return (
    <Card className="w-full max-w-auth-form min-h-email-form flex flex-col justify-between bg-white border border-[#E5E5E5] rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-8 gap-8">
      <div className="w-full flex flex-col items-center gap-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-secondary">Código de Validação</h1>
          <p className="text-sm text-muted-foreground">Insira o código de 6 dígitos enviado para o seu e-mail</p>
        </div>

        <div className="w-full flex flex-col items-center gap-6">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <Button type="button" className="w-full" onClick={handleValidation}>
            Validar código
          </Button>
        </div>
      </div>

      <div className="w-full text-center text-sm text-muted-foreground">
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