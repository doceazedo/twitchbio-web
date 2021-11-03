<script>
  export let href = null;
</script>

{#if href}
  <a {href}>
    <slot />
  </a>
{:else}
  <button>
    <slot />
  </button>
{/if}

<style lang="sass">
  @import '../../vars'

  a,
  button
    display: inline-flex
    align-items: center
    padding: .75rem 1rem
    margin: 0
    border: none
    text-decoration: none
    color: $light
    background-color: $primary
    border-radius: .5rem
    cursor: pointer
    box-shadow: inset 0 -3px 0 0 rgba(#000, .25)

    :global(svg)
      height: 1.25rem
      width: 1.25rem
      margin-right: .5rem
</style>