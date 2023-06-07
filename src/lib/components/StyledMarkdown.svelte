<script>
  import SvelteMarkdown from "svelte-markdown";
  export let source;
</script>

<div
  class="post-text flex flex-col items-center w-[680px] max-w-[calc(100%-32px)] mx-auto mt-10 text-base font-normal leading-6 color-text_color"
>
  <SvelteMarkdown {source} />
</div>
