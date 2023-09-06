<script lang="ts">
	import Badge from '$lib/components/ui/badge/badge.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Table from '$lib/components/ui/table';
	import store from '$lib/store';
	import { IconCar } from '@tabler/icons-svelte';
	import type { PageData } from './$types';
	import PopOver from '$lib/pages/PopOver.svelte';
	const { playerData, setData, changeVehicle } = store();
	export let data: PageData;

	// useNuiEvent('openNUI', ({ playerdata }) => {
	// 	setData(playerdata);
	// });
</script>

<div class="overflow-y-auto overflow-hidden h-full w-full">
	<p class="text-background text-4xl mb-5">{data.hola}</p>
	<Table.Root>
		<Table.Caption class="text-background">A list of your recent invoices.</Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head class="w-[120px] text-background">Duty</Table.Head>
				<Table.Head class="w-[100px] text-background">Callsign</Table.Head>
				<Table.Head class="text-center">First Name</Table.Head>
				<Table.Head class="text-center">Last Name</Table.Head>
				<Table.Head class="text-center">Cid</Table.Head>
				<Table.Head class="text-center">Rank</Table.Head>
				<Table.Head class="text-center">Radio</Table.Head>
				<Table.Head class="text-center">Vehicle</Table.Head>
				<Table.Head class="text-center">Assignment</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each $playerData as data, i (i)}
				<Table.Row>
					<Table.Cell class="font-medium text-background"
						>{#if data.duty}
							<Badge variant="default">On Duty</Badge>
						{:else}
							<Badge variant="destructive">Off Duty</Badge>
						{/if}</Table.Cell
					>
					<Table.Cell class="text-center text-background"
						>{data.callsign || 'NO Callsign'}</Table.Cell
					>
					<Table.Cell class="text-center text-background">{data.firstname}</Table.Cell>
					<Table.Cell class="text-center text-background">{data.lastname}</Table.Cell>
					<Table.Cell class="text-center text-background">{data.citizenid}</Table.Cell>
					<Table.Cell class="text-center text-background">{data.rank}</Table.Cell>
					<Table.Cell class="text-center text-background">{data.radio}</Table.Cell>
					<Table.Cell class="text-center text-background"
						>{#if data.vehicle && data.duty}
							<PopOver vehicle={data.vehicle} />
						{:else}
							<Button disabled><IconCar /></Button>
						{/if}</Table.Cell
					>
					<Table.Cell class="text-center text-background"
						>{#if data.assignment}

						{/if}</Table.Cell
					>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
