import { RegisterForm } from "@/components/auth/RegisterForm";

export default function CadastroPage() {
  return (
    <main 
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{
        background: 'linear-gradient(0deg, #8E4BF2 0%, #009DEB 85%, #2fbaff 100%)'
      }}
    >
      {/* Título e Descrição */}
      <div className="text-center flex flex-col mb-3 gap-2">
        <h1 className="text-4xl text-white font-semibold tracking-tight">Crie sua conta</h1>
        <p className="text-2xl text-[#EEF5FF] font-normal text-muted-foreground">Comece sua jornada de cuidado conosco</p>
      </div>

      {/* Formulário de Registro */}
      <RegisterForm />
    </main>
  );
}
