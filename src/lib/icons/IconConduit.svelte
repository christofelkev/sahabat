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
	<!-- Steel conduit raceway / pipe network -->
	<path d="M3 7h10a4 4 0 0 1 4 4v9" />
	<path d="M3 12h5a4 4 0 0 1 4 4v5" />
	<line x1="2" y1="5" x2="2" y2="9" />
	<line x1="2" y1="10" x2="2" y2="14" />
	<line x1="15" y1="21" x2="19" y2="21" />
	<line x1="10" y1="21" x2="14" y2="21" />
</svg>
