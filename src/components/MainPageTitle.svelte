<script>
  import { Motion } from "svelte-motion";
</script>

<div class="w-full max-w-[1202px] mx-auto px-4">
  <Motion
    transition={{ duration: 0.75, ease: "easeOut" }}
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    let:motion
  >
    <h2 use:motion class="w-full max-w-[1050px] mx-auto mb-6 p-0 pt-12 xs:pt-16 font-medium text-title_color text-[40px] xs:text-5xl sm:text-[52px] md:text-6xl lg:text-[80px] leading-[1.1] text-center tracking-tight font-title">Learn more about the product and its benefits</h2>
  </Motion>
  <Motion
    transition={{ duration: 0.5, delay: 0.25 }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    let:motion
  >
    <p use:motion class="max-w-[590px] mx-auto mb-[58px] p-0 text-center text-base xs:text-lg">
      Check out our blog, where you will find a lot of useful information.
      Explore our guide on how to use the app.
    </p>
  </Motion>
</div>

