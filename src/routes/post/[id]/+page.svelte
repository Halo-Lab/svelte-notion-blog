<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  import PostPageTitle from "$lib/components/PostPageTitle.svelte";
  import ScrollButton from "$lib/components/ScrollButton.svelte";
  import StyledMarkdown from "$lib/components/StyledMarkdown.svelte";

  export let data;
</script>

<svelte:head>
  <title>{data.post.title}</title>
</svelte:head>

<div
  class="flex flex-col items-center w-full max-w-[972px] mx-auto px-0 pt-12 xs:px-4 xs:pt-16"
>
  <PostPageTitle post={data.post} />
  <StyledMarkdown source={data.post.text} />
  <ScrollButton />
</div>
