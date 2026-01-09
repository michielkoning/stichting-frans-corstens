import { notFound } from "next/navigation";
import fetchData from "utils/fetchData";
import getUrl from "utils/getUrl";
import { cache } from "react";
import { ProjectSchema } from "./ProjectSchema";
import { getProject } from "./getProject";

export const fetchProject = cache(async (slug: string) => {
  const url = getUrl({
    type: "projects",
    fields: ["title", "content", "excerpt"],
    image: true,
    slug,
  });

  const parsed = await fetchData(url, ProjectSchema);

  if (!parsed.length) {
    notFound();
  }

  return getProject(parsed);
});
