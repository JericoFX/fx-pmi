<script lang="ts">
  import {
    El,
    Fieldset,
    Accordions,
    Accordion,
    AccordionBody,
    AccordionHeader,
    Badge,
    Label,
    ButtonGroup,
    Button,
  } from 'yesvelte';
</script>

<section class="w-full h-full relative overflow-scroll">
  <El tag="h1" class=" text-2vw w-full">Reports</El>
  <!-- <Fieldset class="h-full"> -->
  <Accordions>
    {#each [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as d}
      <Accordion>
        <AccordionHeader
          >CODE: <span class="ml-3"
            ><Badge color="youtube">10-{d}</Badge>
            {#if d % 2 !== 0}
              <Badge color="primary"
                >Assigned to:
                {d}</Badge
              >
            {:else}
              <Badge color="green">Not Taked</Badge>
            {/if}
          </span></AccordionHeader
        >
        <AccordionBody>
          <p><Label for="id-message">Message:</Label></p>
          <Fieldset id="id-message">{d}</Fieldset>
          <p><Label for="id-street">Street:</Label></p>
          <Fieldset id="id-street">Hola</Fieldset>
          <El row>
            <ButtonGroup>
              <Button>Locate</Button>
              <Button>Take</Button>
            </ButtonGroup>
          </El>
        </AccordionBody>
      </Accordion>
    {/each}
  </Accordions>
  <!-- </Fieldset> -->
</section>
