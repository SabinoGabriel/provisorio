import { LoginForm } from "@/components/auth/LoginForm"
import Topbar from "@/components/core/Topbar"

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-t from-primary via-bluemiddle via-85% to-bluesoft p-4">
      <Topbar />
      <LoginForm />
    </main>
  )
}
