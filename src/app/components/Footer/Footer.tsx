import Link from "next/link";
import { CenterWrapper } from "../CenterWrapper/CenterWrapper";
import styles from "./Footer.module.css";
import { FunctionComponent } from "react";
import { z } from "zod";
import { parseData } from "utils/parseData";
import { fetchPosts } from "utils/lib/Posts/fetchPosts";
import { fetchProjects } from "utils/lib/Projects/fetchProjects";

const schema = z.array(
  z.object({
    ID: z.number(),
    title: z.string(),
    url: z
      .string()
      .transform((val) => val.replace("http://77.248.18.233:8080", "")),
    menu_item_parent: z.string().transform((val) => Number(val)),
  })
);

export const Footer: FunctionComponent = async () => {
  const response = await fetch(
    "http://77.248.18.233:8080/wp-json/stichting-frans-corstens/menu/footer"
  );
  const data = await response.json();
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    return <p>{z.prettifyError(parsed.error)}</p>;
  }

  const mainItems = parsed.data.filter((item) => item.menu_item_parent === 0);

  const posts = await fetchPosts();
  const projects = await fetchProjects();

  const items = mainItems.map((mainItem) => {
    return (
      <li className={styles["list-item"]} key={mainItem.ID}>
        <Link href={mainItem.url}>{mainItem.title}</Link>
      </li>
    );
  });

  return (
    <footer className={styles.footer}>
      <CenterWrapper>
        <nav className={styles.nav}>
          <div>
            <h2>Laatste nieuws</h2>
            <ul className={styles.list}>
              {posts.map((item) => {
                return (
                  <li className={styles["list-item"]} key={item.id}>
                    <Link href={item.slug}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2>Laatste projecten</h2>
            <ul className={styles.list}>
              {projects.map((item) => {
                return (
                  <li className={styles["list-item"]} key={item.id}>
                    <Link href={item.slug}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2>Uitgelichte pagina's</h2>
            <ul className={styles.list}>{items}</ul>
          </div>
        </nav>
      </CenterWrapper>
    </footer>
  );
};
