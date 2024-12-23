import {SanityImageSource} from "@sanity/image-url/lib/types/types";
import {IAuthor} from "@/interfaces/author";
import {PortableTextBlock} from "@portabletext/types";

export interface IPost {
  title: string;
  nickname: string;
  image: SanityImageSource;
  body: PortableTextBlock
  author: IAuthor;
  slug: string
}