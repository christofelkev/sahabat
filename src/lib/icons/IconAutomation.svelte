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
	<!-- Automation / PLC / Robotic processing icon -->
	<rect x="2" y="5" width="20" height="14" rx="2" />
	<line x1="6" y1="9" x2="10" y2="9" />
	<line x1="6" y1="12" x2="8" y2="12" />
	<circle cx="15" cy="12" r="3" />
	<line x1="15" y1="7" x2="15" y2="9" />
	<line x1="15" y1="15" x2="15" y2="17" />
	<line x1="10" y1="12" x2="12" y2="12" />
	<line x1="18" y1="12" x2="20" y2="12" />
</svg>
