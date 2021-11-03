<script>
  import { tilt } from '../../utils';

  export let title, paragraph, invert = false;
</script>

<section class:invert>
  <div class="description">
    <h1>{title}</h1>
    <p>{paragraph}</p>
    <div class="buttons">
      <slot />
    </div>
  </div>
  <div class="media" use:tilt={{ scale: 1.1 }}>
    <div class="image-placeholder"></div>
  </div>
</section>

<style lang="sass">
  @import '../../vars'

  section
    display: flex
    justify-content: space-between
    max-width: $max-width
    margin: 0 auto
    padding: 3rem 0

    .description
      display: flex
      flex-direction: column
      justify-content: center

      h1
        font-size: 1.75rem
        font-weight: 700
        color: $light
        margin-bottom: 1rem

      p
        color: rgba($light, .75)
        line-height: 1.5
        margin-bottom: 2rem

      .buttons
        display: flex
        align-items: center
        color: $light

        :global(> *)
          margin-right: 1rem

    .media
      margin-left: 1rem

      .image-placeholder
        width: 400px
        height: 300px
        background-color: rgba($light, .1)
        border-radius: .5rem

    &.invert
      flex-direction: row-reverse

      .description
        text-align: right

        .buttons
          justify-content: flex-end

          :global(> *)
            margin-right: 0
            margin-left: 1rem

      .media
        margin-left: 0
        margin-right: 1rem
</style>