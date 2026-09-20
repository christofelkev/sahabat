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
	<!-- Electrical insulation tape roll -->
	<circle cx="10" cy="12" r="7" />
	<circle cx="10" cy="12" r="3" />
	<path d="M10 5h8a2 2 0 0 1 2 2v10" />
	<line x1="17" y1="17" x2="21" y2="17" />
</svg>
