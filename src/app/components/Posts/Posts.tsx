import { FunctionComponent } from "react";
import { fetchPosts } from "utils/lib/Posts/fetchPosts";
import { ArchiveList } from "../ArchiveList/ArchiveList";

export const Posts: FunctionComponent<{ excludeId?: number }> = async ({
  excludeId,
}) => {
  const data = await fetchPosts({
    excludeId,
  });

  if (!data.length) {
    return <p>Geen bertichten gevonden</p>;
  }

  const title = excludeId ? "Overig nieuws" : "Laatste nieuws";

  return <ArchiveList items={data} title={title} />;
};
