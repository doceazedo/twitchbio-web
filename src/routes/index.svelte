<script>
  import { session } from '$app/stores';
  import {
    Button,
    DevelopersSection,
    Footer,
    ProductSection
  } from '$lib/common';
  import { TwitchIcon } from '$lib/icons';

  $: user = $session.user;

  const signIn = () => {
    location.assign('/api/auth/signin/twitch?redirect=/');
  }
</script>

<ProductSection
  title="Unlock your Twitch chat superpowers 🦸✨"
  paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laboriosam facere omnis iure aspernatur deleniti modi id, libero voluptas et facilis blanditiis expedita commodi itaque adipisci iusto dolores quo quaerat!"
>
  <Button>Download for Chrome</Button>
  Other browsers
</ProductSection>

<ProductSection
  title="Customize your profile your way 🎨"
  paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laboriosam facere omnis iure aspernatur deleniti modi id, libero voluptas et facilis blanditiis expedita commodi itaque adipisci iusto dolores quo quaerat!"
  invert
>
  {#if user}
    <Button href="/profile">
      Go to the dashboard
    </Button>
  {:else}
    <Button on:click={signIn}>
      <TwitchIcon />
      Login with Twitch
    </Button>
  {/if}
</ProductSection>

<ProductSection
  title="Get the desktop client 🖥"
  paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laboriosam facere omnis iure aspernatur deleniti modi id, libero voluptas et facilis blanditiis expedita commodi itaque adipisci iusto dolores quo quaerat!"
>
  <Button>Download for Windows</Button>
  Other systems
</ProductSection>

<ProductSection
  title="Enhance your stream with a chatbox 💬"
  paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laboriosam facere omnis iure aspernatur deleniti modi id, libero voluptas et facilis blanditiis expedita commodi itaque adipisci iusto dolores quo quaerat!"
  invert
>
  <Button>Ready-to-go chatbox</Button>
  <Button>Setup with Streamlabs</Button>
</ProductSection>

<DevelopersSection />

<Footer />