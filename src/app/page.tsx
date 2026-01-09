import { fetchPage } from "./../utils/lib/Page/fetchPage";
import type { Metadata } from "next";
import { Content } from "./components/Content/Content";
import { RelatedPages } from "./components/RelatedPages/RelatedPages";
import { Projects } from "./components/Projects/Projects";
import { Posts } from "./components/Posts/Posts";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;

  const entry = await fetchPage(slug);

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

  const entry = await fetchPage(slug);

  const parentId = entry.parentId > 0 ? entry.parentId : entry.id;

  return (
    <Content {...entry}>
      <RelatedPages parentId={parentId} id={entry.id} title={entry.title} />
      <Projects variant="highlights" />
      <Posts />
    </Content>
  );
}
