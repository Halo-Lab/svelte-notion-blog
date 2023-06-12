import { normalizeData } from '$lib/utils/normalizeData.js';
import { parseToSnakeView } from '$lib/utils/paramsParser.js';
import { error } from '@sveltejs/kit';

export async function load({ params, parent, fetch, url }) {
  const { notionPosts } = await parent();

  const notionPost = notionPosts.find(({ properties }) => 
    parseToSnakeView(properties.title.title[0].plain_text) === params.id
  )

  if(!notionPost) {
    throw error(404, "Post not found :(");
  }

  const postTextReponse = await fetch(`${url.origin}/api/posts/${notionPost.properties.post.rich_text[0].plain_text}`);
  const postText = await postTextReponse.json() as string;
  const postWithText = normalizeData(notionPost, postText); 

  return { post: postWithText }
}