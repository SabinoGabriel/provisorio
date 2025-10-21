// src/components/profile/EditProfileVisual.tsx

// Importe todos os componentes UI necessários
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

// Este é um componente APENAS VISUAL. Sem estado ou lógica.
export function EditProfileVisual() {
  return (
    // Container principal que centraliza e define a largura máxima
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-foreground mb-6">Meu Perfil</h1>

      <Card className="p-6">
        <div className="space-y-6">
          {/* Seção do Avatar */}
          <div className="flex items-center gap-4">
            {/* Placeholder do Avatar */}
            <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center border">
              <span className="text-sm text-muted-foreground">Foto</span>
            </div>
            <Button variant="outline">Editar foto</Button>
          </div>

          {/* Formulário Estático */}
          <form className="space-y-4">
            {/* Linha 1: Nome Completo, Nome Social */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="fullName">Nome Completo</Label>
                <Input id="fullName" placeholder="Seu nome completo" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="socialName">Nome Social</Label>
                <Input id="socialName" placeholder="Seu nome social (opcional)" />
              </div>
            </div>

            {/* Linha 2: E-mail */}
            <div className="space-y-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="seu.email@exemplo.com" />
            </div>

            {/* Linha 3: Data de Nasc., Gênero */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="birthDate">Data de Nascimento</Label>
                <Input id="birthDate" placeholder="DD/MM/AAAA" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="gender">Gênero</Label>
                {/* Usando Input como placeholder para o Select */}
                <Input id="gender" placeholder="Selecione seu gênero" />
              </div>
            </div>

            {/* Linha 4: CPF, Telefone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="cpf">CPF</Label>
                <Input id="cpf" placeholder="000.000.000-00" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" placeholder="(00) 00000-0000" />
              </div>
            </div>

            {/* Botão Salvar */}
            <div className="flex justify-end pt-4">
              <Button type="button">Salvar</Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}