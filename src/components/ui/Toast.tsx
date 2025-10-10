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
    duration: options?.duration ?? 10000,
    icon: (
      <Image
        src={`/images/icon-${type}.svg`}
        alt={`Ícone de ${type}`}
        width={48}
        height={48}
        className="!w-12 !h-12 !max-w-12 !max-h-12 object-cover"
      />
    ),
    className: `
      border-none shadow-md font-medium text-sm w-full flex items-center !gap-10 p-0
      ${
        type === "success"
          ? "!text-green-800"
          : type === "error"
          ? "!text-red-800"
          : type === "info"
          ? "!text-blue-800"
          : "!text-yellow-800"
      }
    `,
  })
}
