<script lang="ts">
	import { onMount } from 'svelte';

	let loaded = $state(false);

	onMount(() => {
		// Slight delay so the animation feels intentional
		requestAnimationFrame(() => {
			loaded = true;
		});
	});
</script>

<section class="relative flex min-h-screen items-end overflow-hidden" data-od-id="hero">
	<!-- Background image -->
	<div class="absolute inset-0">
		<img
			src="/hero-bg.jpg"
			alt="Industrial warehouse facility"
			class="h-full w-full object-cover"
			loading="eager"
			fetchpriority="high"
		/>
		<!-- Dark gradient overlay — NOT a purple→blue gradient (design.md P0 #2) -->
		<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
		</div>
	</div>

	<!-- Content -->
	<div class="container-wide relative z-10 pb-20 md:pb-28">
		<!-- Kicker -->
		<p
			class="mb-4 text-xs font-semibold tracking-[0.2em] text-white/70 uppercase transition-all duration-1000"
			class:opacity-100={loaded}
			class:opacity-0={!loaded}
			style="transition-delay: 200ms;"
		>
			DISTRIBUTOR INDUSTRIAL SEJAK 1976
		</p>

		<!-- Headline — serif font per design.md P0 #4 -->
		<h1
			class="mb-6 max-w-3xl text-4xl leading-tight text-white transition-all duration-1000 md:text-6xl lg:text-7xl"
			class:opacity-100={loaded}
			class:opacity-0={!loaded}
			class:translate-y-0={loaded}
			class:translate-y-8={!loaded}
			style="transition-delay: 400ms;"
		>
			Solusi Lengkap Kebutuhan Industri Anda
		</h1>

		<!-- Subtitle -->
		<p
			class="text-light mb-10 max-w-xl text-lg leading-relaxed transition-all duration-1000 md:text-xl"
			class:opacity-100={loaded}
			class:opacity-0={!loaded}
			class:translate-y-0={loaded}
			class:translate-y-6={!loaded}
			style="transition-delay: 600ms;"
		>
			Dari power distribution hingga flooring — kami satu pintu untuk semua kebutuhan
			engineering pabrik Anda.
		</p>

		<!-- CTAs -->
		<div
			class="flex flex-wrap gap-4 transition-all duration-1000"
			class:opacity-100={loaded}
			class:opacity-0={!loaded}
			class:translate-y-0={loaded}
			class:translate-y-4={!loaded}
			style="transition-delay: 800ms;"
		>
			<a
				href="/services"
				class="bg-accent hover:bg-accent-hover rounded px-7 py-3.5 text-sm font-semibold text-white transition-colors"
			>
				Lihat Produk Kami
			</a>
			<a
				href="/contact"
				class="rounded border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
			>
				Hubungi Sales
			</a>
		</div>
	</div>

	<!-- Scroll indicator -->
	<div class="absolute right-0 bottom-8 left-0 flex justify-center">
		<div
			class="h-12 w-6 rounded-full border-2 border-white/30 p-1"
			class:opacity-100={loaded}
			class:opacity-0={!loaded}
			style="transition: opacity 1s ease; transition-delay: 1200ms;"
		>
			<div class="bg-white/60 mx-auto h-2 w-1 animate-bounce rounded-full"></div>
		</div>
	</div>
</section>
