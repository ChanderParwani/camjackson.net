<script lang="ts">
  import P from './P.svelte';
  export let name = '';
</script>

<h3 class="mt-4 mx-6 mb-0 text-4xl md:self-center">{name}</h3>
<P className="my-4 mx-0 py-0 px-6">
  <slot />
</P>
