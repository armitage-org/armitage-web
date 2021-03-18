import { writable } from "svelte/store";
import { apiClient } from "../services/apiClient";
const booksService = apiClient.service("books");

export const bookshelf = writable([]);

bookshelf.refresh = () =>
  booksService.find().then((data) => {
    bookshelf.set(data);
  });

bookshelf.refresh();

export const wishlist = writable([
  { title: "Why?", votes: 0 },
  { title: "Pools for dummies", votes: 5 },
  { title: "How to be awesome in 30 days", votes: 2 },
]);

export const auth = writable({
  error: null,
  user: null,
});
