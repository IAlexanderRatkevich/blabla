import {client} from "@/config/sanity/client";
import {PortableText, SanityDocument} from "next-sanity";
import {POST_QUERY} from "@/queries/post";
import {urlFor} from "@/utils/urlFor";
import Image from "next/image";
import {AuthorLink} from "@/components/author-link";
import {isoToDateString} from "@/utils/isoToDateString";

interface Props {
  params: Promise<{
    slug: string
  }>
}

const options = {next: {revalidate: 30}};

export default async function Post({params}: Props) {
  const slug = (await params).slug;

  const post = await client.fetch<SanityDocument>(POST_QUERY, {slug}, options);
  const author = post.author;
  const postImageUrl = post.image
      ? urlFor(post.image)?.width(550).height(310).url()
      : null;

  return (
      <div className="p-4 max-w-3xl mx-auto">
        <div className="flex justify-between">
          <p className="text-center text-2xl font-bold">{post.title}</p>
          <AuthorLink
              name={author.name}
              surname={author.surname}
              nickname={author.nickname}
              avatar={author.avatar}
          />
        </div>
        <p className="text-sm text-right mt-2">Published at: {isoToDateString(post.publishedAt)}</p>
        {postImageUrl &&
            <div className="flex justify-center mt-4">
                <Image
                    src={postImageUrl}
                    alt="Post's image"
                    width={768}
                    height={360}
                />
            </div>
        }
        <div className="mt-4">
          <PortableText value={post.body}/>
        </div>
      </div>
  );
}
