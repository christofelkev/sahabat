<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		target: number;
		suffix?: string;
		duration?: number;
	}

	let { target, suffix = '', duration = 2000 }: Props = $props();

	let display = $state('0');
	let el: HTMLElement;

	onMount(() => {
		const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						if (prefersReduced) {
							display = target.toString();
						} else {
							animateCount();
						}
						observer.unobserve(el);
					}
				}
			},
			{ threshold: 0.3 }
		);

		observer.observe(el);

		return () => observer.disconnect();
	});

	function animateCount() {
		const start = performance.now();

		function step(now: number) {
			const elapsed = now - start;
			const progress = Math.min(elapsed / duration, 1);
			// Ease-out cubic
			const eased = 1 - Math.pow(1 - progress, 3);
			const current = Math.round(eased * target);
			display = current.toString();

			if (progress < 1) {
				requestAnimationFrame(step);
			}
		}

		requestAnimationFrame(step);
	}
</script>

<span bind:this={el} class="font-mono text-5xl font-bold tabular-nums md:text-6xl">
	{display}{suffix}
</span>
