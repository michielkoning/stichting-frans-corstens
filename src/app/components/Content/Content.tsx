import { FunctionComponent, PropsWithChildren } from "react";
import { ContentType } from "./ContentType";
import { CenterWrapper } from "./../CenterWrapper/CenterWrapper";
import { HeroImage } from "./../HeroImage/HeroImage";

export const Content: FunctionComponent<PropsWithChildren<ContentType>> = (
  props
) => {
  return (
    <>
      {props.image && <HeroImage {...props.image} />}
      <CenterWrapper>
        <h1>{props.title}</h1>
        {props.content && (
          <div dangerouslySetInnerHTML={{ __html: props.content }} />
        )}
        {props.children}
      </CenterWrapper>
    </>
  );
};
