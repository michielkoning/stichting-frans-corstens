import { PagesSchema } from "./PagesSchema";
import { getImage } from "../Images/getImage";
import { z } from "zod";

export const getPages = (data: z.infer<typeof PagesSchema>) => {
  return data.map((entry) => {
    return {
      id: entry.id,
      title: entry.title.rendered,
      description: entry.excerpt.rendered,
      slug: entry.slug,
      image: getImage(entry._embedded["wp:featuredmedia"]),
    };
  });
};
