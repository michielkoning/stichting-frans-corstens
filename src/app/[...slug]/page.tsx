import { fetchPage } from "./../../utils/lib/Page/fetchPage";
import { fetchPages } from "./../../utils/lib/Pages/fetchPages";
import type { Metadata } from "next";
import { Content } from "./../components/Content/Content";
import { RelatedPages } from "./../components/RelatedPages/RelatedPages";
import { Projects } from "./../components/Projects/Projects";
import { Posts } from "./../components/Posts/Posts";
import { FormContact } from "./../components/FormContact/FormContact";

export async function generateStaticParams() {
  const pages = await fetchPages({});

  return pages.pages.map((page) => {
    const slugs = page.slug.split("/");
    return {
      slug: slugs.filter((slug) => slug !== ""),
    };
  });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;

  const entry = await fetchPage({ slug });

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

  const entry = await fetchPage({ slug });

  const parentId = entry.parentId > 0 ? entry.parentId : entry.id;

  let pageType: "page" | "page-contact" | "page-posts" | "page-projects" =
    "page";
  if (slug.includes("nieuws")) pageType = "page-posts";
  if (slug.includes("contact")) pageType = "page-contact";
  if (slug.includes("projecten")) pageType = "page-projects";

  return (
    <>
      <Content {...entry} />
      <RelatedPages parentId={parentId} id={entry.id} title={entry.title} />
      {pageType === "page-posts" && <Posts />}
      {pageType === "page-contact" && <FormContact />}
      <Projects
        variant={pageType === "page-projects" ? "list" : "highlights"}
      />
    </>
  );
}
