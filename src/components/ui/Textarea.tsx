import * as React from "react"
import { cn } from "@/utils/lib/tailwind-merge"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      data-slot="input-group-control"
      className={cn(
        "flex w-full min-h-8 resize-none rounded-md border border-input bg-transparent text-sm text-gray-850 font-medium placeholder:text-gray-550 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})

Textarea.displayName = "Textarea"

export { Textarea }

