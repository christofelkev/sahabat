/**
 * Svelte action: scroll-triggered reveal animation.
 * Elements fade in + slide up when entering viewport.
 *
 * Usage: <div use:scrollReveal> or <div use:scrollReveal={{ delay: 200 }}>
 *
 * design.md compliance: respects prefers-reduced-motion.
 */
export function scrollReveal(
	node: HTMLElement,
	options: { delay?: number; threshold?: number } = {}
) {
	const { delay = 0, threshold = 0.15 } = options;

	// Respect prefers-reduced-motion
	const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (prefersReduced) return;

	node.style.opacity = '0';
	node.style.transform = 'translateY(32px)';
	node.style.transition = `opacity 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.style.opacity = '1';
					node.style.transform = 'translateY(0)';
					observer.unobserve(node);
				}
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
