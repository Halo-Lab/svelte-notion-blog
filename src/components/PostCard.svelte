<script lang="ts">
  interface Post {
    image: string;
    tag: string;
    title: string;
    author: string;
    date: string;
  }

  export let post: Post;
</script>

<div class="w-full cursor-pointer max-w-[368px] bg-card_color rounded-3xl overflow-hidden">
  <img src={post.image} alt="postImage" class="w-full aspect-[1/0.638] xs:aspect-[1/0.595] object-cover object-center rounded-3xl rounded-b-none" />  
  <div class="p-8 pt-6">
    <span class="inline-flex items-center mb-3 font-normal text-sm cursor-pointer px-4 pt-2 pb-1 text-text_color bg-tag_color rounded-full">{post.tag}</span>
    <h3 class="h-12 m-0 mb-2 font-semibold text-base leading-normal text-title_color line-clamp-2">
      {post.title}
    </h3>
    <div class="flex font-normal text-sm leading-normal text-text_color">
      <div>{post.author}</div>
      <div class="w-[1px] h-4 bg-gray-300 dark:bg-gray-600 mx-[10px]"></div>
      <div>{post.date}</div>
    </div>
  </div>
</div>
