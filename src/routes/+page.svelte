<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import BrandMarquee from '$lib/components/BrandMarquee.svelte';
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

<!-- Official Principal Partners Marquee (NRB-inspired infinite ticker) -->
<BrandMarquee />

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

				<!-- Editorial Founder Motto Card (NRB-Style Architectural Philosophy) -->
				<div class="relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 p-6 md:p-8 text-white shadow-xl shadow-zinc-950/10">
					<div class="flex items-center gap-2 mb-4">
						<span class="h-1.5 w-6 rounded-full bg-red-500"></span>
						<span class="text-[11px] font-mono tracking-widest uppercase text-zinc-400 font-semibold">
							// FILOSOFI & NILAI PERUSAHAAN
						</span>
					</div>
					<blockquote class="italic font-display text-xl md:text-2xl leading-relaxed text-zinc-100">
						"We are limited. Company could be unlimited.<br class="hidden sm:inline" />
						Let's dedicate our limited to achieve company's unlimited."
					</blockquote>
					<div class="mt-4 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
						<span class="text-xs font-mono text-zinc-400">
							— Motto Pendiri PT Sahabat Indonesia Inti Mandiri
						</span>
						<span class="text-[10px] font-mono text-red-400 uppercase tracking-wider bg-red-950/60 px-2 py-0.5 rounded border border-red-900/50">
							EST. 1976
						</span>
					</div>
				</div>
			</div>

			<!-- Stats (2/5) -->
			<div class="flex flex-row gap-8 lg:col-span-2 lg:flex-col lg:gap-12">
				<div class="rounded-xl border border-border/80 bg-white p-6 shadow-sm text-center lg:text-left" use:scrollReveal={{ delay: 200 }}>
					<StatCounter target={200} suffix="+" />
					<p class="text-dark font-display font-semibold mt-2 text-base">
						Karyawan & Tim Operasional
					</p>
					<p class="text-mid text-xs font-mono mt-1">
						Sales engineering, pergudangan & armada logistik
					</p>
				</div>
				<div class="rounded-xl border border-border/80 bg-white p-6 shadow-sm text-center lg:text-left" use:scrollReveal={{ delay: 400 }}>
					<StatCounter target={50} />
					<p class="text-dark font-display font-semibold mt-2 text-base">
						Tahun Pengalaman Distribusi
					</p>
					<p class="text-mid text-xs font-mono mt-1">
						Melayani pabrik & kontraktor sejak 1976
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
					class="border-border/80 group flex flex-col justify-between overflow-hidden rounded-xl border bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-red-500/60 hover:shadow-xl hover:shadow-red-950/5"
					use:scrollReveal={{ delay: i * 40 }}
				>
					<!-- Thumbnail Image -->
					<div class="relative aspect-4/3 w-full overflow-hidden bg-surface">
						<img
							src={category.image}
							alt={category.name}
							class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
							loading="lazy"
						/>
						<span class="absolute top-2 right-2 rounded-md bg-zinc-950/85 px-2 py-0.5 font-mono text-[10px] text-zinc-200 border border-zinc-700/50 backdrop-blur-xs">
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

						<div class="border-border/80 mt-3 flex items-center justify-between border-t pt-2.5">
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
				class="bg-primary hover:bg-primary-light inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
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
<section class="bg-zinc-950 section-padding text-white border-t border-zinc-800" data-od-id="why-sahabat">
	<div class="container-wide">
		<!-- Large typography quote -->
		<div class="mb-16 max-w-3xl" use:scrollReveal>
			<p class="text-red-400 mb-3 font-mono text-xs font-semibold tracking-widest uppercase">
				// KEUNGGULAN REKANAN & JAMINAN DISTRIBUSI
			</p>
			<h2 class="mb-6 text-3xl leading-snug md:text-4xl lg:text-5xl font-display text-white">
				Kemudahan Pengadaan Komponen dalam Satu Rekanan Resmi
			</h2>
			<p class="text-zinc-300 max-w-xl text-lg leading-relaxed">
				Menyederhanakan alur kerja tim purchasing dan engineering: kepastian stok fisik di gudang, legalitas transaksi yang tertib, dan dukungan teknis pemilihan part number.
			</p>
		</div>

		<!-- 3 Pillars -->
		<div class="grid gap-6 md:grid-cols-3">
			<div class="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 md:p-8 hover:border-zinc-700 transition-all duration-300" use:scrollReveal={{ delay: 100 }}>
				<div class="flex items-center gap-2 mb-3">
					<span class="h-2 w-2 rounded-full bg-red-500"></span>
					<span class="text-xs font-mono text-zinc-400 uppercase">Audit & Perpajakan</span>
				</div>
				<h3 class="mb-3 text-lg font-bold text-white">Legalitas PKP & e-Faktur Resmi</h3>
				<p class="text-zinc-300 text-sm leading-relaxed">
					Beroperasi resmi sebagai Pengusaha Kena Pajak (PKP). Seluruh transaksi dilengkapi dokumen Faktur Pajak elektronik (e-Faktur PPN), surat jalan, dan invoice resmi untuk tertib audit perusahaan Anda.
				</p>
			</div>
			<div class="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 md:p-8 hover:border-zinc-700 transition-all duration-300" use:scrollReveal={{ delay: 200 }}>
				<div class="flex items-center gap-2 mb-3">
					<span class="h-2 w-2 rounded-full bg-red-500"></span>
					<span class="text-xs font-mono text-zinc-400 uppercase">Jaminan Mutu</span>
				</div>
				<h3 class="mb-3 text-lg font-bold text-white">100% Produk Original Bergaransi</h3>
				<p class="text-zinc-300 text-sm leading-relaxed">
					Jaminan produk asli langsung dari jalur keagenan resmi Mitsubishi Electric, Panasonic, Iwasaki EYE, Nitchi, Shinmaywa, dan Unibell, lengkap dengan sertifikat keaslian (COO) bila dipersyaratkan.
				</p>
			</div>
			<div class="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 md:p-8 hover:border-zinc-700 transition-all duration-300" use:scrollReveal={{ delay: 300 }}>
				<div class="flex items-center gap-2 mb-3">
					<span class="h-2 w-2 rounded-full bg-red-500"></span>
					<span class="text-xs font-mono text-zinc-400 uppercase">Kesiapan Stok</span>
				</div>
				<h3 class="mb-3 text-lg font-bold text-white">Gudang Siap Kirim di Muara Karang</h3>
				<p class="text-zinc-300 text-sm leading-relaxed">
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
