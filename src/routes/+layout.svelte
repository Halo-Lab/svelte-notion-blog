<script>
  import "../app.postcss";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import "./fonts.css";
  import "./styles.css";
</script>

<div class="app">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  main {
    background-color: var(--background-color);
    min-height: calc(100vh - 300px);
  }

@media (max-width: 540px) {
  main {
    min-height: auto;
  }
}
</style>
