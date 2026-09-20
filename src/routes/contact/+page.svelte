<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { scrollReveal } from '$lib/actions/scrollReveal';

	const faqs = [
		{
			q: 'Bagaimana alur permintaan penawaran resmi (Official Quotation)?',
			a: 'Anda dapat mengirimkan daftar kebutuhan (Bill of Quantities / BoQ) atau part number spesifik melalui formulir kontak atau langsung email ke sales@sahabatindo.com. Tim sales engineering kami akan menerbitkan dokumen quotation resmi lengkap dengan spesifikasi, ketersediaan stok, dan estimasi waktu pengiriman dalam 1x24 jam kerja.'
		},
		{
			q: 'Apakah melayani pengiriman ke luar Jabodetabek dan seluruh Indonesia?',
			a: 'Ya. Kompleks pergudangan kami di Muara Karang, Jakarta didukung oleh jaringan ekspedisi darat, laut, dan udara tepercaya yang secara reguler mengirimkan kargo material industri ke berbagai kawasan industri di Jawa, Sumatera, Kalimantan, Sulawesi, hingga Papua.'
		},
		{
			q: 'Apakah transaksi disertai Faktur Pajak resmi dan dokumen kelengkapan barang?',
			a: 'Sebagai entitas Perseroan Terbatas (PT) Pengusaha Kena Pajak (PKP), seluruh transaksi kami secara sah diterbitkan Faktur Pajak elektronik (e-Faktur), surat jalan resmi, dan dokumen Certificate of Origin (COO) / Manufacturer Warranty apabila dipersyaratkan oleh pabrik Anda.'
		},
		{
			q: 'Apakah tersedia layanan konsultasi teknis jika kode produk lama sudah discontinue?',
			a: 'Tentu. Tim teknis kami memiliki database referensi silang (cross-reference) untuk membantu mengidentifikasi seri pengganti modern yang kompatibel secara dimensi dan kapasitas beban tanpa perlu merombak keseluruhan panel sistem Anda.'
		}
	];
</script>

<svelte:head>
	<title>Kontak & Lokasi Head Office — PT Sahabat Indonesia Inti Mandiri</title>
	<meta
		name="description"
		content="Hubungi Head Office & Pergudangan PT Sahabat Indonesia Inti Mandiri di Muara Karang Jakarta. Telepon: 021 6610651, Fax: 021 6603700, Email: sales@sahabatindo.com."
	/>
	<meta property="og:title" content="Kontak PT Sahabat Indonesia Inti Mandiri" />
	<meta
		property="og:description"
		content="Konsultasikan kebutuhan komponen industri Anda dengan tim sales engineering PT Sahabat Indonesia Inti Mandiri."
	/>
	<link rel="canonical" href="https://sahabatindo.com/contact" />
</svelte:head>

<!-- Hero / Intro -->
<section class="section-padding bg-surface pt-32 lg:pt-40" data-od-id="contact-hero">
	<div class="container-wide">
		<div class="max-w-3xl" use:scrollReveal>
			<p class="section-label mb-4">Pusat Layanan & Kantor</p>
			<h1 class="text-dark mb-6 text-4xl leading-tight md:text-5xl lg:text-6xl">
				Siap Membantu Kebutuhan Engineering Pabrik Anda
			</h1>
			<p class="text-mid text-lg leading-relaxed md:text-xl">
				Hubungi tim sales engineering kami untuk permintaan harga, verifikasi spesifikasi teknis,
				jadwal kunjungan teknis lapangan, atau kunjungi kantor pusat kami di Muara Karang, Jakarta.
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
					<p class="text-mid text-sm leading-relaxed">
						Muara Karang Selatan<br />
						Blok A Utara No. 1<br />
						Kawasan Industri Pergudangan<br />
						Jakarta 14440, Indonesia
					</p>
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
		<div class="mb-8 max-w-2xl" use:scrollReveal>
			<p class="section-label mb-2">Peta Lokasi</p>
			<h2 class="text-dark text-2xl font-bold md:text-3xl">Akses Pergudangan & Kantor</h2>
			<p class="text-mid mt-2 text-sm">
				Akses mudah untuk armada truk kontainer dan ekspedisi logistik di Kawasan Industri Pergudangan
				Muara Karang Selatan, Jakarta Utara.
			</p>
		</div>

		<!-- Map Frame -->
		<div class="border-border overflow-hidden rounded border bg-white shadow-sm" use:scrollReveal={{ delay: 100 }}>
			<iframe
				title="Lokasi PT Sahabat Indonesia Inti Mandiri"
				src="https://maps.google.com/maps?q=Kawasan%20Industri%20Pergudangan%20Muara%20Karang%20Selatan%20Jakarta&t=&z=14&ie=UTF8&iwloc=&output=embed"
				class="h-[380px] w-full border-0"
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
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
