<script lang="ts">
  import { onMount } from 'svelte';
  import Callsign from './lib/pages/Callsign.svelte';
  import Container from './lib/pages/Container.svelte';
  import Navbar from './lib/pages/Navbar.svelte';
  import store, { myData, playerDatas } from './lib/utils/store';
  import type { MyData } from './lib/utils/types';
  import { useNuiEvent } from './lib/utils/useNuiEvent';
  import { fetchNui } from './lib/utils/fetchNui';
  const { darkMode, setData, updatePlayerData } = store();
  let opens = false;
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

  useNuiEvent<{
    type: string;
    info: string;
    citizenid: string;
    vehicle: string;
    plate: string;
  }>('vehicle', ({ info, citizenid, vehicle, plate }) => {
    const s = $playerDatas.findIndex((e) => e.citizenid === citizenid);
    console.log('INDICE', s);
    //const _d = $playerDatas.filter((e) => e.citizenid === citizenid)[0];
    if (info === 'add' && s !== -1) {
      $playerDatas[s] = {
        ...$playerDatas[s],
        vehicle: { vehicle: vehicle, plate: plate },
      };
      $playerDatas = $playerDatas;
    } else {
      $playerDatas[s] = {
        ...$playerDatas[s],
        vehicle: false,
      };
      $playerDatas = $playerDatas;
    }
  });

  useNuiEvent<{
    type: string;
    info: string;
    citizenid: string;
    duty: boolean;
  }>('duty', ({ info, citizenid, duty }) => {
    const s = $playerDatas.findIndex((e) => e.citizenid === citizenid);
    if (s === -1) return;
    $playerDatas[s] = {
      ...$playerDatas[s],
      duty: duty,
    };
    $playerDatas = $playerDatas;
  });

  function sheetLoaded() {
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
  function handleKeydown(event: { keyCode: number }) {
    if (event.keyCode === 27) {
      opens = false;
      fetchNui('closeNUI', {});
    }
    1;
  }
</script>

<svelte:window on:keydown={handleKeydown} />
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
