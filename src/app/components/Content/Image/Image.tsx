import { FunctionComponent } from "react";
import { type BlockType } from "./../ContentType";
import { CenterWrapper } from "./../../CenterWrapper/CenterWrapper";

const Image: FunctionComponent<BlockType> = ({ innerHTML }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: innerHTML }}
      className="wp-block-image"
    />
  );
};

const ContentImage: FunctionComponent<BlockType> = (props) => {
  return (
    <CenterWrapper>
      <Image {...props} />
    </CenterWrapper>
  );
};

const ContentGallery: FunctionComponent<BlockType> = ({
  innerHTML,
  innerBlocks,
}) => {
  return (
    <CenterWrapper>
      <div className="wp-block-gallery">
        {innerBlocks.map((image, iindex) => (
          <Image {...image} key={iindex} />
        ))}
      </div>
    </CenterWrapper>
  );
};

const ContentDefault: FunctionComponent<BlockType> = ({ innerHTML }) => {
  return (
    <CenterWrapper size="md">
      <div dangerouslySetInnerHTML={{ __html: innerHTML }} />
    </CenterWrapper>
  );
};

export const ComponentRendered: FunctionComponent<{ items: BlockType[] }> = ({
  items,
}) => {
  const components = {
    "core/image": ContentImage,
    "core/gallery": ContentGallery,
    "core/paragraph": ContentDefault,
    "core/heading": ContentDefault,
    "core/list": ContentDefault,
    "core/list-item": ContentDefault,
    "core/quote": ContentDefault,
    "core/button": ContentDefault,
    "core/pullquote": ContentDefault,
  };

  return items.map((item, index) => {
    const ComponentRenderer = components[item.blockName];
    return <ComponentRenderer {...item} key={index} />;
  });
};
