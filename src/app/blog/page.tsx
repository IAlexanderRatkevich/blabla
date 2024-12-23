import {POSTS_QUERY} from "@/queries/post";
import {client} from "@/config/sanity/client";
import {SanityDocument} from "next-sanity";
import {PostCard} from "@/components/post-card";
import {PostsList} from "@/components/posts-list";

const options = {next: {revalidate: 30}};

export default async function Blog() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

  return (
      <div>
        <p className="text-center text-2xl font-bold">Blog page</p>
        <PostsList className="p-4" posts={posts} />
      </div>
  );
}
