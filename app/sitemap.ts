import { getPortfolios } from "@/lib/data";

export default async function sitemap() {
  const portfoliosData = await getPortfolios();
  const portfolios = portfoliosData.map((portfolio) => ({
    url: `https://portfoliospot.vercel.app/portfolio/${portfolio.id}`,
    lastModified: portfolio.publishedAt,
  }));

  const routes = ["", "about", "feed"].map((route) => ({
    url: `https://portfoliospot.vercel.app/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...portfolios];
}
