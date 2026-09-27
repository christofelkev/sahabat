<script lang="ts">
	interface Props {
		inverted?: boolean;
		class?: string;
	}

	let { inverted = false, class: className = '' }: Props = $props();
</script>

<div class="flex items-center gap-3 select-none {className}">
	<!-- Brand Mark (Red Dot + 6 Blue Waves) -->
	<svg
		viewBox="0 0 44 54"
		class="h-9 w-auto shrink-0 md:h-10"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		aria-hidden="true"
	>
		<!-- Red Sun / Dot -->
		<circle cx="22" cy="8" r="6" fill="#DC2626" />
		<!-- 6 Blue Waves with progressive taper -->
		<path d="M 4 20 C 13 17, 31 23, 40 20" stroke="#0284C7" stroke-width="2.4" stroke-linecap="round" />
		<path d="M 4 26 C 13 23, 31 29, 40 26" stroke="#0284C7" stroke-width="2.4" stroke-linecap="round" />
		<path d="M 5 32 C 14 29, 30 35, 39 32" stroke="#0284C7" stroke-width="2.4" stroke-linecap="round" />
		<path d="M 6 38 C 14 35, 30 41, 38 38" stroke="#0284C7" stroke-width="2.4" stroke-linecap="round" />
		<path d="M 8 44 C 15 41, 29 47, 36 44" stroke="#0284C7" stroke-width="2.4" stroke-linecap="round" />
		<path d="M 10 50 C 16 48, 28 52, 34 50" stroke="#0284C7" stroke-width="2.4" stroke-linecap="round" />
	</svg>

	<!-- Brand Typography -->
	<div class="flex flex-col justify-center leading-none">
		<span
			class="font-extrabold tracking-wider uppercase text-base md:text-lg transition-colors duration-200 {inverted
				? 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]'
				: 'text-dark'}"
		>
			SAHABAT INDONESIA
		</span>
		<span
			class="mt-1 font-mono text-[9px] md:text-[10px] font-semibold tracking-widest uppercase transition-colors duration-200 {inverted
				? 'text-white/80 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]'
				: 'text-mid'}"
		>
			PT SAHABAT INDONESIA INTI MANDIRI
		</span>
	</div>
</div>
