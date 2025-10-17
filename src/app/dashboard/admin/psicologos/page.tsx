"use client"
import { Button } from "@/components/ui/Button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import { EllipsisVertical, X, Check } from "lucide-react"

type ActivePsychologists = {
  id: string
  name: string
  crp: string
  email: string
  avaliation: number
  public: string[]
  therapy_types: string[]
  consults: number
}

const psychologists: ActivePsychologists[] = [
  {
    id: "1",
    name: "Ana Beatriz Rocha",
    crp: "12/34561",
    email: "ana.rocha@gmail.com",
    avaliation: 4.7,
    public: ["Crianças", "Adolescentes", "Adultos"],
    therapy_types: ["Psicanálise", "Terapia Cognitivo Comportamental"],
    consults: 10,
  },
  {
    id: "2",
    name: "Bruno Carvalho Santos",
    crp: "05/78901",
    email: "b.santos@hotmail.com",
    avaliation: 4.7,
    public: ["Adultos", "Idosos"],
    therapy_types: ["Psicanálise"],
    consults: 10,
  },
  // ...
]

export default function Psicologos() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center p-8">
            <div className="flex flex-col w-fill self-start">
                <h2 className="text-2xl text-bluestrong font-bold">Psicólogos</h2>
                <h3 className="text-lg text-gray-650 font-medium text-muted-foreground">Gerencie os profissionais da plataforma</h3>
            </div>

            <Tabs defaultValue="active" className="flex flex-col items-center justify-center w-full mt-5">
                <TabsList className="self-start bg-gray-100 py-[0.2rem] px-[0.4rem] h-12 mb-2 rounded-xl">
                    <TabsTrigger className="text-gray-650 rounded-lg" value="active">Psicólogos Ativos</TabsTrigger>
                    <TabsTrigger className="text-gray-650 rounded-lg" value="pending">Aguardando aprovação</TabsTrigger>
                </TabsList> 

                <TabsContent className="flex justify-center items-center w-full rounded-xl" value="active">
                    <Table className="border w-full">
                        <TableHeader className="bg-[#F5F5F5] w-full">
                            <TableRow>
                                <TableHead className="w-[50px]">ID</TableHead>
                                <TableHead>NOME</TableHead>
                                <TableHead>CRP</TableHead>
                                <TableHead>E-MAIL</TableHead>
                                <TableHead>AVALIAÇÃO</TableHead>
                                <TableHead>PÚBLICO</TableHead>
                                <TableHead>ABORDAGENS</TableHead>
                                <TableHead>CONSULTAS</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {psychologists.map((psychologist) => (
                                <TableRow key={psychologist.id}>
                                    <TableCell className="font-medium">{psychologist.id}</TableCell>
                                    <TableCell className="font-medium">{psychologist.name}</TableCell>
                                    <TableCell className="font-medium">{psychologist.crp}</TableCell>
                                    <TableCell className="font-medium">{psychologist.email}</TableCell>
                                    <TableCell className="font-medium">{psychologist.avaliation}</TableCell>
                                    <TableCell className="font-medium">{psychologist.public}</TableCell>
                                    <TableCell className="font-medium">{psychologist.therapy_types}</TableCell>
                                    <TableCell className="font-medium">{psychologist.consults}</TableCell>
                                    <TableCell>
                                        <Button variant="ghost">
                                            <EllipsisVertical className="w-4 h-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
                 <TabsContent className="flex justify-center items-center w-full rounded-xl" value="pending">
                    <Table className="border w-full">
                        <TableHeader className="bg-[#F5F5F5] w-full">
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>NOME</TableHead>
                                <TableHead>E-MAIL</TableHead>
                                <TableHead>CRP</TableHead>
                                <TableHead>AVALIAÇÃO</TableHead>
                                <TableHead>PÚBLICO</TableHead>
                                <TableHead>ABORDAGENS</TableHead>
                                <TableHead>CONSULTAS</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {psychologists.map((psychologist) => (
                                <TableRow key={psychologist.id}>
                                    <TableCell className="font-medium">{psychologist.id}</TableCell>
                                    <TableCell className="font-medium">{psychologist.name}</TableCell>
                                    <TableCell className="font-medium">{psychologist.crp}</TableCell>
                                    <TableCell className="font-medium">{psychologist.email}</TableCell>
                                    <TableCell className="font-medium">{psychologist.avaliation}</TableCell>
                                    <TableCell className="font-medium">{psychologist.public}</TableCell>
                                    <TableCell className="font-medium">{psychologist.therapy_types}</TableCell>
                                    <TableCell className="font-medium">{psychologist.consults}</TableCell>
                                    <TableCell>
                                        <Button variant="ghost" className="bg-[#F3FEF4]">
                                            <Check className="w-4 h-4 text-green-700" />
                                        </Button>
                                        <Button variant="ghost" className="bg-[#FEF3F3]">
                                            <X className="w-4 h-4 text-red-500" />
                                        </Button>
                                        <Button variant="ghost">
                                            <EllipsisVertical className="w-4 h-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TabsContent>
            </Tabs>
        </div>
    )
};
