import { ImageType } from "../HeroImage/ImageType";

export type BlockType = {
  blockName:
    | "core/paragraph"
    | "core/heading"
    | "core/image"
    | "core/list"
    | "core/list-item"
    | "core/gallery"
    | "core/quote"
    | "core/button"
    | "core/pullquote";
  innerHTML: string;
  innerBlocks: BlockType[];
};

export type ContentType = {
  id: number;
  title: string;
  content: string;
  image?: ImageType;
};
