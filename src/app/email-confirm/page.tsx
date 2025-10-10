// src/app/(auth)/email-confirm/page.tsx
import { EmailConfirmForm } from "@/components/auth/VerificationCodeForms/EmailConfirmForm"

export default function EmailConfirmPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-t from-bluesoft via-bluemiddle via-10% to-primary p-4">
      {/* Código de Verificação */}
      <EmailConfirmForm />
    </main>
  )
}