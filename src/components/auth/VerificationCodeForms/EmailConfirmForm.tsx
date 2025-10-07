"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/InputOTP";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/Form";
import { toast } from "sonner";

export function EmailConfirmForm() {
  const router = useRouter();

  const codeSchema = z.object({
    code: z
      .string()
      .nonempty("Código de verificação é obrigatório")
      .regex(/^\d+$/, "Código de verificação deve conter apenas números")
      .refine((value) => /^\d{6}$/.test(value), {
        message: "Código de verificação deve conter 6 dígitos",
      }),
  });
  
  type RecoveryCodeFormType = z.infer<typeof codeSchema>

  const codeInput = useForm<RecoveryCodeFormType>({
    resolver: zodResolver(codeSchema),
    mode: "all",
    defaultValues: {
      code: "",
    },
  })

  const handleResendCode = () => {
    toast("Um novo código de validação foi enviado para o seu e-mail.", {
      description: "Redirecionando para o login..."
    })
  };

  const onSubmitCode = () => {
    codeInput.trigger().then((isValid) => {
      if (isValid) {
        toast("Validação realizada com sucesso! Redirecionando para o login...", {
          description: "Redirecionando para o login",
        })
        setTimeout(() => router.push('/login'), 2000)
      }
    })
  };

  return (
    <Card className="w-full max-w-[42rem] min-h-[28rem] justify-between">
      <Image
        src="/images/psicologos-ne-main-logo.svg"
        alt="Psicólogos no Nordeste"
        width={180}
        height={64}
        className="object-cover"
      />

      {/* Título e Descrição */}
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-2xl font-bold text-[#195FB5]">
          Código de Validação
        </h2>
        <p className="text-base font-medium text-[#686D95] text-center">
          Insira o código de verificação enviado para o seu e-mail
        </p>
      </div>

      <Form {...codeInput}>
        <form onSubmit={codeInput.handleSubmit(onSubmitCode)} className="flex flex-col justify-between items-center h-[12.5rem]">
          <FormField
            control={codeInput.control}
            name="code"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center justify-center gap-1">
                <FormControl>
                  <InputOTP {...field} maxLength={6}>
                    <InputOTPGroup>
                        <InputOTPSlot className={codeInput.formState.errors.code ? "border-red-300" : ""} index={0} />
                        <InputOTPSlot className={codeInput.formState.errors.code ? "border-red-300" : ""} index={1} />
                        <InputOTPSlot className={codeInput.formState.errors.code ? "border-red-300" : ""} index={2} />
                        <InputOTPSlot className={codeInput.formState.errors.code ? "border-red-300" : ""} index={3} />
                        <InputOTPSlot className={codeInput.formState.errors.code ? "border-red-300" : ""} index={4} />
                        <InputOTPSlot className={codeInput.formState.errors.code ? "border-red-300" : ""} index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormMessage className="p-0" />
              </FormItem>
            )}
          />
          <div className="flex flex-col justify-center items-center gap-4">
            <Button type="submit" className="w-[13rem] h-[3rem]">
              Confirmar código
            </Button>
            <div className="w-full flex gap-1 justify-center text-sm text-[#686D95] font-medium">
              Não chegou?
              <Button
                type="button"
                variant="link"
                className="p-0 h-auto text-[#3D7CDB] font-semibold"
                onClick={handleResendCode}
              >
                Enviar novamente
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </Card>
  );
}