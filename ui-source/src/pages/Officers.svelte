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
    Popover,
    PopoverBody,
    PopoverHeader,
    Status,
    Input,
    FormInput,
  } from 'yesvelte';
  import store from '../lib/utils/store';
  const { playerData } = store();
</script>

<main class="w-full h-full relative rounded overflow-scroll">
  <El tag="h1" class=" text-2vw w-full">Officers</El>
  <Table striped hover>
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
      {#each $playerData as data (data.citizenid)}
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
            >{#if data.vehicle}
              <Button><Icon name="car" /></Button>
            {:else}
              <Button disabled><Icon name="car" /></Button>
            {/if}
          </TableCell>
          <TableCell
            >{#if data.assignment}
              <Button
                ><Icon name="car" />
                <Popover>
                  <PopoverHeader
                    >Code: <Status color="youtube">10-5</Status></PopoverHeader
                  >
                  <PopoverBody>
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
                  </PopoverBody>
                </Popover>
              </Button>
            {:else}
              <Button disabled><Icon name="car" /></Button>
            {/if}</TableCell
          >
        </TableRow>
      {/each}
    </TableBody>
  </Table>
</main>
