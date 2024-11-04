export default function Hero() {
  return (
    <div className="pt-8">
      <div className="relative mx-auto flex max-w-2xl flex-col items-center">
        <h2 className="text-center text-3xl font-mono font-medium text-gray-900 dark:text-gray-50 sm:text-6xl">
          Portfolio Spot
        </h2>

        <p className="mt-6 text-center text-lg text-gray-600 dark:text-gray-200">
          Discover a curated collection of inspiring{" "}
          <span className="cursor-fancy opacity-70"> developer portfolios</span>{" "}
          , designed to spark creativity and showcase the best in web design and
          technical skills.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="https://github.com/ibelick/background-snippets"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#FAFAFA] text-[#FAFAFA]-foreground hover:bg-[#FAFAFA]/90 h-10 px-4 py-2">
              Go to GitHub{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pl-0.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
