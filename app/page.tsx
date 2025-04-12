import { ProjectCard } from "@/components/project-card";
import { getCategories, getPortfolios } from "@/lib/data";
import Link from "next/link";

type SearchParams = {
  category?: string;
};

export const revalidate = 3600; // Revalidate every hour

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const portfolios = await getPortfolios();
  const categories = await getCategories();
  
  const currentCategory = searchParams.category || 'all';
  
  // Filter portfolios based on the selected category
  const filteredPortfolios = 
    currentCategory === 'all' 
      ? portfolios 
      : portfolios.filter(p => p.category === currentCategory);

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
        <Link 
          href="/"
          className={`px-3 py-1 text-sm rounded-md transition-colors ${
            currentCategory === 'all'
              ? "bg-primary/70 text-secondary-foreground"
              : "bg-secondary text-secondary-foreground/80 hover:bg-secondary/80"
          }`}
        >
          All
        </Link>
        {categories.map((category, idx) => (
          <Link
            key={idx}
            href={`/?category=${encodeURIComponent(category)}`}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              currentCategory === category
                ? "bg-primary/70 text-secondary-foreground"
                : "bg-secondary text-secondary-foreground/80 hover:bg-secondary/80"
            }`}
          >
            {category}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPortfolios.length > 0 ? (
          filteredPortfolios.map((portfolio) => (
            <ProjectCard portfolio={portfolio} key={portfolio.id} />
          ))
        ) : (
          <p className="col-span-full text-center text-muted-foreground py-8">
            No portfolios found in this category.
          </p>
        )}
      </div>
    </div>
  );
}
