<script lang="ts">
  interface Assignment {
  message?:string;
  street?:string;
  callsign?:string;
}
  import { Button, Divider, El, Modal, ModalBody, ModalFooter } from 'yesvelte';
  export let showCenter = false;
  export let id:Assignment = {};
</script>

<main />
<Modal title="Assignament Window" placement="center" bind:show={showCenter}>
  <ModalBody>
    <El tag="h3">Callsign: {id.callsign}</El>
    <Divider />
    <El tag="h4">Street: {id.street}</El>
    <Divider />
    <El tag="h5">Message: {id.message}</El>
  </ModalBody>
  <ModalFooter>
    <Button color="primary" on:click={() => (showCenter = false)}>OK</Button>
  </ModalFooter>
</Modal>
