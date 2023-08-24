<script lang="ts">
  import Officers from './pages/Officers.svelte';
  import Store from './store/playerStore';
  import Navbar from './lib/Navbar.svelte';

  import { useNuiEvent } from './utils/useNuiEvent';
  import { debugData } from './utils/debugData';
  const { setData, setIndexData } = Store;

  useNuiEvent('openMDT', (data: any) => {
    setIndexData(data);
  });
  debugData([
    {
      action: 'openMDT',
      data: [
        {
          firstname: 'Jerico',
          lastname: 'FX',
          phone: '099999999',
          citizenid: 'ADS12332',
          rank: 'Liutenent',
          callsign: 'C510',
          vehicle: '',
          duty: false,
          assignment: true,
        },
        {
          firstname: 'Jeriaco',
          lastname: 'FsX',
          phone: '09922222',
          citizenid: 'ADSasddsa',
          rank: 'Liutensent',
          callsign: 'C5s10',
          vehicle: '',
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
          vehicle: '',
          duty: false,
          assignment: false,
        },
      ],
    },
  ]);
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/yesvelte@next/css/tabler.min.css"
  />
</svelte:head>
<main class=" w-screen h-screen relative select-none">
  <div id="mainFrame" class="w-65vw h-80vh bg-#242424 absolute-center rounded">
    <div
      id="leftBar"
      class="absolute left-0 w-4vw h-full bg-#343434 rounded shadow-black shadow-md"
    >
      <Navbar />
    </div>
    <div class="app bg-light absolute right-0 w-94% h-full -z-1">
      <Officers />
    </div>
  </div>
</main>

<style>
  :global(body) {
    background-color: transparent !important;
    font-family: 'Montserrat', sans-serif;
  }
</style>
