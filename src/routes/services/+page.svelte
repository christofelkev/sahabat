<script lang="ts">
	import { productCategories, brandPartners } from '$lib/data/products';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { scrollReveal } from '$lib/actions/scrollReveal';

	let activeFilter = $state('all');

	const filteredCategories = $derived(
		activeFilter === 'all'
			? productCategories
			: productCategories.filter((c) => {
					if (activeFilter === 'electrical') {
						return ['power-distribution', 'conduit', 'lighting', 'electrical-tape', 'power-backup'].includes(c.id);
					}
					if (activeFilter === 'automation') {
						return ['factory-automation'].includes(c.id);
					}
					if (activeFilter === 'mechanical') {
						return ['hoists', 'fluid-air', 'tools-machinery', 'flooring'].includes(c.id);
					}
					return true;
				})
	);
</script>

<svelte:head>
	<title>Katalog Produk & Solusi Industrial — PT Sahabat Indonesia Inti Mandiri</title>
	<meta
		name="description"
		content="Distributor resmi 10 kategori komponen industrial: Power Distribution, Factory Automation, Conduit, Hoist, Industrial Lighting, Tape, Power Backup, Fluid Handling, Tools, dan Flooring."
	/>
	<meta property="og:title" content="Katalog Produk Industrial — PT Sahabat Indonesia Inti Mandiri" />
	<meta
		property="og:description"
		content="Satu pintu untuk sepuluh kategori solusi engineering dan maintenance fasilitas pabrik Anda. Brand resmi Mitsubishi Electric, Panasonic, Nitchi, Iwasaki, Shinmaywa."
	/>
	<link rel="canonical" href="https://sahabatindo.com/services" />
</svelte:head>

<!-- Hero / Intro -->
<section class="section-padding bg-surface pt-32 lg:pt-40" data-od-id="services-hero">
	<div class="container-wide">
		<div class="max-w-3xl" use:scrollReveal>
			<p class="section-label mb-4">Portofolio Produk</p>
			<h1 class="text-dark mb-6 text-4xl leading-tight md:text-5xl lg:text-6xl">
				Satu Pintu untuk Sepuluh Kategori Solusi Industrial
			</h1>
			<p class="text-mid text-lg leading-relaxed md:text-xl">
				Kami menyederhanakan proses pengadaan pabrik Anda. Dari instalasi gardu listrik utama
				hingga pemeliharaan lantai produksi, seluruh portofolio produk kami didukung oleh
				prinsipal manufaktur global ternama dengan jaminan keaslian dan standar ketahanan tertinggi.
			</p>
		</div>

		<!-- Filter Pills -->
		<div class="mt-12 flex flex-wrap gap-2" use:scrollReveal={{ delay: 100 }}>
			<button
				type="button"
				onclick={() => (activeFilter = 'all')}
				class="rounded px-4 py-2 text-xs font-semibold transition-colors {activeFilter === 'all'
					? 'bg-primary text-white'
					: 'border-border border bg-white text-dark hover:border-dark'}"
			>
				Semua Kategori (10)
			</button>
			<button
				type="button"
				onclick={() => (activeFilter = 'electrical')}
				class="rounded px-4 py-2 text-xs font-semibold transition-colors {activeFilter === 'electrical'
					? 'bg-primary text-white'
					: 'border-border border bg-white text-dark hover:border-dark'}"
			>
				Electrical & Power
			</button>
			<button
				type="button"
				onclick={() => (activeFilter = 'automation')}
				class="rounded px-4 py-2 text-xs font-semibold transition-colors {activeFilter === 'automation'
					? 'bg-primary text-white'
					: 'border-border border bg-white text-dark hover:border-dark'}"
			>
				Factory Automation
			</button>
			<button
				type="button"
				onclick={() => (activeFilter = 'mechanical')}
				class="rounded px-4 py-2 text-xs font-semibold transition-colors {activeFilter === 'mechanical'
					? 'bg-primary text-white'
					: 'border-border border bg-white text-dark hover:border-dark'}"
			>
				Mechanical & Facility
			</button>
		</div>
	</div>
</section>

<!-- Product Catalog Grid -->
<section class="section-padding bg-white" data-od-id="services-grid">
	<div class="container-wide">
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredCategories as category (category.id)}
				<div use:scrollReveal>
					<ProductCard {category} />
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Brand Partners Section -->
<section class="section-padding bg-surface border-border border-t" data-od-id="services-brands">
	<div class="container-wide">
		<div class="mb-16 max-w-2xl" use:scrollReveal>
			<p class="section-label mb-4">Prinsipal & Kemitraan</p>
			<h2 class="text-dark text-3xl md:text-4xl">Didukung Brand Kelas Dunia</h2>
			<p class="text-mid mt-4 text-base leading-relaxed">
				Reputasi kami dibangun atas keandalan produk yang kami distribusikan. Kemitraan resmi
				dengan produsen kelas dunia menjamin pasokan suku cadang asli dan dukungan teknis prinsipal.
			</p>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each brandPartners as brand, idx}
				<div
					class="border-border border bg-white p-6 transition-all hover:border-dark"
					use:scrollReveal={{ delay: idx * 60 }}
				>
					<div class="mb-2 flex items-center justify-between">
						<h3 class="text-dark font-display text-2xl font-bold">{brand.name}</h3>
						<span class="text-mid font-mono text-xs">{brand.origin}</span>
					</div>
					<p class="text-mid text-xs font-medium uppercase tracking-wider">
						{brand.category}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Custom Sourcing & Technical Sourcing Capability — Unconventional dark section per design.md P1 -->
<section class="section-padding bg-dark text-white" data-od-id="services-capabilities">
	<div class="container-wide">
		<div class="grid items-center gap-16 lg:grid-cols-12">
			<div class="lg:col-span-7" use:scrollReveal>
				<p class="text-accent mb-4 font-mono text-xs font-bold tracking-widest uppercase">
					Layanan Khusus & Engineering Sourcing
				</p>
				<h2 class="mb-6 text-3xl leading-snug md:text-4xl lg:text-5xl">
					Kebutuhan Komponen Spesifik di Luar Katalog Reguler?
				</h2>
				<p class="text-light mb-6 text-base leading-relaxed md:text-lg">
					Fasilitas industri Anda sering kali memerlukan komponen pengganti model lama (retrofit),
					part import khusus dengan spesifikasi kelistrikan non-standar, atau volume besar untuk
					proyek ekspansi pabrik.
				</p>
				<p class="text-light text-base leading-relaxed md:text-lg">
					Dengan pengalaman 50 tahun dan jaringan prinsipal internasional, tim procurement kami siap
					membantu pelacakan part number, verifikasi compatibility cross-reference, dan pengurusan
					logistik import sampai ke pintu gudang Anda.
				</p>
			</div>

			<div class="space-y-6 lg:col-span-5" use:scrollReveal={{ delay: 200 }}>
				<div class="border border-white/20 p-6">
					<h3 class="mb-2 text-lg font-semibold">Cross-Reference & Retrofit</h3>
					<p class="text-light text-sm leading-relaxed">
						Identifikasi komponen pengganti yang setara dan aman untuk panel distribusi lama yang
						sudah discontinue.
					</p>
				</div>
				<div class="border border-white/20 p-6">
					<h3 class="mb-2 text-lg font-semibold">Bulk Supply & Scheduled Delivery</h3>
					<p class="text-light text-sm leading-relaxed">
						Pengiriman bertahap sesuai jadwal shutdown maintenance tahunan atau milestones proyek
						konstruksi pabrik.
					</p>
				</div>
				<div class="border border-white/20 p-6">
					<h3 class="mb-2 text-lg font-semibold">Certificate of Origin & Warranty</h3>
					<p class="text-light text-sm leading-relaxed">
						Kelengkapan dokumen resmi COO, test report pabrikan, dan garansi resmi prinsipal untuk
						keperluan audit ISO fasilitas Anda.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action -->
<section class="section-padding bg-surface-alt" data-od-id="services-cta">
	<div class="container-wide text-center" use:scrollReveal>
		<h2 class="text-dark mb-4 text-3xl md:text-4xl">
			Dapatkan Penawaran Harga & Konsultasi Spesifikasi
		</h2>
		<p class="text-mid mx-auto mb-8 max-w-xl text-lg">
			Kirimkan daftar BoQ (Bill of Quantities) atau part number yang Anda perlukan. Tim sales
			engineering kami akan merespons dalam 1x24 jam kerja.
		</p>
		<div class="flex flex-wrap items-center justify-center gap-4">
			<a
				href="/contact"
				class="bg-primary hover:bg-primary-light inline-block rounded px-8 py-4 text-sm font-semibold text-white transition-colors"
			>
				Minta Penawaran Resmi
			</a>
			<a
				href="tel:+62216610651"
				class="border-border hover:border-dark inline-block rounded border bg-white px-8 py-4 text-sm font-semibold text-dark transition-colors"
			>
				Telepon: 021 6610651
			</a>
		</div>
	</div>
</section>
