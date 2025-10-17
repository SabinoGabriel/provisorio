
import { ForgotPasswordForm } from "@/components/auth/PasswordReset/ForgotPasswordForm"
import Topbar from "@/components/core/Topbar"

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-t from-bluesoft via-bluemiddle via-10% to-primary p-4">
      <Topbar />
      <ForgotPasswordForm />
    </main>
  )
}