<script lang="ts">
  import {
    Badge,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    El,
    Fieldset,
    FormInput,
    Icon,
    Input,
    Label,
  } from 'yesvelte';
</script>

<section class=" w-full h-full relative">
  <El tag="h1" class=" text-2vw w-full">Vehicles</El>
  <El class="w-full flex justify-center items-center">
    <FormInput class="w-100">
      <Button color="primary" slot="end">Search</Button>
    </FormInput>
  </El>
  <Fieldset class="w-full h-85% absolute flex-center">
    <Card class=" w-full  shadow-md shadow-black">
      <CardHeader class="text-center w-full ">Vehicle Information</CardHeader>
      <CardBody>
        <El row>
          <FormInput readonly col="12" label="Vehicle Owner:" />
          <FormInput readonly col="6" label="Vehicle Name:" />
          <FormInput readonly col="6" label="Vehicle Plate:" />
          <FormInput readonly col="12" label="Vehicle Category:" />
          <Label for="badge-color">Color</Label>
          <El
            id="badge-color"
            col="12"
            class="bg-white w-full h-3vh rounded shadow-inset shadow-sm"
          />
          <!-- <Label for="badge-warrant">Warrant</Label>
          <Badge id="badge-warrant" color="green" col="2"
            >Warrant not Found</Badge
          > -->
        </El>
      </CardBody>
      <CardFooter class="w-full">
        <ButtonGroup class="w-full ">
          <Button disabled color="youtube">Add Warrant</Button>
          <Button disabled>Remove Warrant</Button>
          <Button color="primary">Locate Vehicle <Icon name="gps" /></Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  </Fieldset>
</section>
