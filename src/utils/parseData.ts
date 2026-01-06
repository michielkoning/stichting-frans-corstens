import { notFound } from 'next/navigation'
import type { z } from 'zod'

export const parseData = <T extends z.ZodTypeAny>(data: unknown, schema: T) => {
  const parsed = schema.safeParse(data)

  if (!parsed.success) {
    return notFound()
  }

  return parsed.data as z.infer<T>
}
