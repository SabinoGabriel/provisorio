import { PasswordRecoveryConfirmation } from "@/components/auth/PasswordReset/PasswordRecoveryConfirmation"
import Topbar from "@/components/core/Topbar"

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-t from-bluesoft via-bluemiddle via-10% to-primary p-4">
      <Topbar />
      <PasswordRecoveryConfirmation />
    </main>
  )
}