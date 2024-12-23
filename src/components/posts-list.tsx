import {PostCard} from "@/components/post-card";
import React from "react";
import {SanityDocument} from "next-sanity";

interface Props {
  posts: SanityDocument[]
  className?: string
}

export const PostsList: React.FC<Props> = ({posts, className = ""}) => {
  return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ${className}`}>
        {posts.map(post => (
            <PostCard
                key={post.slug}
                title={post.title}
                slug={post.slug}
                description={post.body}
                author={post.author}
                image={post.image}
            />
        ))}
      </div>
  )
}