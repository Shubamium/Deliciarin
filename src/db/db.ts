import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "6b9k263p",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});

const config = {
  next: {
    revalidate: 5,
  },
};
export function fetchData<T>(grocQuery: string) {
  return client.fetch<T>(grocQuery, {}, { ...config });
}
