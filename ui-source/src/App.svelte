<script lang="ts">
  import { Button, El, Icon,Tooltip } from "yesvelte";
    import Officers from "./pages/Officers.svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://unpkg.com/yesvelte@next/css/tabler.min.css"
  />
</svelte:head>
<main class=" w-screen h-screen relative">
  <div id="mainFrame" class="w-65vw h-80vh bg-#242424 absolute-center rounded">
    <div id="leftBar" class="absolute left-0 w-4vw h-full bg-#343434 rounded shadow-black shadow-md">
      <div class="flex h-full justify-around items-center flex-col">
        <Icon name="shield-check-filled" class="hover:w-9 transition-width cursor-pointer" color="light" size="2x" />
        <Tooltip placement="top">Officers</Tooltip>
        <Icon name="user" color="light" class="hover:w-9 transition-width cursor-pointer" size="2x" />
         <Tooltip placement="top">People</Tooltip>
        <Icon name="car" color="light" class="hover:w-9 transition-width cursor-pointer" size="2x" />
        <Tooltip placement="top">Cars</Tooltip>
        <Icon name="sos" color="light" class="hover:w-9 transition-width cursor-pointer" size="2x" />
        <Tooltip placement="top">Danger</Tooltip>
        <Icon name="sword" color="light" class="hover:w-9 transition-width cursor-pointer" size="2x" />
        <Tooltip placement="top">Weapons</Tooltip>
        <Icon name="lock-check" color="light" class="hover:w-9 transition-width cursor-pointer" size="2x" />
        <Tooltip placement="top">Config</Tooltip>
      </div>
    </div>
    <div class="app bg-light absolute right-0 w-94% h-full -z-1">
      <El tag="h1" p="3" class="fw-600">OFFICERS</El>
        <Officers ></Officers>
    </div>
  </div>
</main>

<style>
  :global(body) {
    background-color: transparent !important;
    font-family: 'Montserrat', sans-serif;
  }
</style>
