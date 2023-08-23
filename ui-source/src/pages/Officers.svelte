<script lang="ts">
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Status,
    Button,
    Icon,
  } from 'yesvelte';
  import Store from '../store/playerStore';
  const { playerData } = Store;
  let color = false;
</script>

<main class="w-full h-full">
  <Table hover class="mt-15">
    <TableHead>
      <TableRow>
        <TableCell>Duty</TableCell>
        <TableCell>Callsign</TableCell>
        <TableCell>First Name</TableCell>
        <TableCell>Last Name</TableCell>
        <TableCell>Phone</TableCell>
        <TableCell>ID</TableCell>
        <TableCell>Vehicle</TableCell>
        <TableCell>Assignment</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {#each $playerData as data (data.citizenid)}
        {@const duty = data.duty ? 'On Duty' : 'Off Duty'}
        {@const onDutyColor = duty ? 'danger' : 'success'}
        <TableRow>
          <TableCell on:click={() => (color = !color)}
            ><Status color={onDutyColor}>{duty}</Status></TableCell
          >
          <TableCell>{data.callsign}</TableCell>
          <TableCell>{data.firstname}</TableCell>
          <TableCell>{data.lastname}</TableCell>
          <TableCell>{data.phone}</TableCell>
          <TableCell>{data.citizenid}</TableCell>
          <TableCell
            ><Button disabled={!color} ghost>
              <Icon color="dark" name="car" size="auto" />
            </Button></TableCell
          >
          <TableCell
            ><Button disabled={!color} ghost>
              <Icon color="dark" name="info-hexagon" size="auto" />
            </Button></TableCell
          >
        </TableRow>
      {/each}
    </TableBody>
  </Table>
</main>
