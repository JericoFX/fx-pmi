<script lang="ts">
  import { onMount } from 'svelte';
  import Callsign from './lib/pages/Callsign.svelte';
  import Container from './lib/pages/Container.svelte';
  import Navbar from './lib/pages/Navbar.svelte';
  import store, { myData, playerDatas } from './lib/utils/store';
  import type { MyData } from './lib/utils/types';
  import { useNuiEvent } from './lib/utils/useNuiEvent';
  const { darkMode, setData, updatePlayerData } = store();
  let opens = true;
  let forceOpenModal = false;
  let hasCssLoaded = false;
  useNuiEvent(
    'openNUI',
    ({ open, mydata, tabla }: { open: boolean; mydata: MyData; tabla: [] }) => {
      opens = open;
      $myData = mydata;
      console.log(mydata);
      if ($myData.callsign === '' || $myData.callsign === 'NO CALLSIGN') {
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
  }>('updatePolice', ({ type, data }) => {
    $playerDatas = [...$playerDatas, data];
    // updatePlayerData(type, data);
  });
  function sheetLoaded() {
    console.log('L)OADED');
    hasCssLoaded = true;
  }
  $: containerProps = {
    'data-bs-theme': $darkMode ? 'dark' : 'light',
    'data-theme': $darkMode ? 'dark' : 'light',
  };
  onMount(() => {
    Object.keys(containerProps).map((key) => {
      document.body.setAttribute(key, containerProps[key]);
    });
  });
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/yesvelte@next/css/tabler.min.css"
    on:load={sheetLoaded}
  />
</svelte:head>

<!-- <main
  bind:this={container}
  id="main"
  class="w-screen h-screen relative bg-transparent"
> -->
{#if opens}
  <main
    id="cont"
    class="containers bg-#151f2c w-55vw h-70vh absolute-center rounded shadow-sm shadow-dark"
  >
    <Navbar />
    <Container />
    <Callsign bind:open={forceOpenModal} />
  </main>
{/if}

<!-- </main> -->

<style>
  :global(html, body) {
    background: transparent !important;
    background-color: transparent !important;
  }
</style>
