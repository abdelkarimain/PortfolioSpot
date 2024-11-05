import Image from "next/image";
import Link from "next/link";
import { PListProps } from "../types";

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
      <Link href={"/"} className="w- relative">
        <div className="w-full relative h-fit">
          <Image
            className="w-full rounded-t-lg aspect-video h-full object-cover"
            src={item.image}
            alt="Next"
            width={500}
            height={500}
          />
        </div>
      </Link>
      <div className="p-3">
        <Link
          href={"/"}
          className="font-semibold text-2xl font-mono drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
        >
          {item.owner}
        </Link>

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
