<script lang="ts">
  import { Swiper, SwiperSlide } from "swiper/svelte";
  import { Navigation } from "swiper";
  import "swiper/css";
  import "swiper/css/navigation";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  const tags = [
    { name: "All categories", value: null, id: 1 },
    { name: "Email Marketing", value: "email-marketing", id: 2 },
    { name: "Web Hosting", value: "web-hosting", id: 3 },
    {
      name: "Search Engine Optimization",
      value: "search-engine-optimization",
      id: 4,
    },
    { name: "E-Commerce Platforms", value: "e-commerce-platforms", id: 5 },
  ];

  const onTagClick = (tag: string | null) => {
    currentTag = tag;
    if (tag) {
      goto(`?filter=${tag}`);
      return;
    }
    goto("/");
  };

  $: currentTag = $page.url.searchParams.get("filter") || null;
</script>

<div class="flex gap-2 w-[988px] max-w-full px-4 mx-auto mb-12">
  <Swiper
    modules={[Navigation]}
    slidesPerView={"auto"}
    spaceBetween={8}
    navigation
  >
    {#each tags as tag (tag.id)}
      <SwiperSlide>
        <button
          class={currentTag === tag.value
            ? "group active relative flex items-center justify-center flex-shrink-0 px-6 py-3 rounded-full border-0 font-normal text-base leading-6 capitalize transition duration-300 ease-in-out text-white bg-button_color hover:bg-button_hover overflow-hidden"
            : "group relative flex items-center justify-center flex-shrink-0 px-6 py-3 rounded-full border-0 font-normal text-base leading-6 capitalize transition duration-300 ease-in-out bg-card_color text-title_color hover:bg-tag_color overflow-hidden"}
          on:click={() => onTagClick(tag.value)}
        >
          <span
            class="absolute w-0 h-0 transition-all duration-300 ease-out bg-black dark:bg-white rounded-full group-hover:w-full group-hover:h-20 opacity-5 dark:opacity-10"
          />
          {tag.name}
        </button>
      </SwiperSlide>
    {/each}
  </Swiper>
</div>
