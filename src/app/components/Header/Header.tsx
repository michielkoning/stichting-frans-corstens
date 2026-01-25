import Link from "next/link";
import { CenterWrapper } from "../CenterWrapper/CenterWrapper";
import styles from "./Header.module.css";
import { FunctionComponent } from "react";
import { z } from "zod";

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

export const Header: FunctionComponent = async () => {
  const response = await fetch(
    `${process.env.API_URL}/wp-json/stichting-frans-corstens/menu/header`
  );
  const data = await response.json();
  const parsed = schema.safeParse(data);
  if (!parsed.success) {
    return <p>{z.prettifyError(parsed.error)}</p>;
  }

  const mainItems = parsed.data.filter((item) => item.menu_item_parent === 0);

  const items = mainItems.map((mainItem) => {
    const subItems = parsed.data.filter(
      (item) => item.menu_item_parent === mainItem.ID
    );
    return (
      <li key={mainItem.ID} className={styles["list-item"]}>
        <Link href={mainItem.url}>{mainItem.title}</Link>
        {subItems.length > 0 && (
          <ul className={styles["sub-list"]}>
            {subItems.map((subItem) => (
              <li key={subItem.ID}>
                <Link href={subItem.url} className={styles["sub-list-link"]}>
                  {subItem.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  });

  return (
    <header className={styles.header}>
      <nav className="nav">
        <CenterWrapper>
          <ul className={styles.list}>{items}</ul>
        </CenterWrapper>
      </nav>
    </header>
  );
};
