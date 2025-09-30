import { RegisterForm } from "@/components/auth/RegisterForm";

export default function CadastroPage() {
  return (
    <main 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: 'linear-gradient(0deg, #8E4BF2 0%, #009DEB 100%)'
      }}
    >
      <RegisterForm />
    </main>
  );
}
