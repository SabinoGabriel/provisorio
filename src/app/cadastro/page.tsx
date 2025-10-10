import { RegisterForm } from "@/components/auth/RegisterForm"

export default function CadastroPage() {
  return (
    <main className="min-h-screen max-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-primary via-bluemiddle via-85% to-bluesoft p-4">
      {/* Formulário de Registro */}
      <RegisterForm />
    </main>
  )
}
