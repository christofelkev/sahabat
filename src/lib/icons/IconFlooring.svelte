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
	<!-- Heavy-duty industrial flooring tiles / grid layer -->
	<path d="M12 2L2 7l10 5 10-5-10-5z" />
	<path d="M2 17l10 5 10-5" />
	<path d="M2 12l10 5 10-5" />
</svg>
