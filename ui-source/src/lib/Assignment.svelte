<script lang="ts">
  import { Button, Divider, El, Modal, ModalBody, ModalFooter } from 'yesvelte';
  export let showCenter = false;
  export let id = {};
</script>

<main />
<Modal title="Assignament Window" placement="center" bind:show={showCenter}>
  <ModalBody>
    <El tag="h3">Current: Jerico</El>
    <Divider />
    <El tag="h4">Assignament: Asddas</El>
  </ModalBody>
  <ModalFooter>
    <Button color="primary" on:click={() => (showCenter = false)}>OK</Button>
  </ModalFooter>
</Modal>
