import {client} from "@/config/sanity/client";
import {PortableText, SanityDocument} from "next-sanity";
import {POST_QUERY} from "@/queries/post";
import {urlFor} from "@/utils/urlFor";
import Image from "next/image";
import {AuthorLink} from "@/components/author-link";
import {isoToDateString} from "@/utils/isoToDateString";
import {AUTHOR_QUERY} from "@/queries/author";
import {PostCard} from "@/components/post-card";
import {PostsList} from "@/components/posts-list";

interface Props {
  params: Promise<{
    slug: string
  }>
}

const options = {next: {revalidate: 30}};

export default async function Author({params}: Props) {
  const slug = (await params).slug;

  const author = await client.fetch<SanityDocument>(AUTHOR_QUERY, {nickname: slug}, options);
  const avatarUrl = author.avatar
      ? urlFor(author.avatar)?.width(400).height(400).url()
      : null;

  return (
      <div className="p-4 max-w-3xl mx-auto">
        <p className="text-center text-4xl font-bold">{author.name} {author.surname}</p>

        {avatarUrl &&
            <div className="flex justify-center mt-4">
                <Image
                    src={avatarUrl}
                    alt="Author's avatar"
                    width={400}
                    height={400}
                />
            </div>
        }

        <p className="mt-4 font-bold text-2xl">Recent articles: </p>
        {author.lastPosts.length > 0
            && <PostsList posts={author.lastPosts}/>
        }
      </div>
  );
}
