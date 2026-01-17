import Link from "next/link";
import { FunctionComponent } from "react";
import Image from "next/image";
import styles from "./ArchiveList.module.css";
import { ArchiveListType } from "./ArchiveListType";
import { CenterWrapper } from "./../CenterWrapper/CenterWrapper";
import { ThemeProvider } from "./../ThemeProvider/ThemeProvider";

export const ArchiveList: FunctionComponent<ArchiveListType> = ({
  title,
  items,
  variant = "list",
}) => {
  const list = items.map((item) => (
    <li key={item.id} className={styles["list-item"]}>
      <div className={styles["list-item-wrapper"]}>
        <div>
          {item.image && (
            <Image
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
              src={item.image.src}
              sizes="25vw"
              loading="lazy"
              className={styles.image}
            />
          )}
        </div>
        <div>
          <h3>
            <Link href={item.slug}>{item.title}</Link>
          </h3>
          <div dangerouslySetInnerHTML={{ __html: item.description }} />
        </div>
      </div>
    </li>
  ));

  return (
    <ThemeProvider>
      <div className={styles.wrapper}>
        <CenterWrapper>
          <h2>{title}</h2>
          <ul className={[styles.list, styles[variant]].join(" ")}>{list}</ul>
        </CenterWrapper>
      </div>
    </ThemeProvider>
  );
};
