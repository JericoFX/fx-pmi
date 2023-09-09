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
  import store,{myData} from '../lib/utils/store';
  const { reports, markReport } = store();
</script>

<section class="w-full h-full relative overflow-scroll">
  <El tag="h1" class=" text-2vw w-full">Reports</El>
  <!-- <Fieldset class="h-full"> -->
  <Accordions>
    {#each $reports as data  (data.id)}
      <Accordion>
        <AccordionHeader
          >CODE: <span class="ml-3"
            ><Badge color="youtube">{data.code}</Badge>
            {#if data.taked === false}
              <Badge color="green">Not Taked</Badge>
            {:else}
              <Badge color="primary"
                >Assigned to:
                {data.callsign}</Badge
              >
            {/if}
          </span></AccordionHeader
        >
        <AccordionBody>
          <p><Label for="id-message">Message:</Label></p>
          <Fieldset id="id-message">{data.message}</Fieldset>
          <p><Label for="id-street">Street:</Label></p>
          <Fieldset id="id-street">{data.street}</Fieldset>
          <El row>
            <ButtonGroup>
              <Button>Locate</Button>
              <Button
                disabled={data.taked}
                on:click={() => markReport($myData.callsign, true, data.id)}
                >Take</Button
              >
              {#if data.taked}
                <Button
                  color="youtube"
                  on:click={() => markReport($myData.callsign, false, data.id)}
                  >Release</Button
                >
              {/if}
            </ButtonGroup>
          </El>
        </AccordionBody>
      </Accordion>
    {/each}
  </Accordions>
  <!-- </Fieldset> -->
</section>
