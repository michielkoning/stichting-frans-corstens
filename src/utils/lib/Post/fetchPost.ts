import { notFound } from "next/navigation";
import fetchData from "utils/fetchData";
import getUrl from "utils/getUrl";
import { cache } from "react";
import { PostSchema } from "./PostSchema";
import { getPost } from "./getPost";

export const fetchPost = cache(async (slug: string) => {
  const url = getUrl({
    type: "posts",
    fields: ["title", "content", "excerpt"],
    image: true,
    slug,
  });

  const parsed = await fetchData(url, PostSchema);

  if (!parsed.length) {
    notFound();
  }

  return getPost(parsed);
});
