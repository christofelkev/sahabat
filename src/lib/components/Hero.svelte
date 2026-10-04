<script lang="ts">
	import { onMount } from 'svelte';

	let loaded = $state(false);
	let videoEl = $state<HTMLVideoElement | null>(null);

	onMount(() => {
		requestAnimationFrame(() => {
			loaded = true;
		});

		// Ensure video plays smoothly if browser allows autoplay
		if (videoEl) {
			videoEl.play().catch(() => {
				// Autoplay policy fallback handled gracefully by poster
			});
		}
	});
</script>

<section class="relative flex min-h-screen items-end overflow-hidden bg-zinc-950 select-none" data-od-id="hero" aria-label="Hero Sahabat Indonesia">
	<!-- Background Video Player with Poster Fallback -->
	<div class="absolute inset-0 z-0 overflow-hidden">
		<video
			bind:this={videoEl}
			class="subtle-zoom h-full w-full object-cover object-center scale-105"
			autoplay
			loop
			muted
			playsinline
			preload="auto"
			poster="/hero-bg.jpg"
		>
			<source src="/videos/hero-industrial.mp4" type="video/mp4" />
			<!-- Fallback static image if video fails to load -->
			<img
				src="/hero-bg.jpg"
				alt="Gedung Head Office & Pergudangan PT Sahabat Indonesia Inti Mandiri"
				class="h-full w-full object-cover object-center"
				loading="eager"
				fetchpriority="high"
			/>
		</video>

		<!-- Multi-stop cinematic dark gradient overlays for pristine readability -->
		<div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 via-45% to-zinc-950/35"></div>
		<div class="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-transparent"></div>
		<div class="absolute inset-0 bg-radial-vignette opacity-60 pointer-events-none"></div>
	</div>

	<!-- Content Container -->
	<div class="container-wide relative z-10 pb-20 md:pb-28 pt-32">
		<!-- Live Status Indicator Pill (NRB Inspired) -->
		<div
			class="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-zinc-900/80 px-4 py-1.5 backdrop-blur-md transition-all duration-1000 shadow-lg"
			class:opacity-100={loaded}
			class:opacity-0={!loaded}
			class:translate-y-0={loaded}
			class:translate-y-4={!loaded}
			style="transition-delay: 150ms;"
		>
			<span class="relative flex h-2.5 w-2.5">
				<span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
				<span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
			</span>
			<span class="font-mono text-xs font-semibold tracking-wider text-zinc-200 uppercase">
				Warehouse & Head Office Aktif • Muara Karang, Jakarta
			</span>
		</div>

		<!-- Kicker -->
		<p
			class="mb-3 text-xs font-mono font-semibold tracking-[0.25em] text-red-400 uppercase transition-all duration-1000"
			class:opacity-100={loaded}
			class:opacity-0={!loaded}
			class:translate-y-0={loaded}
			class:translate-y-4={!loaded}
			style="transition-delay: 300ms;"
		>
			// DISTRIBUTOR & SUPPLIER KOMPONEN LISTRIK INDUSTRI • SEJAK 1976
		</p>

		<!-- Editorial Headline -->
		<h1
			class="mb-6 max-w-4xl text-4xl leading-[1.12] font-display text-white transition-all duration-1000 md:text-6xl lg:text-7xl tracking-tight"
			class:opacity-100={loaded}
			class:opacity-0={!loaded}
			class:translate-y-0={loaded}
			class:translate-y-8={!loaded}
			style="transition-delay: 500ms;"
		>
			Distributor Resmi Komponen Listrik, Otomasi & Peralatan Pabrik
		</h1>

		<!-- Grounded B2B Subtitle -->
		<p
			class="text-zinc-300 mb-10 max-w-2xl text-base leading-relaxed transition-all duration-1000 md:text-xl font-normal drop-shadow-sm"
			class:opacity-100={loaded}
			class:opacity-0={!loaded}
			class:translate-y-0={loaded}
			class:translate-y-6={!loaded}
			style="transition-delay: 700ms;"
		>
			Menyediakan pemutus arus (ACB & MCCB), PLC & inverter, konduit baja Panasonic, chain hoist Nitchi, hingga lampu industri Iwasaki EYE. Jaminan 100% original bergaransi pabrik dengan stok siap kirim dari pergudangan Muara Karang, Jakarta.
		</p>

		<!-- Interactive CTAs & Quick Pillars -->
		<div
			class="flex flex-col sm:flex-row sm:items-center gap-4 transition-all duration-1000"
			class:opacity-100={loaded}
			class:opacity-0={!loaded}
			class:translate-y-0={loaded}
			class:translate-y-4={!loaded}
			style="transition-delay: 900ms;"
		>
			<a
				href="/services"
				class="group relative inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 hover:bg-red-700 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 shadow-lg shadow-red-950/40 hover:-translate-y-0.5 hover:shadow-red-900/60"
			>
				<span>Lihat Katalog Produk</span>
				<svg
					class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</a>

			<a
				href="/contact"
				class="inline-flex items-center justify-center rounded-lg border border-zinc-700 hover:border-zinc-400 bg-zinc-900/60 hover:bg-zinc-800/80 px-7 py-3.5 text-sm font-semibold text-zinc-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5"
			>
				Minta Penawaran (Quotation)
			</a>

			<div class="hidden lg:flex items-center gap-4 border-l border-zinc-700/80 pl-6 ml-2">
				<div class="flex items-center gap-2 text-xs font-mono text-zinc-300">
					<svg class="h-4 w-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span>PKP e-Faktur Resmi</span>
				</div>
				<div class="flex items-center gap-2 text-xs font-mono text-zinc-300">
					<svg class="h-4 w-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
					</svg>
					<span>100% Produk Original</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute right-0 bottom-6 left-0 flex justify-center pointer-events-none z-10">
		<div
			class="flex flex-col items-center gap-2 transition-all duration-1000"
			class:opacity-100={loaded}
			class:opacity-0={!loaded}
			style="transition-delay: 1100ms;"
		>
			<span class="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">SCROLL</span>
			<div class="h-10 w-5 rounded-full border border-zinc-600/80 p-1 flex justify-center">
				<div class="h-2 w-1 rounded-full bg-red-400 animate-bounce"></div>
			</div>
		</div>
	</div>
</section>

<style>
	.bg-radial-vignette {
		background: radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.7) 100%);
	}

	@keyframes subtleZoom {
		0% {
			transform: scale(1.02);
		}
		50% {
			transform: scale(1.06);
		}
		100% {
			transform: scale(1.02);
		}
	}

	.subtle-zoom {
		animation: subtleZoom 30s ease-in-out infinite;
	}

	@media (prefers-reduced-motion: reduce) {
		.subtle-zoom {
			animation: none;
		}
		video {
			display: none;
		}
	}
</style>
