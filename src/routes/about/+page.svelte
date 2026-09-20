<script lang="ts">
	import StatCounter from '$lib/components/StatCounter.svelte';
	import { scrollReveal } from '$lib/actions/scrollReveal';

	const milestones = [
		{
			year: '1976',
			title: 'Awal Perjalanan',
			desc: 'Didirikan di Jakarta dengan komitmen menyediakan komponen kelistrikan dan mekanikal berkualitas untuk industri manufaktur yang sedang berkembang pesat.'
		},
		{
			year: '1988',
			title: 'Kemitraan Global',
			desc: 'Menjalin kerja sama distribusi resmi dengan prinsipal global terkemuka dari Jepang dan internasional seperti Mitsubishi Electric, Panasonic, dan Iwasaki EYE.'
		},
		{
			year: '2002',
			title: 'Sentralisasi Pergudangan',
			desc: 'Mendirikan fasilitas kantor pusat dan kompleks pergudangan terintegrasi di Kawasan Industri Muara Karang, Jakarta untuk mempercepat rantai pasok.'
		},
		{
			year: '2015',
			title: 'Ekspansi 10 Kategori',
			desc: 'Mengukuhkan posisi sebagai one-stop shop solution dengan melengkapi portofolio produk mencakup otomasi pabrik, hoist, tata udara, hingga flooring industri.'
		},
		{
			year: 'Kini',
			title: '50 Tahun Melayani',
			desc: 'Diperkuat oleh lebih dari 200 profesional berdedikasi tinggi yang melayani ribuan pelanggan korporasi dan pabrik di seluruh pelosok Indonesia.'
		}
	];

	const values = [
		{
			title: 'Kualitas Tanpa Kompromi',
			desc: 'Hanya menyediakan produk resmi, tersertifikasi, dan teruji di lingkungan kerja industri berat untuk memastikan kelancaran operasional fasilitas Anda.'
		},
		{
			title: 'One-Stop Solution',
			desc: 'Menyederhanakan pengadaan pabrik Anda dalam satu pintu: satu vendor tepercaya, satu proses PO, dan integrasi pengiriman yang efisien.'
		},
		{
			title: 'Kemitraan Jangka Panjang',
			desc: 'Kami memandang setiap klien sebagai mitra. Filosofi kami adalah memberikan pendampingan teknis dan pelayanan purnajual yang konsisten.'
		}
	];
</script>

<svelte:head>
	<title>Tentang Kami — PT Sahabat Indonesia Inti Mandiri</title>
	<meta
		name="description"
		content="Perjalanan 50 tahun PT Sahabat Indonesia Inti Mandiri sebagai distributor electrical & industrial components tepercaya di Indonesia. 200+ profesional, 10 kategori produk."
	/>
	<meta property="og:title" content="Tentang PT Sahabat Indonesia Inti Mandiri" />
	<meta
		property="og:description"
		content="Didirikan sejak 1976, PT Sahabat Indonesia Inti Mandiri telah menjadi mitra terpercaya industri Indonesia selama setengah abad."
	/>
	<link rel="canonical" href="https://sahabatindo.com/about" />
</svelte:head>

<!-- Hero / Intro -->
<section class="section-padding bg-surface pt-32 lg:pt-40" data-od-id="about-hero">
	<div class="container-wide">
		<div class="max-w-3xl" use:scrollReveal>
			<p class="section-label mb-4">Profil Perusahaan</p>
			<h1 class="text-dark mb-6 text-4xl leading-tight md:text-5xl lg:text-6xl">
				Lima Dekade Menopang Ketahanan Industri Indonesia
			</h1>
			<p class="text-mid text-lg leading-relaxed md:text-xl">
				Sejak didirikan pada tahun 1976, PT Sahabat Indonesia Inti Mandiri telah berdedikasi
				menjadi mitra strategis bagi sektor manufaktur, infrastruktur, dan ketenagalistrikan
				nasional. Kami hadir untuk memastikan fasilitas produksi Anda beroperasi tanpa henti
				dengan pasokan komponen berstandar internasional.
			</p>
		</div>
	</div>
</section>

<!-- Stats Grid -->
<section class="border-border border-y bg-white py-16" data-od-id="about-stats">
	<div class="container-wide">
		<div class="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
			<div class="text-center lg:text-left" use:scrollReveal={{ delay: 100 }}>
				<StatCounter target={50} />
				<p class="text-mid mt-2 text-xs font-semibold tracking-wider uppercase md:text-sm">
					Tahun Pengalaman
				</p>
				<p class="text-mid mt-1 text-xs">Konsisten melayani sejak 1976</p>
			</div>
			<div class="text-center lg:text-left" use:scrollReveal={{ delay: 200 }}>
				<StatCounter target={200} suffix="+" />
				<p class="text-mid mt-2 text-xs font-semibold tracking-wider uppercase md:text-sm">
					Karyawan Berdedikasi
				</p>
				<p class="text-mid mt-1 text-xs">Tim teknis & logistik profesional</p>
			</div>
			<div class="text-center lg:text-left" use:scrollReveal={{ delay: 300 }}>
				<StatCounter target={10} />
				<p class="text-mid mt-2 text-xs font-semibold tracking-wider uppercase md:text-sm">
					Kategori Solusi
				</p>
				<p class="text-mid mt-1 text-xs">Dari power distribution ke otomasi</p>
			</div>
			<div class="text-center lg:text-left" use:scrollReveal={{ delay: 400 }}>
				<div class="font-mono text-5xl font-bold tabular-nums text-dark md:text-6xl">
					1 Stop
				</div>
				<p class="text-mid mt-2 text-xs font-semibold tracking-wider uppercase md:text-sm">
					Solusi Terpadu
				</p>
				<p class="text-mid mt-1 text-xs">Pengadaan satu atap untuk pabrik</p>
			</div>
		</div>
	</div>
</section>

<!-- Narrative & Company Philosophy -->
<section class="section-padding bg-surface" data-od-id="about-narrative">
	<div class="container-wide">
		<div class="grid items-start gap-16 lg:grid-cols-12">
			<!-- Narrative left (7 cols) -->
			<div class="space-y-6 lg:col-span-7" use:scrollReveal>
				<p class="section-label">Dedikasi Kami</p>
				<h2 class="text-dark text-3xl leading-snug md:text-4xl">
					Komitmen Penuh di Balik Setiap Komponen yang Kami Distribusikan
				</h2>
				<p class="text-mid text-base leading-relaxed md:text-lg">
					Di dunia industri modern, setiap detik downtime dapat berdampak besar pada produktivitas
					dan keselamatan kerja. Menyadari hal tersebut, PT Sahabat Indonesia Inti Mandiri
					membangun rantai pasok yang tangguh dan terintegrasi dari pusat logistik kami di Muara
					Karang, Jakarta.
				</p>
				<p class="text-mid text-base leading-relaxed md:text-lg">
					Lebih dari sekadar penjual produk, kami bertindak sebagai konsultan tepercaya yang
					membantu tim engineering memilih spesifikasi yang tepat untuk kebutuhan power
					distribution, proteksi beban, sistem otomasi pabrik, hingga perlengkapan maintenance
					fasilitas.
				</p>
			</div>

			<!-- Pull-Quote Box right (5 cols) — Soul element -->
			<div class="lg:col-span-5" use:scrollReveal={{ delay: 200 }}>
				<div class="bg-dark p-8 text-white md:p-10">
					<p class="text-accent mb-6 font-mono text-xs font-bold tracking-widest uppercase">
						Filosofi Perusahaan
					</p>
					<blockquote class="border-accent/40 border-l-2 pl-6 italic">
						<p class="text-xl leading-relaxed md:text-2xl font-display">
							"We are limited. Company could be unlimited. Let's dedicate our limited to achieve
							company's unlimited."
						</p>
					</blockquote>
					<p class="text-light mt-6 text-sm leading-relaxed">
						Keyakinan mendasar bahwa keterbatasan individu dapat dilebur menjadi kekuatan tanpa batas
						melalui kerja sama yang tulus dan dedikasi penuh bagi para mitra usaha kami.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Vision & Mission — PRD 2-column with vertical divider (no rounded card with left-border) -->
<section class="section-padding border-border border-t bg-white" data-od-id="about-vision-mission">
	<div class="container-wide">
		<div class="mb-16 text-center" use:scrollReveal>
			<p class="section-label mb-4">Arah & Tujuan</p>
			<h2 class="text-dark text-3xl md:text-4xl">Visi dan Misi Kami</h2>
		</div>

		<div class="grid gap-12 md:grid-cols-2 md:gap-16">
			<!-- Vision -->
			<div class="space-y-4" use:scrollReveal={{ delay: 100 }}>
				<div class="border-primary inline-block border-b-2 pb-2">
					<h3 class="text-dark text-xl font-bold tracking-tight uppercase">Visi</h3>
				</div>
				<p class="text-dark text-2xl leading-snug font-display">
					"To give customers a one stop shop solution providing high quality products."
				</p>
				<p class="text-mid text-base leading-relaxed">
					Menjadi pusat rujukan utama dan mitra pengadaan terlengkap di Indonesia bagi seluruh
					kebutuhan industri kelistrikan, otomatisasi, dan mekanikal dengan jaminan produk asli dan
					bermutu tinggi.
				</p>
			</div>

			<!-- Mission (Divider vertikal pada desktop) -->
			<div class="space-y-4 md:border-border md:border-l md:pl-16" use:scrollReveal={{ delay: 200 }}>
				<div class="border-primary inline-block border-b-2 pb-2">
					<h3 class="text-dark text-xl font-bold tracking-tight uppercase">Misi</h3>
				</div>
				<p class="text-dark text-2xl leading-snug font-display">
					"Ensuring the best service and convenience for our customers."
				</p>
				<p class="text-mid text-base leading-relaxed">
					Memberikan pengalaman transaksi yang mulus, responsif, dan terpercaya melalui layanan
					konsultasi ahli, ketersediaan stok yang konsisten, serta pengiriman yang tepat waktu demi
					kenyamanan maksimal pelanggan.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- 50 Years Journey / Milestones -->
<section class="section-padding bg-surface" data-od-id="about-milestones">
	<div class="container-wide">
		<div class="mb-16 max-w-2xl" use:scrollReveal>
			<p class="section-label mb-4">Jejak Langkah</p>
			<h2 class="text-dark text-3xl md:text-4xl">Perjalanan Setengah Abad</h2>
			<p class="text-mid mt-4 text-base leading-relaxed">
				Lima puluh tahun membangun reputasi dan menjaga kepercayaan para pelaku industri dari
				generasi ke generasi.
			</p>
		</div>

		<div class="space-y-8">
			{#each milestones as item, idx}
				<div
					class="border-border grid items-baseline gap-6 border-b pb-8 md:grid-cols-12"
					use:scrollReveal={{ delay: idx * 80 }}
				>
					<div class="md:col-span-3">
						<span class="font-mono text-3xl font-bold text-primary md:text-4xl">
							{item.year}
						</span>
					</div>
					<div class="md:col-span-3">
						<h3 class="text-dark text-lg font-bold">{item.title}</h3>
					</div>
					<div class="md:col-span-6">
						<p class="text-mid text-base leading-relaxed">{item.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Values / Pillars -->
<section class="section-padding bg-white" data-od-id="about-values">
	<div class="container-wide">
		<div class="mb-16 text-center" use:scrollReveal>
			<p class="section-label mb-4">Prinsip Kami</p>
			<h2 class="text-dark text-3xl md:text-4xl">Pondasi Kepercayaan Klien</h2>
		</div>

		<div class="grid gap-8 md:grid-cols-3">
			{#each values as val, idx}
				<div
					class="border-border border bg-surface p-8 transition-all hover:-translate-y-1 hover:shadow-md"
					use:scrollReveal={{ delay: idx * 100 }}
				>
					<div class="text-primary mb-4 font-mono text-sm font-bold">
						0{idx + 1}
					</div>
					<h3 class="text-dark mb-3 text-lg font-bold">{val.title}</h3>
					<p class="text-mid text-sm leading-relaxed">{val.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Call to Action -->
<section class="section-padding bg-surface-alt" data-od-id="about-cta">
	<div class="container-wide text-center" use:scrollReveal>
		<h2 class="text-dark mb-4 text-3xl md:text-4xl">
			Siap Menjadi Mitra Industri Anda
		</h2>
		<p class="text-mid mx-auto mb-8 max-w-xl text-lg">
			Hubungi tim sales kami untuk mendiskusikan kebutuhan spesifikasi teknis dan ketersediaan pasokan
			proyek Anda.
		</p>
		<div class="flex flex-wrap items-center justify-center gap-4">
			<a
				href="/contact"
				class="bg-primary hover:bg-primary-light inline-block rounded px-8 py-4 text-sm font-semibold text-white transition-colors"
			>
				Hubungi Tim Kami
			</a>
			<a
				href="/services"
				class="border-border hover:border-dark inline-block rounded border bg-white px-8 py-4 text-sm font-semibold text-dark transition-colors"
			>
				Lihat Solusi Produk
			</a>
		</div>
	</div>
</section>
