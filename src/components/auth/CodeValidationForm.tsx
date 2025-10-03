"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/InputOTP";
import Image from "next/image";

interface CodeValidationFormProps {
  title: string;
  description: string;
  onSubmit: (code: string) => void;
}

export function CodeValidationForm({
  title,
  description,
  onSubmit,
}: CodeValidationFormProps) {
  const [code, setCode] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length < 6) {
      alert("Por favor, preencha o código completo.");
      return;
    }
    onSubmit(code);
  };

  const handleResendCode = () => {
    alert("Um novo código foi enviado para o seu e-mail.");
    setCode("");
  };

  return (
    <Card className="w-full max-w-md p-6 sm:p-8 flex flex-col items-center gap-6">
      <Image
        src="/images/psicologos-ne.png"
        alt="Psicólogos no Nordeste - logo"
        width={250}
        height={100}
        priority
      />
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-secondary">
          {title}
        </h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <form
        onSubmit={handleFormSubmit}
        className="w-full flex flex-col items-center gap-6"
      >
        <InputOTP
          maxLength={6}
          value={code}
          onChange={(value) => setCode(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>

        <Button type="submit" className="w-full max-w-xs">
          Validar código
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Não chegou?{" "}
        <Button
          type="button"
          variant="link"
          onClick={handleResendCode}
          className="p-0 h-auto"
        >
          Enviar novamente
        </Button>
      </p>
    </Card>
  );
}
