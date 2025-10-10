
import { ForgotPasswordForm } from "@/components/auth/PasswordReset/ForgotPasswordForm"

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-t from-bluesoft via-bluemiddle via-10% to-primary p-4">
      {/* Formulário de Inserção do Email */}
      <ForgotPasswordForm />
    </main>
  )
}