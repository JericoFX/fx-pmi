import { Component, For, Show } from 'solid-js';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { usePlayerData } from '@/lib/Store';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { IconCar, IconShield, IconShieldFilled } from '@tabler/icons-solidjs';
const Officers: Component<{}> = () => {
  const [people, setPeople] = usePlayerData();

  return (
    <div class='overflow-auto h-full w-full relative no-scrollbar p-3'>
      <div class='mt-5 mb-5 mx-1 text-white text-5xl'>Officers List</div>
      <Table color='white'>
        <TableCaption>Officers</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead class='w-[100px] text-white'>Duty</TableHead>
            <TableHead>Callsign</TableHead>
            <TableHead class='w-[100px] text-white'>First Name</TableHead>
            <TableHead class='w-[100px] text-white'>Last Name</TableHead>
            <TableHead class='text-center'>ID</TableHead>
            <TableHead class='text-center'>Radio Channel</TableHead>
            <TableHead class='text-center'>Vehicle</TableHead>
            <TableHead class='text-center'>Assignment</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <For each={people}>
            {(data: {
              citizenid: string;
              duty: boolean;
              radio: number;
              firstname: string;
              lastname: string;
              assignment: Object;
              vehicle: Object;
              callsign: number | null;
            }) => (
              <>
                <TableRow>
                  <TableCell class='text-white'>
                    <Show
                      when={data.duty}
                      fallback={
                        <Badge
                          onClick={() =>
                            setPeople(
                              (e: { citizenid: string }) =>
                                e.citizenid === data.citizenid,
                              'duty',
                              (s: boolean) => !s
                            )
                          }
                          variant='destructive'
                        >
                          {' '}
                          Off Duty
                        </Badge>
                      }
                    >
                      <Badge
                        onClick={() =>
                          setPeople(
                            (e: { citizenid: string }) =>
                              e.citizenid === data.citizenid,
                            'duty',
                            (s: boolean) => !s
                          )
                        }
                        variant='outline'
                        class='text-white font-normal	'
                      >
                        {' '}
                        On Duty
                      </Badge>
                    </Show>
                  </TableCell>
                  <TableCell class='text-white text-center'>
                    {data.callsign}
                  </TableCell>
                  <TableCell class='text-white text-center'>
                    {data.firstname}
                  </TableCell>
                  <TableCell class='text-white text-center'>
                    {data.lastname}
                  </TableCell>
                  <TableCell class='text-white text-center'>
                    {data.citizenid}
                  </TableCell>
                  <TableCell class='text-center'>
                    <Button>{data.radio}</Button>
                  </TableCell>
                  <TableCell class='text-white text-center'>
                    <Show
                      when={!data.vehicle && data.duty}
                      fallback={
                        <Button disabled>
                          <IconCar></IconCar>
                        </Button>
                      }
                    >
                      <Button>
                        <IconCar></IconCar>
                      </Button>
                    </Show>
                  </TableCell>
                  <TableCell class='text-white text-center'>
                    <Show
                      when={data.assignment && data.duty}
                      fallback={
                        <Button disabled>
                          <IconShield></IconShield>
                        </Button>
                      }
                    >
                      <Button>
                        <IconShieldFilled></IconShieldFilled>
                      </Button>
                    </Show>
                  </TableCell>
                </TableRow>
              </>
            )}
          </For>
        </TableBody>
      </Table>
    </div>
  );
};
export default Officers;
