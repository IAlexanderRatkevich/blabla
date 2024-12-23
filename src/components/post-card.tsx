import React from "react";
import {PortableText} from "next-sanity";
import {PortableTextBlock} from "@portabletext/types";
import {SanityImageSource} from "@sanity/image-url/lib/types/types";
import {urlFor} from "@/utils/urlFor";
import Image from "next/image";
import Link from "next/link";
import {URL} from "@/constants/url";
import {IAuthor} from "@/interfaces/author";
import {AuthorLink} from "@/components/author-link";

interface Props {
  slug: string,
  title: string,
  description: PortableTextBlock,
  image: SanityImageSource,
  author: null | IAuthor
}

export const PostCard = ({author, slug, image, description, title}: Props) => {
  const postImageUrl = image
      ? urlFor(image)?.width(550).height(310).url()
      : null;

  return (
      <div className="rounded shadow-2xl p-4 flex flex-col">
        <Link href={`${URL.BLOG}/${slug}`}>
          {postImageUrl &&
              <Image
                  className="w-full object-contain"
                  src={postImageUrl}
                  alt={`image of ${title} post`}
                  width={550}
                  height={310}
              />}
          <p className="font-bold mt-2">{title}</p>
          <div className="line-clamp-5 mt-2 text-sm leading-[1.08]">
            <PortableText value={description}/>
          </div>
        </Link>
        {author &&
            <div className="h-full flex items-end">
                <AuthorLink
                    className="w-full"
                    avatar={author.avatar}
                    name={author.name}
                    nickname={author.nickname}
                    surname={author.surname}
                />
            </div>
        }
      </div>
  )
}