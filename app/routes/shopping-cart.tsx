import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Cart" },
    { name: "description", content: "Checkout your purchauses" },
  ];
};

export default function ShoppingCartRoute() {
  return (
    <>
      Cart
    </>
  );
}
