import Image from "next/image";
import React from "react";
import {IAuthor} from "@/interfaces/author";
import {urlFor} from "@/utils/urlFor";
import Link from "next/link";
import {URL} from "@/constants/url";

interface Props extends IAuthor {
  className?: string;
}

export const AuthorLink: React.FC<Props> = ({avatar, nickname, className = ""}) => {
  const authorAvatarImageUrl = avatar
      ? urlFor(avatar)?.width(32).height(32).url()
      : null;

  return (
      <Link href={`${URL.AUTHOR}/${nickname}`}  className={`mt-2 flex space-x-4 items-center ${className}`}>
        {authorAvatarImageUrl &&
            <Image
                src={authorAvatarImageUrl}
                alt={`${nickname}'s avatar`}
                className="rounded-full"
                width={32}
                height={32}
            />
        }
        <p className="text-base font-bold">{nickname}</p>
      </Link>
  )
}