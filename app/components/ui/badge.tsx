import { cn } from "~/lib/utils";

export const IntensityMakesChampionsBadge = ({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "bg-crimson text-[#fff] text-xl tracking-tighter uppercase max-w-max",
      className
    )}
    {...rest}
  >
    intensity makes champions
  </div>
);
