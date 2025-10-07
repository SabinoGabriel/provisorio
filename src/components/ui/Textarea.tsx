import * as React from "react"
import { cn } from "@/utils/lib/tailwind-merge"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  
  // Atualiza a altura do textarea ao digitar
  const adjustHeight = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = 'auto'; 
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  // Ajusta a altura do textarea ao montar o componente
  React.useEffect(() => {
    // Se o ref estiver disponível, ajusta a altura do textarea
    if (ref && typeof ref !== "function" && ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  }, [ref]);
  
  return (
    <textarea
      data-slot="input-group-control"
      className={cn(
        "flex w-full min-h-8 resize-none rounded-md border border-input overflow-hidden field-sizing-content bg-transparent text-sm text-[#606064] font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      onInput={adjustHeight}
      ref={ref}
      {...props}
    />
  )
})

Textarea.displayName = "Textarea"

export { Textarea }

