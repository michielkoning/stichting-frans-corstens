import { FunctionComponent } from "react";
import { ContentType } from "./ContentType";
import { CenterWrapper } from "./../CenterWrapper/CenterWrapper";
import { ThemeProvider } from "./../ThemeProvider/ThemeProvider";
import { HeroImage } from "./../HeroImage/HeroImage";
import { ComponentRendered } from "./Image/Image";

import styles from "./Content.module.css";

export const Content: FunctionComponent<ContentType> = (props) => {
  return (
    <ThemeProvider>
      {props.image && <HeroImage {...props.image} />}
      <div className={styles.content}>
        <CenterWrapper size="md">
          <h1>{props.title}</h1>
        </CenterWrapper>

        {props.content && <ComponentRendered items={props.content} />}
      </div>
    </ThemeProvider>
  );
};
