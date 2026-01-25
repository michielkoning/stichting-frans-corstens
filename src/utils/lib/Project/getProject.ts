import { getImage } from "../Images/getImage";
import { z } from "zod";
import { ProjectSchema } from "./ProjectSchema";

export const getProject = (data: z.infer<typeof ProjectSchema>) => {
  const entry = data[0];

  return {
    id: entry.id,
    title: entry.title.rendered,
    content: entry.content.rendered,
    description: entry.excerpt.rendered,
    image: getImage(entry._embedded["wp:featuredmedia"]),
  };
};
