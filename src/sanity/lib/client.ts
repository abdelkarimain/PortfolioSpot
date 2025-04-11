import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, sanityApiToken } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: sanityApiToken,
});
