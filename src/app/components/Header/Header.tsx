import Link from "next/link";
import { CenterWrapper } from "../CenterWrapper/CenterWrapper";
import styles from "./Header.module.css";
import { FunctionComponent } from "react";

export const Header: FunctionComponent = () => (
  <header className={styles.header}>
    <CenterWrapper>
      <nav>
        <ul className={styles.list}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/nieuws">Nieuws</Link></li>
          <li><Link href="/de-stichting">De stichting</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </CenterWrapper>
  </header>
)