import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    // Centraliza o formulário na tela (mesma estrutura da branch funcional)
    <main 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: 'linear-gradient(0deg, #8E4BF2 0%, #009DEB 100%)'
      }}>
      <LoginForm />
    </main>
  );
}
