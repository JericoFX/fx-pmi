<script lang="ts">
  import {
    Badge,
    Button,
    El,
    Icon,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Status,
    FormInput,
    ButtonGroup,
  } from 'yesvelte';

  import store, { playerDatas } from '../lib/utils/store';
  import Modals from '../lib/pages/Modals.svelte';
  import Popover from '../lib/pages/Popover.svelte';
  import { fetchNui } from '../lib/utils/fetchNui';
  const { playerData } = store();

  const openModal = (data: boolean | { plate: string; vehicle: string }) => {
    let open = true;
    const m = new Modals({
      target: document.body,
      props: {
        show: open,
        vehicleData: {
          vehicle: data.vehicle,
          plate: data.plate,
        },
      },
    });
  };
</script>

<main class="w-full h-full relative rounded overflow-scroll containers">
  <El tag="h1" class=" text-2vw  w-full">Officers</El>
  <Table hover>
    <TableHead>
      <TableRow>
        <TableCell>Duty</TableCell>
        <TableCell>Callsign</TableCell>
        <TableCell>First Name</TableCell>
        <TableCell>Last Name</TableCell>
        <TableCell>Cid</TableCell>
        <TableCell>Radio</TableCell>
        <TableCell>Vehicle</TableCell>
        <TableCell>Assignment</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {#each $playerDatas as data}
        <TableRow>
          <TableCell
            >{#if data.duty}
              <Badge color="green">On Duty</Badge>
            {:else}
              <Badge color="red">Off Duty</Badge>
            {/if}</TableCell
          >
          <TableCell>{data.callsign}</TableCell>
          <TableCell>{data.firstname}</TableCell>
          <TableCell>{data.lastname}</TableCell>
          <TableCell>{data.citizenid}</TableCell>
          <TableCell>{data.radio}</TableCell>
          <TableCell
            >{#if data.vehicle && data.duty}
              <Button><Icon name="car" /></Button>
              <Popover>
                <FormInput
                  col="12"
                  label="Vehicle Name:"
                  size="md"
                  readonly
                  value={data.vehicle.vehicle}
                />
                <FormInput
                  col="12"
                  label="Vehicle Plate:"
                  size="md"
                  readonly
                  value={data.vehicle.plate}
                />
                <ButtonGroup>
                  <Button
                    on:click={() =>
                      fetchNui('locateVehicle', { plate: data.vehicle.plate })}
                  >
                    <slot name="end">
                      <Icon name="gps" />
                    </slot>
                  </Button>
                </ButtonGroup>
              </Popover>
            {:else}
              <Button disabled><Icon name="car" /></Button>
            {/if}
          </TableCell>
          <TableCell
            >{#if data.assignment && data.duty}
              <Button>
                <Icon name="checklist" />
              </Button>
              <Popover header="Code 10-05">
                <FormInput
                  col="12"
                  label="Street:"
                  size="md"
                  readonly
                  value={data.assignment.street}
                />
                <FormInput
                  col="12"
                  label="Message:"
                  size="md"
                  readonly
                  value={data.assignment.message}
                />
              </Popover>
            {:else}
              <Button disabled><Icon name="checklist" /></Button>
            {/if}</TableCell
          >
        </TableRow>
      {/each}
    </TableBody>
  </Table>
</main>
