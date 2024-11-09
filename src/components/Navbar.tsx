import { githubUrl, twitterUrl } from "./constants";
import { GithubIcon, TwitterIcon } from "./icons";
import logo from "../assets/logo.svg";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8">
      <a
        href="/"
        className="text-2xl flex justify-center gap-1 items-center font-medium text-gray-900 dark:text-gray-50"
      >
        <img src={logo} className="w-7 h-7" alt="pSpot" />PSpot
      </a>
      <nav className="flex gap-6">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex"
        >
          <TwitterIcon className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400" />
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex"
        >
          <GithubIcon className="h-6 w-6 text-neutral-800 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400" />
        </a>
      </nav>
    </nav>
  );
}
