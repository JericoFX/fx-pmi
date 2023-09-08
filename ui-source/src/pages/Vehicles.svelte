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
    Input,
  } from 'yesvelte';
</script>

<section class="w-full h-full relative">
  <El tag="h1" class=" text-2vw w-full">Vehicles</El>
  <El class="w-full flex justify-center items-center">
    <FormInput class="w-100">
      <Button color="primary" slot="end">Search</Button>
    </FormInput>
  </El>
  <Fieldset class="w-full h-85% absolute flex-center">
    <Card class="w-full">
      <CardHeader class="text-center w-full">Vehicle Information</CardHeader>
      <CardBody>
        <El row>
          <FormInput readonly col="6" label="Vehicle Owner:" />
          <FormInput readonly col="6" label="Vehicle Name:" />
          <FormInput readonly col="12" label="Vehicle Plate:" />
          <FormInput readonly col="12" label="Vehicle Category:" />
          <FormInput readonly col="12" label="Vehicle Color:" />
          <Badge color="youtube" col="2">Warrant Found</Badge>
        </El>
      </CardBody>
      <CardFooter class="w-full">
        <ButtonGroup class="w-full ">
          <Button color="youtube">Add Warrant</Button>
          <Button>Remove Warrant</Button>
          <Button color="primary">Locate Vehicle</Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  </Fieldset>
</section>
