import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function Topbar() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-16 bg-transparent flex items-center justify-between text-primary-foreground shadow-sm px-6">
      <Image
        className="w-auto h-auto"
        src="/images/psicologos-ne.png"
        alt="Psicólogos no Nordeste - logo"
        width={175}
        height={175}
        priority
        loading="eager"
        quality={100}
      />
      <div className="flex items-center justify-between gap-8">
        <Link className="w-full flex items-center justify-center" href="">
          Início
        </Link>
        <Link className="w-full flex items-center justify-center" href="">
          Sobre
        </Link>
        <Link className="w-full flex items-center justify-center" href="">
          Depoimentos
        </Link>
        <Link
          className="w-full flex items-center justify-center whitespace-nowrap"
          href=""
        >
          Fale Conosco
        </Link>
      </div>
      <Link href="/login">
        <Button className="w-28">Entrar</Button>
      </Link>
    </div>
  );
}
