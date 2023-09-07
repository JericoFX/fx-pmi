<script>
  import { Button, FormInput, Modal, ModalBody, ModalFooter } from 'yesvelte';

  export let show = false;
  export let vehicleData = {};
</script>

<Modal title="Center Modal" placement="center" bind:show>
  <ModalBody>
    <FormInput label="Name" value={vehicleData.vehicle} readonly />
    <FormInput label="Plate" value={vehicleData.plate} readonly />
  </ModalBody>
  <ModalFooter>
    <Button on:click={() => (show = !show)}>Close</Button>
  </ModalFooter>
</Modal>
