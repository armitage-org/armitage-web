<script>
import { createEventDispatcher } from "svelte";

// primary | secondary | google
export let type = "primary";
export let disabled = false;
export let element;
export let title;

const dispatch = createEventDispatcher();
const onClick = (event) => {
  dispatch("click", event);
};

const colors = {
  primary: "text-black bg-cyan border-cyan" ,
  secondary: "text-blue bg-white border-cyan" ,
  google: "text-dark-blue bg-white border-dark-blue" ,
};

$: color = colors[type] || colors.secondary;

$: isDisabled = disabled === true;

// const title= isDisabled ? 'You need to be logged in first' : ''
</script>

<button
  class="px-6 py-3 rounded-3xl border-2 {color} font-bold"
  class:opacity-70="{isDisabled}"
  class:cursor-not-allowed="{isDisabled}"
  title="{title}"
  disabled="{isDisabled}"
  bind:this="{element}"
  on:click="{onClick}">
  <slot />
</button>
