// import { console } from "inspector/promises";

const getUrl = ({
  fields,
  type,
  id,
  slug,
  image,
  excludeId,
  parentId,
}: {
  fields: string[];
  type: "posts" | "pages" | "projects";
  id?: string;
  slug?: string;
  image?: boolean;
  excludeId?: number;
  parentId?: number;
}) => {
  // const apiUrl = process.env.API_URL;
  const apiUrl = "http://77.248.18.233:8080/wp-json/wp/v2/";

  let baseUrl = `${apiUrl}${type}/`;
  if (id) {
    baseUrl = `${baseUrl}${id}`;
  }

  const url = new URL(baseUrl);

  if (image) {
    url.searchParams.set("_embed", "true");
    fields.push("_links");
    fields.push("_embedded");
    fields.push("wp:featuredmedia");
  }

  const allFields = ["id", ...fields];
  url.searchParams.set("status", "publish");
  url.searchParams.set("_fields", allFields.join(","));

  if (excludeId) {
    url.searchParams.set("exclude", excludeId.toString());
  }

  if (parentId) {
    url.searchParams.set("parent", parentId.toString());
  }

  if (slug) {
    url.searchParams.set("slug", slug);
  }

  return url.toString();
};

export default getUrl;
