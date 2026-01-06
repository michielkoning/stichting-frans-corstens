import { fetchPage } from "./../../utils/lib/Page/fetchPage";
import type { Metadata } from "next";
import { Content } from "./../components/Content/Content";
import { FormContact } from "./../components/FormContact/FormContact";

const slug = "contact";

export async function generateMetadata(): Promise<Metadata> {
  const entry = await fetchPage(slug);

  return {
    title: entry.title,
    description: entry.description,
  };
}

export default async function ContactPage() {
  const entry = await fetchPage(slug);

  return (
    <Content title={entry.title} content={entry.content} image={entry.image}>
      <FormContact />
    </Content>
  );
}
