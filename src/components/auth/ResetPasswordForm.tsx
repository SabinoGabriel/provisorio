"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { ContainerInput } from "@/components/ui/ContainerInput";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function ResetPasswordForm() {
  const router = useRouter();

  const handleSaveNewPassword = () => {
    // Lógica para salvar a nova senha
    alert("Senha redefinida com sucesso!");
    // Idealmente, redirecionar para o login:
    router.push("/login"); 
  };

  return (
    <Card className="w-full max-w-auth-form min-h-email-form flex flex-col justify-center bg-white border border-[#E5E5E5] rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] p-8 gap-8">
      <div className="w-full flex flex-col items-center gap-6">
        
        {/* Placeholder para o ícone de escudo */}
        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            {/* <Image src="/icons/shield-icon.svg" alt="Ícone de segurança" width={48} height={48} /> */}
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-secondary">Redefinição de Senha</h1>
          <p className="text-sm text-muted-foreground">Crie uma nova senha de acesso a plataforma</p>
        </div>

        <form className="w-full flex flex-col items-center gap-6" onSubmit={(e) => e.preventDefault()}>
          <ContainerInput title="Nova senha" required className="w-full">
            <Input
              type="password"
              placeholder="Digite sua nova senha"
            />
          </ContainerInput>
          <ContainerInput title="Confirmar senha" required className="w-full">
            <Input
              type="password"
              placeholder="Digite sua senha"
            />
          </ContainerInput>
          <Button type="button" className="w-[13rem] h-[3rem] mt-4" onClick={handleSaveNewPassword}>
            Salvar
          </Button>
        </form>
      </div>
    </Card>
  );
}