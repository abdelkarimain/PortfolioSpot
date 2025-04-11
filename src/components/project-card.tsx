import { blurDataImage } from "@/lib/utils";
import { Github, Heart, LinkIcon } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

export function ProjectCard({ title, image, technologies }: ProjectCardProps) {
  return (
    <div>
      <div className="card-hover bg-card rounded-md overflow-hidden h-full flex flex-col">
        <div className="relative h-48">
          <Image
            fill
            priority
            alt={title}
            sizes={"50"}
            placeholder="blur"
            blurDataURL={blurDataImage}
            src={image || "/placeholder.svg"}
            className="rounded-md object-cover"
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-secondary-foreground/90 mb-2">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-secondary mt-4 py-2">
            <a
              href="#"
              className="px-2 py-1  bg-secondary text-secondary-foreground rounded cursor-pointer"
            >
              <LinkIcon className="h-6 w-6 hover:text-primary" />
            </a>
            <button className="px-2 py-1  bg-secondary text-secondary-foreground rounded cursor-pointer">
              <Github className="h-6 w-6 hover:text-primary" />
            </button>

            <button className="px-2 py-1 bg-secondary text-secondary-foreground rounded cursor-pointer">
              <Heart className="h-6 w-6 hover:text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
