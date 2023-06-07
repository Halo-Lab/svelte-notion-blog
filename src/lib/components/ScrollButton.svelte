<script lang="ts">
  import { onMount } from 'svelte';

  let scrollBtnVisible = false;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const handleScroll = () => {
    scrollBtnVisible = window.pageYOffset > 300;
  };

  onMount(async () => {
   window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<button on:click={scrollToTop} class="{ scrollBtnVisible ? 'fixed z-10 p-3 bg-button_color hover:bg-button_hover rounded shadow-md bottom-10 right-10 opacity-1 duration-500' : 'opacity-0'}">
  <svg class="w-6 h-6" fill="none" stroke="#ccc" viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18">
      </path>
  </svg>
</button>
