<script lang="ts">
  import { Button, El, Icon, Tooltip } from 'yesvelte';
  import Officers from './pages/Officers.svelte';
  import Store from "./store/playerStore"
  import Navbar from "./lib/Navbar.svelte"
  const {setData} from Store
  
  useNuiEvent("openMDT",function(data) 
    setData(data)
  end)

</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/yesvelte@next/css/tabler.min.css"
  />
</svelte:head>
<main class=" w-screen h-screen relative">
  <div id="mainFrame" class="w-65vw h-80vh bg-#242424 absolute-center rounded">
    <div
      id="leftBar"
      class="absolute left-0 w-4vw h-full bg-#343434 rounded shadow-black shadow-md"
    >
     <Navbar/>
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
