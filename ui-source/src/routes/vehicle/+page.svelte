<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as Card from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
</script>

<main class="w-full h-full relative">
	<p class="text-background text-4xl mb-5">Vehicle Explorer</p>
	<form class="flex justify-center w-full items-start space-x-2">
		<div class="flex justify-center items-center">
			<Input class="w-[30vw]" type="text" placeholder="Vehicle Plate" />
			<Button type="submit">Find</Button>
		</div>
	</form>
	<div class="flex justify-center items-center w-full h-full space-x-2">
		<Card.Root class="bg-foreground w-[40vw]">
			<Card.Header>
				<Card.Title class="text-background">Vehicle Info</Card.Title>
				<!-- <Card.Description>Basic Information of the Citizen</Card.Description> -->
			</Card.Header>
			<Card.Content class="text-background  gap-3">
				<Label for="name">Model:</Label>
				<Input class="text-background" id="name" readonly />
				<br />
				<Label for="color">Color:</Label>
				<Input class="text-background" id="color" readonly />
				<br />
				<Badge variant="destructive" class="text-center">Warrant Found</Badge>
			</Card.Content>
			<Separator />
			<Card.Footer class="flex justify-evenly w-full mt-2">
				<Button variant="destructive">Warrant</Button>
				<Button variant="secondary">B.O.L.O</Button>
			</Card.Footer>
		</Card.Root>
	</div>
</main>
