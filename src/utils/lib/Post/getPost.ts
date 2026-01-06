import { PageSchema } from "./PageSchema";
import { getImage } from "../Images/getImage";
import { z } from "zod";

export const getPost = (data: z.infer<typeof PageSchema>) => {
  const entry = data[0];

  return {
    id: entry.id,
    title: entry.title.rendered,
    content: entry.content.rendered,
    description: entry.excerpt.rendered,
    image: getImage(entry._embedded["wp:featuredmedia"]),
  };
};
