<script lang="ts">
  import { Icon } from 'yesvelte';
  import store from '../utils/store';
  const { currentPage, darkMode, changeDarkMode } = store();
  $: {
    if ($darkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  }
</script>

<div class="w-5vw absolute shadow shadow-sm rounded shadow-black left-0 h-full">
  <div class="flex flex-col h-full items-center justify-evenly">
    <Icon name="shield" size={$currentPage === 'officer' ? '2x' : '1x'} />
    <Icon name="user" size={$currentPage === 'officer' ? '2x' : '1x'} />
    <Icon name="car" size={$currentPage === 'officer' ? '2x' : '1x'} />
    <Icon name="sword" size={$currentPage === 'officer' ? '2x' : '1x'} />
    <Icon name="settings" size={$currentPage === 'officer' ? '2x' : 'sm'} />
    {#if $darkMode}
      <Icon
        name="sun"
        class="hover:cursor-pointer"
        size={$currentPage === 'officer' ? '2x' : 'sm'}
        on:click={() => changeDarkMode(false)}
      />
    {:else}
      <Icon
        name="moon"
        class="hover:cursor-pointer"
        on:click={() => changeDarkMode(true)}
        size={$currentPage === 'officer' ? '2x' : 'sm'}
      />
    {/if}
  </div>
</div>
