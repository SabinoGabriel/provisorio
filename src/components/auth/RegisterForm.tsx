"use client"
import Link from "next/link"
import { Card } from "@/components/ui/Card"
import { Separator } from "@/components/ui/Separator"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs"
import { PatientForm } from "@/components/auth/PatientForm/PatientForm"
import { PsychologistForm } from "@/components/auth/PsychologistForm/PsychologistForm"

export function RegisterForm() {

  return (
    <div className="flex flex-col justify-center py-16">
      
      {/* Container do Formulário */}
      <Card>
        
        {/* Título e Subtítulo */}
        <div className="text-center flex flex-col mb-5 gap-1">
          <h1 className="text-2xl text-bluestrong font-semibold tracking-tight">Crie sua conta</h1>
          <p className="text-lg text-gray-650 font-medium">Comece sua jornada de cuidado conosco</p>
        </div>

        {/* Toggle Paciente/Psicólogo - Barra única com botões internos */}
        <div className="flex flex-col p-1 rounded-2xl w-full">
          <Tabs defaultValue="pacient" className="w-full">

            {/* Barra de Tabs */}
            <TabsList className="bg-gray-100 w-full p-1 h-12 mb-2 rounded-2xl">
              <TabsTrigger className="w-full h-10 text-gray-650" value="pacient">Paciente</TabsTrigger>
              <TabsTrigger className="w-full h-10 text-gray-650" value="psychologist">Psicólogo</TabsTrigger>
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
          <Separator className="my-4" />

          {/* Link para Login */}
          <div className="text-center text-sm">
            <span className="text-gray-800">Já tem uma conta? </span>
            <Link href="/login" className="text-blue font-semibold hover:underline hover:text-bluehover">
              Entrar
            </Link>
          </div>

        </div>

      </Card>

    </div>
  )
}