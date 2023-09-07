<script lang="ts">
  import Container from './lib/pages/Container.svelte';
  import Navbar from './lib/pages/Navbar.svelte';
  import store from './lib/utils/store';
  const { darkMode } = store();
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/yesvelte@next/css/tabler.min.css"
  />
</svelte:head>
<main class="w-screen h-screen relative">
  <div class="w-55vw h-70vh absolute-center rounded">
    <Navbar />
    <Container />
  </div>
</main>

<style>
  :global(body) {
    background-color: transparent !important;
  }
</style>
