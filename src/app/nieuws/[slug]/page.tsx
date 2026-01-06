import { notFound } from "next/navigation";
import { FunctionComponent } from "react";
import fetchData from "utils/fetchData";
import getUrl from "utils/getUrl";
import z from "zod";
import { News } from "app/components/News/News";
import { Content } from "./../../components/Content/Content";

const schema = z.array(
  z.object({
    id: z.number(),
    content: z.object({
      rendered: z.string(),
    }),
    title: z.object({
      rendered: z.string(),
    }),
  })
);

export default async function NewsItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const url = getUrl({
    type: "posts",
    fields: ["title", "content"],
    slug,
  });

  const parsed = await fetchData(url, schema);

  if (!parsed.length) {
    notFound();
  }

  const entry = parsed[0];

  return (
    <Content title={entry.title.rendered} content={entry.content.rendered} />
  );
}
