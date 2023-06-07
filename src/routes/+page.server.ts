import { normalizeData } from "$lib/utils/normalizeData";
import { parseToSnakeView } from "$lib/utils/paramsParser.js";

export async function load({ url, parent }) {
  const tag = url.searchParams.get("filter") || null;

  const { notionPosts } = await parent();
  const posts = notionPosts.map((p) => normalizeData(p))

  const filteredPosts = tag ? posts.filter(post => parseToSnakeView(post.tag) === tag) : posts;

  return { posts: filteredPosts }
}