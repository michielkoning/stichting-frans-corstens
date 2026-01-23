import { FunctionComponent } from "react";
import { type BlockType } from "./../Content/ContentType";
import { CenterWrapper } from "./../CenterWrapper/CenterWrapper";

const Image: FunctionComponent<BlockType> = ({ innerHTML }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: innerHTML }}
      className="wp-block-image"
    />
  );
};

const ImageBlock: FunctionComponent<BlockType> = (props) => {
  return (
    <CenterWrapper>
      <Image {...props} />
    </CenterWrapper>
  );
};

const GalleryBlock: FunctionComponent<BlockType> = ({
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

const DefaultBlock: FunctionComponent<BlockType> = ({ innerHTML }) => {
  return (
    <CenterWrapper size="md">
      <div dangerouslySetInnerHTML={{ __html: innerHTML }} />
    </CenterWrapper>
  );
};

export const ContentBlocks: FunctionComponent<{ items: BlockType[] }> = ({
  items,
}) => {
  const components = {
    "core/image": ImageBlock,
    "core/gallery": GalleryBlock,
    "core/paragraph": DefaultBlock,
    "core/heading": DefaultBlock,
    "core/list": DefaultBlock,
    "core/list-item": DefaultBlock,
    "core/quote": DefaultBlock,
    "core/button": DefaultBlock,
    "core/pullquote": DefaultBlock,
  };

  return items.map((item, index) => {
    const ComponentRenderer = components[item.blockName];
    return <ComponentRenderer {...item} key={index} />;
  });
};
