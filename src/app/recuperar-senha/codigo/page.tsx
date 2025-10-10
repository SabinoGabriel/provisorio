// src/app/recuperar-senha/confirmacao/page.tsx
import { RecoveryCodeForm} from "@/components/auth/VerificationCodeForms/RecoveryCodeForm"

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-t from-bluesoft via-bluemiddle via-10% to-primary p-4">
      {/* Código de Verificação */}
      <RecoveryCodeForm/>
    </main>
  )
}