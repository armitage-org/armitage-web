<script>
import AppBar from "./AppBar.svelte";
</script>

<div class="flex flex-col md:flex-row min-h-full">
  <AppBar />

  <main class="flex-auto bg-light-blue px-4 pt-4 md:pl-8 md:pr-16 md:pt-8">
    <slot />
  </main>
</div>
