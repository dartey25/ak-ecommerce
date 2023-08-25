import { IntensityMakesChampionsBadge } from "./ui/badge";
import heroImage from "~/assets/images/Removal.png";

//drop-shadow-[0_0_6px_rgba(255,0,0,0.5)]

export function HeroSection() {
  return (
    <div className="relative isolate px-6 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        {/* <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            ></div> */}
      </div>
      <div className="flex items-center justify-center">
        <img src={heroImage} alt="Hero" className="grayscale opacity-40 z-0" />
        <div className="z-1 w-2xl text-start relative -top-20 -left-36 lg:-left-10">
          {/* <h1 className="text-5xl font-rock tracking-tight text-accent-500 sm:text-7xl select-none">
            <span className="text-foreground z-[-1] text-4xl sm:text-6xl">
              The
            </span>
            <span className="relative right-5">Amandine</span>
          </h1> */}
          <h1 className="text-8xl font-midnight text-accent-500 tracking-wider sm:text-[12rem] select-none flex">
            <span className="text-foreground text-5xl sm:text-[5rem] mt-3 tracking-normal">
              The
            </span>
            <span className="drop-shadow-[3px_3px_0_rgba(237,236,227,1)] relative right-5">
              Amandine
            </span>
          </h1>
          <div className="text-end mt-2">
            <p className="text-lg leading-8 text-muted">
              Whether you're looking for a training plan, diet plan or both, I
              got you!
            </p>
          </div>
          <div className="mt-10 flex items-center justify-end gap-x-10">
            <a
              href="#"
              className="rounded-md bg-foreground px-20 py-2.5 font-futura_medium text-background shadow-smfocus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-600"
            >
              Buy merch
            </a>

            <a
              href="#"
              className="rounded-md bg-accent-500 px-20 py-2.5 font-futura_medium text-foreground shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crimson-600"
            >
              Get coaching
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        {/* <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            ></div> */}
      </div>
    </div>
  );
}
