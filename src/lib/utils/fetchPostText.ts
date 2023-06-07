import { Client } from "@notionhq/client";
const NOTION_API_KEY = process.env.VITE_NOTION_API_KEY || import.meta.env.VITE_NOTION_API_KEY;
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({ auth: NOTION_API_KEY });
const n2md = new NotionToMarkdown({ notionClient: notion });

export const fetchPostText = async (id: string): Promise<string> => {
  const mdBlocks = await n2md.pageToMarkdown(id);
  const mdString = n2md.toMarkdownString(mdBlocks);
  return mdString.parent;
};
