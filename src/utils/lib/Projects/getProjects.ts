import { getImage } from "../Images/getImage";
import { z } from "zod";
import { ProjectsSchema } from "./ProjectsSchema";

export const getProjects = (entries: z.infer<typeof ProjectsSchema>) => {
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
