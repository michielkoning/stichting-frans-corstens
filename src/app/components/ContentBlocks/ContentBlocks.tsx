import { FunctionComponent } from "react";
import { type BlockType } from "./../Content/ContentType";
import { CenterWrapper } from "./../CenterWrapper/CenterWrapper";
import styles from "./ContentBlocks.module.css";

const SingleImage: FunctionComponent<BlockType> = ({ innerHTML }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: innerHTML }}
      className={styles.image}
    />
  );
};

const ImageBlock: FunctionComponent<BlockType> = (props) => {
  return (
    <CenterWrapper>
      <SingleImage {...props} />
    </CenterWrapper>
  );
};

const GalleryBlock: FunctionComponent<BlockType> = ({ innerBlocks }) => {
  return (
    <CenterWrapper>
      <div className={styles.gallery}>
        <ContentBlocks items={innerBlocks} />
      </div>
    </CenterWrapper>
  );
};

const ListItemBlock: FunctionComponent<BlockType> = ({ innerHTML }) => {
  return <div dangerouslySetInnerHTML={{ __html: innerHTML }} />;
};

const ListBlock: FunctionComponent<BlockType> = ({ innerBlocks }) => {
  return (
    <CenterWrapper size="md">
      <ul>
        <ContentBlocks items={innerBlocks} />
      </ul>
    </CenterWrapper>
  );
};

const QuoteBlock: FunctionComponent<BlockType> = ({
  innerHTML,
  innerBlocks,
}) => {
  return (
    <CenterWrapper size="md">
      <blockquote>
        <ContentBlocks items={innerBlocks} />
      </blockquote>
    </CenterWrapper>
  );
};

const DefaultBlock: FunctionComponent<BlockType> = ({
  innerHTML,
  innerBlocks,
}) => {
  return (
    <CenterWrapper size="md">
      <div dangerouslySetInnerHTML={{ __html: innerHTML }} />
      <ContentBlocks items={innerBlocks} />
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
    "core/list": ListBlock,
    "core/list-item": ListItemBlock,
    "core/quote": QuoteBlock,
    "core/button": DefaultBlock,
    "core/pullquote": DefaultBlock,
  };

  return items.map((item, index) => {
    const ComponentRenderer = components[item.blockName];
    return <ComponentRenderer {...item} key={index} />;
  });
};
