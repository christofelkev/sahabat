<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import StatCounter from '$lib/components/StatCounter.svelte';
	import { scrollReveal } from '$lib/actions/scrollReveal';

	const productCategories = [
		'Power Distribution',
		'Factory Automation',
		'Conduit',
		'Hoists',
		'Lighting',
		'Electrical Tape',
		'Power Backup',
		'Fluid Handling',
		'Tools & Machinery',
		'Flooring'
	] as const;
</script>

<svelte:head>
	<title>PT Sahabat Indonesia Inti Mandiri — Distributor Industrial Terpercaya Jakarta</title>
	<meta
		name="description"
		content="Distributor electrical industrial terpercaya di Jakarta sejak 1976. Power distribution, factory automation, conduit, hoists, lighting, dan lainnya."
	/>
	<meta
		property="og:title"
		content="PT Sahabat Indonesia Inti Mandiri — Distributor Industrial Jakarta"
	/>
	<meta
		property="og:description"
		content="Satu pintu untuk semua kebutuhan engineering pabrik Anda. 200+ karyawan, 50 tahun pengalaman."
	/>
	<link rel="canonical" href="https://sahabatindo.com/" />
</svelte:head>

<!-- Hero -->
<Hero />

<!-- About Preview -->
<section class="section-padding bg-surface" data-od-id="about-preview">
	<div class="container-wide">
		<div class="grid items-center gap-16 lg:grid-cols-5">
			<!-- Text (3/5) -->
			<div class="lg:col-span-3" use:scrollReveal>
				<p class="section-label mb-4">Tentang Kami</p>
				<h2 class="text-dark mb-6 text-3xl md:text-4xl lg:text-5xl">
					Lima Dekade Melayani Industri Indonesia
				</h2>
				<p class="text-mid mb-8 max-w-xl text-lg leading-relaxed">
					PT Sahabat Indonesia Inti Mandiri adalah distributor komponen industrial
					terpercaya yang telah melayani kebutuhan engineering pabrik di seluruh Indonesia
					sejak 1976.
				</p>

				<!-- Pull quote — "soul" element per design.md -->
				<blockquote
					class="border-border border-l-2 pl-6 italic"
				>
					<p class="text-dark text-lg leading-relaxed md:text-xl">
						"We are limited. Company could be unlimited.<br />
						Let's dedicate our limited to achieve company's unlimited."
					</p>
				</blockquote>
			</div>

			<!-- Stats (2/5) -->
			<div class="flex flex-row gap-12 lg:col-span-2 lg:flex-col lg:gap-16">
				<div class="text-center lg:text-left" use:scrollReveal={{ delay: 200 }}>
					<StatCounter target={200} suffix="+" />
					<p class="text-mid mt-2 text-sm font-medium tracking-wider uppercase">
						Karyawan
					</p>
				</div>
				<div class="text-center lg:text-left" use:scrollReveal={{ delay: 400 }}>
					<StatCounter target={50} />
					<p class="text-mid mt-2 text-sm font-medium tracking-wider uppercase">
						Tahun Pengalaman
					</p>
				</div>
			</div>
		</div>

		<!-- Vision & Mission -->
		<div
			class="border-border mt-20 grid gap-12 border-t pt-16 md:grid-cols-2"
			use:scrollReveal={{ delay: 200 }}
		>
			<div>
				<h3 class="text-dark mb-4 text-lg font-semibold">Visi</h3>
				<p class="text-mid leading-relaxed">
					To give customers a one stop shop solution providing high quality products.
				</p>
			</div>
			<div class="border-border md:border-l md:pl-12">
				<h3 class="text-dark mb-4 text-lg font-semibold">Misi</h3>
				<p class="text-mid leading-relaxed">
					Ensuring the best service and convenience for our customers.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Products Preview -->
<section class="section-padding" data-od-id="products-preview">
	<div class="container-wide">
		<div class="mb-12 text-center" use:scrollReveal>
			<p class="section-label mb-4">Produk Kami</p>
			<h2 class="text-dark mb-4 text-3xl md:text-4xl lg:text-5xl">
				Satu Pintu, Sepuluh Kategori
			</h2>
			<p class="text-mid mx-auto max-w-2xl text-lg">
				Kami mendistribusikan brand-brand terpercaya untuk kebutuhan engineering dan
				maintenance pabrik Anda.
			</p>
		</div>

		<!-- Grid — NO rounded+left-border cards (design.md P0 #5) -->
		<div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
			{#each productCategories as category, i}
				<div
					class="border-border group border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
					use:scrollReveal={{ delay: i * 60 }}
				>
					<p class="text-dark text-sm font-medium">{category}</p>
				</div>
			{/each}
		</div>

		<div class="mt-12 text-center" use:scrollReveal={{ delay: 400 }}>
			<a
				href="/services"
				class="text-primary hover:text-primary-light inline-flex items-center gap-2 text-sm font-semibold transition-colors"
			>
				Lihat semua produk
				<svg
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="1.6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
				</svg>
			</a>
		</div>
	</div>
</section>

<!-- Why Sahabat — unconventional section (design.md P1: no standard sequence) -->
<section class="bg-dark section-padding text-white" data-od-id="why-sahabat">
	<div class="container-wide">
		<!-- Large typography quote -->
		<div class="mb-16 max-w-3xl" use:scrollReveal>
			<h2 class="mb-6 text-3xl leading-snug md:text-4xl lg:text-5xl">
				We are limited.<br />
				Company could be unlimited.
			</h2>
			<p class="text-light max-w-xl text-lg leading-relaxed">
				50 tahun bukan sekadar angka — ini adalah komitmen untuk terus hadir melayani setiap
				kebutuhan engineering pelanggan kami.
			</p>
		</div>

		<!-- 3 pillars — no emoji icons (design.md P0 #3) -->
		<div class="grid gap-8 md:grid-cols-3">
			<div class="border-t border-white/20 pt-8" use:scrollReveal={{ delay: 100 }}>
				<h3 class="mb-3 text-lg font-semibold">One-Stop Solution</h3>
				<p class="text-light text-sm leading-relaxed">
					Dari breaker hingga flooring, semua dari satu distributor. Hemat waktu sourcing,
					satu PO untuk semuanya.
				</p>
			</div>
			<div class="border-t border-white/20 pt-8" use:scrollReveal={{ delay: 200 }}>
				<h3 class="mb-3 text-lg font-semibold">Trusted Brands</h3>
				<p class="text-light text-sm leading-relaxed">
					Mitsubishi Electric, Panasonic, Iwasaki EYE, Nitchi, Shinmaywa, Unibell — brand
					yang sudah terbukti di lapangan.
				</p>
			</div>
			<div class="border-t border-white/20 pt-8" use:scrollReveal={{ delay: 300 }}>
				<h3 class="mb-3 text-lg font-semibold">50 Years Track Record</h3>
				<p class="text-light text-sm leading-relaxed">
					Berdiri sejak 1976, melayani ribuan pabrik di seluruh Indonesia dengan lebih dari
					200 karyawan.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section-padding bg-surface-alt" data-od-id="cta">
	<div class="container-wide text-center" use:scrollReveal>
		<h2 class="text-dark mb-4 text-3xl md:text-4xl">
			Konsultasi Kebutuhan Engineering Anda
		</h2>
		<p class="text-mid mx-auto mb-8 max-w-lg text-lg">
			Tim sales kami siap membantu menemukan solusi yang tepat untuk kebutuhan pabrik Anda.
		</p>
		<a
			href="/contact"
			class="bg-primary hover:bg-primary-light inline-block rounded px-8 py-4 text-sm font-semibold text-white transition-colors"
		>
			Hubungi Kami Sekarang
		</a>
	</div>
</section>
