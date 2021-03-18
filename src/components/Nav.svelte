<script>
import { Link } from "svelte-routing";

let navItems = [
  { route: "/", label: "Library" },
  { route: "/wishlist", label: "Wishlist" },
];

function getProps({ href, isPartiallyCurrent, isCurrent }) {
  const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;
  const props = {
    class: "py-2 px-2.5 rounded-lg text-black visited:text-black hover:no-underline",
  };

  if (isActive) {
    props.class += " bg-purple-light";
  }

  return props;
}
</script>

<ul class="flex-auto p-0 list-none md:mt-8">
  {#each navItems as item}
    <li class="my-5 inline md:block">
      <Link to="{item.route}" getProps="{getProps}">{item.label}</Link>
    </li>
  {/each}
</ul>
