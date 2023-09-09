<script lang="ts">
  import Callsign from "./lib/pages/Callsign.svelte";
import Container from "./lib/pages/Container.svelte";
  import Navbar from "./lib/pages/Navbar.svelte";
  import { debugData } from "./lib/utils/debugData";
    import { isEnvBrowser } from "./lib/utils/misc";
  import store,{myData} from "./lib/utils/store";
  import { useNuiEvent } from "./lib/utils/useNuiEvent";
  const { darkMode} = store();
  let open = isEnvBrowser()
  let forceOpenModal = false
  useNuiEvent("openNUI",({open,mydata,tabla})=>{
    open = open
    $myData = mydata
    if($myData.callsign === ""){
      forceOpenModal = true
    }
  })
  debugData([
    {
      action: "openNUI",
      data: {
        open: true,
        mydata: {
          citizenid: "ASD1234566",
          firstname: "Jerico",
          lastname: "FX",
          duty: true,
          callsign: "",
        },
      },
    },
  ]);
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/yesvelte@next/css/tabler.min.css"
  />
</svelte:head>

<main class="w-screen h-screen relative">
  {#if open}
  <div class="w-55vw h-70vh absolute-center rounded shadow-sm shadow-dark">
    <Navbar />
    <Container />
    <Callsign bind:open={forceOpenModal}></Callsign>
  </div>

  {/if}
</main>

<style>
  :global(body) {
    background-color: transparent !important;
  }
</style>
