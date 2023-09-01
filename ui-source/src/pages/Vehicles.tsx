import { Button } from '@/components/ui/button';
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
} from '@/components/ui/textfield';
import { JSX } from 'solid-js';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
const Texto = (props: {
  title: number | boolean | Node | JSX.ArrayElement | (string & {});
  place: string;
}) => {
  return (
    <>
      <TextField>
        <TextFieldLabel class='text-background'>{props.title}</TextFieldLabel>
        <TextFieldInput type='text' placeholder={props.place} />
      </TextField>
    </>
  );
};

const Vehicles = () => {
  return (
    <>
      <div class='p-3 h-full w-full'>
        <p class='text-background text-4xl'>Vehicle Info</p>
        <div class='w-full flex justify-center items-center mt-3'>
          <TextField class='w-[30vw] bg-foreground text-background '>
            <TextFieldInput
              class='bg-foreground text-center'
              type='text'
              placeholder='Plate of the vehicle'
            />
          </TextField>
          <Button>Search</Button>
        </div>
        <div
          id='vehicleInformation'
          class='mt-3 grid grid-cols-1 w-full  gap-10'
        >
          <Card class='bg-foreground'>
            <CardHeader>
              <CardTitle class='text-background'>Vehicle Information</CardTitle>
              <CardDescription class='text-background'>
                Information about vehicle:Plate
              </CardDescription>
            </CardHeader>
            <CardContent class='grid grid-cols-1 gap-5'>
              <Texto title='Vehicle Owner' place='JERICOFX' />
              <Texto title='Vehicle Name' place='PRIMO' />
              <Texto title='Vehicle Garage' place='In Garage' />
              <Badge variant='destructive'>Warrant Found</Badge>
            </CardContent>
            <CardFooter class='grid grid-cols-3 gap-3'>
              <Button variant='destructive'>Check Warrant</Button>
              <Button>Create Warrant</Button>
              <Button variant='ghost' class='text-background'>
                Something Else
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Vehicles;
