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
	<title>Katalog Produk & Komponen Industrial — PT Sahabat Indonesia Inti Mandiri</title>
	<meta
		name="description"
		content="Katalog 10 kategori komponen industri resmi: Power Distribution, Otomasi PLC, Konduit Baja, Hoist, Lampu Industri, Tape Isolasi, Genset & UPS, Blower, Tools, dan Flooring."
	/>
	<meta property="og:title" content="Katalog Produk Industrial — PT Sahabat Indonesia Inti Mandiri" />
	<meta
		property="og:description"
		content="Satu pintu pengadaan komponen industri resmi: Mitsubishi Electric, Panasonic, Nitchi, Iwasaki EYE, Shinmaywa, Unibell. Stok siap kirim dari gudang Jakarta."
	/>
	<link rel="canonical" href="https://sahabatindo.com/services" />
</svelte:head>

<!-- Hero / Intro -->
<section class="section-padding bg-surface pt-32 lg:pt-40" data-od-id="services-hero">
	<div class="container-wide">
		<div class="max-w-3xl" use:scrollReveal>
			<p class="section-label mb-4">Katalog Komponen Resmi</p>
			<h1 class="text-dark mb-6 text-4xl leading-tight md:text-5xl lg:text-6xl font-display">
				10 Kategori Komponen Industri untuk Kebutuhan Pabrik Anda
			</h1>
			<p class="text-mid text-lg leading-relaxed md:text-xl">
				Kami mendistribusikan suku cadang elektrikal dan mekanikal original dari prinsipal terkemuka.
				Dapatkan harga bersaing, ketersediaan stok aktual, dokumen e-Faktur resmi, dan pengiriman tepat
				waktu ke lokasi proyek atau pabrik Anda.
			</p>
		</div>

		<!-- Filter Pills -->
		<div class="mt-12 flex flex-wrap gap-2" use:scrollReveal={{ delay: 100 }}>
			<button
				type="button"
				onclick={() => (activeFilter = 'all')}
				class="rounded px-4 py-2.5 text-xs font-bold tracking-wide uppercase transition-colors {activeFilter === 'all'
					? 'bg-primary text-white shadow-xs'
					: 'border-border border bg-white text-dark hover:border-dark'}"
			>
				Semua Kategori ({productCategories.length})
			</button>
			<button
				type="button"
				onclick={() => (activeFilter = 'electrical')}
				class="rounded px-4 py-2.5 text-xs font-bold tracking-wide uppercase transition-colors {activeFilter === 'electrical'
					? 'bg-primary text-white shadow-xs'
					: 'border-border border bg-white text-dark hover:border-dark'}"
			>
				Electrical & Power (5)
			</button>
			<button
				type="button"
				onclick={() => (activeFilter = 'automation')}
				class="rounded px-4 py-2.5 text-xs font-bold tracking-wide uppercase transition-colors {activeFilter === 'automation'
					? 'bg-primary text-white shadow-xs'
					: 'border-border border bg-white text-dark hover:border-dark'}"
			>
				Factory Automation (1)
			</button>
			<button
				type="button"
				onclick={() => (activeFilter = 'mechanical')}
				class="rounded px-4 py-2.5 text-xs font-bold tracking-wide uppercase transition-colors {activeFilter === 'mechanical'
					? 'bg-primary text-white shadow-xs'
					: 'border-border border bg-white text-dark hover:border-dark'}"
			>
				Mechanical & Facility (4)
			</button>
		</div>
	</div>
</section>

<!-- Product Catalog Grid -->
<section class="section-padding bg-white" data-od-id="services-grid">
	<div class="container-wide">
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
			<p class="section-label mb-4">Jalur Distribusi Resmi</p>
			<h2 class="text-dark text-3xl md:text-4xl font-display">Prinsipal & Brand Terpercaya</h2>
			<p class="text-mid mt-4 text-base leading-relaxed">
				Seluruh produk disuplai langsung melalui keagenan dan distribusi resmi pabrikan. Keaslian
				barang, ketersediaan suku cadang berkelanjutan, dan sertifikasi mutu terjamin.
			</p>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each brandPartners as brand, idx}
				<div
					class="border-border border bg-white p-6 transition-all hover:border-primary hover:shadow-sm"
					use:scrollReveal={{ delay: idx * 50 }}
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

<!-- Custom Sourcing & Technical Sourcing Capability -->
<section class="section-padding bg-dark text-white" data-od-id="services-capabilities">
	<div class="container-wide">
		<div class="grid items-center gap-16 lg:grid-cols-12">
			<div class="lg:col-span-7" use:scrollReveal>
				<p class="text-accent mb-4 font-mono text-xs font-bold tracking-widest uppercase">
					Dukungan Teknis Pengadaan
				</p>
				<h2 class="mb-6 text-3xl leading-snug md:text-4xl lg:text-5xl font-display">
					Memerlukan Part Khusus atau Komponen Retrofit Lama?
				</h2>
				<p class="text-light mb-6 text-base leading-relaxed md:text-lg">
					Sering kali pabrik mengalami kendala saat komponen breaker atau modul otomasi lama sudah
					tidak diproduksi lagi oleh pabrikan (discontinue), sementara mesin tidak boleh berhenti.
				</p>
				<p class="text-light text-base leading-relaxed md:text-lg">
					Tim sales engineering kami siap membantu melacak part number, mencarikan seri pengganti
					(cross-reference) yang 100% kompatibel dari segi dimensi dan ampere rating, serta mengurus
					jalur impor resmi bila diperlukan.
				</p>
			</div>

			<div class="space-y-6 lg:col-span-5" use:scrollReveal={{ delay: 200 }}>
				<div class="border border-white/20 p-6">
					<h3 class="mb-2 text-lg font-bold">Cross-Reference Part Discontinue</h3>
					<p class="text-light text-sm leading-relaxed">
						Identifikasi tipe ekuivalen untuk breaker dan PLC lama agar panel tetap aman tanpa renovasi
						total yang memakan biaya besar.
					</p>
				</div>
				<div class="border border-white/20 p-6">
					<h3 class="mb-2 text-lg font-bold">Jadwal Kirim Berkala (Scheduled Supply)</h3>
					<p class="text-light text-sm leading-relaxed">
						Pengiriman berkala disesuaikan dengan jadwal tahunan shutdown maintenance atau milestone
						proyek konstruksi pabrik Anda.
					</p>
				</div>
				<div class="border border-white/20 p-6">
					<h3 class="mb-2 text-lg font-bold">Dokumen Lengkap COO & Garansi</h3>
					<p class="text-light text-sm leading-relaxed">
						Penyediaan Certificate of Origin (COO), test report pabrikan, dan garansi resmi untuk
						kelengkapan audit ISO dan keselamatan kerja.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Call to Action -->
<section class="section-padding bg-surface-alt" data-od-id="services-cta">
	<div class="container-wide text-center" use:scrollReveal>
		<h2 class="text-dark mb-4 text-3xl md:text-4xl font-display">
			Minta Penawaran Harga Resmi (Official Quotation)
		</h2>
		<p class="text-mid mx-auto mb-8 max-w-xl text-lg">
			Kirimkan daftar BoQ (Bill of Quantities) atau part number yang dibutuhkan. Tim kami akan
			memeriksa stok aktual di gudang dan menerbitkan penawaran dalam 1x24 jam kerja.
		</p>
		<div class="flex flex-wrap items-center justify-center gap-4">
			<a
				href="/contact"
				class="bg-primary hover:bg-primary-light inline-block rounded px-8 py-4 text-sm font-semibold text-white transition-colors"
			>
				Kirim Rincian Kebutuhan
			</a>
			<a
				href="tel:+62216610651"
				class="border-border hover:border-dark inline-block rounded border bg-white px-8 py-4 text-sm font-semibold text-dark transition-colors"
			>
				Telepon Kantor: 021 6610651
			</a>
		</div>
	</div>
</section>
