import { Portfolio } from "@/lib/data";
import { urlFor } from "@/lib/client";
import { blurDataImage } from "@/lib/utils";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export function ProjectCard({ portfolio }: { portfolio: Portfolio }) {
  return (
    <div>
      <div className="card-hover bg-card rounded-md overflow-hidden h-full flex flex-col">
        <div className="relative h-48">
          <Image
            fill
            priority
            alt={portfolio.owner}
            sizes={"50"}
            placeholder="blur"
            blurDataURL={blurDataImage}
            src={
              portfolio.image
                ? urlFor(portfolio.image).url()
                : "/placeholder.svg"
            }
            className="object-cover h-80 object-top rounded-t-md"
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-secondary-foreground/90 mb-2">
            {portfolio.owner}
          </h3>
          <div className="flex flex-wrap gap-2">
            {portfolio.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="font-light text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-end flex-wrap gap-2 border-t border-secondary mt-4 pt-3">
            <button className="hover:bg-primary/60 cursor-pointer flex justify-center items-center gap-2 px-2 py-1 border rounded">
              <a href={portfolio.github} target="_blank">
                <ExternalLink className="size-5" />
              </a>
            </button>
            <button className="hover:bg-primary/60 cursor-pointer flex justify-center items-center gap-2 px-2 py-1 border rounded">
              <a href={portfolio.github} target="_blank">
                <Github className="size-5" />
              </a>
            </button>

            {/* <form action="">
              <button className="hover:bg-primary/60 cursor-pointer flex justify-center items-center gap-2 px-2 py-1 border rounded">
                <Heart className="size-5" /> 5
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  );
}
