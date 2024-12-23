export const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc){_id, title, "slug": slug.current, publishedAt, body, image, author[0]->{name, surname, "nickname": nickname.current, avatar
}}`

export const POST_QUERY = `*[
  _type == "post"
  && slug.current == $slug
][0]{title, body, image, publishedAt, author[0]->{name, surname, "nickname": nickname.current, avatar}}`