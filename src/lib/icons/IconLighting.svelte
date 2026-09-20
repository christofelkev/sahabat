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
	<!-- Industrial high-bay luminaire / floodlight -->
	<line x1="12" y1="2" x2="12" y2="6" />
	<path d="M7 6h10l3 8H4L7 6z" />
	<line x1="5" y1="14" x2="19" y2="14" />
	<line x1="7" y1="18" x2="6" y2="21" />
	<line x1="12" y1="18" x2="12" y2="22" />
	<line x1="17" y1="18" x2="18" y2="21" />
</svg>
