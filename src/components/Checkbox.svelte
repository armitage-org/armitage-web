<script>
import { createEventDispatcher } from "svelte";

export let defaultChecked = false;
export let label;
export let name = null;

const dispatch = createEventDispatcher();
const onChange = (event) => dispatch("change", event);
</script>

<style>
input:checked + span:before {
  content: "✓";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  color: currentColor;
  line-height: 1rem;
}
</style>

<label for="{name}" class="flex cursor-pointer items-center">
  <input
    type="checkbox"
    name="{name}"
    checked="{defaultChecked}"
    class="hidden"
    on:change="{onChange}" />
  <span
    class="w-4 h-4 block relative rounded border border-grey-lighter select-none text-grey"
  ></span>
  {#if label}
    <span class="ml-2 flex-1 text-grey-light leading-none">{label}</span>
  {/if}
</label>
