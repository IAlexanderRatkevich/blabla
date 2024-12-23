export const AUTHOR_QUERY = `*[
  _type == "author"
  && nickname.current == $nickname][0]{
    "lastPosts": *[ references(^._id) ][0..2]|order(publishedAt desc){title, image, publishedAt, "slug": slug.current, body},
    name,
    surname,
    "nickname": nickname.current,
    avatar
}`