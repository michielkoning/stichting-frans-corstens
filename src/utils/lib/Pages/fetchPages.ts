import { notFound } from "next/navigation";
import fetchData from "utils/fetchData";
import getUrl from "utils/getUrl";
import { cache } from "react";
import { PagesSchema } from "./PagesSchema";
import { getPages } from "./getPages";

export const fetchPages = cache(
  async ({ parentId, excludeId }: { parentId: number; excludeId: number }) => {
    const url = getUrl({
      type: "pages",
      fields: ["title", "excerpt", "slug"],
      image: true,
      parentId,
      excludeId,
    });

    const parsed = await fetchData(url, PagesSchema);

    return getPages(parsed);
  }
);
