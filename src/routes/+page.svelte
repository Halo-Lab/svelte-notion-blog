<script lang="ts">
  import MainPageTitle from '../components/MainPageTitle.svelte';
  import Tags from '../components/Tags.svelte';
  import Posts from '../components/Posts.svelte';
</script>

<svelte:head>
	<title>svelte notion blog</title>
	<meta name="description" content="svelte notion blog demo app" />
</svelte:head>

<MainPageTitle />
<Tags />
<Posts />
