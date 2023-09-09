<script lang="ts">
  import Callsign from './lib/pages/Callsign.svelte';
  import Container from './lib/pages/Container.svelte';
  import Navbar from './lib/pages/Navbar.svelte';
  import { isEnvBrowser } from './lib/utils/misc';
  import store, { myData } from './lib/utils/store';
  import type { MyData } from './lib/utils/types';
  import { useNuiEvent } from './lib/utils/useNuiEvent';
  const { darkMode, setData, updatePlayerData } = store();
  let open = isEnvBrowser();
  let forceOpenModal = false;
  let hasCssLoaded = false;
  useNuiEvent(
    'openNUI',
    ({ open, mydata, tabla }: { open: boolean; mydata: MyData; tabla: [] }) => {
      open = open;
      $myData = mydata;
      if ($myData.callsign === '') {
        forceOpenModal = true;
      }
      setData(tabla);
    }
  );
  useNuiEvent<{
    type: string;
    data: {
      firstname: string;
      lastname: string;
      phone: string;
      citizenid: string;
      rank: string;
      callsign: string;
      radio: number;
      vehicle: { plate: string; vehicle: string };
      duty: boolean;
      assignment: boolean;
    };
  }>('updatePolice', ({ type, data }) => updatePlayerData(type, data));
  function sheetLoaded() {
    console.log('L)OADED');
    hasCssLoaded = true;
  }
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/yesvelte@next/css/tabler.min.css"
    on:load={sheetLoaded}
  />
</svelte:head>

<main class="w-screen h-screen relative">
  {#if open && hasCssLoaded}
    <div class="w-55vw h-70vh absolute-center rounded shadow-sm shadow-dark">
      <Navbar />
      <Container />
      <Callsign bind:open={forceOpenModal} />
    </div>
  {/if}
</main>

<style>
  :global(body) {
    background-color: transparent !important;
  }
</style>
