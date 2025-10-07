import { cn } from "@/utils/lib/tailwind-merge";

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center bg-white border border-[#E5E5E5] w-[52rem] p-8 box-border rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.08)]",
        className
      )}
      {...props}
    />
  );
};
