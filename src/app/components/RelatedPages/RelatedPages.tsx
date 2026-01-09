import type { FunctionComponent } from "react";
import { fetchPages } from "utils/lib/Pages/fetchPages";
import { ArchiveList } from "../ArchiveList/ArchiveList";

export const RelatedPages: FunctionComponent<{
  parentId: number;
  id: number;
}> = async ({ parentId, id }) => {
  const data = await fetchPages({
    parentId,
    excludeId: id,
  });

  if (!data.length) {
    return;
  }
  return <ArchiveList items={data} variant="highlights" />;
};
