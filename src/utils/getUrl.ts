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
  id?: number;
  slug?: string;
  image?: boolean;
  excludeId?: number;
  parentId?: number;
}) => {
  // const apiUrl = process.env.API_URL;
  const apiUrl = `${process.env.API_URL}/wp-json/wp/v2/`;

  const baseUrl = `${apiUrl}${type}/`;

  const url = new URL(baseUrl);

  if (image) {
    url.searchParams.set("_embed", "true");
    fields.push("_links");
    fields.push("_embedded");
    fields.push("wp:featuredmedia");
  }

  const allFields = ["id", ...fields];
  url.searchParams.set("status", "publish");
  url.searchParams.set("context", "edit");
  url.searchParams.set("_fields", allFields.join(","));

  if (excludeId) {
    url.searchParams.set("exclude", excludeId.toString());
  }

  if (id) {
    url.searchParams.set("include", id.toString());
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
