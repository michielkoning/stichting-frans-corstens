import { z } from "zod";
import { ImageSchema } from "../Images/imageSchema";

export const PagesSchema = z.array(
  z.object({
    id: z.number(),
    slug: z.string().transform((val) => `/${val}`),
    title: z.object({
      rendered: z.string(),
    }),
    excerpt: z.object({
      rendered: z.string(),
    }),
    _embedded: z.object({
      "wp:featuredmedia": z.array(ImageSchema).default([]),
    }),
  })
);
