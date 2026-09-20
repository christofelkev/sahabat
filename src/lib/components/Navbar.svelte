<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	const isHome = $derived(page.url.pathname === '/');

	const links = [
		{ href: '/about', label: 'Tentang Kami' },
		{ href: '/services', label: 'Produk & Layanan' },
		{ href: '/contact', label: 'Kontak' }
	] as const;

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 40;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	});

	function closeMobile() {
		mobileOpen = false;
	}
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 transition-all duration-300 {!isHome || scrolled
		? 'bg-white shadow-sm border-b border-border'
		: 'bg-gradient-to-b from-black/70 to-transparent'}"
>
	<nav class="container-wide flex items-center justify-between py-3.5 md:py-4">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-3" onclick={closeMobile}>
			<div class="rounded bg-white/95 px-2 py-1 shadow-xs transition-opacity hover:opacity-90">
				<img
					src="/logo.png"
					alt="PT Sahabat Indonesia Inti Mandiri"
					class="h-8 w-auto md:h-9"
					width="140"
					height="36"
				/>
			</div>
		</a>

		<!-- Desktop Nav -->
		<div class="hidden items-center gap-8 md:flex">
			{#each links as link}
				<a
					href={link.href}
					class="text-sm font-semibold transition-colors duration-200 {isHome && !scrolled
						? page.url.pathname === link.href
							? 'text-white underline underline-offset-4'
							: 'text-white/85 hover:text-white'
						: page.url.pathname === link.href
							? 'text-primary underline underline-offset-4'
							: 'text-dark hover:text-primary'}"
				>
					{link.label}
				</a>
			{/each}

			<a
				href="/contact"
				class="rounded px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-all duration-200 {isHome &&
				!scrolled
					? 'bg-accent hover:bg-accent-hover text-white shadow-sm'
					: 'bg-primary hover:bg-primary-light text-white shadow-xs'}"
			>
				Hubungi Kami
			</a>
		</div>

		<!-- Mobile Hamburger -->
		<button
			class="flex flex-col gap-1.5 p-2 md:hidden"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
			aria-expanded={mobileOpen}
		>
			<span
				class="block h-0.5 w-6 origin-center transition-transform duration-200 {isHome && !scrolled
					? 'bg-white'
					: 'bg-dark'}"
				class:translate-y-2={mobileOpen}
				class:rotate-45={mobileOpen}
			></span>
			<span
				class="block h-0.5 w-6 transition-opacity duration-200 {isHome && !scrolled
					? 'bg-white'
					: 'bg-dark'}"
				class:opacity-0={mobileOpen}
			></span>
			<span
				class="block h-0.5 w-6 origin-center transition-transform duration-200 {isHome && !scrolled
					? 'bg-white'
					: 'bg-dark'}"
				class:-translate-y-2={mobileOpen}
				class:-rotate-45={mobileOpen}
			></span>
		</button>
	</nav>

	<!-- Mobile Menu Dropdown -->
	{#if mobileOpen}
		<div class="border-border border-t bg-white shadow-lg md:hidden">
			<div class="container-wide flex flex-col gap-4 py-6">
				{#each links as link}
					<a
						href={link.href}
						class="text-base font-semibold transition-colors {page.url.pathname === link.href
							? 'text-primary'
							: 'text-dark hover:text-primary'}"
						onclick={closeMobile}
					>
						{link.label}
					</a>
				{/each}
				<a
					href="/contact"
					class="bg-primary hover:bg-primary-light mt-2 rounded px-5 py-3 text-center text-xs font-bold tracking-wider text-white uppercase transition-colors"
					onclick={closeMobile}
				>
					Hubungi Kami
				</a>
			</div>
		</div>
	{/if}
</header>
