import { fetchPage } from "./../utils/lib/Page/fetchPage";
import type { Metadata } from "next";
import { Content } from "./components/Content/Content";
import { RelatedPages } from "./components/RelatedPages/RelatedPages";
import { Projects } from "./components/Projects/Projects";
import { Posts } from "./components/Posts/Posts";

const POST_ID = 23;

export async function generateMetadata(): Promise<Metadata> {
  const entry = await fetchPage({
    id: POST_ID,
  });

  return {
    title: entry.title,
    description: entry.description,
  };
}

export default async function Page() {
  const entry = await fetchPage({
    id: POST_ID,
  });

  const parentId = entry.parentId > 0 ? entry.parentId : entry.id;

  return (
    <>
      <Content {...entry} />
      <Projects variant="highlights" />
      <RelatedPages parentId={parentId} id={entry.id} title={entry.title} />
      <Posts />
    </>
  );
}
