import type { NotionItem } from "$lib/types/notionItem.type";

export async function load({ fetch }) {
  const response = await fetch("/api/posts");
  const data = await response.json() as NotionItem[];
  return { notionPosts: data }
}