import { cn } from "~/lib/utils";

export const IntensityMakesChampionsBadge = ({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => (
  // <div
  //   className={cn(
  //     "bg-crimson text-[#fff] text-supreme uppercase max-w-max",
  //     className
  //   )}
  //   {...rest}
  // >
  //   intensity makes champions
  // </div>
  <div className="h-screen flex flex-col justify-center fixed z-[50]">
    <div className="w-10 bg-accent py-5 badgeShadow">
      <p className="bookmarkText font-medium text-supreme ">
        intensity makes champions
      </p>
    </div>
  </div>
);
