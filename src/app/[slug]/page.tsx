import { getPage } from "./utils/getPage";
import type { Metadata } from "next";
import { Content } from "./../components/Content/Content";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;

  const entry = await getPage(slug);

  return {
    title: entry.title,
    description: entry.description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const entry = await getPage(slug);

  return (
    <Content title={entry.title} content={entry.content} image={entry.image} />
  );
}
