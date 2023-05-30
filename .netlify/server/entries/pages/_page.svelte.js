import { c as create_ssr_component, f as each, e as escape, b as add_attribute } from "../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".posts.svelte-p3fn6q{display:flex;flex-wrap:wrap;justify-content:center;align-items:flex-start;gap:32px;width:100%;max-width:1202px;min-height:calc(100vh - 340px);padding:40px 16px 60px;margin:0 auto;transition:.5s}.post.svelte-p3fn6q{width:100%;max-width:368px;min-height:300px;background-color:var(--card-color);border-radius:24px;cursor:pointer}.post-image.svelte-p3fn6q{width:100%;aspect-ratio:1 / 0.595;border-radius:24px 24px 0 0;-o-object-fit:cover;object-fit:cover;-o-object-position:center center;object-position:center center}.post-content.svelte-p3fn6q{display:flex;justify-content:space-between;flex-wrap:wrap;padding:24px 32px 32px}.post-title.svelte-p3fn6q{font-weight:600;margin-bottom:12px;font-size:22px;line-height:32px;color:var(--title-color);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.post-tag.svelte-p3fn6q{display:flex;justify-content:center;align-items:center;padding:6px 14px;margin-bottom:12px;border:0;border-radius:100px;color:var(--background-color);font-weight:400;font-size:14px;line-height:20px;background-color:var(--text-color)}.post-date.svelte-p3fn6q{display:flex;flex-shrink:0;width:100%;font-size:14px}.tags.svelte-p3fn6q{display:flex;justify-content:space-between;gap:8px;width:974px;max-width:100%;padding:0 16px;margin:120px auto 40px}.tag.svelte-p3fn6q{display:flex;flex-shrink:0;padding:12px 24px;border:1px solid transparent;border-radius:100px;color:var(--title-color);font-family:inherit;font-weight:400;font-size:16px;line-height:1.4;background-color:var(--card-color);white-space:nowrap;cursor:pointer;box-shadow:none;transition:0.3s, color 0.3s}.tag.svelte-p3fn6q:hover{color:#009055}.tag-active.svelte-p3fn6q{color:#ffffff;background-color:#00DC82}.tag-active.svelte-p3fn6q:hover{background-color:#009055;color:#ffffff}@media(max-width: 768px){.posts.svelte-p3fn6q{min-height:calc(100vh - 220px)}.tags.svelte-p3fn6q{margin:60px auto 20px}}@media(max-width: 376px){.post-image.svelte-p3fn6q{aspect-ratio:1 / 0.638}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let posts = [];
  const tags = [
    { name: "All categories", value: "", id: 1 },
    {
      name: "Email Marketing",
      value: "Email Marketing",
      id: 2
    },
    {
      name: "Web Hosting",
      value: "Web Hosting",
      id: 3
    },
    {
      name: "Search Engine Optimization",
      value: "Search Engine Optimization",
      id: 4
    },
    {
      name: "E-Commerce Platforms",
      value: "E-Commerce Platforms",
      id: 5
    }
  ];
  let tagFilter = "";
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-w81arz_START -->${$$result.title = `<title>svelte notion blog</title>`, ""}<meta name="description" content="svelte notion blog demo app"><!-- HEAD_svelte-w81arz_END -->`, ""}

<div class="tags svelte-p3fn6q">${each(tags, (tag) => {
    return `<button class="${["tag svelte-p3fn6q", tagFilter === tag.value ? "tag-active" : ""].join(" ").trim()}">${escape(tag.name)}
    </button>`;
  })}</div>


<div class="posts svelte-p3fn6q">${each(posts, (post) => {
    return `<a${add_attribute("href", `/post/${post.post}`, 0)}><div class="post svelte-p3fn6q"><img${add_attribute("src", post.image, 0)} alt="postImage" class="post-image svelte-p3fn6q">
				<div class="post-content svelte-p3fn6q"><h3 class="post-title svelte-p3fn6q">${escape(post.title)}</h3>
					<div class="post-tag svelte-p3fn6q">${escape(post.tag)}</div>        
					<div class="post-date svelte-p3fn6q">${escape(post.date)}</div>
				</div></div>
		</a>`;
  })}
</div>`;
});
export {
  Page as default
};
