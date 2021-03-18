<script>
import BookSorter, { defaultSorter } from "./BookSorter.svelte";
import ToggleFilter from "./ToggleFilter.svelte";

import { bookshelf } from "../store";
import LibraryBook from "./LibraryBook.svelte";

export let books;

// export let userRentals;
// export let userQueue;
// export let bookshelf;

let sorter = defaultSorter;
let availableOnly = false;

$: books = $bookshelf
  .filter((book) => !availableOnly || book.available)
  .sort(sorter);
$: console.log(books);

const handleChangeSorter = (checked) => {
  sorter = checked.detail;
};

const handleSetAvailableFilter = (checked) => {
  availableOnly = checked.detail;
};

/* $: {
    if (bookshelf && userRentals && userQueue) {
      books = {};
      bookshelf.forEach(book => {
        books[book.id] = {
          ...book,
          userRented: false,
          userQueuePosition: undefined,
          nextInQueue: undefined
        }; // clear all the props
      });
      userRentals
        .filter(rental => rental.user === user.uid)
        .forEach(rental => {
          books[rental.book].userRented = true;
        });
      userQueue.forEach(slot => {
        const bookQueueSorted = userQueue
          .filter(q => q.book === slot.book)
          .sort((a, b) => {
            if (a.when === b.when) return 0;
            return a.when > b.when ? 1 : -1;
          });
        const queueIndex = bookQueueSorted.findIndex(q => q.user === user.uid);
        if (queueIndex > -1) {
          books[slot.book].userQueuePosition = queueIndex;
        }
        books[slot.book].nextInQueue = bookQueueSorted[0];
      });
    }
  }*/
</script>

<div class="mb-4 flex md:mb-7">
  <BookSorter on:change="{handleChangeSorter}" />
  <ToggleFilter
    label="Available only"
    defaultValue="{availableOnly}"
    on:change="{handleSetAvailableFilter}" />
</div>

{#each Object.values(books) as book}
  <LibraryBook book={book} />
{/each}
