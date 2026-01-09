import { ImageType } from "../HeroImage/ImageType";

export type ArchiveListType = {
  variant?: "highlights" | "list";
  items: {
    id: number;
    title: string;
    slug: string;
    description?: string;
    image?: ImageType;
  }[];
};
