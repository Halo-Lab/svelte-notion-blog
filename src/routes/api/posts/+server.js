import { json } from "@sveltejs/kit";
import { Client } from "@notionhq/client";
//import { NOTION_API_KEY, NOTION_DATABASE_ID } from "$env/static/private";
import { NotionToMarkdown } from "notion-to-md";
const NOTION_API_KEY = import.meta.env.VITE_NOTION_API_KEY;
const NOTION_DATABASE_ID = import.meta.env.VITE_NOTION_DATABASE_ID;

const notion = new Client({ auth: NOTION_API_KEY });
const n2md = new NotionToMarkdown({ notionClient: notion });
const database_id = NOTION_DATABASE_ID;

let payload = [];

async function fetchPostText(id) {
  const mdBlocks = await n2md.pageToMarkdown(id);
  const mdString = n2md.toMarkdownString(mdBlocks);
  return mdString;
}

async function normalizeDataItem(item) {
  const { id, title, author, avatar_link, tag, image, post, date } =
    item.properties;
  const text = await fetchPostText(post.rich_text[0].plain_text);
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
    text,
  };
}

const byField = (field) => {
  return (a, b) => (a[field] > b[field] ? 1 : -1);
};

async function fetchPosts() {
  const data = await notion.databases.query({ database_id: database_id });
  payload = await Promise.all(data.results
    .map((item) => normalizeDataItem(item)))
}

export async function GET() {
  if (payload.length === 0) {
    await fetchPosts();
  }
  return json(payload.sort(byField("id")));
}
