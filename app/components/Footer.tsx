import { personalUrl, repoUrl } from "../constants";
import { DemoIcon } from "../constants/icons";

export default function Footer() {
  return (
    <footer className="py-8 text-white font-mono">
      <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center space-y-4 px-8 text-center">
        <p>
          Made by{" "}
          <a
            href={personalUrl}
            target="_blank"
            className="mr-1 inline-flex items-center gap-1 space-x-1 text-blue-400 hover:text-blue-300"
          >
            Abdelkarim Ain
            <DemoIcon />
          </a>
        </p>
        <p>
          This project is open source you can find it on{" "}
          <a
            href={repoUrl}
            target="_blank"
            className="mr-1 inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300"
          >
            Github
          </a>
        </p>
      </div>
    </footer>
  );
}
