<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import StatCounter from '$lib/components/StatCounter.svelte';
	import { scrollReveal } from '$lib/actions/scrollReveal';
	import { productCategories } from '$lib/data/products';
</script>

<svelte:head>
	<title>PT Sahabat Indonesia Inti Mandiri — Distributor Komponen Industri Jakarta</title>
	<meta
		name="description"
		content="Distributor resmi komponen elektrikal dan mekanikal industri di Jakarta sejak 1976. Power distribution, factory automation, conduit, hoist, lighting, dan perlengkapan pabrik."
	/>
	<meta
		property="og:title"
		content="PT Sahabat Indonesia Inti Mandiri — Distributor Industri Jakarta"
	/>
	<meta
		property="og:description"
		content="Satu pintu pengadaan komponen industri: breaker, PLC, konduit, hoist, hingga flooring. 200+ tenaga profesional, 50 tahun pengalaman."
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
				<p class="section-label mb-4">Profil Distributor</p>
				<h2 class="text-dark mb-6 text-3xl md:text-4xl lg:text-5xl">
					50 Tahun Menjaga Kelancaran Operasional Pabrik Indonesia
				</h2>
				<p class="text-mid mb-8 max-w-xl text-lg leading-relaxed">
					Didirikan pada tahun 1976 di Jakarta, PT Sahabat Indonesia Inti Mandiri memasok suku cadang
					elektrikal dan mekanikal orisinal untuk pabrik manufaktur, kontraktor ME, dan panel maker.
					Kami membantu tim purchasing menekan risiko downtime produksi lewat pasokan barang yang pasti.
				</p>

				<!-- Pull quote — authentic founder philosophy -->
				<blockquote class="border-border border-l-2 pl-6 italic">
					<p class="text-dark font-display text-lg leading-relaxed md:text-xl">
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
						Karyawan & Tim Logistik
					</p>
				</div>
				<div class="text-center lg:text-left" use:scrollReveal={{ delay: 400 }}>
					<StatCounter target={50} />
					<p class="text-mid mt-2 text-sm font-medium tracking-wider uppercase">
						Tahun Pengalaman (Sejak 1976)
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
				<h3 class="text-dark mb-3 text-lg font-bold uppercase tracking-wider">Visi Perusahaan</h3>
				<p class="text-dark font-display text-xl leading-snug">
					"To give customers a one stop shop solution providing high quality products."
				</p>
				<p class="text-mid mt-2 text-sm leading-relaxed">
					Menjadi mitra pengadaan terpadu di Indonesia untuk seluruh kebutuhan suku cadang pabrik
					dengan jaminan barang asli.
				</p>
			</div>
			<div class="border-border md:border-l md:pl-12">
				<h3 class="text-dark mb-3 text-lg font-bold uppercase tracking-wider">Misi Perusahaan</h3>
				<p class="text-dark font-display text-xl leading-snug">
					"Ensuring the best service and convenience for our customers."
				</p>
				<p class="text-mid mt-2 text-sm leading-relaxed">
					Memberikan kemudahan transaksi lewat respon cepat penawaran harga, ketersediaan stok, dan
					pengiriman tepat waktu.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Products Preview — with Category Images -->
<section class="section-padding" data-od-id="products-preview">
	<div class="container-wide">
		<div class="mb-12 text-center" use:scrollReveal>
			<p class="section-label mb-4">Katalog Komponen</p>
			<h2 class="text-dark mb-4 text-3xl md:text-4xl lg:text-5xl">
				10 Kategori Kebutuhan Pabrik dalam 1 Pintu
			</h2>
			<p class="text-mid mx-auto max-w-2xl text-lg">
				Distributor resmi berbagai brand manufaktur kelas dunia. Seluruh unit dijamin orisinal
				lengkap dengan sertifikasi standar industri.
			</p>
		</div>

		<!-- Grid with Category Thumbnails -->
		<div class="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
			{#each productCategories as category, i}
				<a
					href="/services#{category.id}"
					class="border-border group flex flex-col justify-between overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
					use:scrollReveal={{ delay: i * 40 }}
				>
					<!-- Thumbnail Image -->
					<div class="relative aspect-4/3 w-full overflow-hidden bg-surface">
						<img
							src={category.image}
							alt={category.name}
							class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							loading="lazy"
						/>
						<span class="absolute top-2 right-2 rounded bg-dark/85 px-2 py-0.5 font-mono text-[10px] text-white">
							{category.brand.split('/')[0].trim()}
						</span>
					</div>

					<!-- Details -->
					<div class="flex flex-1 flex-col justify-between p-4">
						<h3 class="text-dark font-display text-sm font-bold leading-snug transition-colors group-hover:text-primary">
							{category.name}
						</h3>
						<p class="text-mid mt-1.5 line-clamp-2 text-xs leading-relaxed">
							{category.shortDesc}
						</p>

						<div class="border-border mt-3 flex items-center justify-between border-t pt-2.5">
							<span class="text-[11px] font-bold tracking-wider text-primary uppercase">Cek Produk</span>
							<svg
								class="text-mid h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:text-primary"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
							</svg>
						</div>
					</div>
				</a>
			{/each}
		</div>

		<div class="mt-12 text-center" use:scrollReveal={{ delay: 300 }}>
			<a
				href="/services"
				class="bg-primary hover:bg-primary-light inline-flex items-center gap-2 rounded px-8 py-3.5 text-sm font-semibold text-white transition-colors"
			>
				Buka Katalog Lengkap 10 Kategori
				<svg
					class="h-4 w-4"
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
</section>

<!-- Why Sahabat — Pragmatic B2B Advantage Section -->
<section class="bg-dark section-padding text-white" data-od-id="why-sahabat">
	<div class="container-wide">
		<!-- Large typography quote -->
		<div class="mb-16 max-w-3xl" use:scrollReveal>
			<p class="text-accent mb-4 font-mono text-xs font-bold tracking-widest uppercase">
				Keunggulan Rekanan
			</p>
			<h2 class="mb-6 text-3xl leading-snug md:text-4xl lg:text-5xl font-display">
				Kecepatan Pasokan, Efisiensi Pengadaan Satu Pintu.
			</h2>
			<p class="text-light max-w-xl text-lg leading-relaxed">
				Fokus kami adalah mempermudah pekerjaan tim purchasing dan maintenance: harga bersaing,
				katalog lengkap, dan pengiriman terkoordinasi langsung ke pabrik Anda.
			</p>
		</div>

		<!-- 3 Pillars -->
		<div class="grid gap-8 md:grid-cols-3">
			<div class="border-t border-white/20 pt-8" use:scrollReveal={{ delay: 100 }}>
				<h3 class="mb-3 text-lg font-bold">Satu Vendor, Satu Faktur Pajak</h3>
				<p class="text-light text-sm leading-relaxed">
					Tidak perlu mengelola puluhan supplier terpisah. Gabungkan pesanan elektrikal dan mekanikal
					dalam satu PO terpadu dengan kelengkapan e-Faktur PPN resmi.
				</p>
			</div>
			<div class="border-t border-white/20 pt-8" use:scrollReveal={{ delay: 200 }}>
				<h3 class="mb-3 text-lg font-bold">100% Suku Cadang Original</h3>
				<p class="text-light text-sm leading-relaxed">
					Distribusi resmi brand Jepang dan internasional terkemuka seperti Mitsubishi Electric,
					Panasonic, Iwasaki EYE, Nitchi, Shinmaywa, dan Unibell.
				</p>
			</div>
			<div class="border-t border-white/20 pt-8" use:scrollReveal={{ delay: 300 }}>
				<h3 class="mb-3 text-lg font-bold">Gudang Siap Kirim Jakarta</h3>
				<p class="text-light text-sm leading-relaxed">
					Fasilitas pergudangan strategis di Kawasan Industri Muara Karang Jakarta menjamin kesiapan
					stok dan armada kirim reguler ke Jabodetabek maupun antarpulau.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section-padding bg-surface-alt" data-od-id="cta">
	<div class="container-wide text-center" use:scrollReveal>
		<h2 class="text-dark mb-4 text-3xl md:text-4xl font-display">
			Butuh Penawaran Resmi atau Ketersediaan Stok?
		</h2>
		<p class="text-mid mx-auto mb-8 max-w-xl text-lg">
			Kirimkan daftar BoQ atau part number yang Anda perlukan. Tim sales engineering kami akan
			merespons dengan penawaran harga resmi dalam 1x24 jam kerja.
		</p>
		<div class="flex flex-wrap items-center justify-center gap-4">
			<a
				href="/contact"
				class="bg-primary hover:bg-primary-light inline-block rounded px-8 py-4 text-sm font-semibold text-white transition-colors"
			>
				Minta Penawaran Harga
			</a>
			<a
				href="tel:+62216610651"
				class="border-border hover:border-dark inline-block rounded border bg-white px-8 py-4 text-sm font-semibold text-dark transition-colors"
			>
				Hubungi Telepon: 021 6610651
			</a>
		</div>
	</div>
</section>
