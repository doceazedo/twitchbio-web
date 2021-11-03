<script>
  import { Button } from '$lib/common';
</script>

<section>
  <h1>Are you a developer? 🤓</h1>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi in excepturi soluta optio. Perferendis deleniti ea culpa earum, voluptates eligendi quia, eaque quas inventore excepturi?</p>
  <Button>
    Read the docs
  </Button>
</section>

<style lang="sass">
  @import '../../vars'

  section
    max-width: 720px
    margin: 0 auto
    padding: 3rem 0
    text-align: center

    h1
      font-size: 1.75rem
      font-weight: 700
      color: $light
      margin-bottom: 1rem

    p
      color: rgba($light, .75)
      line-height: 1.5
      margin-bottom: 2rem
</style>