export interface ProductCategory {
	id: string;
	name: string;
	brand: string;
	image: string;
	shortDesc: string;
	description: string;
	applications: string[];
	items: string[];
	iconName: string;
}

export const productCategories: ProductCategory[] = [
	{
		id: 'power-distribution',
		name: 'Power Distribution Components',
		brand: 'Mitsubishi Electric / Panasonic',
		image: '/products/power-distribution.jpg',
		shortDesc: 'Circuit breaker, kontaktor magnetik, dan proteksi beban listrik tegangan rendah.',
		description:
			'Distributor resmi komponen panel listrik industri untuk Main Distribution Panel (MDP) dan Sub-Panel. Menyediakan Air Circuit Breaker, MCCB seri WS-V, MCB, serta kontaktor magnetik dan overload relay berstandar IEC/JIS.',
		applications: [
			'Main Distribution Panel (MDP / LVMDP)',
			'Sub-Distribution Panel Pabrik & Gedung',
			'Panel Kontrol Motor (Motor Control Center / MCC)',
			'Proteksi Sirkuit Gardu Trafo Fasilitas'
		],
		items: [
			'Air Circuit Breaker (ACB) — seri 3P/4P drawout & fixed',
			'Molded Case Circuit Breaker (MCCB) — 16A hingga 1600A',
			'Magnetic Contactor & Thermal Overload Relay',
			'Miniature Circuit Breaker (MCB) 1P/2P/3P standar IEC',
			'Earth Leakage Circuit Breaker (ELCB / RCCB)'
		],
		iconName: 'power'
	},
	{
		id: 'factory-automation',
		name: 'Factory Automation',
		brand: 'Mitsubishi Electric',
		image: '/products/factory-automation.jpg',
		shortDesc: 'PLC controller, Inverter (VFD), layar HMI GOT, dan servo system.',
		description:
			'Perangkat otomatisasi mesin industri dari lini Mitsubishi Electric MELSEC series. Mendukung kebutuhan perakitan mesin baru (OEM), upgrade sistem kontrol, maupun penggantian unit kontrol lama yang rusak.',
		applications: [
			'Sistem Otomasi Jalur Produksi & Perakitan',
			'Mesin Packaging, Filling & Labeling',
			'Pengendali Kecepatan Conveyor Pabrik',
			'Panel Kontrol Mesin Industri & OEM'
		],
		items: [
			'PLC Controller (MELSEC iQ-F / FX5U, FX3U, Q Series)',
			'Inverter Variable Frequency Drive (FR-E800, FR-A800, FR-D700)',
			'Human Machine Interface (HMI GOT2000 Series)',
			'AC Servo Motor & Servo Amplifier (MELSERVO MR-J4/J5)',
			'Modul Ekspansi I/O, Analog & Komunikasi Ethernet/CC-Link'
		],
		iconName: 'automation'
	},
	{
		id: 'conduit',
		name: 'Conduit & Cable Management',
		brand: 'Panasonic',
		image: '/products/conduit.jpg',
		shortDesc: 'Pipa konduit baja galvanis, fleksibel metal, dan aksesoris fitting JIS/ANSI.',
		description:
			'Pipa pelindung kabel baja berstandar JIS C 8305 dan ANSI C80.1 untuk instalasi listrik pabrik dan gedung bertingkat. Melindungi kabel dari benturan fisik, gigitan hama, percikan api, dan paparan kimia.',
		applications: [
			'Instalasi Kabel Tenaga & Kontrol Pabrik',
			'Jalur Kabel Ruang Mekanikal & Genset',
			'Area Terbuka / Outdoor Tahan Cuaca',
			'Gedung Komersial, Rumah Sakit & Fasilitas Publik'
		],
		items: [
			'Pipa Konduit Baja Galvanis EMT (Electro Metal Tubing)',
			'Pipa Konduit Baja Tebal IMC & RSC (Rigid Steel Conduit)',
			'Flexible Metal Conduit (Polos & Dilapisi Vinyl Waterproof)',
			'Aksesoris Fitting: Coupling, Connector, Elbow, Saddle Clamp',
			'Cast Iron Junction Box & Universal Pull Box'
		],
		iconName: 'conduit'
	},
	{
		id: 'hoists',
		name: 'Hoists & Material Handling',
		brand: 'Nitchi',
		image: '/products/hoists.jpg',
		shortDesc: 'Electric chain hoist, manual chain block, dan lever hoist buatan Jepang.',
		description:
			'Peralatan angkat material heavy-duty buatan Nitchi Co., Ltd. Jepang dengan sertifikasi uji beban. Tersedia unit electric hoist 3-phase, manual chain block untuk area tanpa listrik, serta troli gantry rel.',
		applications: [
			'Overhead Crane Pabrik & Gudang',
			'Bengkel Fabrikasi Logam & Workshop Mesin',
			'Area Bongkar Muat Barang (Loading Dock)',
			'Maintenance Bay Alat Berat & Ruang Turbin'
		],
		items: [
			'Electric Chain Hoist Nitchi seri EC-4 (0.5 ton – 10 ton)',
			'Manual Chain Block Nitchi seri H-50 (0.5 ton – 20 ton)',
			'Lever Block / Ratchet Hoist seri RB-5 (0.8 ton – 6.3 ton)',
			'Motorized Trolley & Geared / Plain Push Trolley',
			'Spare Part Original: Rantai Angkat Grade 80, Rem & Hook Asli'
		],
		iconName: 'hoist'
	},
	{
		id: 'lighting',
		name: 'Industrial Lighting',
		brand: 'Iwasaki EYE',
		image: '/products/lighting.jpg',
		shortDesc: 'Lampu LED high bay, floodlight sorot outdoor, dan lampu explosion-proof.',
		description:
			'Armatur lampu industri hemat energi buatan Iwasaki Electric (EYE Lighting) Jepang dengan housing kokoh tahan getaran mesin, panas plafon, dan debu pabrik (rating IP65/IP66).',
		applications: [
			'Penerangan Area Produksi & Plafon Gudang Tinggi (High Bay)',
			'Lampu Sorot Lapangan Penumpukan, Parkir & Pelabuhan',
			'Zona Berbahaya Kilang Minyak, Gas & Bahan Kimia',
			'Penerangan Jalan Akses Kawasan Industri'
		],
		items: [
			'LED High Bay Luminaire (100W – 400W hemat daya)',
			'Heavy-Duty Floodlight Sorot Proyek & Lapangan',
			'Explosion-Proof Lighting Fixture (Zone 1 & Zone 2)',
			'Lampu Koridor & Emergency Exit Industri',
			'Lampu Khusus Pabrik Suhu Ekstrem & Tahan Getaran'
		],
		iconName: 'lighting'
	},
	{
		id: 'electrical-tape',
		name: 'Electrical Tape & Insulation',
		brand: 'Unibell',
		image: '/products/electrical-tape.jpg',
		shortDesc: 'Pita isolasi listrik PVC vinyl tebal, rubber splicing tape, dan mastic tape.',
		description:
			'Pita isolator listrik dengan daya rekat stabil, elastisitas tinggi, dan ketahanan dielektrik hingga 600V–69kV. Tidak mudah getas pada suhu ruang mesin dan tahan kelembapan tropis.',
		applications: [
			'Penyambungan & Pembungkus Sambungan Kabel Motor',
			'Penataan / Harness Kabel di Dalam Box Panel Listrik',
			'Isolasi Kedap Air untuk Sambungan Bawah Tanah & Luar Ruang',
			'Kode Warna Phase Panel (R-S-T-N)'
		],
		items: [
			'PVC Electrical Insulation Tape (Hitam & Aneka Warna Kode Fasa)',
			'High Voltage Rubber Splicing Tape (Pita Karet Isolasi Tegangan Tinggi)',
			'Waterproof Mastic Sealant Tape (Peredam Bocor & Korosi)',
			'Semi-Conducting Tape & Heat-Resistant Glass Cloth Tape',
			'Liquid Insulation Sealant & Cable Pulling Lubricant'
		],
		iconName: 'tape'
	},
	{
		id: 'power-backup',
		name: 'Power Backup System',
		brand: 'Shinmaywa & Industrial Grade',
		image: '/products/power-backup.jpg',
		shortDesc: 'Genset diesel kapasitas besar, online UPS continuous, dan panel ATS/AMF.',
		description:
			'Sistem catu daya darurat untuk mencegah kerugian downtime mesin saat pasokan listrik PLN terputus. Melindungi sistem kontrol otomasi, server data pabrik, dan instalasi penerangan darurat.',
		applications: [
			'Ruang Kontrol Utama (Control Room) & Server Data',
			'Pompa Pemadam Kebakaran (Hydrant Fire Pump)',
			'Mesin Produksi dengan Siklus Pendinginan Kontinu',
			'Fasilitas Uji Mutu & Laboratorium Pabrik'
		],
		items: [
			'Genset Diesel Silent & Open Type (Kapasitas 10 kVA – 2000 kVA)',
			'Online Double Conversion Industrial UPS 3-Phase',
			'Panel Otomatis Transfer Listrik (ATS / AMF Panel)',
			'Industrial Battery Bank (VRLA / Ni-Cd) & Smart Charger',
			'Spare Part Filter & Komponen Pemeliharaan Rutin Genset'
		],
		iconName: 'backup'
	},
	{
		id: 'fluid-air',
		name: 'Fluid and Air Handling Unit',
		brand: 'Industrial Principal',
		image: '/products/fluid-air.jpg',
		shortDesc: 'Blower sentrifugal, exhaust fan industri, kompresor udara, dan sistem pneumatik.',
		description:
			'Perlengkapan pengolahan udara ruang pabrik dan sistem fluida bertekanan. Membantu sirkulasi udara di area proses, pembuangan hawa panas mesin, serta penyediaan udara kering untuk instrumen pneumatik.',
		applications: [
			'Sistem Pembuangan Hawa Panas & Uap Kimia Mesin',
			'Ventilasi Ruang Panel Listrik & Ruang Trafo',
			'Suplai Udara Bertekanan untuk Mesin Pabrik',
			'Sistem Perpipaan Air Pendingin Chiller & Cooling Tower'
		],
		items: [
			'Blower Sentrifugal & Axial Fan Heavy-Duty',
			'Roof Ventilator & Wall Exhaust Fan Pabrik',
			'Screw & Piston Air Compressor + Refrigerated Air Dryer',
			'FRL Unit (Filter, Regulator, Lubricator) Udara Tekan',
			'Solenoid Valve, Air Cylinder & Selang PU Industri'
		],
		iconName: 'fluid'
	},
	{
		id: 'tools-machinery',
		name: 'Tools & Machinery',
		brand: 'Industrial Tools & Equipment',
		image: '/products/tools-machinery.jpg',
		shortDesc: 'Perkakas mekanikal bengkel, mesin kerja pabrik, dan alat ukur teknis.',
		description:
			'Peralatan kerja pemeliharaan (maintenance) untuk mekanik dan teknisi pabrik. Material baja perkakas paduan berkualitas tinggi yang tahan hentakan dan torsi berat pada pekerjaan perbaikan rutin.',
		applications: [
			'Divisi Maintenance, Repair & Operations (MRO) Pabrik',
			'Bengkel Bubut & Fabrikasi Komponen Mesin',
			'Pekerjaan Lapangan Kontraktor Mekanikal Elektrikal',
			'Pemeriksaan Kalibrasi & Preventive Maintenance'
		],
		items: [
			'Pneumatic & Battery Impact Wrench Heavy-Duty',
			'Kunci Momen Torsi Presisi (Torque Wrench)',
			'Mesin Bor Duduk, Gerinda Industri & Gergaji Pita Logam',
			'Tang Crimping Hidrolik untuk Skun Kabel Panel Besar',
			'Alat Ukur Teknis: Multitester Digital, Megger Insulation Tester, Clamp Meter'
		],
		iconName: 'tools'
	},
	{
		id: 'flooring',
		name: 'Industrial Flooring',
		brand: 'Heavy-Duty Industrial Grade',
		image: '/products/flooring.jpg',
		shortDesc: 'Cat pelapis lantai epoxy pabrik, polyurethane screed, dan anti-static (ESD).',
		description:
			'Material pelapis permukaan lantai beton khusus area pabrik dan pergudangan. Tahan lalu lintas forklift beban tinggi, tidak berdebu, kedap oli, dan mudah dibersihkan sesuai standar kebersihan industri.',
		applications: [
			'Lantai Pergudangan & Jalur Lalu Lintas Forklift',
			'Lantai Ruang Produksi Makanan, Minuman & Farmasi (HACCP/GMP)',
			'Lantai Area Perakitan Komponen Elektronik (Anti-Static ESD)',
			'Bengkel Otomotif, Workshop Mesin & Ruang Genset'
		],
		items: [
			'Self-Leveling Epoxy Floor Coating (Ketebalan 1000–3000 mikron)',
			'Heavy-Duty Polyurethane (PU) Screed Tahan Suhu Dingin & Panas',
			'Cat Marka Jalur Forklift & Garis Keselamatan Kerja (Safety Line)',
			'Primer Khusus Lantai Lembap & Sealant Expansion Joint Beton',
			'Top Coat Anti-Gores Polyurethane Clear'
		],
		iconName: 'flooring'
	}
];

export const brandPartners = [
	{ name: 'Mitsubishi Electric', category: 'Power Distribution & Factory Automation', origin: 'Jepang' },
	{ name: 'Panasonic', category: 'Conduit & Electrical Installation', origin: 'Jepang' },
	{ name: 'Iwasaki EYE', category: 'Industrial & Explosion-Proof Lighting', origin: 'Jepang' },
	{ name: 'Nitchi', category: 'Chain Hoist & Lifting Equipment', origin: 'Jepang' },
	{ name: 'Shinmaywa', category: 'Power Systems & Industrial Equipment', origin: 'Jepang' },
	{ name: 'Unibell', category: 'Electrical Insulation Tapes', origin: 'Indonesia / Global' }
];
