<script lang="ts">
  import { Button } from 'yesvelte';
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/yesvelte@next/css/tabler.min.css"
  />
</svelte:head>
<div class="bg-dark w-full h-full relative">
  <Button color="primary" title="YHOLA">HOLA CAROLA</Button>
</div>

<style>
  :global(body) {
    background-color: transparent !important;
  }
</style>
