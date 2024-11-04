import { githubUrl, twitterUrl } from "../constants";
import { GithubIcon, TwitterIcon } from "../constants/icons";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-8">
      <div className="text-3xl font-mono font-medium text-gray-900 dark:text-gray-50">
        PSpot
      </div>
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
    </header>
  );
}
