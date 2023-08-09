import type { V2_MetaFunction } from "@remix-run/node";
export const meta: V2_MetaFunction = () => {
  return [
    { title: "Blog" },
    { name: "description", content: "Get to know about my life!" },
  ];
};

export default function Index() {
  return <>Blog here</>;
}
