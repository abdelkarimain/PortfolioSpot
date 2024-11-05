import Image from "next/image";
import Link from "next/link";
import { PListProps } from "../types";
import { DemoIcon, GithubSourceIcon } from "../constants/icons";

export default function PItem({ item }: { item: PListProps }) {
  const bgColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return (
    <div
      style={{
        backgroundColor: bgColor,
        backgroundImage: `url("/assets/dark-mosaic.png")`,
      }}
      className={`text-white relative min-h-[300px] w-full overflow-hidden rounded-lg ring-1 ring-slate-900/10`}
    >
      <div className="w- relative">
        <div className="w-full relative h-fit">
          <Image
            className="w-full rounded-t-lg aspect-video h-full object-cover"
            src={item.image}
            alt="Next"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-2xl font-mono drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {item.owner}
          </span>

          <div className="flex justify-end items-center gap-4">
            <a
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#00091D] rounded-full p-1"
            >
              <GithubSourceIcon className="h-6 w-6 text-white transition-colors hover:text-gray-200" />
            </a>
            <a
              href={item.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex bg-[#00091D] rounded-full p-1"
            >
              <DemoIcon className="h-6 w-6 text-white transition-colors hover:text-gray-200" />
            </a>
          </div>
        </div>

        <div className="mt-2 flex items-center  gap-x-5">
          <div className="flex items-center flex-wrap gap-x-2">
            {item.stack.map((stack) => (
              <p
                key={stack}
                className="mb-2 text-sm font-sans font-semibold cursor-fancy bg-[#00091D] border-2 border-gray-500 text-gray-50 rounded-xl px-2 py-1 hover:bg-red-500"
              >
                {stack}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
