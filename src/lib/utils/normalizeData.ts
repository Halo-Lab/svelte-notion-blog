import type { PostType } from "../types/post.type";
import type { NotionItem } from "../types/notionItem.type";

export const normalizeData = (item: NotionItem, text?: string): PostType => {
  const { id, title, author, avatar_link, tag, image, post, date } = item.properties;
  return {
    id: id.number,
    title: title.title[0].plain_text,
    author: author.rich_text[0].plain_text,
    avatar_link: avatar_link.rich_text[0].plain_text,
    tag: tag.rich_text[0].plain_text,
    image: image.rich_text[0].plain_text,
    post: post.rich_text[0].plain_text,
    date: new Date(date.date.start).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    text
  };
}
