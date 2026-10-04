<script lang="ts">
	import StatCounter from '$lib/components/StatCounter.svelte';
	import { scrollReveal } from '$lib/actions/scrollReveal';

	const milestones = [
		{
			year: '1976',
			title: 'Pendirian Usaha di Jakarta',
			desc: 'Memulai kegiatan perdagangan umum dan supplier komponen kelistrikan serta suku cadang mekanikal untuk industri lokal di Jakarta.'
		},
		{
			year: '1988',
			title: 'Keagenan Resmi Brand Global',
			desc: 'Ditunjuk sebagai penyalur resmi produk manufaktur terkemuka seperti Mitsubishi Electric, Panasonic, dan Iwasaki EYE.'
		},
		{
			year: '2002',
			title: 'Fasilitas Pergudangan Muara Karang',
			desc: 'Memusatkan seluruh logistik dan kantor pusat di Kawasan Industri Pergudangan Muara Karang Selatan Jakarta guna memperbesar kapasitas stok dan mempercepat proses pengiriman.'
		},
		{
			year: '2015',
			title: 'Ekspansi Menjadi 10 Kategori Industri',
			desc: 'Melengkapi portofolio pasokan satu pintu: mulai dari power distribution, otomasi pabrik, pipa konduit, hoist, hingga sistem pelapis lantai industri.'
		},
		{
			year: '2026',
			title: '50 Tahun Melayani Industri Nasional',
			desc: 'Didukung lebih dari 200 staf dan jaringan rekanan logistik tepercaya yang melayani ribuan kontrak pengadaan di berbagai sektor manufaktur Indonesia.'
		}
	];

	const values = [
		{
			title: '100% Produk Asli & Legalitas Resmi',
			desc: 'Seluruh produk bersumber langsung dari rantai pasok prinsipal terdaftar, lengkap dengan garansi resmi dan opsi dokumen sertifikasi (COO) untuk tertib audit perusahaan.'
		},
		{
			title: 'Efisiensi Satu Rekanan (One-Stop Supply)',
			desc: 'Menggabungkan kebutuhan elektrikal, instrumen otomasi, dan mekanikal ke dalam satu Purchase Order (PO) sehingga menghemat waktu dan mempermudah administrasi tim purchasing.'
		},
		{
			title: 'Dukungan Teknis & Kesesuaian Part Number',
			desc: 'Asistensi pemilihan spesifikasi, pengecekan kesesuaian part number, hingga rekomendasi tipe ekuivalen untuk komponen yang sudah tidak diproduksi lagi (discontinue).'
		}
	];
</script>

<svelte:head>
	<title>Tentang Kami — PT Sahabat Indonesia Inti Mandiri | Sejarah & Profil Perusahaan</title>
	<meta
		name="description"
		content="Profil PT Sahabat Indonesia Inti Mandiri. Distributor resmi komponen elektrikal, mekanikal, dan otomasi industri di Jakarta sejak 1976. 200+ staf operasional dan fasilitas pergudangan di Muara Karang."
	/>
	<meta property="og:title" content="Tentang PT Sahabat Indonesia Inti Mandiri" />
	<meta
		property="og:description"
		content="Didirikan sejak 1976 di Jakarta, PT Sahabat Indonesia Inti Mandiri memasok kebutuhan komponen elektrikal dan mekanikal bagi ratusan pabrik industri."
	/>
	<link rel="canonical" href="https://sahabatindo.com/about" />
</svelte:head>

<!-- Hero / Intro -->
<section class="section-padding bg-surface pt-32 lg:pt-40" data-od-id="about-hero">
	<div class="container-wide">
		<div class="max-w-3xl" use:scrollReveal>
			<p class="section-label mb-4">Profil Perusahaan</p>
			<h1 class="text-dark mb-6 text-4xl leading-tight md:text-5xl lg:text-6xl font-display">
				50 Tahun Distributor Komponen Elektrikal, Mekanikal & Otomasi Pabrik
			</h1>
			<p class="text-mid text-lg leading-relaxed md:text-xl">
				Didirikan pada tahun 1976 di Jakarta, PT Sahabat Indonesia Inti Mandiri telah berkembang menjadi mitra pengadaan bagi berbagai pabrik manufaktur, perakit panel listrik, dan kontraktor ME di seluruh Indonesia. Berpusat di Kompleks Pergudangan Muara Karang Jakarta, kami menjaga ketersediaan stok fisik untuk memastikan kelancaran operasional dan pemeliharaan fasilitas pelanggan kami.
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
				<p class="text-mid mt-1 text-xs">Beroperasi konsisten sejak 1976</p>
			</div>
			<div class="text-center lg:text-left" use:scrollReveal={{ delay: 200 }}>
				<StatCounter target={200} suffix="+" />
				<p class="text-mid mt-2 text-xs font-semibold tracking-wider uppercase md:text-sm">
					Karyawan & Tim Kerja
				</p>
				<p class="text-mid mt-1 text-xs">Staf logistik, sales & teknikal</p>
			</div>
			<div class="text-center lg:text-left" use:scrollReveal={{ delay: 300 }}>
				<StatCounter target={10} />
				<p class="text-mid mt-2 text-xs font-semibold tracking-wider uppercase md:text-sm">
					Lini Kategori Industri
				</p>
				<p class="text-mid mt-1 text-xs">Pasokan elektrikal & mekanikal lengkap</p>
			</div>
			<div class="text-center lg:text-left" use:scrollReveal={{ delay: 400 }}>
				<div class="font-mono text-5xl font-bold tabular-nums text-dark md:text-6xl">
					1 Rekanan
				</div>
				<p class="text-mid mt-2 text-xs font-semibold tracking-wider uppercase md:text-sm">
					One-Stop Solution
				</p>
				<p class="text-mid mt-1 text-xs">Satu PO untuk aneka kebutuhan pabrik</p>
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
				<p class="section-label">Fasilitas & Pasokan</p>
				<h2 class="text-dark text-3xl leading-snug md:text-4xl font-display">
					Kesiapan Stok Fisik di Kompleks Pergudangan Muara Karang
				</h2>
				<p class="text-mid text-base leading-relaxed md:text-lg">
					Bagi fasilitas industri manufaktur, ketersediaan suku cadang pengganti yang tepat waktu sangat krusial untuk mencegah berhentinya lini produksi. Keterlambatan pasokan komponen panel atau kegagalan peralatan mekanikal dapat memicu kerugian operasional yang tidak sedikit.
				</p>
				<p class="text-mid text-base leading-relaxed md:text-lg">
					Untuk mengantisipasi hal tersebut, PT Sahabat Indonesia Inti Mandiri memusatkan operasional dan buffer stock di Muara Karang Selatan Blok A Utara No. 1, Jakarta Utara. Dari fasilitas ini, kami secara rutin mendistribusikan kebutuhan komponen ke berbagai kawasan industri utama seperti Cikarang, Karawang, Cilegon, Surabaya, hingga pengiriman kargo antarpulau.
				</p>
			</div>

			<!-- Pull-Quote Box right (5 cols) -->
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
						Prinsip pendiri yang senantiasa memotivasi seluruh staf operasional dan teknis kami untuk memberikan komitmen penuh dan solusi nyata dalam setiap pengadaan pelanggan.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Vision & Mission -->
<section class="section-padding border-border border-t bg-white" data-od-id="about-vision-mission">
	<div class="container-wide">
		<div class="mb-16 text-center" use:scrollReveal>
			<p class="section-label mb-4">Arah & Sasaran</p>
			<h2 class="text-dark text-3xl md:text-4xl font-display">Visi dan Misi Perusahaan</h2>
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
					Menjadi pusat distribusi terpadu di Indonesia yang menyediakan produk suku cadang dan peralatan industri berkualitas tinggi dari prinsipal resmi.
				</p>
			</div>

			<!-- Mission -->
			<div class="space-y-4 md:border-border md:border-l md:pl-16" use:scrollReveal={{ delay: 200 }}>
				<div class="border-primary inline-block border-b-2 pb-2">
					<h3 class="text-dark text-xl font-bold tracking-tight uppercase">Misi</h3>
				</div>
				<p class="text-dark text-2xl leading-snug font-display">
					"Ensuring the best service and convenience for our customers."
				</p>
				<p class="text-mid text-base leading-relaxed">
					Memberikan kemudahan bagi pelanggan melalui respon penawaran harga yang cepat, kepastian stok aktual, tertib administrasi perpajakan, dan ketepatan waktu pengiriman.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- 50 Years Journey / Milestones -->
<section class="section-padding bg-surface" data-od-id="about-milestones">
	<div class="container-wide">
		<div class="mb-16 max-w-2xl" use:scrollReveal>
			<p class="section-label mb-4">Linimasa 5 Dekade</p>
			<h2 class="text-dark text-3xl md:text-4xl font-display">Jejak Pertumbuhan Sejak 1976</h2>
			<p class="text-mid mt-4 text-base leading-relaxed">
				Tahapan perkembangan dan ekspansi jaringan distribusi PT Sahabat Indonesia Inti Mandiri dalam melayani kebutuhan industri nasional.
			</p>
		</div>

		<div class="space-y-8">
			{#each milestones as item, idx}
				<div
					class="border-border grid items-baseline gap-6 border-b pb-8 md:grid-cols-12"
					use:scrollReveal={{ delay: idx * 70 }}
				>
					<div class="md:col-span-3">
						<span class="font-mono text-3xl font-bold text-primary md:text-4xl">
							{item.year}
						</span>
					</div>
					<div class="md:col-span-4">
						<h3 class="text-dark text-lg font-bold">{item.title}</h3>
					</div>
					<div class="md:col-span-5">
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
			<p class="section-label mb-4">Nilai Kemitraan</p>
			<h2 class="text-dark text-3xl md:text-4xl font-display">Mengapa Memilih Kami Sebagai Rekanan</h2>
		</div>

		<div class="grid gap-8 md:grid-cols-3">
			{#each values as val, idx}
				<div
					class="border-border border bg-surface p-8 transition-all hover:-translate-y-1 hover:border-primary hover:shadow-md"
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
		<h2 class="text-dark mb-4 text-3xl md:text-4xl font-display">
			Konsultasikan Kebutuhan Pengadaan Pabrik Anda
		</h2>
		<p class="text-mid mx-auto mb-8 max-w-xl text-lg">
			Hubungi tim sales engineering kami untuk pengecekan stok aktual, penawaran harga resmi (quotation), atau jadwal pengiriman berkala proyek Anda.
		</p>
		<div class="flex flex-wrap items-center justify-center gap-4">
			<a
				href="/contact"
				class="bg-primary hover:bg-primary-light inline-block rounded px-8 py-4 text-sm font-semibold text-white transition-colors"
			>
				Hubungi Tim Sales
			</a>
			<a
				href="/services"
				class="border-border hover:border-dark inline-block rounded border bg-white px-8 py-4 text-sm font-semibold text-dark transition-colors"
			>
				Lihat 10 Kategori Produk
			</a>
		</div>
	</div>
</section>
