import { ImageType } from "../HeroImage/ImageType";

export type ContentType = {
  id: number;
  title: string;
  content?: string;
  image?: ImageType;
};
