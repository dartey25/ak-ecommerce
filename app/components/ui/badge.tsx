import { cn } from "~/lib/utils";

export const IntensityMakesChampionsBadge = ({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "bg-accent text-[#fff] font-bold text-xl tracking-tighter uppercase max-w-max",
      className
    )}
    {...rest}
  >
    intensity makes champions
  </div>
);
