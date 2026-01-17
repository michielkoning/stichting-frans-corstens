import { Content } from "./../../components/Content/Content";
import { Metadata } from "next";
import { Projects } from "app/components/Projects/Projects";
import { fetchProject } from "utils/lib/Project/fetchProject";
import { fetchProjects } from "utils/lib/Projects/fetchProjects";

export async function generateStaticParams() {
  const entries = await fetchProjects({});

  return entries.map((page) => ({
    slug: page.slug.replace("/projecten/", ""),
  }));
}
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
    <>
      <Content
        title={entry.title}
        content={entry.content}
        image={entry.image}
        id={entry.id}
      />
      <Projects excludeId={entry.id} />
    </>
  );
}
