import { ResetPasswordForm } from "@/components/auth/PasswordReset/ResetPasswordForm"

export default function ResetPasswordPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-t from-bluesoft via-bluemiddle via-10% to-primary p-4">
      {/* Formulário de Redefinição de Senha */}
      <ResetPasswordForm />
    </main>
  )
}