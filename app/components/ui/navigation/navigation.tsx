"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ShoppingCart } from "../../shopping-cart";

export function Navigation() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-start justify-between p-6 lg:px-8 fixed w-full z-50"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Amandine Kolly personal website</span>
            <img
              className="invert-[70%] h-36"
              src="https://kolly-amandine-pro.com/cdn/shop/files/IMG_4866_150x.png?v=1690126908"
              alt="logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div className="max-lg:hidden flex gap-x-12 font-peculiar">
          <a href="/" className="leading-6">
            Homepage
          </a>
          <a
            href="/coaching"
            className="leading-6 text-foreground-muted hover:text-muted"
          >
            Coaching
          </a>
          <a
            href="/shop"
            className="leading-6 text-foreground-muted hover:text-muted"
          >
            Shop
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
          {/* <a
            href="#"
            className="leading-6 text-foreground-muted hover:text-muted"
          >
            <MagnifyingGlassIcon className="w-8 h-8" />
          </a> */}
          <button className="text-sm leading-6 text-foreground-muted hover:text-muted">
            <ShoppingCart />
          </button>
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <div className="lg:hidden hidden" role="dialog" aria-modal="true">
        {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
        <div className="fixed inset-0 z-50"></div>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-muted/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://kolly-amandine-pro.com/cdn/shop/files/IMG_4866_150x.png?v=1690126908"
                alt="logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-futura_medium leading-7 text-foreground-muted hover:bg-gray-50"
                >
                  Product
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-futura_medium leading-7 text-foreground-muted hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-futura_medium leading-7 text-foreground-muted hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-futura_medium leading-7 text-foreground-muted hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-futura_medium leading-7 text-foreground-muted hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
