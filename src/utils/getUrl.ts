// import { console } from "inspector/promises";

const getUrl = ({
  fields,
  type,
  id,
  slug,
  image,
}: {
  fields: string[];
  type: "posts" | "pages";
  id?: string;
  slug?: string;
  image?: boolean;
}) => {
  // const apiUrl = process.env.API_URL;
  const apiUrl = 'http://77.248.18.233:8080/wp-json/wp/v2/'
  
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

  if (slug) {
    url.searchParams.set("slug", slug);
  }

  console.log(url.toString());

  return url.toString();
};

export default getUrl;
