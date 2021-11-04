<footer>
  <div class="disclaimer">
    This website is not affiliated with Twitch. Twitch, the Twitch Logo, the Glitch Logo, and/or Twitch.tv are trademarks of Twitch Interactive, Inc. or its affiliates.
  </div>
  <div class="links">
    <a href="/">Privacy Policy</a>
    <a href="/">Terms of Service</a>
  </div>
</footer>

<style lang="sass">
  @import '../../vars'

  footer
    display: flex
    background-color: $dark
    padding: 3rem
    color: $light

    div
      width: 50%

      &.disclaimer
        padding-right: 1rem

      &.links
        display: flex
        justify-content: flex-end
        align-items: center
        padding-left: 1rem

        a
          color: $light
          transition: all .2s ease

          &:hover
            color: $primary

          &:not(:last-child)
            margin-right: 1rem
</style>