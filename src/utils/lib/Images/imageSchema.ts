import { z } from "zod";

export const ImageSchema = z.object({
  alt_text: z.string().default(""),
  media_details: z.object({
    width: z.number(),
    height: z.number(),
  }),
  source_url: z.string(),
});
