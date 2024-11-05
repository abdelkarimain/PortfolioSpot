import { repoUrl } from "../constants";
import { ArrowRightIcon } from "../constants/icons";

export default function Hero() {
  return (
    <div className="pt-8">
      <div className="relative mx-auto flex max-w-2xl flex-col items-center">
        <h2 className="text-center text-3xl font-mono font-medium text-gray-900 dark:text-gray-50 sm:text-6xl">
          Portfolio Spot
        </h2>

        <p className="mt-6 text-center text-lg text-gray-600 dark:text-gray-200">
          Discover a curated collection of inspiring
          <span className="cursor-fancy opacity-70"> open source </span>
          developer portfolios, designed to spark creativity and showcase the
          best in web design and technical skills.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#FAFAFA] text-[#FAFAFA]-foreground hover:bg-[#FAFAFA]/90 h-10 px-4 py-2">
              Go to GitHub <ArrowRightIcon className="pl-0.5" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
