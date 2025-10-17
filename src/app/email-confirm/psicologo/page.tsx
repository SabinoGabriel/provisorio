// src/app/(auth)/email-confirm/page.tsx
import { EmailConfirmForm } from "@/components/auth/VerificationCodeForms/EmailConfirmForm"
import Topbar from "@/components/core/Topbar"

export default function EmailConfirmPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-t from-bluesoft via-bluemiddle via-10% to-primary p-4">
      <Topbar />
      <EmailConfirmForm role="psychologist" />
    </main>
  )
}