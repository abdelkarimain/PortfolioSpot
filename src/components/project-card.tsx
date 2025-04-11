import { Portfolio } from "@/lib/data";
import { blurDataImage } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import { Github, Heart, LinkIcon } from "lucide-react";
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
                className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-secondary mt-4 py-2">
            <a
              href={portfolio.url}
              target="_blank"
              className="px-2 py-1  bg-secondary text-secondary-foreground rounded cursor-pointer"
            >
              <LinkIcon className="h-6 w-6 hover:text-primary" />
            </a>
            <a
              href={portfolio.github}
              target="_blank"
              className="px-2 py-1  bg-secondary text-secondary-foreground rounded cursor-pointer"
            >
              <Github className="h-6 w-6 hover:text-primary" />
            </a>

            <button className="px-2 py-1 bg-secondary text-secondary-foreground rounded cursor-pointer">
              <Heart className="h-6 w-6 hover:text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
