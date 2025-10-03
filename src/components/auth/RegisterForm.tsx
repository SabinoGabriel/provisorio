"use client"
import Link from "next/link"
import { Card } from "@/components/ui/Card"
import { Separator } from "@/components/ui/Separator"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs"
import { PatientForm } from "./PacientForm"
import { PsychologistForm } from "./PsychologistForm";

export function RegisterForm() {
  return (
    <div className="flex flex-col justify-center py-16">
      {/* Container do Formulário */}
      <Card 
        className="bg-white border border-[#E5E5E5] w-[52rem] p-8 box-border rounded-3xl"
        style={{
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
      }}>

        {/* Título */}
        <h2 className="text-center text-2xl font-bold text-[#195FB5] mb-4">
          Cadastro
        </h2>

        {/* Toggle Paciente/Psicólogo - Barra única com botões internos */}
        <div className="flex flex-col p-1 rounded-2xl">
          <Tabs defaultValue="pacient" className="w-full">

            {/* Barra de Tabs */}
            <TabsList className="bg-[#F1F5F9] w-full p-1 h-12 mb-4 rounded-2xl">
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
          <Separator className="bg-[#E1E7EF] my-6" />

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