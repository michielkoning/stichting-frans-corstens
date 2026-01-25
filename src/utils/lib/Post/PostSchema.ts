import { z } from "zod";
import { ImageSchema } from "../Images/imageSchema";
import { ContentSchema } from "../Content/ContentSchema";

export const PostSchema = z.array(
  z.object({
    id: z.number(),
    title: z.object({
      rendered: z.string(),
    }),
    content: z.object({
      rendered: z.string(),
      raw: ContentSchema,
    }),
    excerpt: z.object({
      rendered: z.string(),
    }),
    _embedded: z.object({
      "wp:featuredmedia": z.array(ImageSchema).default([]),
    }),
  })
);
