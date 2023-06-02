<script lang="ts">
  import { onMount } from 'svelte';
  import { flip } from "svelte/animate";
  import { fade } from 'svelte/transition';
  import { tagFilterStore} from '../store';
  import PostCard from './PostCard.svelte';
  import Loading from './Loading.svelte';
  import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

  import type { PostType } from "../types/post.type"

  let allPosts: PostType[] = [];
  let posts: PostType[] = [];
  let isLoading = true;
  $: tagFilter = $tagFilterStore;

  const fetchPosts = async (): Promise<PostType[]> => {
    const response = await fetch('/api/posts');    
    return await response.json();
  };

  const filterPosts = (tag: string) => {
    posts = allPosts;
    setTimeout(() => {
      posts = allPosts.filter(post => tag !== 'All categories' ? post.tag === tag : post);
    }, 0)    
  }
  
  onMount(async () => {
    loadFromLocalStorage(tagFilterStore);
    allPosts = await fetchPosts();
    saveToLocalStorage(tagFilter);
    filterPosts(tagFilter);
    isLoading = false;
  });

  $: {
    filterPosts(tagFilter);
    saveToLocalStorage(tagFilter);
  }
</script>

<div class="flex flex-wrap justify-center items-start gap-8 w-full mx-auto px-4 max-w-[1202px]">
  {#if isLoading} 
    <Loading />
  {/if}
  {#each posts as post (post.id)}
    <a href={`/post/${post.title.toLowerCase().split(' ').join('-')}`} in:fade animate:flip={{duration: 600}} >
      <PostCard {post} /> 
    </a> 
  {/each}
</div>
