<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { scrollReveal } from '$lib/actions/scrollReveal';

	const faqs = [
		{
			q: 'Bagaimana alur permintaan penawaran harga resmi (Official Quotation)?',
			a: 'Kirimkan daftar kebutuhan (Bill of Quantities / BoQ) atau part number yang Anda cari melalui formulir kontak ini atau langsung ke email sales@sahabatindo.com. Tim sales engineering kami akan memeriksa ketersediaan stok aktual di gudang dan menerbitkan surat penawaran harga resmi dalam 1x24 jam kerja.'
		},
		{
			q: 'Apakah seluruh transaksi diterbitkan Faktur Pajak resmi (e-Faktur PPN)?',
			a: 'Ya. PT Sahabat Indonesia Inti Mandiri adalah entitas Pengusaha Kena Pajak (PKP). Seluruh transaksi penjualan resmi disertai e-Faktur PPN 11%, Surat Jalan asli, dan kwitansi/invoice resmi untuk keperluan administrasi dan audit perpajakan perusahaan Anda.'
		},
		{
			q: 'Apakah barang pesanan dapat diambil sendiri (Self Pick-up) di Gudang Muara Karang?',
			a: 'Bisa. Setelah pesanan diverifikasi dan dokumen Delivery Order (DO) / Surat Jalan terbit, armada atau kurir perusahaan Anda dapat langsung mengambil barang di fasilitas pergudangan kami di Kawasan Industri Muara Karang Selatan Blok A Utara No. 1, Jakarta Utara pada hari kerja (Senin – Jumat, 08:30 – 17:00 WIB).'
		},
		{
			q: 'Bagaimana opsi pengiriman ke kawasan industri luar kota dan antarpulau?',
			a: 'Untuk area Jabodetabek (Cikarang, Karawang, Cilegon, Tangerang, dll), kami melayani pengiriman armada reguler. Untuk luar kota dan luar pulau (Sumatera, Kalimantan, Sulawesi, hingga Papua), barang dikirimkan melalui ekspedisi kargo rekanan tepercaya atau ekspedisi langganan yang ditunjuk oleh perusahaan Anda.'
		},
		{
			q: 'Apakah tersedia fasilitas Term of Payment (TOP) untuk pengadaan korporat?',
			a: 'Untuk transaksi perdana berlaku pembayaran tunai / transfer sebelum barang diambil atau dikirim (CBD). Bagi perusahaan rekanan berkontrak atau perakit panel yang melakukan pemesanan rutin, kami menyediakan fasilitas tempo pembayaran (TOP 14 hingga 30 hari) setelah proses verifikasi data legalitas dan persetujuan credit limit.'
		},
		{
			q: 'Bagaimana jika part number yang kami butuhkan sudah discontinue dari pabrikan?',
			a: 'Tim teknis kami memiliki database referensi silang (cross-reference) prinsipal. Kami dapat membantu merekomendasikan seri pengganti modern yang kompatibel secara dimensi fisik, dudukan mounting, dan kapasitas rating daya sehingga tidak memerlukan perombakan total pada panel Anda.'
		}
	];
</script>

<svelte:head>
	<title>Hubungi Kami & Lokasi Gudang — PT Sahabat Indonesia Inti Mandiri</title>
	<meta
		name="description"
		content="Hubungi kantor pusat dan kompleks pergudangan PT Sahabat Indonesia Inti Mandiri di Muara Karang Selatan Blok A Utara No. 1, Jakarta Utara. Telepon: 021 6610651, Email: sales@sahabatindo.com."
	/>
	<meta property="og:title" content="Kontak PT Sahabat Indonesia Inti Mandiri" />
	<meta
		property="og:description"
		content="Konsultasikan kebutuhan komponen industri Anda dengan tim sales engineering PT Sahabat Indonesia Inti Mandiri. Pengadaan resmi breaker, PLC, konduit, hoist, dan alat pabrik."
	/>
	<link rel="canonical" href="https://sahabatindo.com/contact" />
</svelte:head>

<section class="section-padding bg-surface pt-32 lg:pt-40" data-od-id="contact-hero">
	<div class="container-wide">
		<div class="max-w-3xl" use:scrollReveal>
			<p class="section-label mb-4">Pusat Layanan & Kantor</p>
			<h1 class="text-dark mb-6 text-4xl leading-tight md:text-5xl lg:text-6xl font-display">
				Hubungi Tim Sales Engineering & Pergudangan
			</h1>
			<p class="text-mid text-lg leading-relaxed md:text-xl">
				Untuk pengecekan ketersediaan stok fisik, konsultasi spesifikasi teknis, atau permintaan penawaran harga resmi (official quotation), silakan hubungi tim kami atau kirimkan daftar BoQ Anda.
			</p>
		</div>
	</div>
</section>

<!-- Main Grid: Info Left + Form Right -->
<section class="section-padding bg-white" data-od-id="contact-main">
	<div class="container-wide">
		<div class="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
			<!-- Info Left (5 cols) -->
			<div class="space-y-8 lg:col-span-5" use:scrollReveal>
				<div>
					<p class="section-label mb-2">Kantor Pusat & Logistik</p>
					<h2 class="text-dark font-display text-2xl font-bold">PT Sahabat Indonesia Inti Mandiri</h2>
				</div>

				<!-- Address Block -->
				<div class="border-border border-t pt-6">
					<p class="text-dark mb-2 font-mono text-xs font-semibold tracking-wider uppercase">
						Alamat Kantor & Gudang
					</p>
					<p class="text-mid text-sm leading-relaxed mb-3">
						Muara Karang Selatan<br />
						Blok A Utara No. 1<br />
						Kawasan Industri Pergudangan<br />
						Jakarta 14440, Indonesia
					</p>
					<a
						href="https://maps.app.goo.gl/va88g56j92i9F1gf7"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-light transition-colors"
					>
						<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
							<circle cx="12" cy="10" r="3"></circle>
						</svg>
						Buka di Google Maps &rarr;
					</a>
				</div>

				<!-- Contact Details -->
				<div class="border-border border-t pt-6 space-y-4">
					<div>
						<p class="text-dark mb-1 font-mono text-xs font-semibold tracking-wider uppercase">
							Email Penjualan
						</p>
						<a
							href="mailto:sales@sahabatindo.com"
							class="text-primary hover:text-primary-light text-base font-semibold transition-colors"
						>
							sales@sahabatindo.com
						</a>
					</div>

					<div class="grid grid-cols-2 gap-4">
						<div>
							<p class="text-dark mb-1 font-mono text-xs font-semibold tracking-wider uppercase">
								Telepon
							</p>
							<a
								href="tel:+62216610651"
								class="text-mid hover:text-dark text-sm font-semibold transition-colors"
							>
								021 6610651
							</a>
						</div>
						<div>
							<p class="text-dark mb-1 font-mono text-xs font-semibold tracking-wider uppercase">
								Faksimili
							</p>
							<p class="text-mid text-sm font-semibold">021 6603700</p>
						</div>
					</div>

					<div>
						<p class="text-dark mb-1 font-mono text-xs font-semibold tracking-wider uppercase">
							Jam Operasional
						</p>
						<p class="text-mid text-sm">Senin – Jumat: 08:30 – 17:00 WIB</p>
						<p class="text-mid text-xs text-muted">Sabtu, Minggu & Hari Libur Nasional: Tutup</p>
					</div>
				</div>

				<!-- Direct Communication Box -->
				<div class="bg-surface border-border border p-6">
					<h3 class="text-dark mb-2 text-base font-bold">Kebutuhan Urgent Proyek?</h3>
					<p class="text-mid mb-4 text-xs leading-relaxed">
						Untuk kebutuhan pengadaan darurat akibat shutdown mesin atau downtime mendesak, hubungi
						langsung nomor kantor kami di jam kerja untuk penanganan prioritas.
					</p>
					<a
						href="tel:+62216610651"
						class="bg-primary hover:bg-primary-light inline-block rounded px-5 py-2.5 text-xs font-semibold text-white transition-colors"
					>
						Hubungi: (021) 6610651
					</a>
				</div>
			</div>

			<!-- Form Right (7 cols) -->
			<div class="lg:col-span-7" use:scrollReveal={{ delay: 150 }}>
				<ContactForm />
			</div>
		</div>
	</div>
</section>

<!-- Map Section -->
<section class="border-border border-t bg-surface py-16" data-od-id="contact-map">
	<div class="container-wide">
		<div class="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4" use:scrollReveal>
			<div class="max-w-2xl">
				<p class="section-label mb-2">Peta Lokasi & Akses Logistik</p>
				<h2 class="text-dark text-2xl font-bold md:text-3xl font-display">Akses Pergudangan & Kantor Pusat</h2>
				<p class="text-mid mt-2 text-sm">
					Kawasan Industri Pergudangan Muara Karang Selatan Blok A Utara No. 1, Jakarta Utara 14440.
					Akses langsung armada distribusi untuk pengiriman dalam kota maupun kargo antarpulau.
				</p>
			</div>
			<div>
				<a
					href="https://maps.app.goo.gl/va88g56j92i9F1gf7"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 bg-dark hover:bg-black text-white px-5 py-2.5 rounded text-sm font-semibold transition-colors shadow-sm"
				>
					<svg class="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
						<circle cx="12" cy="10" r="3"></circle>
					</svg>
					Buka di Google Maps
					<svg class="w-3.5 h-3.5 text-mid" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
						<polyline points="15 3 21 3 21 9"></polyline>
						<line x1="10" y1="14" x2="21" y2="3"></line>
					</svg>
				</a>
			</div>
		</div>

		<!-- Map Frame -->
		<div class="border-border overflow-hidden rounded border bg-white shadow-sm" use:scrollReveal={{ delay: 100 }}>
			<iframe
				title="Lokasi Head Office & Gudang PT Sahabat Indonesia Inti Mandiri"
				src="https://maps.google.com/maps?q=-6.1256442,106.7831587&hl=id&z=17&output=embed"
				class="h-[420px] w-full border-0"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>

			<!-- Bottom bar info inside map card -->
			<div class="border-t border-border bg-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-xs">
				<div class="flex items-center gap-3">
					<span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
					<span class="font-medium text-dark">PT. SAHABAT INDONESIA INTI MANDIRI</span>
					<span class="text-mid hidden sm:inline">•</span>
					<span class="text-mid hidden sm:inline">Koordinat: -6.125644, 106.783159</span>
				</div>
				<a
					href="https://maps.app.goo.gl/va88g56j92i9F1gf7"
					target="_blank"
					rel="noopener noreferrer"
					class="text-primary hover:text-primary-light font-semibold inline-flex items-center gap-1.5 transition-colors"
				>
					Petunjuk Arah & Navigasi
					<svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M5 12h14"></path>
						<path d="m12 5 7 7-7 7"></path>
					</svg>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section class="section-padding bg-white" data-od-id="contact-faq">
	<div class="container-wide">
		<div class="mb-16 text-center" use:scrollReveal>
			<p class="section-label mb-4">Informasi B2B</p>
			<h2 class="text-dark text-3xl md:text-4xl">Pertanyaan Umum Pengadaan</h2>
			<p class="text-mid mx-auto mt-4 max-w-xl text-base">
				Panduan praktis seputar proses pemesanan, faktur pajak, dan jaminan pasokan barang untuk tim
				procurement & purchasing pabrik.
			</p>
		</div>

		<div class="mx-auto max-w-3xl space-y-6">
			{#each faqs as item, idx}
				<div
					class="border-border border bg-surface p-6 transition-all hover:border-dark"
					use:scrollReveal={{ delay: idx * 80 }}
				>
					<h3 class="text-dark mb-3 text-base font-bold md:text-lg">
						{item.q}
					</h3>
					<p class="text-mid text-sm leading-relaxed">
						{item.a}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
