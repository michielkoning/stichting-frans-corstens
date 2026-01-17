import { FunctionComponent, PropsWithChildren } from "react";
import { ContentType } from "./ContentType";
import { CenterWrapper } from "./../CenterWrapper/CenterWrapper";
import { ThemeProvider } from "./../ThemeProvider/ThemeProvider";
import { HeroImage } from "./../HeroImage/HeroImage";
import styles from "./Content.module.css";

export const Content: FunctionComponent<PropsWithChildren<ContentType>> = (
  props
) => {
  return (
    <ThemeProvider>
      {props.image && <HeroImage {...props.image} />}
      <CenterWrapper>
        <div className={styles.content}>
          <h1>{props.title}</h1>
          {props.content && (
            <div dangerouslySetInnerHTML={{ __html: props.content }} />
          )}
          {props.children}
        </div>
      </CenterWrapper>
    </ThemeProvider>
  );
};
