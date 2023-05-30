<script>
  import { Motion } from "svelte-motion";
  import { onMount } from 'svelte';
  import Loading from "./Loading.svelte";

  let isLoading = true;
  export let post;

  onMount(() => {
    isLoading = false;
  });
</script>

<div class="flex flex-col items-center w-full mx-auto px-4 pt-12 xs:pt-16 max-w-[972px]">
  {#if isLoading} 
    <Loading />
  {/if}
  <Motion
    transition={{ duration: 0.5, delay: 0.5 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    let:motion
  >
  <p use:motion class="pb-1 text-base font-semibold uppercase text-button_color tracking-wider">{ post.tag }</p>
  </Motion>
  <Motion
    transition={{ duration: 0.75, ease: "easeOut" }}
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    let:motion
  >
    <h1 use:motion class="mb-14 font-medium text-center text-[40px] xs:text-[44px] md:text-[56px] lg:text-[64px] text-title_color font-title leading-[1.1]">{ post.title }</h1>
  </Motion>
  <div class="post-content w-full max-w-[680px] mb-[-8px]">
    <div class="flex justify-between items-center w-full mb-10 text-base">
      <div class="flex items-center text-title_color">
        <img src={post.avatar_link} alt="author" class="w-10 h-10 mr-3 rounded-full">
        <span class="font-semibold">{ post.author }</span>
      </div>
      <span class="post-date">{ post.date }</span>
    </div>
    <Motion
      transition={{ duration: 0.75, ease: "easeOut" }}
      initial={{ opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
      animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
      let:motion
    >
      <img use:motion src={post.image} alt="postImage" class="w-full object-cover object-center rounded-[32px] xs-rounded-[40px] aspect-[17/8]">
    </Motion>
  </div>
</div>
