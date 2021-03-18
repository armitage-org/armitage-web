<script>
import GoogleAuth from "./GoogleAuth.svelte";
import Avatar from "./Avatar.svelte";

import { apiClient } from "../services/apiClient";
import { auth } from "../store";
import config from "../config";

const saveUser = ({ user }) =>
  auth.set({
    error: null,
    user: {
      id: user.id,
      displayName: user.name,
      avatar: user.image,
    },
  });

apiClient.authentication.getAccessToken().then((token) => {
  if (token) {
    apiClient.reAuthenticate().then(saveUser);
  }
});

const onAuthSuccess = (ev) => {
  const googleToken = ev.detail.user.getAuthResponse(true).access_token;

  apiClient
    .authenticate({ strategy: "google", access_token: googleToken })
    .then(saveUser)
    .catch(console.error);
};

const onError = (ev) => {
  const { error } = ev.detail.error;

  auth.update((prevAuth) => ({
    ...prevAuth,
    error,
  }));
};

const onSignOut = () => {
  auth.set({ error: null, user: null });
  apiClient.logout();
};
</script>

<div class="flex flex-col items-center md:flex-row">
  {#if $auth.user}
    <Avatar user="{$auth.user}" />

    <div class="flex flex-col items-start text-lg md:ml-3">
      <span class="hidden md:block">{$auth.user.displayName}</span>
      <button
        type="button"
        class="mt-1 p-0 border-0 text-sm text-grey-light underline md:m-0"
        on:click="{onSignOut}">
        Sign Out
      </button>
    </div>
  {:else}
    <GoogleAuth
      clientId={config.googleClientId}
      hostedDomain={config.hostedDomain}
      on:init-error="{onError}"
      on:auth-failure="{onError}"
      on:auth-success="{onAuthSuccess}" />
  {/if}
</div>

{#if $auth.error}
  <span class="block mt-2 text-sm text-error"
    >Authentication failed: {$auth.error}</span>
{/if}
