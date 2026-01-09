import fetchData from "utils/fetchData";
import getUrl from "utils/getUrl";
import { cache } from "react";
import { PostsSchema } from "./PostsSchema";
import { getPosts } from "./getPosts";

export const fetchPosts = cache(async (props?: { excludeId?: number }) => {
  const url = getUrl({
    type: "posts",
    fields: ["title", "excerpt", "slug"],
    image: true,
    excludeId: props?.excludeId,
  });

  const parsed = await fetchData(url, PostsSchema);

  return getPosts(parsed);
});
