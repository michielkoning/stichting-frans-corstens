import { z } from "zod";
import { parse } from "zod/v4-mini";

export const parseData = <T extends z.ZodTypeAny>(data: unknown, schema: T) => {
  const parsed = schema.safeParse(data);

  if (!parsed.success) {
    console.log(z.prettifyError(parsed.error));
  }

  return parsed.data as z.infer<T>;
};
