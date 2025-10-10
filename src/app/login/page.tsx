import { LoginForm } from "@/components/auth/LoginForm"

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-t from-primary via-bluemiddle via-85% to-bluesoft p-4">
      {/* Formulário de Login */}
      <LoginForm />
    </main>
  )
}
