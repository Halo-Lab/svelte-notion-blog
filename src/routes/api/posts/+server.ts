import { json } from "@sveltejs/kit";
import { Client } from "@notionhq/client";
import { normalizeData } from "../../../utils/normalizeData";
import type { PostType } from "../../../types/post.type";
import type { NotionItem } from "../../../types/notionItem.type";

const NOTION_API_KEY =  process.env.VITE_NOTION_API_KEY || import.meta.env.VITE_NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.VITE_NOTION_DATABASE_ID || import.meta.env.NOTION_DATABASE_ID;
const notion = new Client({ auth: NOTION_API_KEY });
const database_id = NOTION_DATABASE_ID;

let payload: PostType[] = [];

const byField = (field: keyof PostType) => {
  return (a: PostType, b: PostType) => (a[field] > b[field] ? 1 : -1);
};

async function fetchPosts() {
  const data = await notion.databases.query({ database_id: database_id });
  const results = data.results as NotionItem[];
  payload = await Promise.all(results
    .map((item) => normalizeData(item)))
}

export async function GET() {
  if (payload.length === 0) {
    await fetchPosts();
  }
  return json(payload.sort(byField("id")));
}
