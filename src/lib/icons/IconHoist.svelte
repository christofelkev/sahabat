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
	<!-- Industrial crane hoist and hook -->
	<line x1="4" y1="3" x2="20" y2="3" />
	<rect x="8" y="5" width="8" height="6" rx="1" />
	<line x1="12" y1="11" x2="12" y2="15" />
	<circle cx="12" cy="15.5" r="1" />
	<path d="M12 16.5v1.5a3 3 0 0 0 3 3 3 3 0 0 0 3-3c0-1.2-.8-2.2-2-2.7" />
</svg>
