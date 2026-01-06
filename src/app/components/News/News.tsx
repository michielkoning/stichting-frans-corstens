import z from "zod";
import Link from "next/link";
import { FunctionComponent } from "react";
import getUrl from "utils/getUrl";
import fetchData from "utils/fetchData";

const schema = z.array(
  z.object({
    id: z.number(),
    slug: z.string().transform((val) => `/nieuws/${val}`),
    title: z.object({
      rendered: z.string(),
    }),
    excerpt: z.object({
      rendered: z.string(),
    }),
  })
);

export const News: FunctionComponent = async () => {
  const url = getUrl({
    type: "posts",
    fields: ["title", "slug", "excerpt"],
  });

  const parsed = await fetchData(url, schema);

  const items = parsed.map((item) => (
    <li key={item.id}>
      <Link href={item.slug}>{item.title.rendered}</Link>
      <div dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
    </li>
  ));

  return <ul>{items}</ul>;
};
