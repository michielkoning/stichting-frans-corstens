import { FunctionComponent, PropsWithChildren } from 'react';
import styles from "./CenterWrapper.module.css";

export const CenterWrapper: FunctionComponent<PropsWithChildren> = ({children}) => (
  <div className={styles.wrapper}>{children}</div>
)