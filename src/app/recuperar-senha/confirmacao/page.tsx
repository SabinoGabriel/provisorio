import { PasswordRecoveryConfirmation } from "@/components/auth/PasswordReset/PasswordRecoveryConfirmation"
export default function ConfirmationPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: "linear-gradient(0deg, #2fbaff 0%, #009DEB 30%, #8E4BF2 100%)",
      }}
    >
      <PasswordRecoveryConfirmation />
    </main>
  );
}