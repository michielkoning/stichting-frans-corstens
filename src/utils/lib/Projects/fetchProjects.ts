import fetchData from "utils/fetchData";
import getUrl from "utils/getUrl";
import { cache } from "react";
import { ProjectsSchema } from "./ProjectsSchema";
import { getProjects } from "./getProjects";

export const fetchProjects = cache(async (props?: { excludeId?: number }) => {
  const url = getUrl({
    type: "projects",
    fields: ["title", "excerpt", "slug"],
    image: true,
    excludeId: props?.excludeId,
  });

  const parsed = await fetchData(url, ProjectsSchema);

  return getProjects(parsed);
});
