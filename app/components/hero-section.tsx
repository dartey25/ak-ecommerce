import heroImage from "~/assets/images/Removal.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

//drop-shadow-[0_0_6px_rgba(255,0,0,0.5)]

export function HeroSection() {
  return (
    <section className="relative isolate px-6 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      ></div>
      <div className="flex items-center justify-center">
        <img src={heroImage} alt="Hero" className="grayscale opacity-40 z-0" />
        <div className="z-1 w-2xl text-start relative -top-20 -left-36 lg:-left-10">
          <h1 className="text-8xl font-midnight text-accent-500 tracking-wider sm:text-[12rem] select-none flex">
            <span className="text-foreground text-5xl sm:text-[5rem] mt-3 tracking-normal">
              The
            </span>
            <span className="relative right-5 badgeShadow">Amandine</span>
          </h1>
          <div className="text-end mt-2">
            <p className="text-lg leading-8 text-muted">
              Whether you're looking for a training plan, diet plan or both, I
              got you!
            </p>
          </div>
          <div className="mt-10 flex items-center justify-end gap-x-10">
            <a
              href="/shop"
              className="rounded-md bg-foreground px-20 py-2.5 font-futura_medium text-background shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-600"
            >
              Buy merch
            </a>

            <a
              href="/coaching"
              className="rounded-md bg-accent-500 px-20 py-2.5 font-futura_medium text-foreground shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-600"
            >
              Get coaching
            </a>
          </div>
          <div className="absolute left-0 flex flex-col w-5 items-center gap-y-3">
            <p className="scrollText">scroll</p>
            <ChevronDownIcon className="w-5 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
