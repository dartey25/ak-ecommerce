"use client";
export function Navigation() {
  return (
    <nav
      className="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Amandine Kolly personal website</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 47 40"
            fill="none"
            className="h-8 w-auto"
          >
            <path
              className="fill-primary-200"
              d="M23.5 6.5C17.5 6.5 13.75 9.5 12.25 15.5C14.5 12.5 17.125 11.375 20.125 12.125C21.8367 12.5529 23.0601 13.7947 24.4142 15.1692C26.6202 17.4084 29.1734 20 34.75 20C40.75 20 44.5 17 46 11C43.75 14 41.125 15.125 38.125 14.375C36.4133 13.9471 35.1899 12.7053 33.8357 11.3308C31.6297 9.09158 29.0766 6.5 23.5 6.5ZM12.25 20C6.25 20 2.5 23 1 29C3.25 26 5.875 24.875 8.875 25.625C10.5867 26.0529 11.8101 27.2947 13.1642 28.6693C15.3702 30.9084 17.9234 33.5 23.5 33.5C29.5 33.5 33.25 30.5 34.75 24.5C32.5 27.5 29.875 28.625 26.875 27.875C25.1633 27.4471 23.9399 26.2053 22.5858 24.8307C20.3798 22.5916 17.8266 20 12.25 20Z"
            />
            <defs>
              <linearGradient
                id="%%GRADIENT_ID%%"
                x1="33.999"
                x2="1"
                y1="16.181"
                y2="16.181"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="%%GRADIENT_TO%%" />
                <stop offset="1" stop-color="%%GRADIENT_FROM%%" />
              </linearGradient>
            </defs>
          </svg>
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
      <div className="hidden lg:flex lg:gap-x-12">
        <a href="#" className="text-sm font-semibold leading-6 text-muted">
          Homepage
        </a>
        <a
          href="#"
          className="text-sm font-semibold leading-6 text-muted-500 hover:text-muted"
        >
          Coaching
        </a>
        <a
          href="#"
          className="text-sm font-semibold leading-6 text-muted-500 hover:text-muted"
        >
          Shop
        </a>
        <a
          href="#"
          className="text-sm font-semibold leading-6 text-muted-500 hover:text-muted"
        >
          Blog
        </a>
        <a
          href="#"
          className="text-sm font-semibold leading-6 text-muted-500 hover:text-muted"
        >
          Contact me
        </a>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="#"
          className="text-sm font-semibold leading-6 text-muted-500 hover:text-muted"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
</svg>


        </a>
      </div>
    </nav>
  );
}
