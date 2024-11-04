import Image from "next/image";
import Link from "next/link";
import img from "../assets/tz3oe8lbftjvobsub95l.png";

export default function PItem() {
  const bgColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  return (
    <Link
      href={"/"}
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
            src={img}
            alt="Next"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="p-3">
        <span className="font-semibold text-2xl font-mono drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Abdelkarim Ain
        </span>

        {/* <div className="mt-2 flex items-center  gap-x-5">
          <div className="flex items-center gap-x-2">
            <p
              style={{
                backgroundColor: darkenColor(bgColor, 0.4),
                border: `2px solid ${darkenColor(bgColor, 0.1)}`,
              }}
              className="text-sm cursor-pointer border-slate-600 text-slate-950 rounded-xl px-2 py-1"
            >
              CSS
            </p>
          </div>
        </div> */}
      </div>
    </Link>
  );
}
