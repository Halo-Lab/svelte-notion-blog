<script lang="ts">
  import MainPageTitle from "$lib/components/MainPageTitle.svelte";
  import Tags from "$lib/components/Tags.svelte";
  import Posts from "$lib/components/Posts.svelte";
  export let data;
</script>

<svelte:head>
  <title>svelte notion blog</title>
  <meta name="description" content="svelte notion blog demo app" />
</svelte:head>

<MainPageTitle />
<Tags />
<Posts posts={data.posts} />
