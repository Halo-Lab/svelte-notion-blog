<script lang="ts">
  const logo: string = 'src/lib/images/logo.svg';
</script>

<footer class="footer">
  <div class="flex justify-between items-center w-full mx-auto max-w-[1202px] px-4 pt-24 xs:pt-32 pb-10">
    <a href="/" aria-label="Svelte Blog">
      <img src={logo} alt="svelteIcon" class="logo w-20 h-5 xs:w-24 xs:h-6 object-contain object-left-center"/>
    </a>
    <p class="text-base">2023 @Svelte Blog</p>
    <p class="font-semibold text-lg leading-normal text-title_color">GitHub</p>
  </div>
</footer>
