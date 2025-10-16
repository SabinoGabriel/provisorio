"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

export default function Topbar() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const lastY = useRef(0)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let ticking = false
    const update = () => {
      const y = window.scrollY || 0
      const delta = y - lastY.current
      const goingDown = delta > 4
      const goingUp = delta < -4

      if (y < 8) {
        if (hidden) setHidden(false)
      } else if (goingDown && !hidden) {
        setHidden(true)
      } else if (goingUp && hidden) {
        setHidden(false)
      }
      lastY.current = y
    }
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          update()
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [hidden])

  return (
    <header
      className={`topbar ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      aria-label="Barra de navegação"
    >
      <div className="topbar-container">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative block topbar-logo">
            <Image
              src="/images/psicologos-ne-main-logo.svg"
              alt="Psicólogos no Nordeste - logo"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 1280px) 10rem, 10rem"
            />
          </span>
        </Link>

        {/* Navegação desktop */}
        <nav className="topbar-nav">
          <Link
            className={isHome ? "topbar-link topbar-link-active" : "topbar-link"}
            href="/"
            aria-current={isHome ? "page" : undefined}
          >
            Início
          </Link>
          <Link className="topbar-link" href="/#sobre">
            Sobre
          </Link>
          <Link className="topbar-link" href="/#depoimentos">
            Depoimentos
          </Link>
          <Link className="topbar-link whitespace-nowrap" href="/#contato">
            Fale Conosco
          </Link>
        </nav>

        {/* Botão Entrar */}
        <Link href="/login" className="shrink-0">
          <Button className="h-10 px-6">Entrar</Button>
        </Link>
      </div>
    </header>
  )
}
