export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `https://portfoliospot.vercel.app/sitemap.xml`,
    host: `https://portfoliospot.vercel.app`,
  };
}
