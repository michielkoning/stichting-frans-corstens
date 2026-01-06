import { getImage } from "../Images/getImage";
import { z } from "zod";
import { PostsSchema } from "./PostsSchema";

export const getPosts = (entries: z.infer<typeof PostsSchema>) => {
  return entries.map((entry) => {
    return {
      id: entry.id,
      title: entry.title.rendered,
      description: entry.excerpt.rendered,
      image: getImage(entry._embedded["wp:featuredmedia"]),
      slug: entry.slug,
    };
  });
};
