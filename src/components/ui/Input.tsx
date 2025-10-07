import * as React from "react"
import { cn } from "@/utils/lib/tailwind-merge"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full bg-transparent text-sm text-[#606064] font-medium file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-[#a5a4af] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
