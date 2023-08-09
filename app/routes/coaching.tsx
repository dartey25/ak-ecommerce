import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Coaching" },
    { name: "description", content: "Kolly Amandine coaching services" },
  ];
};

export default function Index() {
  return <>My coaching services here</>;
}
