<script>
  import { signOut as authSignOut } from 'sk-auth/client';
  import { session } from '$app/stores';
  import { Button } from '$lib/common';
  import { TwitchIcon } from '$lib/icons';

  $: user = $session.user;

  const signIn = () => {
    location.assign('/api/auth/signin/twitch?redirect=/');
  }

  const signOut = () => {
    authSignOut().then(session.set);
  }
</script>

<header>
  <nav>
    <a href="/" class="logo">
      Twitch<span>Bio</span>
    </a>
    <ul>
      <li>
        <a href="/">Página A</a>
      </li>
      <li>
        <a href="/">Página B</a>
      </li>
      <li>
        <a href="/">Página C</a>
      </li>
      <li>
        {#if user}
          <div class="logged-in" on:click={signOut}>
            {user.display_name}
            <img src={user.profile_image_url} alt="">
          </div>
        {:else}
          <Button on:click={signIn}>
            <TwitchIcon />
            Login with Twitch
          </Button>
        {/if}
      </li>
    </ul>
  </nav>
</header>

<style lang="sass">
  @import '../../vars'

  header
    background-color: $dark
    border-bottom-left-radius: 1rem
    border-bottom-right-radius: 1rem

    nav
      display: flex
      align-items: center
      justify-content: space-between
      max-width: $max-width
      height: 5rem
      margin: auto

      .logo
        font-size: 2rem
        font-weight: 700
        color: $primary
        text-decoration: none

        span
          color: $light

      ul
        display: flex
        height: 100%

        li
          display: flex
          align-items: center
          height: 100%
          padding: 0 1rem

          &:last-child
            padding-right: 0

          a
            display: flex
            align-items: center
            height: 100%
            text-decoration: none
            color: $light

          .logged-in
            display: flex
            align-items: center
            color: $light
            cursor: pointer

            img
              height: 3rem
              width: 3rem
              margin-left: 0.5rem
              border-radius: 50%
</style>