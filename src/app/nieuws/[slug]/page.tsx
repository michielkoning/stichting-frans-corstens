import z from "zod";
import { Content } from "./../../components/Content/Content";
import { Metadata } from "next";
import { fetchPost } from "utils/lib/Post/fetchPost";
import { Posts } from "app/components/Posts/Posts";

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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;

  const entry = await fetchPost(slug);

  return {
    title: entry.title,
    description: entry.description,
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const entry = await fetchPost(slug);

  return (
    <Content title={entry.title} content={entry.content} image={entry.image}>
      <h2>Overig nieuws</h2>
      <Posts excludeId={entry.id} />
    </Content>
  );
}
