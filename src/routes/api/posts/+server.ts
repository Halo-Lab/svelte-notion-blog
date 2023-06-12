import { json } from "@sveltejs/kit";
import { Client } from "@notionhq/client";
import type { NotionItem } from "../../../lib/types/notionItem.type";

const NOTION_API_KEY =  process.env.VITE_NOTION_API_KEY || import.meta.env.VITE_NOTION_API_KEY;
const NOTION_DATABASE_ID = process.env.VITE_NOTION_DATABASE_ID || import.meta.env.NOTION_DATABASE_ID;
const notion = new Client({ auth: NOTION_API_KEY });
const database_id = NOTION_DATABASE_ID;

export async function GET() {
  const data = await notion.databases.query({ database_id: database_id });
  const results = data.results as NotionItem[];
  return json(results);
}
