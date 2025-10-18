"use client";

import { NotificationCard } from "@/components/auth/NotificationCard";

export default function PsychologistSuccessPage() {
  return (
    <main
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background:
          "linear-gradient(0deg, #8E4BF2 0%, #009DEB 85%, #2fbaff 100%)",
      }}
    >
      <NotificationCard
        icon={{
          src: "/images/icon-psychologist-notification.svg",
          alt: "Ícone de Notificação",
        }}
        title="Inscrição realizada com sucesso!"
        message={
          <>
            Ficamos felizes com o seu interesse em fazer parte da <strong>Psicólogos no
            Nordeste</strong>! Nosso time irá analisar sua candidatura e em breve você
            receberá atualizações do processo, combinado?
            <br />
            <span className="mt-4 block">
              <strong>Fique atento ao seu Whatsapp</strong>, pois entraremos em contato para que
              possamos seguir adiante com o processo seletivo.
            </span>
            <br />
            <strong className="block">Até mais e boa sorte!</strong>
          </>
        }
        buttonText="Entendi"
      />
    </main>
  );
}
