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
	class="border-border group flex flex-col justify-between overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
	id={category.id}
>
	<!-- Product Category Image Header -->
	<div class="border-border relative aspect-16/10 w-full overflow-hidden border-b bg-surface">
		<img
			src={category.image}
			alt={category.name}
			class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
			loading="lazy"
		/>
		<!-- Brand Pill Floating Badge -->
		<div class="absolute top-3 right-3 rounded bg-dark/85 px-2.5 py-1 text-[11px] font-mono text-white backdrop-blur-xs">
			{category.brand}
		</div>
	</div>

	<!-- Content Body -->
	<div class="flex flex-1 flex-col justify-between p-6">
		<div>
			<!-- Title & Icon -->
			<div class="mb-3 flex items-start gap-3">
				<div class="border-border bg-surface text-primary mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded border transition-colors group-hover:bg-primary group-hover:text-white">
					<IconComponent class="h-5 w-5" />
				</div>
				<h3 class="text-dark font-display text-xl font-bold leading-snug transition-colors group-hover:text-primary">
					{category.name}
				</h3>
			</div>

			<p class="text-mid mb-5 text-sm leading-relaxed">
				{category.description}
			</p>

			<!-- Key Items List -->
			<div class="border-border border-t pt-4">
				<p class="text-dark mb-2 font-mono text-xs font-semibold tracking-wider uppercase">
					Komponen & Tipe Tersedia:
				</p>
				<ul class="text-mid space-y-1.5 text-xs">
					{#each category.items as item}
						<li class="flex items-center gap-2">
							<span class="bg-primary/50 h-1.5 w-1.5 shrink-0 rounded-full"></span>
							<span class="font-medium text-dark/85">{item}</span>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Applications Tags -->
			<div class="mt-4 flex flex-wrap gap-1.5">
				{#each category.applications as app}
					<span class="bg-surface text-dark/70 border-border/70 rounded border px-2 py-0.5 text-[11px]">
						{app}
					</span>
				{/each}
			</div>
		</div>

		<!-- Action Footer -->
		<div class="border-border mt-6 border-t pt-4">
			<a
				href="/contact"
				class="text-primary hover:text-primary-light inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase transition-colors"
			>
				Minta Penawaran Harga
				<svg
					class="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</a>
		</div>
	</div>
</div>
