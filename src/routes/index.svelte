<script>
  import { Button, Footer, DevelopersSection, ProductSection } from '$lib/common';
  import { TwitchIcon } from '$lib/icons';
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
  <Button href="/login">
    <TwitchIcon />
    Conectar com Twitch
  </Button>
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