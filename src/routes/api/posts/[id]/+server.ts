import { json } from "@sveltejs/kit";
import { fetchPostText } from "../../../../lib/utils/fetchPostText";


export async function GET({ params }) {
  const postText = await fetchPostText(params.id);
  return json(postText);
}
