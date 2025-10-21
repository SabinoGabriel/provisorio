// src/app/dashboard/perfil/editar/page.tsx
import { EditProfileVisual } from "@/components/profile/EditProfileVisual";

export default function EditProfilePage() {
  return (
    // Padrão de página interna: fundo 'muted' e padding
    <main className="min-h-screen bg-muted p-8">
      <EditProfileVisual />
    </main>
  );
}