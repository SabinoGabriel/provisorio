import { RegisterForm } from "@/components/auth/RegisterForm";

export default function CadastroPage() {
  return (
    <main 
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(0deg, #8E4BF2 0%, #009DEB 85%, #2fbaff 100%)'
      }}
    >
      {/* Formulário de Registro */}
      <RegisterForm />
    </main>
  );
}
