// src/app/login/page.tsx

import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    // Usamos flexbox para centralizar o formulário na tela
    <main className="flex items-center justify-center min-h-screen">
      <LoginForm />
    </main>
  );
}