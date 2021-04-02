<script>
import Book from "./Book.svelte";
import Button from "./Button.svelte";

import { apiClient } from "../services/apiClient";
import { bookshelf, auth } from "../store";

export let book;

$: user = $auth.user;
$: tags = getBookTags(book, user);

const rentBook = (book) => {
  apiClient
    .service("rentals")
    .create({ user_id: $auth.user.id, book_id: book.id });
  bookshelf.refresh();
};

const userHasRentedBook = (user, book) => {
  return user && book.mostRecentRent.user_id === user.id;
};

const getBookTags = (book, user) => {
  if (book.available) {
    return [{ color: "green", text: "Available" }];
  } else if (userHasRentedBook(user, book)) {
    return [{ color: "blue", text: "Rented by You" }];
  } else {
    return [
      {
        color: "pink",
        text: `Rented by ${book.mostRecentRent.user.name}`,
      },
    ];
  }
};
</script>

<Book user="{user}" book="{book}" tags="{tags}">
  <span slot="extra">
    {#if book.available}
      <Button
        on:click="{() => rentBook(book)}"
        disabled="{!user}"
        title="Feature is not available yet">Rent the book</Button>
    {:else if userHasRentedBook(user, book)}
      <Button type="primary-outline" title="Feature is not available yet"
        >Return the book</Button>
    {:else}
      <Button
        type="secondary"
        disabled="{!user}"
        title="Feature is not available yet">Join the queue</Button>
    {/if}
  </span>
</Book>
