import Image from "next/image";
import { FunctionComponent } from "react";
import { ImageType } from "./ImageType";
import styles from "./HeroImage.module.css";

export const HeroImage: FunctionComponent<ImageType> = (props) => {
  return (
    <Image
      className={styles.image}
      alt={props.alt}
      width={props.width}
      height={props.height}
      src={props.src}
      sizes="100vw"
    />
  );
};
