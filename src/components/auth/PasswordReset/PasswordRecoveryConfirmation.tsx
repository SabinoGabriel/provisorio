"use client"

import { Card } from "@/components/ui/Card"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { useRouter } from "next/navigation"

export function PasswordRecoveryConfirmation() {
  const router = useRouter()

  return (
    <Card className="max-w-[42rem] min-h-[28rem] py-12 justify-between">
      {/* Ícone */}
      <div className="h-fit w-fit flex items-center justify-center">
        <Image
          src="/images/icon-notify-mail.svg"
          alt="Psicólogos no Nordeste"
          width={128}
          height={128}
          className="object-cover"
        />
      </div>
      
      {/* Título e Subtítulo */}
      <div className="flex flex-col items-center justify-center my-2 gap-2">
        <h2 className="text-2xl font-bold text-bluestrong">
          Confira seu e-mail!
        </h2>
        <p className="text-base font-medium text-gray-650 text-center w-[85%]">
          Enviamos um e-mail com instruções para redefinir a sua senha. 
          Isso pode levar alguns minutos.
        </p>
      </div>

      {/* Botão - Já tenho o código */}
      <Button type="button" className="h-[3rem] w-[13rem]" onClick={() => router.push("/recuperar-senha/codigo")}>
        Já tenho o código
      </Button>
    </Card>
  )
}