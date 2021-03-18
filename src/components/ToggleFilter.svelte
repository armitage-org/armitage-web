<script>
import Checkbox from "./Checkbox.svelte";
import { createEventDispatcher } from "svelte";

export let label;
export let defaultValue;

const dispatch = createEventDispatcher();
const onChange = (event) => dispatch("change", event.detail.target.checked);
</script>

<div class="inline-flex items-center h-10 px-3.5 rounded-md bg-white">
  <Checkbox
    defaultChecked="{defaultValue}"
    label="{label}"
    on:change="{onChange}" />
</div>
