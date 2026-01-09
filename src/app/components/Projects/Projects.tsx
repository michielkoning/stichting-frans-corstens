import { FunctionComponent } from "react";
import { ArchiveList } from "../ArchiveList/ArchiveList";
import { fetchProjects } from "utils/lib/Projects/fetchProjects";

export const Projects: FunctionComponent<{
  excludeId?: number;
  variant?: "highlights" | "list";
}> = async ({ excludeId, variant }) => {
  const data = await fetchProjects({
    excludeId,
  });

  if (!data.length) {
    return <p>Geen projecten gevonden</p>;
  }
  const title = excludeId ? "Overige projecten" : "Onze projecten";

  return <ArchiveList items={data} variant={variant} title={title} />;
};
