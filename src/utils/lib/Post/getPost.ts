import { getImage } from "../Images/getImage";
import { z } from "zod";
import { PostSchema } from "./PostSchema";

export const getPost = (data: z.infer<typeof PostSchema>) => {
  const entry = data[0];

  return {
    id: entry.id,
    title: entry.title.rendered,
    content: entry.content.rendered,
    description: entry.excerpt.rendered,
    image: getImage(entry._embedded["wp:featuredmedia"]),
  };
};
