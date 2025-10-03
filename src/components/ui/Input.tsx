import * as React from "react"
import { cn } from "@/utils/lib/tailwind-merge"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "email" | "password" | "number" | "search" | "tel" | "date"
  className?: string
  required?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, required, ...props }, ref) => {
    return (
        <input
          type={type}
          className={cn(
            "flex w-full bg-transparent text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#777] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          required={required}
          {...props}
        />
    )
  }
)
Input.displayName = "Input"

export { Input }