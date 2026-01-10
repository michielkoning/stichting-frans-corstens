import { notFound } from "next/navigation";
import fetchData from "utils/fetchData";
import getUrl from "utils/getUrl";
import { cache } from "react";
import { PageSchema } from "./PageSchema";
import { getPage } from "./getPage";

export const fetchPage = cache(
  async ({ slug, id }: { slug?: string; id?: number }) => {
    const url = getUrl({
      type: "pages",
      fields: ["title", "content", "excerpt", "parent"],
      image: true,
      slug,
      id,
    });

    const parsed = await fetchData(url, PageSchema);

    if (!parsed.length) {
      notFound();
    }

    return getPage(parsed);
  }
);
