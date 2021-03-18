<script>
import Logo from "./Logo.svelte";
import Nav from "./Nav.svelte";
import Auth from "./Auth.svelte";
</script>

<nav class="flex flex-wrap items-center px-4 py-5 z-30 shadow-sidebar md:w-64 md:px-8 md:py-9 md:block">
  <Logo />
  <Nav />

  <hr class="hidden mt-8 mb-9 md:block" />

  <Auth />
</nav>
