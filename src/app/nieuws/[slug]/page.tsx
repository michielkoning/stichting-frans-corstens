import { Content } from "./../../components/Content/Content";
import { Metadata } from "next";
import { fetchPost } from "utils/lib/Post/fetchPost";
import { fetchPosts } from "utils/lib/Posts/fetchPosts";
import { Posts } from "app/components/Posts/Posts";

export async function generateStaticParams() {
  const entries = await fetchPosts({});

  return entries.map((page) => ({
    slug: page.slug.replace("/nieuws/", ""),
  }));
}

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
    <>
      <Content
        title={entry.title}
        content={entry.content}
        image={entry.image}
        id={entry.id}
      />
      <Posts excludeId={entry.id} />
    </>
  );
}
