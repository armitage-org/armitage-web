<script context="module">
const sorters = {
  "date-desc": (book1, book2) =>
    new Date(book2.createdAt) - new Date(book1.createdAt),
  "alph-asc": (book1, book2) => book1.title.localeCompare(book2.title),
  "alph-desc": (book1, book2) => book2.title.localeCompare(book1.title),
};

let items = [
  { value: "date-desc", label: "Last Added" },
  { value: "alph-asc", label: "Alphabetically A-Z" },
  { value: "alph-desc", label: "Alphabetically Z-A" },
];

export const defaultSorter = sorters[items[0].value];
</script>

<script>
import { createEventDispatcher } from "svelte";
import Select from "svelte-select";

const selectedValue = items[0];

const dispatch = createEventDispatcher();
function handleSelect(event) {
  const id = event.detail.value;
  const sorter = sorters[id];

  dispatch("change", sorter);
}
</script>

<style>
.themed {
  --border: 0;
  --height: 40px;
  --borderRadius: 0.375rem;
  --inputColor: currentColor;
  --indicatorTop: 7px;
}
</style>

<span class="themed mr-3 text-grey-light md:mr-5">
  <Select
    items="{items}"
    selectedValue="{selectedValue}"
    isClearable="{false}"
    isSearchable="{false}"
    containerClasses="w-48"
    on:select="{handleSelect}" />
</span>
