"use client"

import { toast } from "sonner"
import Image from "next/image"

type ToastType = "success" | "error" | "info" | "warning"

interface ToastOptions {
  description?: string | React.ReactNode
  duration?: number
}

export const showToast = (
  type: ToastType,
  message: string,
  options?: ToastOptions
) => {

  toast(message, {
    description: options?.description,
    duration: options?.duration ?? 1200,
    icon: (
      <Image
        src={`/images/icon-${type}.svg`}
        alt={`Ícone de ${type}`}
        width={20}
        height={20}
        className="!w-12 !h-12 !max-w-12 !max-h-12 !object-contain !py-2 !m-0 !self-start"
      />
    ),
    className: `
      border-none shadow-md w-full flex !items-start !min-h-12 !gap-6 !py-0 !h-fit !px-1
      ${
        type === "success"
          ? "!text-green-600"
          : type === "error"
          ? "!text-red-600"
          : type === "info"
          ? "!text-[]"
          : "!text-yellow-600"
      }
    `,
  })
}
