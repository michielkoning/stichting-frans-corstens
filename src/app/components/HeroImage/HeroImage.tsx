import Image from "next/image";
import { FunctionComponent } from "react";
import { ImageType } from "./ImageType";
import styles from "./HeroImage.module.css";

export const HeroImage: FunctionComponent<ImageType> = (props) => {
  return (
    <div className={styles.wrapper}>
      <Image
        className={styles.image}
        alt={props.alt}
        width={props.width}
        height={props.height}
        src={props.src}
        sizes="100vw"
      />
      <svg
        viewBox="0 0 1920 82"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        <path d="m1920,82.14436l-1920,0l0,-8.27188c645.8,23.20722 1293.2,-2.58496 1920,-73.87248l0,82.14436z" />
      </svg>
    </div>
  );
};
