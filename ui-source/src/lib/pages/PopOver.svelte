<script lang="ts">
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { IconCar } from '@tabler/icons-svelte';
	import store from '$lib/store';
	export let vehicle = {
		plate: '',
		vehicle: ''
	};
</script>

<Popover.Root>
	<Popover.PopoverTrigger asChild let:builder>
		<Button builders={[builder]} variant="default"><IconCar /></Button>
	</Popover.PopoverTrigger>
	<Popover.PopoverContent class="w-80 bg-foreground">
		<div class="grid gap-4">
			<div class="space-y-2">
				<h4 class="font-medium leading-none text-background">Vehicle</h4>
				<p class="text-sm text-muted-foreground">Vehicle Assigned to the citizenid:</p>
			</div>
			<div class="grid gap-2">
				<div class="grid grid-cols-3 items-center gap-4">
					<Label class="text-background" for="width">Name</Label>
					<Input
						readonly
						id="width"
						value={vehicle.vehicle}
						class="col-span-2 h-8 text-background"
					/>
				</div>
				<div class="grid grid-cols-3 items-center gap-4">
					<Label class="text-background" for="maxWidth">Plate</Label>
					<Input
						readonly
						id="maxWidth"
						value={vehicle.plate}
						class="col-span-2 h-8 text-background"
					/>
				</div>
			</div>
			<Button variant="secondary">Locate</Button>
		</div>
	</Popover.PopoverContent>
</Popover.Root>
