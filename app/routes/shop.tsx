import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Shop" },
    { name: "description", content: "Buy Kolly Amandine's merchandise!" },
  ];
};

export default function Index() {
  return (
    <section className="min-h-screen">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-4xl font-midnight sm:text-6xl">Merchandise</h2>

          <p className="max-w-md mt-4 text-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i}>
              <a href="#" className="block group">
                <img
                  src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                  className="h-[350px] w-full object-cover sm:h-[450px] rounded-xl"
                />

                <div className="mt-1.5">
                  <div className="mt-3 flex gap-1">
                    <form>
                      <fieldset>
                        <legend className="sr-only">Color</legend>
                      </fieldset>

                      <div className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75">
                        <div>
                          <input
                            type="checkbox"
                            id="ColorSg"
                            className="sr-only"
                          />

                          <label
                            htmlFor="ColorSg"
                            className="block h-4 w-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                          >
                            <span className="sr-only"> Space Gray </span>
                          </label>
                        </div>

                        <div>
                          <input
                            type="checkbox"
                            id="ColorS"
                            className="sr-only"
                          />

                          <label
                            htmlFor="ColorS"
                            className="block h-4 w-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                          >
                            <span className="sr-only"> Silver </span>
                          </label>
                        </div>

                        <div>
                          <input
                            type="checkbox"
                            id="ColorP"
                            className="sr-only"
                          />

                          <label
                            htmlFor="ColorP"
                            className="block h-4 w-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                          >
                            <span className="sr-only"> Pink </span>
                          </label>
                        </div>

                        <div>
                          <input
                            type="checkbox"
                            id="ColorG"
                            className="sr-only"
                          />

                          <label
                            htmlFor="ColorG"
                            className="block h-4 w-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                          >
                            <span className="sr-only"> Pink </span>
                          </label>
                        </div>

                        <div>
                          <input
                            type="checkbox"
                            id="ColorSb"
                            className="sr-only"
                          />

                          <label
                            htmlFor="ColorSb"
                            className="block h-4 w-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                          >
                            <span className="sr-only"> Pink </span>
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="flex justify-between mt-3 text-sm">
                    <h3 className="text-foreground group-hover:underline group-hover:underline-offset-4">
                      Small Headphones
                    </h3>

                    <p className="text-foreground">$299</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
