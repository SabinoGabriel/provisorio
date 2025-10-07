"use client"
import Link from "next/link"
import { Card } from "@/components/ui/Card"
import { Separator } from "@/components/ui/Separator"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs"
import { PatientForm } from "@/components/auth/PatientForm/PatientForm"
import { PsychologistForm } from "@/components/auth/PsychologistForm/PsychologistForm";

export function RegisterForm() {

  return (
    <div className="flex flex-col justify-center py-16">
      {/* Container do Formulário */}
      <Card>
        {/* Título e Descrição */}
        <div className="text-center flex flex-col mb-5 gap-1">
          <h1 className="text-2xl text-[#195FB5] font-semibold tracking-tight">Crie sua conta</h1>
          <p className="text-lg text-[#686D95] font-medium">Comece sua jornada de cuidado conosco</p>
        </div>

        {/* Toggle Paciente/Psicólogo - Barra única com botões internos */}
        <div className="flex flex-col p-1 rounded-2xl w-full">
          <Tabs defaultValue="pacient" className="w-full">

            {/* Barra de Tabs */}
            <TabsList className="bg-[#F1F5F9] w-full p-1 h-12 mb-2 rounded-2xl">
              <TabsTrigger className="w-full h-10 text-[#9098a3]" value="pacient">Paciente</TabsTrigger>
              <TabsTrigger className="w-full h-10 text-[#9098a3]" value="psychologist">Psicólogo</TabsTrigger>
            </TabsList>

            {/* Conteúdo da Tab Paciente */}
            <TabsContent value="pacient">
              <PatientForm />
            </TabsContent>

            {/* Conteúdo da Tab Psicólogo */}
            <TabsContent value="psychologist"> 
              <PsychologistForm />
            </TabsContent>
          </Tabs>

          {/* Separador - Linha de divisão */}
          <Separator className="bg-[#E1E7EF] my-4" />

          {/* Link para Login */}
          <div className="text-center text-sm">
            <span className="text-[#666]">Já tem uma conta? </span>
            <Link href="/login" className="text-[#3D7CDB] font-semibold hover:underline hover:text-[#1C4B9C]">
              Entrar
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}