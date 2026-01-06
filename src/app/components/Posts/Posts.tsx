import Link from "next/link";
import { FunctionComponent } from "react";
import { fetchPosts } from "utils/lib/Posts/fetchPosts";
import Image from "next/image";
import styles from "./Posts.module.css";

export const Posts: FunctionComponent<{ excludeId?: number }> = async ({
  excludeId,
}) => {
  const data = await fetchPosts({
    excludeId,
  });

  if (!data.length) {
    return <p>Geen bertichten gevonden</p>;
  }

  const posts = data.map((item) => (
    <li key={item.id} className={styles["list-item"]}>
      {item.image && (
        <Image
          alt={item.image.alt}
          width={item.image.width}
          height={item.image.height}
          src={item.image.src}
          sizes="100vw"
          className={styles.image}
        />
      )}
      <div>
        <h2>
          <Link href={item.slug}>{item.title}</Link>
        </h2>
        <div dangerouslySetInnerHTML={{ __html: item.description }} />
      </div>
    </li>
  ));

  return <ul className={styles.list}>{posts}</ul>;
};
