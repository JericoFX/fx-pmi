<script lang="ts">
  import { Button, FormInput, Modal, ModalBody, ModalFooter } from 'yesvelte';
  import store, { myData } from '../utils/store';
  export let open: boolean = false;
  let callsign = '';
  const updateCallsigns = () => {
    if (callsign.length >= 2) {
      $myData.callsign = callsign;
    }
  };

  $: d = callsign.length <= 3 || callsign == '';
</script>

<Modal title="Callsign Data" placement="center" bind:show={open}>
  <ModalBody>
    <FormInput
      textTransform="uppercase"
      label="Callsign"
      bind:value={callsign}
    />
  </ModalBody>
  <ModalFooter>
    <Button
      disabled={d}
      color="primary"
      on:click={() => (updateCallsigns(), (open = false))}>OK</Button
    >
  </ModalFooter>
</Modal>
