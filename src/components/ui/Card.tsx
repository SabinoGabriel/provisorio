export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={
        "rounded-lg border bg-card text-card-foreground shadow-sm " + className
      }
      {...props}
    />
  );
};
