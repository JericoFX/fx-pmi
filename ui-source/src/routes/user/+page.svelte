<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Card from '$lib/components/ui/card';
	import * as Table from '$lib/components/ui/table';
</script>

<div class="w-full h-full relative">
	<p class="text-background text-4xl mb-5">Citizen Finder</p>
	<div class="w-full h-12">
		<form class="flex justify-center h-full w-full items-center space-x-2">
			<div class="flex justify-center items-center">
				<Input class="w-[20vw]" type="text" placeholder="USER ID" />
				<Button type="submit">Subscribe</Button>
			</div>
		</form>
		<div class="body absolute w-full h-[90%]">
			<div class="grid grid-cols-2 items-center justify-center w-full h-full gap-2">
				<Card.Root class="bg-foreground">
					<Card.Header>
						<Card.Title class="text-background">Basic Info</Card.Title>
						<Card.Description>Basic Information of the Citizen</Card.Description>
					</Card.Header>
					<Card.Content class="text-background">
						<p>First Name: Jerico</p>
						<p>Last Name: Acosta</p>
						<p>CitizenID: ASD1234</p>
					</Card.Content>
					<Card.Footer class="flex justify-evenly w-full">
						<Button variant="destructive">Warrant</Button>
						<Button variant="destructive">B.O.L.O</Button>
					</Card.Footer>
				</Card.Root>
				<Card.Root class="bg-foreground">
					<Card.Header>
						<Card.Title class="text-background">Vehicles</Card.Title>
						<Card.Description>Vehicles of the Citizen</Card.Description>
					</Card.Header>
					<Card.Content class="text-background h-36 overflow-y-auto ">
						<Table.Root class="overflow-y-auto h-12">
							<Table.Caption>List of Vehicles</Table.Caption>
							<Table.Header>
								<Table.Row>
									<Table.Head class="">Plate</Table.Head>
									<Table.Head>Name</Table.Head>
									<Table.Head>Warrant</Table.Head>
									<Table.Head class="text-center">Bolo</Table.Head>
								</Table.Row>
							</Table.Header>
							<Table.Body>
								<Table.Row class="h-6">
									<Table.Cell class="font-medium">ASD1234</Table.Cell>
									<Table.Cell>Jerico FX</Table.Cell>
									<Table.Cell />
									<Table.Cell class="text-center" />
								</Table.Row>
							</Table.Body>
						</Table.Root>
					</Card.Content>
					<Card.Footer class="flex justify-evenly w-full">
						<!-- <Button variant="destructive">Warrant</Button>
						<Button variant="destructive">B.O.L.O</Button> -->
					</Card.Footer>
				</Card.Root>
			</div>
		</div>
	</div>
</div>
