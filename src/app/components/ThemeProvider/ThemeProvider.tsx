import { FunctionComponent, PropsWithChildren } from "react";
import styles from "./ThemeProvider.module.css";

export const ThemeProvider: FunctionComponent<
  PropsWithChildren & {
    className?: string;
  }
> = ({ children }) => (
  <div className={styles.wrapper}>
    {children}
    <svg
      viewBox="0 0 1920 82"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
    >
      <path d="m1920,82.14436l-1920,0l0,-8.27188c645.8,23.20722 1293.2,-2.58496 1920,-73.87248l0,82.14436z" />
    </svg>
    {/*
    <svg
      viewBox="0 0 1920 82"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
    >
      <path d="m1920,82.14436l-1920,0l0,-8.27188c645.8,23.20722 1293.2,-2.58496 1920,-73.87248l0,82.14436z" />
    </svg>*/}
  </div>
);
