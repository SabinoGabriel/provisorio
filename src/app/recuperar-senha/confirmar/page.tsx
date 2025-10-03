"use client";

import { useRouter } from "next/navigation";
import { CodeValidationForm } from "@/components/auth/CodeValidationForm";

export default function ConfirmPasswordResetPage() {
  const router = useRouter();

  const handlePasswordResetValidation = (code: string) => {
    console.log("Validando código de recuperação:", code);
    alert("Código validado! Agora, crie uma nova senha.");
    router.push("/recuperar-senha/redefinir");
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: "linear-gradient(0deg, #8E4BF2 0%, #009DEB 85%, #2fbaff 100%)",
      }}
    >
      <CodeValidationForm
        title="Recuperação de Senha"
        description="Insira o código de verificação enviado para o seu e-mail."
        onSubmit={handlePasswordResetValidation}
      />
    </main>
  );
}
