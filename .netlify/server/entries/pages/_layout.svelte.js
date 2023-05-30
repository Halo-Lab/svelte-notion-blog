import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/index2.js";
const app = "";
const svelteIcon = "/_app/immutable/assets/svelte-icon.dc8a06dc.svg";
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".header.svelte-1pvug6e.svelte-1pvug6e{width:100%;background-color:var(--header-color);border-bottom:1px solid var(--border-color)}.header-container.svelte-1pvug6e.svelte-1pvug6e{display:flex;align-items:center;justify-content:space-between;width:100%;max-width:1202px;min-height:72px;padding:0 16px;margin:0 auto;line-height:56px}.header-container.svelte-1pvug6e a.svelte-1pvug6e{color:var(--text-color);text-decoration:none}.logo.svelte-1pvug6e.svelte-1pvug6e{display:flex;align-items:center;justify-content:space-between;font-family:Lora;font-weight:500;font-size:24px}.logo-icon.svelte-1pvug6e.svelte-1pvug6e{width:32px;height:32px;margin-right:8px;-o-object-fit:contain;object-fit:contain;-o-object-position:center;object-position:center}@media(max-width: 768px){.header-container.svelte-1pvug6e.svelte-1pvug6e{min-height:56px;line-height:56px}.logo-icon.svelte-1pvug6e.svelte-1pvug6e{width:24px;height:24px}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="header svelte-1pvug6e"><div class="header-container svelte-1pvug6e"><a href="/" aria-label="Svelte Blog" class="svelte-1pvug6e"><div class="logo svelte-1pvug6e"><img${add_attribute("src", svelteIcon, 0)} alt="svelteIcon" class="logo-icon svelte-1pvug6e">
        Svelte Blog
      </div></a></div>
</div>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".footer.svelte-1maph2p{border-top:1px solid var(--border-color)}.footer-container.svelte-1maph2p{display:flex;justify-content:space-between;align-items:center;width:100%;max-width:1202px;min-height:56px;line-height:56px;margin:0 auto}.logo-icon.svelte-1maph2p{width:32px;height:32px;-o-object-fit:contain;object-fit:contain;-o-object-position:center;object-position:center}.footer-info.svelte-1maph2p{font-size:16px}.github.svelte-1maph2p{font-size:16px}@media(max-width: 768px){.footer-container.svelte-1maph2p{min-height:32px;line-height:32px}}@media(max-width: 376px){.logo-icon.svelte-1maph2p{width:24px;height:24px}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="footer svelte-1maph2p"><div class="footer-container svelte-1maph2p"><a href="/" aria-label="Svelte Blog"><img${add_attribute("src", svelteIcon, 0)} alt="svelteIcon" class="logo-icon svelte-1maph2p"></a>
    <p class="footer-info svelte-1maph2p">2023 @Svelte Blog</p>
    <p class="github svelte-1maph2p">GitHub</p></div>
</footer>`;
});
const styles = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".app.svelte-1r6lofv{display:flex;flex-direction:column;min-height:100vh}main.svelte-1r6lofv{background-color:var(--header-color);min-height:calc(100vh - 72px - 56px - 2px)}@media(max-width: 768px){main.svelte-1r6lofv{min-height:calc(100vh - 56px - 32px - 2px)}}@media(max-width: 540px){main.svelte-1r6lofv{min-height:auto}}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="app svelte-1r6lofv">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
  <main class="svelte-1r6lofv">${slots.default ? slots.default({}) : ``}</main>
  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
