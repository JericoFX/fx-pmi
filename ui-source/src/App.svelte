<script lang="ts">
  //-----------------------------------------------------//
  import Officers from './pages/Officers.svelte';
  import Store from './store/playerStore';
  import Navbar from './lib/Navbar.svelte';
  import { useNuiEvent } from './utils/useNuiEvent';
  import { debugData } from './utils/debugData';
  import { fetchNui } from './utils/fetchNui';
  import { darkMode } from './store/playerStore';
  import { isEnvBrowser } from './utils/misc';
  //-----------------------------------------------------//
  const {
    setData,
    setIndexData,
    updateVehicle,
    changeDuty,
    myData,
    updateAsignament,
  } = Store;
  let open = isEnvBrowser();
  //-----------------------------------------------------//
  $: {
    if ($darkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    }
  }
  //-----------------------------------------------------//
  useNuiEvent('openMDT', ({ open, data, mydata }) => {
    console.log(JSON.stringify(mydata));
    open = open;
    setIndexData(data);
    $myData = mydata;
  });

  useNuiEvent('vehicle', ({ data }) => {
    updateVehicle(data);
  });

  useNuiEvent('duty', ({ data }) => {
    changeDuty(data);
  });

  useNuiEvent('assignment', ({ data }) => {
    updateAsignament(data);
  });
  //-----------------------------------------------------//
  function handleKeydown(event: { keyCode: number }) {
    if (event.keyCode === 27) {
      open = false; // set open to false, that close the nui
      fetchNui('closeNUI'); // Send the event to LUA so it can hide the cursor
      setData([]);
    }
  }

  debugData([
    {
      action: 'openMDT',
      data: {
        data: [
          {
            firstname: 'Jerico',
            lastname: 'FX',
            phone: '099999999',
            citizenid: 'ADS12332',
            rank: 'Liutenent',
            callsign: 'C510',
            vehicle: false,
            duty: false,
            assignment: false,
          },
          {
            firstname: 'Jeriaco',
            lastname: 'FsX',
            phone: '09922222',
            citizenid: 'ADSasddsa',
            rank: 'Liutensent',
            callsign: 'C5s10',
            vehicle: {
              plate: 'ASD123456',
              vehicle: 'Primo',
            },
            duty: false,
            assignment: false,
          },
          {
            firstname: 'Jerissco',
            lastname: 'FX',
            phone: 'sssss',
            citizenid: 'ADS11232332',
            rank: 'Liutenaent',
            callsign: 'C510',
            vehicle: false,
            duty: false,
            assignment: false,
          },
        ],
        mydata: {
          citizenid: 'ADS12332',
        },
      },
    },
  ]);
  //-----------------------------------------------------//
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/yesvelte@next/css/tabler.min.css"
  />
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

{#if open}
  <main class=" w-screen h-screen relative select-none">
    <div id="mainFrame" class="w-65vw h-80vh absolute-center rounded">
      <div
        id="leftBar"
        class="absolute left-0 w-4vw h-full rounded shadow-black shadow-md"
      >
        <Navbar />
      </div>
      <div class="app absolute right-0 w-94% h-full -z-1">
        <Officers />
      </div>
    </div>
  </main>
{/if}

<style>
  :global(body) {
    background-color: transparent !important;
    font-family: 'Montserrat', sans-serif;
  }
  #mainFrame {
    background-color: var(--y-body-bg);
  }
</style>
