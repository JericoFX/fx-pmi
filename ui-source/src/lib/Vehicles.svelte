<script lang="ts">
interface Vehicle {
  entity?:string;
  plate?:string;
  vehicle?:string;
}


  import {
    Button,
    FormInput,
    Icon,
    Tooltip,
    Modal,
    ModalBody,
    ModalFooter,
  } from 'yesvelte';
  export let showCenter: boolean = false;
  export let id: Vehicle = {};
</script>

<main />
<Modal title="Vehicle Window" placement="center" bind:show={showCenter}>
  <ModalBody>
    <FormInput readonly value={id.vehicle}>
      <Button slot="end"
        ><Icon name="gps" />
        <Tooltip placement="top" text="Locate Vehicle" /></Button
      >
    </FormInput>
    <FormInput readonly value={id.plate.toUpperCase()}>
      <Button disabled slot="end">Plate</Button>
    </FormInput>
  </ModalBody>
  <ModalFooter>
    <Button color="danger" on:click={() => (showCenter = false)}>Close</Button>
  </ModalFooter>
</Modal>
