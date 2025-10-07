
import { ForgotPasswordForm } from "@/components/auth/PasswordReset/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: "linear-gradient(0deg, #2fbaff 0%, #009DEB 30%, #8E4BF2 100%)",
      }}
    >
      <ForgotPasswordForm />
    </main>
  );
}