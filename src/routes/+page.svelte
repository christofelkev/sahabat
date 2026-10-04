<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import StatCounter from '$lib/components/StatCounter.svelte';
	import { scrollReveal } from '$lib/actions/scrollReveal';
	import { productCategories } from '$lib/data/products';
</script>

<svelte:head>
	<title>PT Sahabat Indonesia Inti Mandiri — Distributor Komponen Industri & Elektrikal Jakarta</title>
	<meta
		name="description"
		content="Distributor resmi komponen elektrikal, otomasi PLC, konduit baja, hoist, dan lampu industri di Jakarta sejak 1976. Stok siap kirim dari gudang Muara Karang, jaminan 100% produk original, dan faktur pajak resmi PKP."
	/>
	<meta
		property="og:title"
		content="PT Sahabat Indonesia Inti Mandiri — Distributor Komponen Industri Jakarta"
	/>
	<meta
		property="og:description"
		content="Satu pintu pengadaan komponen industri: breaker ACB/MCCB, PLC, pipa konduit, hoist Nitchi, lampu Iwasaki. 200+ karyawan, 50 tahun pengalaman sejak 1976."
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
				<p class="section-label mb-4">Tentang Perusahaan</p>
				<h2 class="text-dark mb-6 text-3xl md:text-4xl lg:text-5xl font-display">
					50 Tahun Melayani Pengadaan Komponen Pabrik & Proyek ME
				</h2>
				<p class="text-mid mb-8 max-w-xl text-lg leading-relaxed">
					Berdiri sejak tahun 1976 di Jakarta, PT Sahabat Indonesia Inti Mandiri adalah distributor dan
					supplier resmi komponen elektrikal, mekanikal, dan otomasi industri. Kami melayani kebutuhan
					pengadaan rutin pabrik manufaktur, kontraktor ME, perakit panel (panel maker), serta proyek
					infrastruktur di seluruh Indonesia dengan jaminan keaslian barang dan ketepatan jadwal kirim.
				</p>

				<!-- Pull quote — authentic founder philosophy -->
				<blockquote class="border-border border-l-2 pl-6 italic">
					<p class="text-dark font-display text-lg leading-relaxed md:text-xl">
						"We are limited. Company could be unlimited.<br />
						Let's dedicate our limited to achieve company's unlimited."
					</p>
					<span class="text-mid not-italic text-xs font-semibold tracking-wider uppercase block mt-2">
						— Motto PT Sahabat Indonesia Inti Mandiri
					</span>
				</blockquote>
			</div>

			<!-- Stats (2/5) -->
			<div class="flex flex-row gap-12 lg:col-span-2 lg:flex-col lg:gap-16">
				<div class="text-center lg:text-left" use:scrollReveal={{ delay: 200 }}>
					<StatCounter target={200} suffix="+" />
					<p class="text-mid mt-2 text-sm font-medium tracking-wider uppercase">
						Karyawan & Tim Operasional
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
					Menjadi mitra pengadaan terpadu di Indonesia untuk pasokan suku cadang dan peralatan industri berkualitas tinggi dari prinsipal resmi.
				</p>
			</div>
			<div class="border-border md:border-l md:pl-12">
				<h3 class="text-dark mb-3 text-lg font-bold uppercase tracking-wider">Misi Perusahaan</h3>
				<p class="text-dark font-display text-xl leading-snug">
					"Ensuring the best service and convenience for our customers."
				</p>
				<p class="text-mid mt-2 text-sm leading-relaxed">
					Memberikan kemudahan transaksi melalui respon quotation cepat, kepastian stok aktual di gudang, dan ketepatan pengiriman barang.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Products Preview — with Category Images -->
<section class="section-padding" data-od-id="products-preview">
	<div class="container-wide">
		<div class="mb-12 text-center" use:scrollReveal>
			<p class="section-label mb-4">Katalog Produk</p>
			<h2 class="text-dark mb-4 text-3xl md:text-4xl lg:text-5xl font-display">
				10 Kategori Komponen Industri dalam Satu Pintu
			</h2>
			<p class="text-mid mx-auto max-w-2xl text-lg">
				Distributor resmi brand Jepang dan internasional terkemuka. Seluruh produk original bergaransi pabrik dengan dukungan dokumen teknis lengkap.
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
							<span class="text-[11px] font-bold tracking-wider text-primary uppercase">Lihat Spesifikasi</span>
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
				Kemudahan Pengadaan Komponen dalam Satu Rekanan Resmi
			</h2>
			<p class="text-light max-w-xl text-lg leading-relaxed">
				Menyederhanakan alur kerja tim purchasing dan engineering: kepastian stok fisik di gudang, legalitas transaksi yang tertib, dan dukungan teknis pemilihan part number.
			</p>
		</div>

		<!-- 3 Pillars -->
		<div class="grid gap-8 md:grid-cols-3">
			<div class="border-t border-white/20 pt-8" use:scrollReveal={{ delay: 100 }}>
				<h3 class="mb-3 text-lg font-bold">Legalitas PKP & e-Faktur Resmi</h3>
				<p class="text-light text-sm leading-relaxed">
					Beroperasi resmi sebagai Pengusaha Kena Pajak (PKP). Seluruh transaksi dilengkapi dokumen Faktur Pajak elektronik (e-Faktur PPN), surat jalan, dan invoice resmi untuk tertib audit perusahaan Anda.
				</p>
			</div>
			<div class="border-t border-white/20 pt-8" use:scrollReveal={{ delay: 200 }}>
				<h3 class="mb-3 text-lg font-bold">100% Produk Original Bergaransi</h3>
				<p class="text-light text-sm leading-relaxed">
					Jaminan produk asli langsung dari jalur keagenan resmi Mitsubishi Electric, Panasonic, Iwasaki EYE, Nitchi, Shinmaywa, dan Unibell, lengkap dengan sertifikat keaslian (COO) bila dipersyaratkan.
				</p>
			</div>
			<div class="border-t border-white/20 pt-8" use:scrollReveal={{ delay: 300 }}>
				<h3 class="mb-3 text-lg font-bold">Gudang Siap Kirim di Muara Karang</h3>
				<p class="text-light text-sm leading-relaxed">
					Buffer stock di Kawasan Industri Pergudangan Muara Karang Jakarta menjamin kesiapan pengiriman cepat ke kawasan industri Jabodetabek, ekspedisi luar kota, maupun pengambilan mandiri (self pick-up).
				</p>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="section-padding bg-surface-alt" data-od-id="cta">
	<div class="container-wide text-center" use:scrollReveal>
		<h2 class="text-dark mb-4 text-3xl md:text-4xl font-display">
			Kirimkan Daftar Kebutuhan (BoQ) Proyek Anda
		</h2>
		<p class="text-mid mx-auto mb-8 max-w-xl text-lg">
			Kirimkan daftar BoQ atau part number yang Anda cari. Tim sales engineering kami akan memeriksa stok aktual di gudang dan mengirimkan penawaran harga resmi (official quotation) dalam 1x24 jam kerja.
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
