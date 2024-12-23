import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "b1v530w6",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});