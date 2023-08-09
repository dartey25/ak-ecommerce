import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Shop" },
    { name: "description", content: "Buy Kolly Amandine's merchandise!" },
  ];
};

export default function Index() {
  return <>Shop</>;
}
