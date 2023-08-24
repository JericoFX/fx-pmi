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
    El,
  } from 'yesvelte';

  import Store from '../store/playerStore';
  import Assignment from '../lib/Assignment.svelte';
  import Vehicles from '../lib/Vehicles.svelte';
  import { fetchNui } from '../utils/fetchNui';
  const { playerData, changeDuty, setData } = Store;

  // Function to test the changeDuty
  // setTimeout(() => {
  //   changeDuty('0', true);
  // }, 1500);

  let color = false;
  let openAssignament = false;
  let openVehicle = false;
  let currentID = null;

  const changeDutys = (id,bool) =>{
    fetchNui("changeDuty",async (cb)=>{
      try {
        if(cb){
          changeDuty(id,bool)
          return
        }
      } catch (error) {
          console.log(error)
          return
      }
    })
  }

</script>

<main class="w-full h-full">
  <El tag="h1" p="3" class="fw-600">OFFICERS</El>
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
      {#each $playerData as data, i (data.citizenid)}
        {@const duty = data.duty ? 'On Duty' : 'Off Duty'}
        {@const onDutyColor = data.duty ? 'success' : 'danger'}
        <TableRow>
          <TableCell
            class="hover:cursor-pointer"
            on:click={(e) => changeDutys(i, !data.duty)}
            ><Status color={onDutyColor}>{duty}</Status></TableCell
          >
          <TableCell>{data.callsign}</TableCell>
          <TableCell>{data.firstname}</TableCell>
          <TableCell>{data.lastname}</TableCell>
          <TableCell>{data.phone}</TableCell>
          <TableCell>{data.citizenid}</TableCell>
          <TableCell
            ><Button
              on:click={() => (openVehicle = !openVehicle)}
              disabled={!data.duty}
              ghost
            >
              <Icon name="car" size="auto" />
            </Button></TableCell
          >
          <TableCell
            ><Button
              on:click={() => (openAssignament = !openAssignament)}
              disabled={!data.duty || !data.assignment}
              ghost
            >
              <Icon name="info-hexagon" size="auto" />
            </Button></TableCell
          >
        </TableRow>
      {/each}
    </TableBody>
  </Table>
  <Assignment bind:showCenter={openAssignament} id={currentID} />
  <Vehicles bind:showCenter={openVehicle} />
</main>
