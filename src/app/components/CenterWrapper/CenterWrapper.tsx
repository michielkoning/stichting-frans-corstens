import { FunctionComponent, PropsWithChildren } from "react";
import styles from "./CenterWrapper.module.css";

export const CenterWrapper: FunctionComponent<
  PropsWithChildren & {
    size?: "md" | "lg";
  }
> = ({ children, size = "lg" }) => {
  return (
    <div className={[styles.wrapper, styles[`wrapper-${size}`]].join(" ")}>
      {children}
    </div>
  );
};
