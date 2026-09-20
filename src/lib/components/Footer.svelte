<script lang="ts">
	const currentYear = new Date().getFullYear();

	const links = [
		{ href: '/about', label: 'About' },
		{ href: '/services', label: 'Services' },
		{ href: '/contact', label: 'Contact' }
	] as const;
</script>

<footer class="bg-dark text-light border-t border-white/10" data-od-id="footer">
	<div class="container-wide section-padding">
		<div class="grid gap-12 md:grid-cols-3">
			<!-- Brand -->
			<div>
				<img
					src="/logo.png"
					alt="PT Sahabat Indonesia Inti Mandiri"
					class="mb-4 h-10 w-auto brightness-0 invert"
					width="160"
					height="40"
				/>
				<p class="text-mid text-sm leading-relaxed">
					Distributor Industrial Terpercaya sejak 1976. Dari power distribution hingga
					flooring — satu pintu untuk kebutuhan engineering pabrik Anda.
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
					<p>
						Muara Karang Selatan<br />
						Blok A Utara No. 1<br />
						Kawasan Industri Pergudangan<br />
						Jakarta 14440, Indonesia
					</p>
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
