import { notFound } from "next/navigation";
import fetchData from "utils/fetchData";
import getUrl from "utils/getUrl";
import { FeaturedImageSchema, pageSchema } from "./pageSchema";
import { cache } from "react";
import z from "zod";
import { ImageType } from "app/components/HeroImage/ImageType";

export const getFeaturedImage = (
  featuredImage: z.infer<typeof FeaturedImageSchema>[]
): ImageType | undefined => {
  if (!featuredImage.length) {
    return undefined;
  }
  const image = featuredImage[0];

  const result = {
    alt: image.alt_text,
    width: image.media_details.width,
    height: image.media_details.height,
    src: image.source_url,
  };
  return result;
};

export const getPage = cache(async (slug: string) => {
  const url = getUrl({
    type: "pages",
    fields: ["title", "content", "excerpt"],
    image: true,
    slug,
  });

  const parsed = await fetchData(url, pageSchema);

  if (!parsed.length) {
    notFound();
  }

  const entry = parsed[0];

  return {
    title: entry.title.rendered,
    content: entry.content.rendered,
    description: entry.excerpt.rendered,
    image: getFeaturedImage(entry._embedded["wp:featuredmedia"]),
  };
});
