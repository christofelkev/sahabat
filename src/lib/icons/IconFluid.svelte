<script lang="ts">
	interface Props {
		class?: string;
		size?: number | string;
	}
	let { class: className = 'w-6 h-6', size = 24 }: Props = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	width={size}
	height={size}
	fill="none"
	stroke="currentColor"
	stroke-width="1.6"
	stroke-linecap="round"
	stroke-linejoin="round"
	class={className}
>
	<!-- Fluid & Air handling / Fan / Blower icon -->
	<circle cx="12" cy="12" r="9" />
	<circle cx="12" cy="12" r="2.5" />
	<path d="M12 9.5c0-3 2-4.5 4-4.5s2 1.5 2 3-3 4-6 4" />
	<path d="M9.5 12c-3 0-4.5-2-4.5-4s1.5-2 3-2 4 3 4 6" />
	<path d="M12 14.5c0 3-2 4.5-4 4.5s-2-1.5-2-3 3-4 6-4" />
	<path d="M14.5 12c3 0 4.5 2 4.5 4s-1.5 2-3 2-4-3-4-6" />
</svg>
