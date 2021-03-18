<script>
  // import VoteRow from "./Voterow.svelte";

  // import { onMount } from "svelte";
  // import { flip } from "svelte/animate";

  // export let user;
  // export let books = [];
  // export let uservotesData;
  // export let uservotesRef;
  // export let bookVotes = {};
  // export let sortedBooks = [];
  // let booksColors = {};

  // onMount(() => {
  //   books.forEach(book => {
  //     booksColors[book.id] =
  //       "#" +
  //       Math.random()
  //         .toString(16)
  //         .substr(2, 6);
  //   });
  // });
</script>

<style lang="scss">
  // $max-books-count: 10;
  // $book-height: 50px;

  // .wishlist {
  //   position: relative;
  //   margin-top: 50px;
  // }

  // .book-wrapper {
  //   position: relative;
  //   bottom: 0;
  //   height: $book-height;
  // }

  // @for $i from 1 through $max-books-count {
  //   .book-wrapper:nth-child(#{$i}) {
  //     z-index: #{$max-books-count - $i};
  //     left: #{1px * random(20)};
  //   }
  // }
</style>

<!-- <div class="wishlist">
  {#each sortedBooks as book, index (book)}
    <div class="book-wrapper" animate:flip>
      <VoteRow
        {book}
        votesRef={uservotesRef}
        votesData={uservotesData}
        {user}
        color={booksColors[book.id]} />
    </div>
  {/each} 
</div> -->
<h2>Wishlist not ready yet</h2>