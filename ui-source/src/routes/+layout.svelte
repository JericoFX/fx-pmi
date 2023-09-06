<script lang="ts">
	import { IconCar, IconSettings, IconShieldCheck, IconUser } from '@tabler/icons-svelte';
	import { page } from '$app/stores';
	import '../app.postcss';
	import store from '../lib/store';
	import { useNuiEvent } from '$lib/useNuiEvent';

	const { changeNUI, setData, open } = store();

	useNuiEvent('openNUI', ({ open, mydata }) => {
		changeNUI(open);
	});
</script>

{#if $open}
	<div class="w-screen h-screen relative">
		<div
			class="w-[60vw] h-[70vh] bg-foreground absolute rounded m-auto top-0 bottom-0 left-0 right-0"
		>
			<div class="absolute left-0 w-[5vw] h-full bg-background shadow-md shadow-black rounded">
				<div class="flex flex-col justify-evenly items-center h-full">
					<a href="/">
						<div
							class:active={$page.route.id === '/'}
							class="w-12 h-12 transition-all hover:shadow-xl shadow-black justify-center items-center flex rounded-xl"
						>
							<IconShieldCheck class="" />
						</div>
					</a>
					<a href="/user">
						<div
							class:active={$page.route.id === '/user'}
							class="w-12 h-12 transition-all hover:shadow-md shadow-black justify-center items-center flex rounded-xl"
						>
							<IconUser />
						</div>
					</a>
					<a href="/vehicle">
						<div
							class:active={$page.route.id === '/vehicle'}
							class="w-12 h-12 transition-all hover:shadow-md shadow-black justify-center items-center flex rounded-xl"
						>
							<IconCar />
						</div>
					</a>
					<a href="/settings">
						<div
							class:active={$page.route.id === '/vehicle'}
							class="w-12 h-12 transition-all hover:shadow-md shadow-black justify-center items-center flex rounded-xl"
						>
							<IconSettings />
						</div>
					</a>
				</div>
			</div>
			<div class="absolute right-0 w-[55vw] h-full rounded p-3">
				<slot />
			</div>
		</div>
	</div>
{/if}

<style>
	.active {
		--tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
		--tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
			var(--tw-shadow);
	}
	:global(*) {
		overflow: hidden;
	}
</style>
