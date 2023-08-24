<script lang="ts">
  import {
    Button,
    ButtonGroup,
    Divider,
    El,
    FormInput,
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
    <FormInput disabled value="PRIMO" placeholder="Primo">
      <span slot="start-icon">Vehicle</span>
    </FormInput>
    <FormInput disabled value="ASD123" placeholder="Primo">
      <span slot="start-icon">Plate</span>
    </FormInput>
  </ModalBody>
  <ModalFooter>
    <ButtonGroup>
      <Button color="primary" on:click={() => (showCenter = false)}>OK</Button>
      <Button color="danger" on:click={() => (showCenter = false)}>Close</Button
      >
      <Button color="secondary" on:click={() => (showCenter = false)}
        >Coordinates</Button
      >
    </ButtonGroup>
  </ModalFooter>
</Modal>
