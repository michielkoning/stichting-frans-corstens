import Link from "next/link";
import { CenterWrapper } from "../CenterWrapper/CenterWrapper";
import styles from "./Footer.module.css";
import { FunctionComponent } from "react";
import { z } from "zod";
import { fetchPosts } from "utils/lib/Posts/fetchPosts";
import { fetchProjects } from "utils/lib/Projects/fetchProjects";

const schema = z.array(
  z.object({
    ID: z.number(),
    title: z.string(),
    url: z
      .string()
      .transform((val) =>
        val.replace(process.env.API_URL ?? "", "").replace("/home/", "/")
      ),
    menu_item_parent: z.string().transform((val) => Number(val)),
  })
);

export const Footer: FunctionComponent = async () => {
  const response = await fetch(
    `${process.env.API_URL}/wp-json/stichting-frans-corstens/menu/footer`
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
      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 301"
      >
        <path d="M1920 301V143.7C1293.5 19.8 648.5-25 0 15.4V301h1920z" />
      </svg>
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
            <h2>Uitgelichte pagina&apos;s</h2>
            <ul className={styles.list}>{items}</ul>
          </div>
        </nav>
      </CenterWrapper>
    </footer>
  );
};
