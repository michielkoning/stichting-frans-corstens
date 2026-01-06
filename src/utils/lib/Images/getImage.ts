import { ImageType } from "app/components/HeroImage/ImageType";
import { ImageSchema } from "./imageSchema";
import { z } from "zod";

export const getImage = (
  featuredImage: z.infer<typeof ImageSchema>[]
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
