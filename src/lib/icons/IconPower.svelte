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
	<!-- Circuit breaker / electrical grid icon -->
	<rect x="3" y="3" width="18" height="18" rx="1" />
	<line x1="7" y1="8" x2="17" y2="8" />
	<line x1="12" y1="8" x2="12" y2="16" />
	<circle cx="12" cy="16" r="1.5" />
	<line x1="7" y1="20" x2="7" y2="22" />
	<line x1="17" y1="20" x2="17" y2="22" />
	<line x1="7" y1="2" x2="7" y2="4" />
	<line x1="17" y1="2" x2="17" y2="4" />
</svg>
