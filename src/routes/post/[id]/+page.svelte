<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  const params = $page.params.id;
  import SvelteMarkdown from 'svelte-markdown';
  import Loading from '../../../components/Loading.svelte';  
  import PostPageTitle from '../../../components/PostPageTitle.svelte';
  import ScrollButton from '../../../components/ScrollButton.svelte';

  import type { PostType } from "../../../types/post.type";

  let post: Partial<PostType> = {};
  let source = '';
  let isLoading = true;
  
  const fetchPost = async () => {
    const response = await fetch('/api/posts');
    const data: PostType[] = await response.json();
    return data.filter(post => post.post === params)[0];
  };

  const loadFromLocalStorage = () => {
    if (typeof localStorage !== 'undefined') {
      const storedPosts = localStorage.getItem('posts');
      if (storedPosts) {
        const data: PostType[] = JSON.parse(storedPosts);
        const currentPost = data.find(post => post.title.toLowerCase().split(' ').join('-') === params);
        post = currentPost || post;        
      }
    }
  };

  onMount(async () => {
   loadFromLocalStorage();
   if(!post.title) {
     post = await fetchPost();
   }   
   source = post.text || source;
   isLoading = false;
  });
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

{#if isLoading}
  <Loading />
{/if}
<div class="flex flex-col items-center w-full max-w-[972px] mx-auto px-0 pt-12 xs:px-4 xs:pt-16">
  <PostPageTitle {post} />
  <div class="post-text flex flex-col items-center w-[680px] max-w-[calc(100%-32px)] mx-auto mt-10 text-base font-normal leading-6 color-text_color">
    <SvelteMarkdown {source} />      
  </div>
  <ScrollButton />
</div>
