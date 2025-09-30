"use client";
import { useState } from "react";
import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ContainerInput } from "@/components/ui/ContainerInput";
import { Progress } from "@/components/ui/Progress";
import { Separator } from "@/components/ui/Separator";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { DatePickerInput } from "../ui/DatePicker";

interface FormData {
  fullName: string;
  socialName: string;
  phone: string;
  birthDate: string;
  email: string;
  gender: string;
  cpf: string;
  password: string;
  confirmPassword: string;
  howFoundUs: string;
}

const initialForm: FormData = {
  fullName: "",
  socialName: "",
  phone: "",
  birthDate: "",
  email: "",
  gender: "",
  cpf: "",
  password: "",
  confirmPassword: "",
  howFoundUs: ""
};

export function RegisterForm() {
  const [progress, setProgress] = useState(50); // Estado para o progresso do cadastro do psicólogo
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // função para atualizar os campos do formulário
  function setField(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const clone = { ...prev };
        delete clone[field];
        return clone;
      });
    }
  }

  // função para validar os campos do formulário
  function validate(): boolean {
    const requiredFields: (keyof FormData)[] = [
      "fullName",
      "phone", 
      "birthDate",
      "email",
      "gender",
      "cpf",
      "password",
      "confirmPassword",
      "howFoundUs",
    ];
    const newErrors: Record<string, string> = {};

    requiredFields.forEach((field) => {
      if (!formData[field]?.trim()) {
        newErrors[field] = "Obrigatório";
      }
    });

    if (formData.password && formData.password.length < 8)
      newErrors.password = "Mínimo 8 caracteres";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Senhas não conferem";

    if (formData.email && !/^[^@]+@[^@]+\.[^@]+$/.test(formData.email))
      newErrors.email = "E-mail inválido";

    const digits = formData.cpf.replace(/\D/g, "");
    if (digits && digits.length !== 11) newErrors.cpf = "CPF inválido (11 dígitos)";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  // função para submissão do formulário
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    alert("Cadastro paciente submetido!");
  }

  // função para passar para a próxima etapa do formulário
  function handleNextStep() {
    if (progress < 100) {
      setProgress(progress + 50);
      setStep(2);
    }
  }

  // funcao para voltar para a etapa anterior do formulário
  function handlePreviousStep() {
    if (progress == 100) {
      setProgress(progress - 50);
      setStep(1);
    }
  }

  return (
    <div className="flex flex-col justify-center py-16">

      {/* Título e Descrição */}
      <div className="text-center flex flex-col mb-16 gap-2">
        <h1 className="text-4xl text-white font-semibold tracking-tight">Crie sua conta</h1>
        <p className="text-2xl text-[#EEF5FF] font-normal text-muted-foreground">Comece sua jornada de cuidado conosco</p>
      </div>

      {/* Container do Formulário */}
      <Card
        className="bg-white border border-[#E5E5E5]"
        style={{
          width: 800,
          padding: 32,
          boxSizing: "border-box",
          borderRadius: 24,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
        }}>
          
        {/* Título */}
        <h2 className="text-center text-2xl font-bold text-[#195FB5] mb-6">
          Cadastro
        </h2>

        {/* Toggle Paciente/Psicólogo - Barra única com botões internos */}
        <div className="flex mb-6 p-1 rounded-2xl">
          <Tabs defaultValue="pacient" className="w-full">
            <TabsList className="bg-[#F1F5F9] w-full p-1 h-14 rounded-2xl">
              <TabsTrigger className="w-full h-12 text-[#9098a3]" value="pacient">Paciente</TabsTrigger>
              <TabsTrigger className="w-full h-12 text-[#9098a3]" value="psychologist">Psicólogo</TabsTrigger>
            </TabsList>

            {/* Formulário para Pacientes */}
            <TabsContent value="pacient">
              <form className="mt-4" onSubmit={handleSubmit}>
                {/* Grid de campos conforme protótipo */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                  
                  {/* Nome completo */}
                  <div className="flex flex-col col-span-2">
                    <ContainerInput className={errors.fullName && "border-red-300"} required title="Nome completo">
                      <Input
                        value={formData.fullName}
                        onChange={(e) => setField("fullName", e.target.value)}
                        placeholder="Digite seu nome completo"
                        required
                      />
                    </ContainerInput>
                    {/* Mensagem de erro */}
                    {errors.fullName && (
                      <p className="text-xs text-red-500 mt-2 font-medium">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Como você gostaria de ser chamado - Nome social */}
                  <ContainerInput className="col-span-1 max-h-16" title="Como você gostaria de ser chamado?">
                      <Input
                        value={formData.socialName}
                        onChange={(e) => setField("socialName", e.target.value)}
                        placeholder="Digite seu nome social"
                        required
                      />
                  </ContainerInput>

                  {/* Gênero */}
                  <div className="flex flex-col col-span-1">
                    <ContainerInput required className={errors.gender && "border-red-300"} title="Gênero">
                      <Select onValueChange={(value) => setField("gender", value)} required>
                        <SelectTrigger value={formData.gender}>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="feminino">Feminino</SelectItem>
                          <SelectItem value="masculino">Masculino</SelectItem>
                          <SelectItem value="nao-binario">Não-binário</SelectItem>
                          <SelectItem value="prefiro-nao-dizer">Prefiro não dizer</SelectItem>
                        </SelectContent>
                      </Select>
                    </ContainerInput>
                    {/* Mensagem de erro */}
                    {errors.gender && (
                      <p className="text-xs text-red-500 mt-2 font-medium">{errors.gender}</p>
                    )}
                  </div>

                  {/* Telefone */}
                  <div className="flex flex-col col-span-2">
                    <ContainerInput required className={errors.phone && "border-red-300"} title="Telefone">
                      <div className="flex">
                        {/* Seletor de código do país */}
                        <Select>
                          <SelectTrigger className="w-12 mr-2">
                            <SelectValue placeholder="+55" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="+55">+55</SelectItem>
                            <SelectItem value="+1">+1</SelectItem>
                            <SelectItem value="+44">+44</SelectItem>
                            <SelectItem value="+61">+61</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input
                          value={formData.phone}
                          onChange={(e) => setField("phone", e.target.value)}
                          placeholder="(99) 99999-9999"
                          type="tel"
                          pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                          required
                        />
                      </div>
                    </ContainerInput>
                    {/* Mensagem de erro */}
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-2 font-medium">{errors.phone}</p>
                    )}
                  </div>

                  {/* Data de nascimento */}
                  <div className="flex flex-col col-span-1">
                    <ContainerInput required className={errors.birthDate && "border-red-300"} title="Data de nascimento">
                        {/* Seletor de Data */}
                        <DatePickerInput
                          id="birthDate"
                          value={formData.birthDate}
                          onChange={(date) => setField("birthDate", date)}
                          placeholder="DD/MM/AAAA"
                        />
                    </ContainerInput>
                    {/* Mensagem de erro */}
                    {errors.birthDate && (
                      <p className="text-xs text-red-500 mt-2 font-medium">{errors.birthDate}</p>
                    )}
                  </div>

                  {/* CPF */}
                  <div className="flex flex-col col-span-1">
                    <ContainerInput required className={errors.cpf && "border-red-300"} title="CPF">
                      <Input
                        value={formData.cpf}
                        onChange={(e) => setField("cpf", e.target.value)}
                        placeholder="999.999.999-99"
                        required
                      />
                    </ContainerInput>
                    {/* Mensagem de erro */}
                    {errors.cpf && (
                      <p className="text-xs text-red-500 mt-2 font-medium">{errors.cpf}</p>
                    )}
                  </div>

                  {/* Como você nos encontrou? */}
                  <div className="flex flex-col col-span-2">
                    <ContainerInput required className={errors.howFoundUs && "border-red-300"} title="Como você nos encontrou?">
                      <Select value={formData.howFoundUs} onValueChange={(value) => setField("howFoundUs", value)} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="google">Google</SelectItem>
                          <SelectItem value="redes-sociais">Redes sociais</SelectItem>
                          <SelectItem value="indicacao">Indicação</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </ContainerInput>
                    {/* Mensagem de erro */}
                    {errors.howFoundUs && (
                      <p className="text-xs text-red-500 mt-2 font-medium">{errors.howFoundUs}</p>
                    )}
                  </div>

                  {/* E-mail */}
                  <div className="flex flex-col col-span-2">
                    <ContainerInput required className={errors.email && "border-red-300"} title="E-mail">
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setField("email", e.target.value)}
                        placeholder="email@exemplo.com"
                        required
                      />
                    </ContainerInput>
                    {/* Mensagem de erro */}
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-2 font-medium">{errors.email}</p>
                    )}
                  </div>

                  {/* Senha */}
                  <div className="flex flex-col">
                    <ContainerInput required className={`col-span-1 ${errors.password && "border-red-300"}`} title="Senha">
                      <Input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setField("password", e.target.value)}
                        placeholder="Digite sua senha"
                        required
                      />
                    </ContainerInput>
                    {/* Mensagem de erro */}
                    {errors.password && (
                      <p className="text-xs text-red-500 mt-2 font-medium">{errors.password}</p>
                    )}
                  </div>

                  {/* Confirmação de senha */}
                  <div className="flex flex-col">
                    <ContainerInput required className={`col-span-1 ${errors.confirmPassword && "border-red-300"}`} title="Confirmação de senha">
                      <Input
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => setField("confirmPassword", e.target.value)}
                        placeholder="Confirme sua senha"
                        required
                      />
                    </ContainerInput>
                    {/* Mensagem de erro */}
                    {errors.confirmPassword && (
                      <p className="text-xs text-red-500 mt-2 font-medium">{errors.confirmPassword}</p>
                    )}
                  </div>

                  {/* Mensagem de validação de senha */}
                  <div className="col-span-2 -mt-3">
                    <p className="text-xs text-[#777]">
                      Mínimo de 8 caracteres com letras e números
                    </p>
                  </div>
                </div>
              </form>

              {/* Botão Cadastrar */}
               <div className="flex items-center justify-between mt-4 mb-8">
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full mt-8 bg-[#983DEB] hover:bg-[#7B26C8] text-white h-12 rounded-xl"
                >
                  Cadastrar
                </Button>
              </div>

              {/* Separador - Linha de divisão */}
              <Separator className="bg-[#E1E7EF]" />

              {/* Link para login */}
              <div className="text-center mt-6 text-sm">
                <span className="text-[#666]">Já tem uma conta? </span>
                <Link href="/login" className="text-[#3D7CDB] font-semibold hover:underline hover:text-[#1C4B9C]">
                  Entrar
                </Link>
              </div>
            </TabsContent>

            {/* Formulário para Psicólogos */}
            <TabsContent value="psychologist"> 
              {/* Barra de progresso */}
              <div className="flex flex-col my-6">
                <span className="text-sm font-semibold text-[#696969] mb-2">Etapa {step} de 2</span>
                <Progress className="h-1" value={progress} />
              </div>

              {/* Etapa 1 do Formulário - Dados pessoais */}
              { step === 1 && (<form className="mt-4" onSubmit={handleSubmit}>
                {/* Grid de campos conforme protótipo */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                  
                  {/* Nome completo - linha inteira */}
                  <ContainerInput required title="Nome completo">
                    <Input
                      value={formData.fullName}
                      onChange={(e) => setField("fullName", e.target.value)}
                      placeholder="Digite seu nome completo"
                      required
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-500 mt-2 font-medium">{errors.fullName}</p>
                    )}
                  </ContainerInput>

                  {/* Como você gostaria de ser chamado */}
                  <ContainerInput className="col-span-1" title="Como você gostaria de ser chamado?">
                      <Input
                        value={formData.socialName}
                        onChange={(e) => setField("socialName", e.target.value)}
                        placeholder="Digite seu nome social"
                      />
                  </ContainerInput>

                  {/* Gênero */}
                  <ContainerInput required className="col-span-1" title="Gênero">
                    <Select onValueChange={(value) => setField("gender", value)} required>
                      <SelectTrigger value={formData.gender}>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="feminino">Feminino</SelectItem>
                        <SelectItem value="masculino">Masculino</SelectItem>
                        <SelectItem value="nao-binario">Não-binário</SelectItem>
                        <SelectItem value="prefiro-nao-dizer">Prefiro não dizer</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.gender && (
                      <p className="text-xs text-red-500 mt-2 font-medium">{errors.gender}</p>
                    )}
                  </ContainerInput>

                  {/* Telefone - linha inteira */}
                  <ContainerInput required title="Telefone">
                    <div className="flex">
                      <Select>
                        <SelectTrigger className="w-12 mr-2">
                          <SelectValue placeholder="+55" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="+55">+55</SelectItem>
                          <SelectItem value="+1">+1</SelectItem>
                          <SelectItem value="+44">+44</SelectItem>
                          <SelectItem value="+61">+61</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setField("phone", e.target.value)}
                        placeholder="(99) 99999-9999"
                        type="tel"
                        pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
                        required
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-2 font-medium">{errors.phone}</p>
                    )}
                  </ContainerInput>

                  {/* Data de nascimento */}
                  <ContainerInput required className="col-span-1" title="Data de nascimento">
                    <Input
                      type="date"
                      value={formData.birthDate}
                      onChange={(e) => setField("birthDate", e.target.value)}
                      required
                    />
                    {errors.birthDate && (
                      <p className="text-xs text-red-500 mt-2 font-medium">{errors.birthDate}</p>
                    )}
                  </ContainerInput>

                  {/* CPF */}
                  <ContainerInput required className="col-span-1" title="CPF">
                    <Input
                      value={formData.cpf}
                      onChange={(e) => setField("cpf", e.target.value)}
                      placeholder="999.999.999-99"
                      required
                    />
                    {errors.cpf && (
                      <p className="text-xs text-red-500 mt-2 font-medium">{errors.cpf}</p>
                    )}
                  </ContainerInput>

                  {/* E-mail - linha inteira */}
                  <ContainerInput required title="E-mail Profissional">
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setField("email", e.target.value)}
                      placeholder="email@exemplo.com"
                      required
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-2 font-medium">{errors.email}</p>
                    )}
                  </ContainerInput>

                  {/* Senha + Confirmação de senha */}
                  <ContainerInput required className="col-span-1" title="Senha">
                    <Input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setField("password", e.target.value)}
                      placeholder="Digite sua senha"
                      required
                    />
                    {errors.password && (
                      <p className="text-xs text-red-500 mt-2 font-medium">{errors.password}</p>
                    )}
                  </ContainerInput>

                  <ContainerInput required className="col-span-1" title="Confirmação de senha">
                    <Input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => setField("confirmPassword", e.target.value)}
                      placeholder="Confirme sua senha"
                      required
                    />
                    {errors.confirmPassword && (
                      <p className="text-xs text-red-500 mt-2 font-medium">{errors.confirmPassword}</p>
                    )}
                  </ContainerInput>

                  {/* Mensagem de validação de senha - span completo */}
                  <div className="col-span-2 -mt-3">
                    <p className="text-xs text-[#777]">
                      Mínimo de 8 caracteres com letras e números
                    </p>
                  </div>
                </div>
              </form>)}
              {/* Etapa 2 do Formulário - Dados profissionais */}
              { step === 2 && (<form className="mt-4" onSubmit={handleSubmit}>
                {/* Grid de campos conforme protótipo */}
                <div className="grid grid-cols-1 gap-x-4 gap-y-5">
                  <ContainerInput required title="CRP">
                    <Input
                      placeholder="99/99999"
                      required
                    />
                  </ContainerInput>
                  <ContainerInput required title="Breve descrição profissional">
                    <Input
                      type="text"
                      placeholder="Escreva uma breve descrição sobre você e sua abordagem terapêutica"
                      required
                    />
                  </ContainerInput>
                  <ContainerInput required title="Como você nos encontrou?">
                    <Select value={formData.howFoundUs} onValueChange={(value) => setField("howFoundUs", value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="google">Google</SelectItem>
                        <SelectItem value="redes-sociais">Redes sociais</SelectItem>
                        <SelectItem value="amigos">Amigos</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </ContainerInput>

                  <div className="flex flex-col col-span-2">
                    <ContainerInput required title="Formação e Especializações">
                      <Input
                        placeholder="Descreva sua formação acadêmica e áreas de atuação"
                        required
                      />
                    </ContainerInput>
                    <p className="mt-3 text-xs text-[#777] font-medium">Inclua: graduação, pós-graduações, especializações, abordagens terapêuticas, etc.</p>
                  </div>

                  <ContainerInput required title="Qual a sua expectativa com a plataforma?">
                    <Input
                      placeholder="Descreva de forma breve"
                      required
                    />
                  </ContainerInput>

                </div>
              </form>)}

              {/* Botões de Voltar e Avançar/Cadastrar */}
              <div className="flex items-center justify-between my-8">
                <Button type="button" onClick={handlePreviousStep} variant={step === 1 ? 'disabled' : 'outline'} className="w-32">
                  <ArrowLeft />Voltar
                </Button>
                <Button type="button" onClick={step === 1 ? handleNextStep : handleSubmit} variant="default" className="w-32">
                  {step === 1 ? 'Avançar' : 'Cadastrar'} 
                  {step === 1 && <ArrowRight />}
                </Button>
              </div>

              {/* Separador - Linha de divisão */}
              <Separator className="bg-[#E1E7EF]" />

              {/* Link para Login */}
              <div className="text-center mt-6 text-sm">
                <span className="text-[#666]">Já tem uma conta? </span>
                <Link href="/login" className="text-[#3D7CDB] font-semibold hover:underline hover:text-[#1C4B9C]">
                  Entrar
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </div>
  );
}