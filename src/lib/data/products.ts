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
		shortDesc: 'Pemutus arus, kontaktor, dan proteksi beban listrik tegangan rendah & menengah.',
		description:
			'Pasokan resmi breaker dan kontaktor industri untuk panel utama (MDB) dan sub-panel. Menjamin proteksi sirkuit listrik dari beban lebih, korsleting, dan downtime operasional.',
		applications: ['Panel Distribusi Utama (MDB)', 'Sub-Distribution Board', 'Proteksi Motor Pabrik', 'Gardu Listrik Fasilitas'],
		items: ['Air Circuit Breaker (ACB)', 'Molded Case Circuit Breaker (MCCB)', 'Magnetic Contactor', 'Thermal Overload Relay', 'Miniature Circuit Breaker (MCB)'],
		iconName: 'power'
	},
	{
		id: 'factory-automation',
		name: 'Factory Automation',
		brand: 'Mitsubishi Electric',
		image: '/products/factory-automation.jpg',
		shortDesc: 'PLC, inverter drive (VFD), HMI touchscreen, dan servo drive terintegrasi.',
		description:
			'Solusi kendali otomatis untuk efisiensi jalur perakitan, mesin packaging, dan conveyor. Ketersediaan unit controller dan suku cadang asli bergaransi resmi prinsipal.',
		applications: ['Mesin Produksi Otomatis', 'Packaging & Bottling Line', 'Sistem Conveyor', 'Panel Kontrol Mesin (OEM)'],
		items: ['Programmable Logic Controller (PLC)', 'Human Machine Interface (HMI)', 'Variable Frequency Drive (Inverter VFD)', 'AC Servo Motor & Drive'],
		iconName: 'automation'
	},
	{
		id: 'conduit',
		name: 'Conduit & Cable Management',
		brand: 'Panasonic',
		image: '/products/conduit.jpg',
		shortDesc: 'Pipa konduit baja galvanis, pipa fleksibel, dan aksesoris pelindung kabel.',
		description:
			'Jalur proteksi kabel standar JIS/ANSI tahan benturan fisik, paparan korosi, dan suhu tinggi. Digunakan luas pada instalasi pabrik, gedung komersial, dan fasilitas industri berat.',
		applications: ['Instalasi Kabel Pabrik', 'Ruang Mekanikal & Elektrikal', 'Area Luar Ruang & Korosif', 'Fasilitas Manufaktur Berat'],
		items: ['Steel Conduit (EMT / IMC / RSC)', 'Flexible Conduit Metal & PVC', 'Coupling & Connector Fitting', 'Junction Box & Pull Box Besi'],
		iconName: 'conduit'
	},
	{
		id: 'hoists',
		name: 'Hoists & Material Handling',
		brand: 'Nitchi',
		image: '/products/hoists.jpg',
		shortDesc: 'Electric chain hoist, manual chain block, dan lever hoist buatan Jepang.',
		description:
			'Alat angkat beban berat berstandar keselamatan tinggi untuk bengkel fabrikasi, galangan, dan area pergudangan. Tersedia kapasitas beban dari 0.5 ton hingga puluhan ton.',
		applications: ['Overhead Crane & Gantry', 'Workshop Fabrikasi Logam', 'Bongkar Muat Gudang Logistik', 'Maintenance Bay Mesin'],
		items: ['Electric Chain Hoist', 'Manual Chain Block', 'Lever Block (Ratchet Hoist)', 'Trolley Bermotor & Manual Plain'],
		iconName: 'hoist'
	},
	{
		id: 'lighting',
		name: 'Industrial Lighting',
		brand: 'Iwasaki EYE',
		image: '/products/lighting.jpg',
		shortDesc: 'Lampu LED high bay, floodlight sorot, dan lampu tahan ledakan (explosion proof).',
		description:
			'Lampu industri hemat energi dengan durabilitas tinggi terhadap getaran dan panas pabrik. Dirancang untuk pencahayaan merata di area produksi berplafon tinggi serta area berbahaya.',
		applications: ['Plafon Pabrik & Gudang Tinggi', 'Area Kilang & Pabrik Kimia', 'Penerangan Pelabuhan & Lapangan', 'Lampu Sorot Perimeter'],
		items: ['LED High Bay Light', 'Heavy-Duty Floodlight Sorot', 'Explosion-Proof Fixture', 'Street & Perimeter Luminaire'],
		iconName: 'lighting'
	},
	{
		id: 'electrical-tape',
		name: 'Electrical Tape & Insulation',
		brand: 'Unibell',
		image: '/products/electrical-tape.jpg',
		shortDesc: 'Pita isolasi listrik vinyl PVC, rubber splicing tape, dan pelindung kabel.',
		description:
			'Solusi sambungan kabel dengan daya rekat tinggi, ketahanan dielektrik kuat, dan tahan cuaca serta kelembapan. Cocok untuk instalasi tegangan rendah maupun menengah.',
		applications: ['Penyambungan Kabel (Splicing)', 'Perbaikan Motor & Trafo', 'Bundling & Harness Panel', 'Isolasi Kedap Air'],
		items: ['PVC Electrical Insulation Tape', 'High Voltage Rubber Splicing Tape', 'Mastic Sealant Kedap Air', 'Color Coding Tape Panel'],
		iconName: 'tape'
	},
	{
		id: 'power-backup',
		name: 'Power Backup System',
		brand: 'Shinmaywa & Industrial Grade',
		image: '/products/power-backup.jpg',
		shortDesc: 'Genset industri diesel, UPS online kontinuitas tinggi, dan automatic transfer switch.',
		description:
			'Menjaga fasilitas vital pabrik tetap beroperasi saat pemadaman mendadak. Mencegah kerugian batch produksi gagal, kerusakan motor, dan kehilangan data pada control center.',
		applications: ['Data Server & Control Room', 'Pompa Hydrant Pemadam', 'Lini Produksi Kontinu 24/7', 'Rumah Sakit & Laboratorium'],
		items: ['Industrial Diesel Genset', 'Online Double-Conversion UPS', 'Automatic Transfer Switch (ATS Panel)', 'Industrial Battery Bank & Charger'],
		iconName: 'backup'
	},
	{
		id: 'fluid-air',
		name: 'Fluid and Air Handling Unit',
		brand: 'Industrial Principal',
		image: '/products/fluid-air.jpg',
		shortDesc: 'Blower sentrifugal, exhaust fan industri, kompresor udara, dan sistem pneumatik.',
		description:
			'Peralatan sirkulasi udara bersih, pembuangan panas mesin, dan penyedia udara bertekanan untuk penggerak silinder pneumatik pada lini produksi.',
		applications: ['Ventilasi & Exhaust Panas Pabrik', 'Suplai Udara Pneumatik Mesin', 'Pengolahan Udara Bersih & Debu', 'Sistem Pompa & Perpipaan'],
		items: ['Industrial Centrifugal & Axial Fan', 'Kompresor Udara & Air Dryer', 'Solenoid Valve & Silinder Pneumatik', 'Regulator & Filter Udara (FRL)'],
		iconName: 'fluid'
	},
	{
		id: 'tools-machinery',
		name: 'Tools & Machinery',
		brand: 'Industrial Tools & Equipment',
		image: '/products/tools-machinery.jpg',
		shortDesc: 'Perkakas mekanikal torsi tinggi, mesin potong, bubut, dan alat kalibrasi.',
		description:
			'Perlengkapan kerja harian untuk tim maintenance (pemeliharaan) dan teknisi lapangan. Material baja perkakas tahan banting untuk bongkar pasang mesin pabrik berat.',
		applications: ['Divisi Maintenance & Workshop', 'Fabrikasi Mesin & Modifikasi', 'Instalasi Lapangan Kontraktor', 'Inspeksi & Kalibrasi'],
		items: ['Heavy-Duty Impact Wrench & Kunci Pas', 'Kunci Torsi Presisi (Torque Wrench)', 'Mesin Potong & Gerinda Duduk', 'Alat Ukur & Multitester Industri'],
		iconName: 'tools'
	},
	{
		id: 'flooring',
		name: 'Industrial Flooring',
		brand: 'Heavy-Duty Industrial Grade',
		image: '/products/flooring.jpg',
		shortDesc: 'Pelapis lantai epoxy heavy-duty, polyurethane screed, dan anti-static (ESD).',
		description:
			'Lantai kerja pabrik tahan gesekan roda forklift, kedap tumpahan oli dan bahan kimia, serta mudah dibersihkan. Memenuhi standar kebersihan industri makanan, minuman, dan farmasi.',
		applications: ['Lantai Gudang Lalu Lintas Forklift', 'Area Bersih Pabrik Makanan & Minuman', 'Pabrik Elektronik (Anti-Static ESD)', 'Bengkel Otomotif & Workshop'],
		items: ['Self-Leveling Epoxy Floor Coating', 'Heavy-Duty Polyurethane (PU) Screed', 'Cat Garis Marka Keselamatan (Line Marking)', 'Primer & Sealant Sambungan Beton'],
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
