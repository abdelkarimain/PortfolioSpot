"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/project-card";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects = [
    {
      id: "1",
      title: "Lorem, ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea explicabo magnam possimus quisquam ratione officiis perspiciatis incidunt reiciendis provident repudiandae.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Next js", "Tailwindcss"],
      category: "web",
    },
    {
      id: "2",
      title: "Lorem, ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea explicabo magnam possimus quisquam ratione officiis perspiciatis incidunt reiciendis provident repudiandae.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Next js", "Tailwindcss"],
      category: "web",
    },
    {
      id: "3",
      title: "Lorem, ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea explicabo magnam possimus quisquam ratione officiis perspiciatis incidunt reiciendis provident repudiandae.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Next js", "Tailwindcss"],
      category: "web",
    },
    {
      id: "4",
      title: "Lorem, ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea explicabo magnam possimus quisquam ratione officiis perspiciatis incidunt reiciendis provident repudiandae.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Next js", "Tailwindcss"],
      category: "web",
    },
    {
      id: "5",
      title: "Lorem, ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea explicabo magnam possimus quisquam ratione officiis perspiciatis incidunt reiciendis provident repudiandae.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "Next js", "Tailwindcss"],
      category: "web",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "ai", name: "AI & Machine Learning" },
    { id: "blockchain", name: "Blockchain" },
    { id: "data", name: "Data Visualization" },
    { id: "ar", name: "AR/VR" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="space-y-8">
      <div className="relative bg-background border border-primary/80 rounded-lg px-4 py-2">
        <div className="flex items-center pb-2 mb-2 border-b border-primary/45">
          <div className="w-[12px] h-[12px] rounded-full mr-[6px] bg-red-500"></div>
          <div className="w-[12px] h-[12px] rounded-full mr-[6px] bg-yellow-500"></div>
          <div className="w-[12px] h-[12px] rounded-full mr-[6px] bg-green-500"></div>
          <div className="text-secondary-foreground font-semibold text-sm mt-1">
            PortfolioSpot
          </div>
        </div>
        <div className="leading-6">
          <p className="mb-4 text-accent-foreground/90">
            <span className="text-yellow-500">$ </span>
            Discover a curated collection of inspiring open source developer
            portfolios, designed to spark creativity and showcase the best in
            web design and technical skills.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              activeFilter === category.id
                ? "bg-primary/70 text-secondary-foreground"
                : "bg-secondary text-secondary-foreground/80 hover:bg-secondary/80"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
}
