<script lang="ts">
  import { Button } from 'yesvelte';
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/yesvelte@next/css/tabler.min.css"
  />
</svelte:head>
<main class=" w-screen h-screen relative">
  <div id="mainFrame" class="w-45vw h-70vh bg-dark" />
</main>

<style>
  :global(body) {
    background-color: transparent !important;
  }
</style>
