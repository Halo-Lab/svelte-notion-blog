<script>
  import { onMount } from 'svelte';
  import { flip } from "svelte/animate";
  import { fade } from 'svelte/transition';
  import { tagFilterStore} from '../store.js';
  import PostCard from './PostCard.svelte';
  import Loading from './Loading.svelte';
  import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorage.js';

  let allPosts = [];
  let posts = [];
  let isLoading = true;
  $: tagFilter = $tagFilterStore;

  const fetchPosts = async () => {
    const response = await fetch('/api/posts');    
    return await response.json();
  };

  const filterPosts = (tag) => {
    posts = allPosts;
    setTimeout(() => {
      posts = allPosts.filter(post => tag !== 'All categories' ? post.tag === tag : post);
    }, 0)    
  }
  
  onMount(async () => {
    allPosts = loadFromLocalStorage(allPosts, tagFilterStore);
    if (!allPosts.length) {
      allPosts = await fetchPosts();
      saveToLocalStorage(allPosts, tagFilter);
    }
    filterPosts(tagFilter);
    isLoading = false;
  });

  $: {
    filterPosts(tagFilter);
    saveToLocalStorage(allPosts, tagFilter);
  }
</script>

<div class="flex flex-wrap justify-center items-start gap-8 w-full mx-auto px-4 max-w-[1202px]">
  {#if isLoading} 
    <Loading />
  {/if}
  {#each posts as post (post.id)}
    <a href={`/post/${post.title.toLowerCase().replaceAll(' ', '-')}`} in:fade animate:flip={{duration: 600}} >
      <PostCard {post} /> 
    </a> 
  {/each}
</div>
