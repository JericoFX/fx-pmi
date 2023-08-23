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
  const { playerData, changeDuty } = Store;

  const change = (cid, data) => {
    changeDuty(cid, data);
  };
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
      {#each $playerData as data}
        {@const duty = data.duty ? 'On Duty' : 'Off Duty'}
        {@const onDutyColor = data.duty ? 'success' : 'danger'}
        <TableRow>
          <TableCell on:click={(e) => changeDuty(data.citizenid, !data.duty)}
            ><Status color={onDutyColor}>{duty}</Status></TableCell
          >
          <TableCell>{data.callsign}</TableCell>
          <TableCell>{data.firstname}</TableCell>
          <TableCell>{data.lastname}</TableCell>
          <TableCell>{data.phone}</TableCell>
          <TableCell>{data.citizenid}</TableCell>
          <TableCell
            ><Button disabled={!data.duty} ghost>
              <Icon color="dark" name="car" size="auto" />
            </Button></TableCell
          >
          <TableCell
            ><Button disabled={!data.duty} ghost>
              <Icon color="dark" name="info-hexagon" size="auto" />
            </Button></TableCell
          >
        </TableRow>
      {/each}
    </TableBody>
  </Table>
</main>
