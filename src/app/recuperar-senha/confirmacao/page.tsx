import { PasswordRecoveryConfirmation } from "@/components/auth/PasswordRecoveryConfirmation"
export default function ConfirmationPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: "linear-gradient(0deg, #8E4BF2 0%, #009DEB 85%, #2fbaff 100%)",
      }}
    >
      <PasswordRecoveryConfirmation />
    </main>
  );
}