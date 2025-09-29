"use client";
import { useState } from "react";
import Link from "next/link";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select"
import { ContainerInput } from "../ui/ContainerInput";

type UserType = "patient" | "psychologist";

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
  howFoundUs: "",
};

export function RegisterForm() {
  const [userType, setUserType] = useState<UserType>("patient");
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    alert("Cadastro paciente submetido!");
  }

  return (
    <div className="flex justify-center py-16">
      <Card
        className="bg-white border border-[#E5E5E5]"
        style={{
          width: 800,
          padding: 32,
          boxSizing: "border-box",
          borderRadius: 24,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)"
        }}
      >
        {/* Título */}
        <h2 className="text-center text-2xl font-bold text-[#22447A] mb-6">
          Cadastro
        </h2>

        {/* Toggle Paciente/Psicólogo - Barra única com botões internos */}
        <div 
          className="flex mb-6 p-1 bg-[#F3F3F3] rounded-2xl"
          style={{ height: 44 }}
        >
          <button
            type="button"
            onClick={() => setUserType("patient")}
            className={`flex-1 rounded-xl text-base font-semibold transition-all duration-200 ${
              userType === "patient"
                ? "bg-white text-[#22447A] shadow-sm"
                : "bg-transparent text-[#6B6B6B] hover:text-[#333]"
            }`}
          >
            Paciente
          </button>
          <button
            type="button"
            onClick={() => setUserType("psychologist")}
            className={`flex-1 rounded-xl text-base font-semibold transition-all duration-200 ${
              userType === "psychologist"
                ? "bg-white text-[#22447A] shadow-sm"
                : "bg-transparent text-[#6B6B6B] hover:text-[#333]"
            }`}
          >
            Psicólogo
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Grid de campos conforme protótipo */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-5">
            
            {/* Nome completo - linha inteira */}
            <ContainerInput title="Nome completo">
              <Input
                value={formData.fullName}
                onChange={(e) => setField("fullName", e.target.value)}
                placeholder="Digite seu nome completo"
                required
              />
              {errors.fullName && (
                <p className="text-xs text-red-500">{errors.fullName}</p>
              )}
            </ContainerInput>

            {/* Como você gostaria de ser chamado + Gênero */}
            <ContainerInput className="col-span-1" title="Como você gostaria de ser chamado?">
                <Input
                  value={formData.socialName}
                  onChange={(e) => setField("socialName", e.target.value)}
                  placeholder="Digite seu nome social"
                />
            </ContainerInput>

            <ContainerInput className="col-span-1" title="Gênero">
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
                <p className="text-xs text-red-500">{errors.gender}</p>
              )}
            </ContainerInput>

            {/* Telefone - linha inteira */}
            <ContainerInput title="Telefone">
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
                <p className="text-xs text-red-500">{errors.phone}</p>
              )}
            </ContainerInput>

            {/* Data de nascimento + CPF */}
            <ContainerInput className="col-span-1" title="Data de nascimento">
              <Input
                type="date"
                value={formData.birthDate}
                onChange={(e) => setField("birthDate", e.target.value)}
                required
              />
              {errors.birthDate && (
                <p className="text-xs text-red-500">{errors.birthDate}</p>
              )}
            </ContainerInput>

            <ContainerInput className="col-span-1" title="CPF">
              <Input
                value={formData.cpf}
                onChange={(e) => setField("cpf", e.target.value)}
                placeholder="999.999.999-99"
                required
              />
              {errors.cpf && (
                <p className="text-xs text-red-500">{errors.cpf}</p>
              )}
            </ContainerInput>

            {/* Como você nos encontrou? + Select customizado */}
            <ContainerInput title="Como você nos encontrou?">
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
              {errors.howFoundUs && (
                <p className="text-xs text-red-500">{errors.howFoundUs}</p>
              )}
            </ContainerInput>

            {/* E-mail - linha inteira */}
            <ContainerInput title="E-mail">
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setField("email", e.target.value)}
                placeholder="email@exemplo.com"
                required
              />
              {errors.email && (
                <p className="text-xs text-red-500">{errors.email}</p>
              )}
            </ContainerInput>

            {/* Senha + Confirmação de senha */}
            <ContainerInput className="col-span-1" title="Senha">
              <Input
                type="password"
                value={formData.password}
                onChange={(e) => setField("password", e.target.value)}
                placeholder="Digite sua senha"
                required
              />
              {errors.password && (
                <p className="text-xs text-red-500">{errors.password}</p>
              )}
            </ContainerInput>

            <ContainerInput className="col-span-1" title="Confirmação de senha">
              <Input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setField("confirmPassword", e.target.value)}
                placeholder="Confirme sua senha"
                required
              />
              {errors.confirmPassword && (
                <p className="text-xs text-red-500">{errors.confirmPassword}</p>
              )}
            </ContainerInput>

            {/* Mensagem de validação de senha - span completo */}
            <div className="col-span-2 -mt-3">
              <p className="text-xs text-[#777]">
                Mínimo de 8 caracteres com letras e números
              </p>
            </div>
          </div>

          {/* Botão Cadastrar - flat design */}
          <Button
            type="submit"
            className="w-full mt-8 bg-[#983DEB] hover:bg-[#7B26C8] text-white font-bold text-base rounded-xl"
            style={{ height: 52 }}
          >
            Cadastrar
          </Button>

          {/* Link para login */}
          <div className="text-center mt-6 text-sm">
            <span className="text-[#666]">Já tem uma conta? </span>
            <Link href="/login" className="text-[#3D7CDB] font-semibold hover:underline hover:text-[#1C4B9C]">
              Entrar
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}