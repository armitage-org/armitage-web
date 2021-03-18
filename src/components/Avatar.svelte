<script>
export let user;

$: userInitials = getInitials(user.displayName);

let imgState = "loading";

const getInitials = (fullName) => {
  const [firstname, surname] = fullName.split(" ");

  return `${firstname[0]}${surname[0]}`;
};
</script>

<span
  class="inline-block w-9 h-9 leading-9 bg-cyan2 rounded-3xl text-white text-center overflow-hidden">
  {#if user.avatar && imgState !== "error"}
    <img
      on:error="{() => (imgState = 'error')}"
      on:load="{() => (imgState = 'success')}"
      src="{user.avatar}"
      alt=""
      class="w-full h-full" />
  {:else}
    {userInitials}
  {/if}
</span>
