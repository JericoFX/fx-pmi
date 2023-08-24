<script lang="ts">
  import { Icon, Tooltip } from 'yesvelte';
  import { darkMode } from '../store/playerStore';
  $: dark = $darkMode ? 'sun-off' : 'sun-low';
</script>

<div class="flex h-full justify-around items-center flex-col">
  <Icon
    name="shield-check-filled"
    class="hover:w-9 transition-width cursor-pointer"
    size="2x"
  />
  <Tooltip placement="top">Officers</Tooltip>
  <Icon
    name="user"
    class="hover:w-9 transition-width cursor-pointer"
    size="2x"
  />
  <Tooltip placement="top">People</Tooltip>
  <Icon
    name="car"
    class="hover:w-9 transition-width cursor-pointer"
    size="2x"
  />
  <Tooltip placement="top">Cars</Tooltip>
  <Icon
    name="sos"
    class="hover:w-9 transition-width cursor-pointer"
    size="2x"
  />
  <Tooltip placement="top">Danger</Tooltip>
  <Icon
    name="sword"
    class="hover:w-9 transition-width cursor-pointer"
    size="2x"
  />
  <Tooltip placement="top">Weapons</Tooltip>
  <Icon
    name="lock-check"
    class="hover:w-9 transition-width cursor-pointer"
    size="2x"
  />
  <Tooltip placement="top">Config</Tooltip>
  <Icon
    on:click={() => ($darkMode = !$darkMode)}
    name={dark}
    class="hover:w-9 transition-width cursor-pointer"
    size="2x"
  />
  <!-- sun-off -->
  <Tooltip placement="top">{$darkMode ? 'Dark' : 'Light'}</Tooltip>
</div>
