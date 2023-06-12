<script lang="ts">
  import { flip } from "svelte/animate";
  import { fade } from "svelte/transition";
  import PostCard from "./PostCard.svelte";

  import type { PostType } from "../types/post.type";
  import { navigating } from "$app/stores";
  import Loading from "./Loading.svelte";
  import { parseToSnakeView } from "$lib/utils/paramsParser";

  export let posts: PostType[];
</script>

{#if $navigating && !$navigating?.to?.params?.id}
  <div class="flex justify-center content-center">
    <Loading />
  </div>
{:else if $navigating && $navigating?.to?.params?.id}
  <div
    class="flex items-center justify-center fixed inset-0 z-30 bg-background_color"
  >
    <Loading />
  </div>
{:else}
  <div
    class="flex flex-wrap justify-center items-start gap-8 w-full mx-auto px-4 max-w-[1202px]"
  >
    {#each posts as post (post.id)}
      <a
        href={`/post/${parseToSnakeView(post.title)}`}
        in:fade
        animate:flip={{ duration: 600 }}
      >
        <PostCard {post} />
      </a>
    {/each}
  </div>
{/if}
