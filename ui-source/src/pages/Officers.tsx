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
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from '@/components/ui/textfield';
const Officers: Component<{}> = () => {
  const [people, { addPolicePlayers, changeDuty }] = usePlayerData();

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
              vehicle: { vehicle: string; plate: string };
              callsign: number | null;
            }) => (
              <>
                <TableRow>
                  <TableCell class='text-white'>
                    <Show
                      when={data.duty}
                      fallback={
                        <Badge
                          onClick={() => changeDuty(data.citizenid)}
                          variant='destructive'
                        >
                          {' '}
                          Off Duty
                        </Badge>
                      }
                    >
                      <Badge
                        onClick={() => changeDuty(data.citizenid)}
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
                      when={data.vehicle && data.duty}
                      fallback={
                        <Button disabled>
                          <IconCar></IconCar>
                        </Button>
                      }
                    >
                      <Popover>
                        <PopoverTrigger as={Button}>
                          {' '}
                          <IconCar></IconCar>
                        </PopoverTrigger>
                        <PopoverContent class='w-80 bg-foreground'>
                          <div class='grid gap-4'>
                            <PopoverTitle class='space-y-2'>
                              <h4 class='font-medium leading-none text-background'>
                                Vehicle
                              </h4>
                              <p class='text-sm text-muted-foreground'>
                                Current Vehicle: {data.citizenid}
                              </p>
                            </PopoverTitle>
                            <PopoverDescription class='grid gap-2'>
                              <TextField class='grid grid-cols-3 items-center gap-4'>
                                <TextFieldLabel class='text-right text-background'>
                                  Vehicle
                                </TextFieldLabel>
                                <TextFieldInput
                                  readOnly
                                  value={data.vehicle.vehicle}
                                  class='col-span-2 h-8 text-foreground'
                                />
                              </TextField>
                              <TextField class='grid grid-cols-3 items-center gap-4'>
                                <TextFieldLabel class='text-right text-background'>
                                  Plate
                                </TextFieldLabel>

                                <TextFieldInput
                                  readonly
                                  value={data.vehicle.plate}
                                  class='col-span-2 h-8 text-foreground'
                                />
                              </TextField>

                              <div>
                                <Button class='col-span-3 h-8'>Location</Button>
                              </div>
                            </PopoverDescription>
                          </div>
                        </PopoverContent>
                      </Popover>
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
                      <Popover>
                        <PopoverTrigger as={Button}>
                          {' '}
                          <IconShieldFilled></IconShieldFilled>
                        </PopoverTrigger>
                        <PopoverContent class='w-80'>
                          <div class='grid gap-4'>
                            <PopoverTitle class='space-y-2'>
                              <h4 class='font-medium leading-none'>
                                Assignment
                              </h4>
                              <p class='text-sm text-muted-foreground'>
                                Current Assign for CID: {data.citizenid}
                              </p>
                            </PopoverTitle>
                            <PopoverDescription class='grid gap-2'>
                              <TextField class='grid grid-cols-3 items-center gap-4'>
                                <TextFieldLabel class='text-right'>
                                  Code
                                </TextFieldLabel>
                                <TextFieldInput
                                  readOnly
                                  value='10-78'
                                  class='col-span-2 h-8'
                                />
                              </TextField>
                              <TextField class='grid grid-cols-3 items-center gap-4'>
                                <TextFieldLabel class='text-right'>
                                  Adress
                                </TextFieldLabel>
                                <TextFieldInput
                                  readonly
                                  value='Saint Rows'
                                  class='col-span-2 h-8'
                                />
                              </TextField>
                              <TextField class='grid grid-cols-3 items-center gap-4'>
                                <TextFieldLabel class='text-right'>
                                  Message
                                </TextFieldLabel>
                                <TextFieldInput
                                  readOnly
                                  value='Somebody is Dead here'
                                  class='col-span-2 h-8 text-ellipsis'
                                />
                              </TextField>
                              <div>
                                <Button class='col-span-3 h-8'>Location</Button>
                              </div>
                            </PopoverDescription>
                          </div>
                        </PopoverContent>
                      </Popover>
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
