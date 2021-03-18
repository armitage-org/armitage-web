<script>
  export let book = { title: "foo" };
  export let votesRef;
  export let votesData;
  export let user;
  export let color;

  $: bookVotes = votesData.filter(vd => vd.book === book.id).length;
  $: userVoted = votesData.some(
    vd => vd.user === user.uid && vd.book === book.id
  );

  function handlePlusClick(event) {
    votesRef
      .doc(`${user.uid}-${book.id}`)
      .set({ user: user.uid, book: book.id });
  }

  function handleMinusClick(event) {
    votesRef.doc(`${user.uid}-${book.id}`).delete();
  }
</script>

<style lang="scss">
  $max-books-count: 10;
  $book-height: 50px;
  $book-offset: 2px;
  $page-border-color: grey;
  $book-border-color: darken($page-border-color, 20%);

  $spine-border-radius: 6px 3px 3px 5px;

  .book {
    width: 500px;
    height: $book-height;
    
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(100%);

    color: white;
    border-radius: $spine-border-radius;
  }

  .spine {
    height: 50px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 5px;

    position: absolute;
    bottom: 0;
    left: 0;

    border: 2px solid $book-border-color;
    border-radius: $spine-border-radius;

    background-color: inherit;

    h2 {
      margin-bottom: 0;
      display: inline-block;
      font-size: 1.7rem;
    }
  }

  .page {
    width: 99%;
    height: 70px;
    position: absolute;
    left: 60px;
    border: 1px solid $page-border-color;
    background-color: white;
    transform: skew(-60deg);
    border-radius: 6px;
  }

  .cover {
    width: 100%;
    border-width: 2px 4px;
    border-color: $book-border-color;
    background-color: inherit;

    border-bottom-right-radius: 2px;
  }

  .back {
    left: 64px;
    border-width: 2px 4px;
    border-color: $book-border-color;
    background-color: inherit;
  }

  $pages: 11;
  $page-offset: 5px;

  @for $i from 1 through $pages {
    .page:nth-child(#{$i}) {
      bottom: ($i - 1) * $page-offset;
    }
  }
</style>

<div class="book" style="background-color: {color}">
  <div class="page back" />
  <div class="page" />
  <div class="page" />
  <div class="page" />
  <div class="page" />
  <div class="page" />
  <div class="page" />
  <div class="page" />
  <div class="page" />
  <div class="page" />
  <div class="page cover" />
  <div class="spine">
    <span class="meta">
      <span class="badge badge-info badge-pill">{bookVotes} votes</span>
      {#if !userVoted}
        <button on:click={handlePlusClick} class="btn btn-success btn-sm">
          +
        </button>
      {:else}
        <button on:click={handleMinusClick} class="btn btn-danger btn-sm">
          -
        </button>
      {/if}
    </span>
    <h2>{book.title}</h2>
    <span />
  </div>
</div>
