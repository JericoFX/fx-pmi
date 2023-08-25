<script lang="ts">
  import { Button, Icon, Tooltip } from 'yesvelte';
  import { darkMode } from '../store/playerStore';
  import { push } from 'svelte-spa-router';
  $: dark = $darkMode ? 'sun-off' : 'sun-low';
</script>

<div class="flex h-full justify-around items-center flex-col">
  <Button on:click={() => push('/')} size="lg">
    <Icon
      name="shield-check-filled"
      class="hover:w-9 transition-width cursor-pointer"
      size="2x"
    />
  </Button>

  <Tooltip placement="top">Officers</Tooltip>
  <Button on:click={() => push('/people')} size="lg">
    <Icon
      name="user"
      class="hover:w-9 transition-width cursor-pointer"
      size="2x"
    />
  </Button>
  <Tooltip placement="top">People</Tooltip>
  <Button size="lg">
    <Icon
      name="car"
      class="hover:w-9 transition-width cursor-pointer"
      size="2x"
    />
  </Button>
  <Tooltip placement="top">Cars</Tooltip>
  <Button size="lg">
    <Icon
      name="sos"
      class="hover:w-9 transition-width cursor-pointer"
      size="2x"
    />
  </Button>
  <Tooltip placement="top">Danger</Tooltip>
  <Button size="lg">
    <Icon
      name="sword"
      class="hover:w-9 transition-width cursor-pointer"
      size="2x"
    />
  </Button>
  <Tooltip placement="top">Weapons</Tooltip>
  <Button size="lg">
    <Icon
      name="lock-check"
      class="hover:w-9 transition-width cursor-pointer"
      size="2x"
    />
  </Button>
  <Tooltip placement="top">Config</Tooltip>
  <Button size="lg">
    <Icon
      on:click={() => ($darkMode = !$darkMode)}
      name={dark}
      class="hover:w-9 transition-width cursor-pointer"
      size="2x"
    />
  </Button>
  <!-- sun-off -->
  <Tooltip placement="top">{$darkMode ? 'Dark' : 'Light'}</Tooltip>
</div>
