<script>
import Tag from "./Tag.svelte";

export let book;
export let tags = [];
// export let user;
// export let userrentalsRef;
// export let userqueueRef;
// export let booksRef;

import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();

// import { bookshelf } from "./store/index.js";

// function update(updatedBook) {
//   book = { ...book, ...updatedBook };
//   dispatch("update", book);
// }
</script>

<article class="px-3 py-5 mb-5 flex flex-wrap bg-white rounded-lg md:px-5">
  <img src="{book.image}" alt="" class="h-40 mr-5 rounded-md" width="105" height="160" />
  
  <div class="flex-1">
    <div class="mb-2">
      {#each tags as tag}
        <Tag color="{tag.color}">{tag.text}</Tag>
      {/each}
    </div>

    <h2 class="text-2xl font-bold">{book.title}</h2>
    <span class="text-lg text-grey-light">{book.author}</span>
  </div>

  <div class="flex-auto text-center mt-4 md:pl-4 md:mt-0 md:flex-initial">
    <slot name="extra"></slot>
  </div>
</article>

  <!-- <div class="book-meta">
      <p>
        Book is
        {#if !book.available}not{/if}
        available
      </p>
      {#if book.userRented}(you have it){/if}
      {#if book.userRented}
        <button
          class="btn btn-primary btn-lg"
          on:click={() => {
            userrentalsRef.doc(`${user.uid}-${book.id}`).delete();
            booksRef.doc(book.id).update({ available: true });
            /* if (book.nextInQueue) {
              firebase
                .functions()
                .httpsCallable('sendMail')({
                  title: book.title,
                  to: book.nextInQueue.mail
                })
                .then(res => {
                  console.log({ res });
                })
                .catch(err => {
                  console.log({ err });
                });
            } */
          }}>
          Return the book
        </button>
      {:else if book.available}
        <button
          class="btn btn-success btn-lg"
          on:click={() => {
            console.log('renting the book');
            console.log(book);
            update({available: false});
            /* userrentalsRef
              .doc(`${user.uid}-${book.id}`)
              .set({ user: user.uid, book: book.id, rented: true });
            booksRef.doc(book.id).update({ available: false }); */
          }}>
          Rent the book
        </button>
      {:else if book.userQueuePosition !== undefined}
        Already in queue: {book.userQueuePosition}
        <button
          class="btn btn-info btn-lg"
          on:click={() => {
            userqueueRef.doc(`${user.uid}-${book.id}`).delete();
          }}>
          Leave the queue
        </button>
      {:else}
        <button
          class="btn btn-primary btn-lg"
          on:click={() => {
            userqueueRef
              .doc(`${user.uid}-${book.id}`)
              .set({
                user: user.uid,
                book: book.id,
                when: new Date(),
                mail: user.email
              });
          }}>
          Queue yourself
        </button>
      {/if}
    </div> -->
