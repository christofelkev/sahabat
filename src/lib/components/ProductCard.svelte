<script lang="ts">
	import type { Component } from 'svelte';
	import type { ProductCategory } from '$lib/data/products';
	import IconPower from '$lib/icons/IconPower.svelte';
	import IconAutomation from '$lib/icons/IconAutomation.svelte';
	import IconConduit from '$lib/icons/IconConduit.svelte';
	import IconHoist from '$lib/icons/IconHoist.svelte';
	import IconLighting from '$lib/icons/IconLighting.svelte';
	import IconTape from '$lib/icons/IconTape.svelte';
	import IconBackup from '$lib/icons/IconBackup.svelte';
	import IconFluid from '$lib/icons/IconFluid.svelte';
	import IconTools from '$lib/icons/IconTools.svelte';
	import IconFlooring from '$lib/icons/IconFlooring.svelte';

	interface Props {
		category: ProductCategory;
	}

	let { category }: Props = $props();

	// Map iconName to component
	const iconMap: Record<string, Component<{ class?: string; size?: number | string }>> = {
		power: IconPower,
		automation: IconAutomation,
		conduit: IconConduit,
		hoist: IconHoist,
		lighting: IconLighting,
		tape: IconTape,
		backup: IconBackup,
		fluid: IconFluid,
		tools: IconTools,
		flooring: IconFlooring
	};

	const IconComponent = $derived(iconMap[category.iconName] || IconPower);
</script>

<div
	class="border-border group flex flex-col justify-between border bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
	id={category.id}
>
	<div>
		<!-- Top row: Icon + Brand Badge -->
		<div class="mb-5 flex items-start justify-between">
			<div
				class="bg-surface text-primary border-border flex h-12 w-12 items-center justify-center rounded border transition-colors group-hover:bg-primary group-hover:text-white"
			>
				<IconComponent class="h-6 w-6" />
			</div>
			<span class="text-mid bg-surface border-border rounded border px-2.5 py-1 font-mono text-xs">
				{category.brand}
			</span>
		</div>

		<!-- Category Title & Short Desc -->
		<h3 class="text-dark mb-2 text-xl font-bold transition-colors group-hover:text-primary">
			{category.name}
		</h3>
		<p class="text-mid mb-5 text-sm leading-relaxed">
			{category.description}
		</p>

		<!-- Key Items List -->
		<div class="border-border border-t pt-4">
			<p class="text-dark mb-2 font-mono text-xs font-semibold tracking-wider uppercase">
				Komponen Utama:
			</p>
			<ul class="text-mid space-y-1.5 text-xs">
				{#each category.items as item}
					<li class="flex items-center gap-2">
						<span class="bg-primary/40 h-1 w-1 rounded-full"></span>
						<span>{item}</span>
					</li>
				{/each}
			</ul>
		</div>

		<!-- Applications Tags -->
		<div class="mt-4 flex flex-wrap gap-1.5">
			{#each category.applications as app}
				<span class="bg-surface text-dark/70 rounded px-2 py-0.5 text-[11px]">
					{app}
				</span>
			{/each}
		</div>
	</div>

	<!-- Bottom Action -->
	<div class="border-border mt-6 border-t pt-4">
		<a
			href="/contact"
			class="text-primary hover:text-primary-light inline-flex items-center gap-1.5 text-xs font-bold tracking-wide transition-colors"
		>
			Konsultasi Spesifikasi
			<svg
				class="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="1.8"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
			</svg>
		</a>
	</div>
</div>
