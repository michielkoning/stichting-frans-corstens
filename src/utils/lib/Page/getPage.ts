import { PageSchema } from "./PageSchema";
import { getImage } from "../Images/getImage";
import { z } from "zod";

export const getPage = (data: z.infer<typeof PageSchema>) => {
  const entry = data[0];

  return {
    id: entry.id,
    title: entry.title.rendered,
    description: entry.excerpt.rendered,
    image: getImage(entry._embedded["wp:featuredmedia"]),
    parentId: entry.parent,
    content: entry.content.rendered,
  };
};
