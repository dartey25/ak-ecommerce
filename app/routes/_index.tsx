import type { V2_MetaFunction } from "@remix-run/node";
import { Footer } from "~/components/footer";
import { HeroSection } from "~/components/hero-section";
import { Merchandise } from "~/components/merchandise";
import { Reviews } from "~/components/reviews";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <HeroSection />
      <Merchandise />
      <Reviews />
      <Footer />
    </>
  );
}
