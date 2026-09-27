<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';

	const currentYear = new Date().getFullYear();

	const links = [
		{ href: '/about', label: 'Tentang Kami' },
		{ href: '/services', label: 'Produk & Layanan' },
		{ href: '/contact', label: 'Kontak' }
	] as const;
</script>

<footer class="bg-dark text-light border-t border-white/10" data-od-id="footer">
	<div class="container-wide section-padding">
		<div class="grid gap-12 md:grid-cols-3">
			<!-- Brand -->
			<div>
				<div class="mb-4">
					<Logo inverted={true} />
				</div>
				<p class="text-mid text-sm leading-relaxed">
					Distributor resmi suku cadang dan komponen industri sejak 1976. Satu pintu pengadaan
					terpadu untuk efisiensi fasilitas pabrik Anda.
				</p>
			</div>

			<!-- Quick Links -->
			<div>
				<h4 class="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
					Navigasi
				</h4>
				<ul class="space-y-3">
					{#each links as link}
						<li>
							<a
								href={link.href}
								class="text-mid hover:text-white text-sm transition-colors"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact Info -->
			<div>
				<h4 class="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
					Kontak
				</h4>
				<address class="text-mid space-y-3 text-sm not-italic leading-relaxed">
					<div>
						<p>
							Muara Karang Selatan<br />
							Blok A Utara No. 1<br />
							Kawasan Industri Pergudangan<br />
							Jakarta 14440, Indonesia
						</p>
						<a
							href="https://maps.app.goo.gl/va88g56j92i9F1gf7"
							target="_blank"
							rel="noopener noreferrer"
							class="text-xs text-white/60 hover:text-white inline-flex items-center gap-1 mt-1 transition-colors"
						>
							<span>Lihat di Google Maps &rarr;</span>
						</a>
					</div>
					<p>
						<a href="mailto:sales@sahabatindo.com" class="hover:text-white transition-colors">
							sales@sahabatindo.com
						</a>
					</p>
					<p>
						<a href="tel:+62216610651" class="hover:text-white transition-colors">
							021 6610651
						</a>
					</p>
				</address>
			</div>
		</div>

		<!-- Bottom bar -->
		<div class="border-border/20 text-mid mt-12 border-t pt-8 text-center text-xs">
			<p>&copy; {currentYear} PT Sahabat Indonesia Inti Mandiri. All rights reserved.</p>
		</div>
	</div>
</footer>
