import { RegisterForm } from "@/components/auth/registerforms";

export default function CadastroPage() {
  return (
    <main 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}
    >
      <RegisterForm />
    </main>
  );
}
