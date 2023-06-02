<script lang="ts">
  import "../app.postcss";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import "./fonts.css";
  import "./styles.css";
</script>

<div class="app flex flex-col min-h-screen">
  <Header />
  <main class="bg-background_color min-h-[calc(100vh_-_300px)] sm:min-h-full">
    <slot />
  </main>
  <Footer />
</div>
