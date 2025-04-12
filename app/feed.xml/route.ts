import { getPortfolios } from "@/lib/data";
import RSS from "rss";

const feed = new RSS({
  title: "Portfolio Spot",
  description:
    "Discover exceptional web development portfolios - Your source for creative inspiration and professional showcase examples",
  site_url: "https://portfoliospot.vercel.app",
  feed_url: `https://portfoliospot.vercel.app/feed.xml`,
});
const portfolios = await getPortfolios();
portfolios.map((portfolio) => {
  feed.item({
    title: portfolio.owner || portfolio.id,
    guid: `https://portfoliospot.vercel.app/portfolio/${portfolio.id}`,
    url: `https://portfoliospot.vercel.app/portfolio/${portfolio.id}`,
    date: portfolio.publishedAt,
    description: portfolio.owner,
    author: "Abdelarim Ain",
    categories: portfolio.technologies,
  });
});

export function GET() {
  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
