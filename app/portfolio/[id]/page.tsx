import { getPortfolio, getPortfolios } from "@/lib/data";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { blurDataImage } from "@/lib/utils";
import { urlFor } from "@/lib/sanity-client";
import Link from "next/link";

export const revalidate = 3600;

export async function generateStaticParams() {
  const portfolios = await getPortfolios();
  const ids = portfolios.map((portfolio) => ({ id: portfolio.id }));
  return ids;
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const portfolio = await getPortfolio(id);
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row justify-between flex-wrap md:gap-2 border border-primary rounded-lg p-4">
        <div className="flex gap-2">
          <Link
            href="/"
            className="hover:bg-primary/60 cursor-pointer flex justify-center items-center gap-2 px-2 py-1 border border-primary rounded"
          >
            <ArrowLeft className="size-6" />
          </Link>
          <h1 className="bg-primary/60 grow cursor-pointer  px-2 py-1 border border-primary rounded">
            {portfolio.category}
          </h1>
        </div>
        <h1 className="text-secondary-foreground font-semibold text-2xl md:inline hidden ">
          {portfolio.owner}
        </h1>
        <div className="flex justify-between items-center gap-2">
          <h1 className="text-secondary-foreground font-semibold text-2xl inline md:hidden ">
            {portfolio.owner}
          </h1>
          <div className="flex gap-2">
            <button className="hover:bg-primary/60 cursor-pointer flex justify-center items-center gap-2 px-2 py-1 border border-primary rounded">
              <a href={portfolio.url} target="_blank">
                <ExternalLink className="size-6" />
              </a>
            </button>
            <button className="hover:bg-primary/60 cursor-pointer flex justify-center items-center gap-2 px-2 py-1 border border-primary rounded">
              <a href={portfolio.github} target="_blank">
                <Github className="size-6" />
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full border rounded-lg overflow-hidden shadow-md">
        <Image
          priority
          alt={portfolio.owner}
          placeholder="blur"
          blurDataURL={blurDataImage}
          src={
            portfolio.image ? urlFor(portfolio.image).url() : "/placeholder.svg"
          }
          width={1920}
          height={1080}
          className="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
