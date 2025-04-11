import { client } from "@/sanity/lib/client";

export type Portfolio = {
  id: string;
  owner: string;
  image: string;
  technologies: string[];
  category: string;
  url: string;
  github: string;
  approved: boolean;
  publishedAt: string;
};

export async function getPortfolios() {
  const query = `
      *[_type == "portfolio" && approved] | order(publishedAt desc) {
        "id": _id,
        owner,
        image,
        technologies,
        category,
        url,
        github,
        publishedAt
      }`;

  const data: Portfolio[] = await client.fetch(query);
  return data;
}

export async function getCategories() {
  const query = `*[_type == "portfolio" && category != null].category`;

  const data: string[] = await client.fetch(query);
  return data;
}
