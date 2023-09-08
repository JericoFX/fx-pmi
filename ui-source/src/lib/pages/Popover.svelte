<script lang="ts">
  import { Popover, PopoverBody, PopoverHeader } from 'yesvelte';
  export let header: string = '';
</script>

<Popover>
  <PopoverHeader>{header}</PopoverHeader>
  <PopoverBody>
    <slot />
  </PopoverBody>
</Popover>
