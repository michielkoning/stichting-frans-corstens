import { z } from "zod";

export const FeaturedImageSchema = z.object({
  alt_text: z.string().default(""),
  media_details: z.object({
    width: z.number(),
    height: z.number(),
  }),
  source_url: z.string(),
});

export const pageSchema = z.array(
  z.object({
    id: z.number(),
    title: z.object({
      rendered: z.string(),
    }),
    content: z.object({
      rendered: z.string(),
    }),
    excerpt: z.object({
      rendered: z.string(),
    }),
    _embedded: z.object({
      "wp:featuredmedia": z.array(FeaturedImageSchema).default([]),
    }),
  })
);
