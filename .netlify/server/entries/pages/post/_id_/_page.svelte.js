import { c as create_ssr_component, d as subscribe, e as escape, b as add_attribute } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".post-container.svelte-18qpt01{display:flex;flex-direction:column;align-items:center;width:100%;max-width:972px;padding:64px 16px 0;margin:0 auto}.post-tag.svelte-18qpt01{color:var(--button-color);padding-bottom:4px;font-size:16px;font-weight:600;letter-spacing:1px;text-transform:uppercase}.post-title.svelte-18qpt01{margin-bottom:24px;font-family:'Lora';font-weight:500;font-size:64px;line-height:1.1;text-align:center;color:var(--title-color)}.post-date.svelte-18qpt01{margin-bottom:40px}.post-img.svelte-18qpt01{width:100%;margin-bottom:40px;aspect-ratio:17 / 8;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;border-radius:40px}@media(max-width: 768px){.post-title.svelte-18qpt01{font-size:56px}}@media(max-width: 540px){.post-title.svelte-18qpt01{font-size:44px}}@media(max-width: 376px){.post-container.svelte-18qpt01{padding:48px 16px 0}.post-img.svelte-18qpt01{border-radius:32px}.post-title.svelte-18qpt01{padding-top:48px;margin-bottom:40px;font-size:40px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.params.id;
  let post = {};
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="post-container svelte-18qpt01"><div class="post-tag svelte-18qpt01">${escape(post.tag)}</div>
  <h1 class="post-title svelte-18qpt01">${escape(post.title)}</h1>
  <span class="post-date svelte-18qpt01">${escape(post.date)}</span>
  <img${add_attribute("src", post.image, 0)} alt="postImage" class="post-img svelte-18qpt01">  
</div>`;
});
export {
  Page as default
};
