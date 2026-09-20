<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	const links = [
		{ href: '/about', label: 'About' },
		{ href: '/services', label: 'Services' },
		{ href: '/contact', label: 'Contact' }
	] as const;

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 80;
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
	class="fixed top-0 right-0 left-0 z-50 transition-all"
	class:bg-white={scrolled}
	class:shadow-md={scrolled}
	style:--duration="var(--duration-normal)"
	style:transition-timing-function="var(--ease-out-expo)"
>
	<nav class="container-wide flex items-center justify-between py-4">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-3" onclick={closeMobile}>
			<img
				src="/logo.png"
				alt="PT Sahabat Indonesia Inti Mandiri"
				class="h-10 w-auto"
				width="160"
				height="40"
			/>
		</a>

		<!-- Desktop Nav -->
		<div class="hidden items-center gap-8 md:flex">
			{#each links as link}
				<a
					href={link.href}
					class="text-sm font-medium transition-colors hover:text-primary"
					class:text-primary={page.url.pathname === link.href}
					class:text-dark={page.url.pathname !== link.href}
				>
					{link.label}
				</a>
			{/each}
			<a
				href="/contact"
				class="bg-primary hover:bg-primary-light rounded px-5 py-2.5 text-sm font-semibold text-white transition-colors"
			>
				Hubungi Kami
			</a>
		</div>

		<!-- Mobile Hamburger -->
		<button
			class="flex flex-col gap-1.5 md:hidden"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
			aria-expanded={mobileOpen}
		>
			<span
				class="bg-dark block h-0.5 w-6 origin-center transition-transform"
				class:translate-y-2={mobileOpen}
				class:rotate-45={mobileOpen}
			></span>
			<span
				class="bg-dark block h-0.5 w-6 transition-opacity"
				class:opacity-0={mobileOpen}
			></span>
			<span
				class="bg-dark block h-0.5 w-6 origin-center transition-transform"
				class:-translate-y-2={mobileOpen}
				class:-rotate-45={mobileOpen}
			></span>
		</button>
	</nav>

	<!-- Mobile Menu -->
	{#if mobileOpen}
		<div class="border-border bg-white border-t md:hidden">
			<div class="container-wide flex flex-col gap-4 py-6">
				{#each links as link}
					<a
						href={link.href}
						class="text-dark hover:text-primary text-base font-medium transition-colors"
						class:text-primary={page.url.pathname === link.href}
						onclick={closeMobile}
					>
						{link.label}
					</a>
				{/each}
				<a
					href="/contact"
					class="bg-primary hover:bg-primary-light mt-2 rounded px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors"
					onclick={closeMobile}
				>
					Hubungi Kami
				</a>
			</div>
		</div>
	{/if}
</header>
