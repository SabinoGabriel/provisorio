"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

interface NotificationCardProps {
  icon: {
    src: string;
    alt: string;
  };
  title: string;
  message: ReactNode;
  buttonText: string;
  buttonAction?: () => void;
}

export function NotificationCard({
  icon,
  title,
  message,
  buttonText,
  buttonAction,
}: NotificationCardProps) {
  const router = useRouter();

  const handleDefaultAction = () => {
    router.push("/");
  };

  return (
    <Card className="w-full max-w-[42rem] min-h-[28rem] flex flex-col items-center justify-between p-10 gap-8 text-center">
      <Image
        src={icon.src}
        alt={icon.alt}
        width={138}
        height={138}
        className="object-contain"
      />
      <div className="space-y-3">
        <h1 className="text-2xl font-bold text-bluestrong">{title}</h1>
        <p className="text-base font-medium text-gray-650 leading-relaxed">
          {message}
        </p>
      </div>
      <Button
        className="w-full max-w-[13rem] h-12"
        onClick={buttonAction || handleDefaultAction}
      >
        {buttonText}
      </Button>
    </Card>
  );
}
