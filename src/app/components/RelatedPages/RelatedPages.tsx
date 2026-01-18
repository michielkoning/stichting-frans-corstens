import type { FunctionComponent } from "react";
import { fetchPages } from "utils/lib/Pages/fetchPages";
import { ArchiveList } from "../ArchiveList/ArchiveList";

export const RelatedPages: FunctionComponent<{
  parentId: number;
  id: number;
  title: string;
}> = async ({ parentId, id }) => {
  const data = await fetchPages({
    parentId,
    excludeId: id,
  });

  if (!data.pages.length) {
    return;
  }
  return (
    <ArchiveList
      items={data.pages}
      variant="highlights"
      title={data.parent.title}
    />
  );
};
