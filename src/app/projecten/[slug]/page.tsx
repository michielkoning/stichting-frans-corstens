import { Content } from "./../../components/Content/Content";
import { Metadata } from "next";
import { Projects } from "app/components/Projects/Projects";
import { fetchProject } from "utils/lib/Project/fetchProject";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;

  const entry = await fetchProject(slug);

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

  const entry = await fetchProject(slug);

  return (
    <Content
      title={entry.title}
      content={entry.content}
      image={entry.image}
      id={entry.id}
    >
      <Projects excludeId={entry.id} />
    </Content>
  );
}
