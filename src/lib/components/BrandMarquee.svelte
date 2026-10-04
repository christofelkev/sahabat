<script lang="ts">
  const brands = [
    {
      name: "MITSUBISHI ELECTRIC",
      origin: "JAPAN",
      focus: "Power Distribution & Factory Automation",
      specs: "ACB • MCCB • PLC FX5U • Inverter FR",
      highlight: "Principal Partner"
    },
    {
      name: "PANASONIC",
      origin: "JAPAN",
      focus: "Steel Conduit Piping & Wiring Devices",
      specs: "White Conduit JIS C8305 • EMT ANSI C80.3",
      highlight: "Official Distributor"
    },
    {
      name: "IWASAKI EYE",
      origin: "JAPAN",
      focus: "High Bay LED & Explosion-Proof Lighting",
      specs: "Zone 1/2 Hazloc • Metal Halide • Floodlight",
      highlight: "Authorized Agent"
    },
    {
      name: "NITCHI",
      origin: "JAPAN",
      focus: "Heavy-Duty Electric & Manual Hoists",
      specs: "Electric Chain Hoist • Trolley 0.5T–50T",
      highlight: "Factory Verified"
    },
    {
      name: "SHINMAYWA",
      origin: "JAPAN",
      focus: "Emergency Power & Industrial Submersible",
      specs: "Backup Gen Systems • Industrial Heavy Duty",
      highlight: "Direct Supplier"
    },
    {
      name: "UNIBELL",
      origin: "GLOBAL",
      focus: "Electrical Insulation & Heavy-Duty Tape",
      specs: "PVC Flame Retardant • High-Voltage Joining",
      highlight: "Exclusive Stockist"
    }
  ];

  // Duplicate for seamless 100% continuous infinite loop
  const marqueeItems = [...brands, ...brands];
</script>

<section class="relative bg-zinc-950 border-y border-zinc-800/80 py-8 overflow-hidden select-none" aria-label="Prinsipal Manufaktur dan Brand Mitra">
  <!-- Ambient background glow accents -->
  <div class="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent z-10 pointer-events-none"></div>
  <div class="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-zinc-950 via-zinc-950/90 to-transparent z-10 pointer-events-none"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-zinc-800/60 pb-3">
      <div class="flex items-center gap-2.5">
        <span class="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
        <span class="text-xs font-mono tracking-widest uppercase text-zinc-400 font-semibold">
          // OFFICIAL PRINCIPAL PARTNERS & DIRECT DISTRIBUTIONS
        </span>
      </div>
      <p class="text-xs text-zinc-400 font-mono hidden sm:block">
        Jaminan Keaslian 100% • Sertifikasi Manufaktur Jepang & Global
      </p>
    </div>
  </div>

  <!-- Marquee track container -->
  <div class="group relative flex overflow-x-hidden">
    <div class="flex items-center gap-6 animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap will-change-transform">
      {#each marqueeItems as item, idx}
        <div 
          class="flex-shrink-0 flex items-center gap-4 bg-zinc-900/70 hover:bg-zinc-800/80 border border-zinc-800 hover:border-red-500/50 rounded-xl px-5 py-3.5 transition-all duration-300 shadow-sm hover:shadow-red-950/20 group/card"
        >
          <div class="flex flex-col text-left">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-sm font-black tracking-tight text-white group-hover/card:text-red-400 transition-colors">
                {item.name}
              </span>
              <span class="px-1.5 py-0.5 text-[10px] font-mono font-medium rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                {item.origin}
              </span>
            </div>
            <span class="text-xs text-zinc-300 font-medium tracking-tight">
              {item.focus}
            </span>
            <span class="text-[11px] text-zinc-400 font-mono mt-0.5">
              {item.specs}
            </span>
          </div>

          <div class="hidden md:flex flex-col items-end border-l border-zinc-800 pl-4 py-1">
            <span class="text-[10px] font-mono uppercase tracking-wider text-red-400 font-semibold bg-red-950/40 px-2 py-0.5 rounded border border-red-900/40">
              {item.highlight}
            </span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-marquee {
    display: flex;
    width: max-content;
    animation: marquee 35s linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-marquee {
      animation: none;
      overflow-x: auto;
    }
  }
</style>
