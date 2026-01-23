import { z } from "zod";
import { parse } from "@wordpress/block-serialization-default-parser";

const BlockSchema = z.object({
  blockName: z.literal([
    "core/paragraph",
    "core/heading",
    "core/image",
    "core/list",
    "core/list-item",
    "core/gallery",
    "core/quote",
    "core/button",
    "core/pullquote",
  ]),
  get innerBlocks() {
    return z.array(BlockSchema);
  },
  innerHTML: z.string(),
});

export const ContentSchema = z.preprocess((val: string) => {
  const data = parse(val).filter((item) => item.blockName !== null);
  return data;
}, z.array(BlockSchema));
