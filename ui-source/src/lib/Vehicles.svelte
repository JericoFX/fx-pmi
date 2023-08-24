<script lang="ts">
  import {
    Button,
    ButtonGroup,
    Divider,
    El,
    FormInput,
    Icon,
    Tooltip,
    Modal,
    ModalBody,
    ModalFooter,
  } from 'yesvelte';
  export let showCenter: boolean = false;
  export let id: any = {};
</script>

<main />
<Modal title="Vehicle Window" placement="center" bind:show={showCenter}>
  <ModalBody>
    <FormInput readonly value="Primo">
      <Button slot="end"
        ><Icon name="gps" />
        <Tooltip placement="top" text="Locate Vehicle" /></Button
      >
    </FormInput>
    <FormInput readonly value="ASD12345">
      <Button disabled slot="end">Plate</Button>
    </FormInput>
  </ModalBody>
  <ModalFooter>
    <Button color="danger" on:click={() => (showCenter = false)}>Close</Button>
  </ModalFooter>
</Modal>
