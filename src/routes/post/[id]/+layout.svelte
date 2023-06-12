<script>
  import { navigating } from "$app/stores";
  import Loading from "$lib/components/Loading.svelte";
</script>

{#if $navigating}
  <div
    class="flex items-center justify-center fixed inset-0 z-30 bg-background_color"
  >
    <Loading />
  </div>
{/if}
<slot />
