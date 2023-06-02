<script lang="ts">
  import logo from '$lib/images/logo.svg';

  const changeTheme = (): void => {
    if (document.documentElement) {
      document.documentElement.classList.toggle('dark');
      const currentTheme: string = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('theme', currentTheme);
    }
  };
</script>

<div class="flex items-center w-full h-14 xs:h-24 bg-header_color border border-border_color border-r-transparent border-l-transparent border-t-transparent">
  <div class="flex items-center justify-between w-full mx-auto px-4 max-w-[1202px]">
    <a href="/" aria-label="Svelte Blog">
      <img src={logo} alt="svelteIcon" class="logo w-24 h-6 xs:w-32 xs:h-8 object-contain object-left-center"/>
    </a>
    <button class="color-mode relative w-12 h-8 bg-cover bg-no-repeat bg-center cursor-pointer outline-none" aria-label="change theme" on:click={changeTheme}></button>
  </div>
</div>
