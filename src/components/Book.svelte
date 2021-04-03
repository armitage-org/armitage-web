<script>
import Tag from "./Tag.svelte";

export let book;
export let tags = [];

import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();
</script>

<article class="px-3 py-5 mb-5 flex flex-wrap bg-white rounded-lg md:px-5">
  <img
    src="{book.image}"
    alt=""
    class="h-40 mr-5 rounded-md"
    width="105"
    height="160" />

  <div class="flex-1">
    <div class="mb-2">
      {#each tags as tag}
        <Tag color="{tag.color}">{tag.text}</Tag>
      {/each}
    </div>

    <h2 class="text-2xl font-bold">{book.title}</h2>
    <span class="text-lg text-grey-light">{book.author}</span>
  </div>

  <div class="flex-auto text-center mt-4 md:pl-4 md:mt-0 md:flex-initial">
    <slot name="extra" />
  </div>
</article>
