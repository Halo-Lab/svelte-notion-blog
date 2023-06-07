<script>
  import { page } from "$app/stores";
</script>

<div class="flex justify-center content-center flex-1 h-full flex-wrap">
  <h1>{$page.status} {$page.error.message || "Unexpected error :("}</h1>
</div>
