import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: "l188pgx3",
  dataset: "production",
  apiVersion: "2025-04-09",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
