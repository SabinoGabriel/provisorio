import * as React from "react"
import { cn } from "@/utils/lib/tailwind-merge"

export interface ContainerInputProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  title?: string
  required?: boolean}

const ContainerInput = React.forwardRef<HTMLDivElement, ContainerInputProps>(
  ({ className, title, required, ...props }, ref) => {
    return (
        <div 
            ref={ref}
            className={cn(
                "w-full flex flex-col col-span-2 gap-1 rounded-md border border-strokeinput bg-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring", 
                className
            )} 
            {...props}
        >
            <label className="text-sm font-semibold text-[#333]">
                {title} {required && <span className="text-[#195FB5]">*</span>}
            </label>
            {props.children}
        </div>
    )
  }
)
ContainerInput.displayName = "ContainerInput"

export { ContainerInput }