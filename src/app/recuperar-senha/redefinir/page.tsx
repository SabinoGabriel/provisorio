"use client";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function RedefinePasswordPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Senha redefinida com sucesso!");
    router.push("/login");
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: "linear-gradient(0deg, #8E4BF2 0%, #009DEB 85%, #2fbaff 100%)",
      }}
    >
      <Card className="w-full max-w-md p-8 flex flex-col items-center gap-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary">Crie uma nova senha</h1>
          <p className="text-sm text-muted-foreground">
            Sua nova senha deve ser diferente da anterior.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="new-password">Nova Senha</Label>
            <Input id="new-password" type="password" required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
            <Input id="confirm-password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Salvar nova senha
          </Button>
        </form>
      </Card>
    </main>
  );
}
