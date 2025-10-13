import { RegisterForm } from "@/components/auth/RegisterForm"

export default function CadastroPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-t from-primary via-bluemiddle via-85% to-bluesoft px-4 py-12 gap-8">
      {/* Formulário de Registro */}
      <RegisterForm />
    </main>
  )
}
