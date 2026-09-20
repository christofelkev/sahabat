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
	<!-- Power backup / UPS generator icon -->
	<rect x="2" y="7" width="20" height="12" rx="2" />
	<path d="M6 7V4h4v3" />
	<path d="M14 7V4h4v3" />
	<line x1="8" y1="13" x2="16" y2="13" />
	<line x1="12" y1="10" x2="12" y2="16" />
</svg>
