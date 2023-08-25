import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./globals.css";
import { Navigation } from "./components/ui/navigation/navigation";
import { Footer } from "./components/footer";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-futura text-base">
        <div className="z-0 w-full h-full absolute top-0 bottom-0 left-0 right-0 bg-repeat-round bg-[url('https://i.pinimg.com/736x/b0/6b/82/b06b82c89a7388382f9f2d4304ca0e72--vintage-film-album-covers.jpg')] mix-blend-multiply pointer-events-none opacity-50" />

        <div className="relative">
          <Navigation />
          <div className="h-screen flex flex-col justify-center fixed z-[50]">
            <div className="w-10 bg-accent py-5">
              <p className="bookmarkText">intensity makes champions</p>
            </div>
          </div>
          <div className="pt-14">
            <Outlet />
          </div>
          <Footer />
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
