<script lang="ts">
  import "../app.postcss";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "./fonts.css";
  import "./styles.css";
</script>

<div class="app flex flex-col min-h-screen">
  <Header />
  <main
    class="flex flex-col bg-background_color min-h-[calc(100vh_-_300px)] sm:min-h-full flex-1"
  >
    <slot />
  </main>
  <Footer />
</div>
