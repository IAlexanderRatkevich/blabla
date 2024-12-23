import {SanityImageSource} from "@sanity/image-url/lib/types/types";

export interface IAuthor {
  name: string,
  surname: string,
  nickname: string,
  avatar: SanityImageSource,
}