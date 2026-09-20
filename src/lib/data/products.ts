export interface ProductCategory {
	id: string;
	name: string;
	brand: string;
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
		shortDesc: 'Sistem proteksi dan distribusi tenaga listrik tegangan rendah & menengah.',
		description:
			'Komponen pemutus arus, kontaktor, relay beban lebih, dan panel distribusi daya yang menjamin kontinuitas dan keamanan jaringan listrik industri Anda.',
		applications: ['Panel Distribusi Utama (MDB)', 'Sub-Distribution Board', 'Proteksi Motor Listrik', 'Gardu Pabrik'],
		items: ['Air Circuit Breaker (ACB)', 'Molded Case Circuit Breaker (MCCB)', 'Magnetic Contactor', 'Thermal Overload Relay', 'Miniature Circuit Breaker (MCB)'],
		iconName: 'power'
	},
	{
		id: 'factory-automation',
		name: 'Factory Automation',
		brand: 'Mitsubishi Electric',
		shortDesc: 'Solusi otomasi cerdas untuk efisiensi dan presisi lini produksi.',
		description:
			'Jajaran PLC, HMI, Inverter VFD, dan Servo System untuk modernisasi proses manufaktur dengan keandalan operasional jangka panjang.',
		applications: ['Lini Perakitan Otomatis', 'Packaging & Bottling', 'Conveyor Control', 'Sistem Monitoring Energi'],
		items: ['Programmable Logic Controller (PLC)', 'Human Machine Interface (HMI)', 'Variable Frequency Drive (Inverter)', 'AC Servo System'],
		iconName: 'automation'
	},
	{
		id: 'conduit',
		name: 'Conduit & Cable Management',
		brand: 'Panasonic',
		shortDesc: 'Pipa konduit baja dan aksesoris pelindung kabel standar JIS/ANSI.',
		description:
			'Sistem pipa konduit galvanis berkualitas tinggi untuk melindungi instalasi kabel daya dan sinyal dari benturan fisik, korosi kimia, dan bahaya kebakaran.',
		applications: ['Instalasi Pabrik Kimia & Makanan', 'Gedung Komersial & Data Center', 'Area Outdoor & Hazardous Area'],
		items: ['Steel Conduit (EMT / IMC / RSC)', 'Flexible Conduit Metal & PVC', 'Conduit Fittings & Couplings', 'Junction Box & Pull Box'],
		iconName: 'conduit'
	},
	{
		id: 'hoists',
		name: 'Hoists & Material Handling',
		brand: 'Nitchi',
		shortDesc: 'Peralatan angkat beban berat dengan standar keamanan internasional.',
		description:
			'Chain hoist elektrik dan manual presisi tinggi buatan Jepang untuk penanganan material berat di bengkel fabrikasi, galangan, dan area produksi.',
		applications: ['Overhead Crane System', 'Bengkel Perakitan Mesin', 'Gudang Logistik & Staging', 'Maintenance Bay'],
		items: ['Electric Chain Hoist', 'Manual Chain Block', 'Lever Hoist (Ratchet)', 'Trolley Bermotor & Plain'],
		iconName: 'hoist'
	},
	{
		id: 'lighting',
		name: 'Industrial Lighting',
		brand: 'Iwasaki EYE',
		shortDesc: 'Pencahayaan efisiensi tinggi untuk area kerja industri dan outdoor.',
		description:
			'Lampu high-bay, floodlight, dan lampu tahan ledakan (explosion proof) yang dirancang untuk kondisi ekstrem, getaran tinggi, dan suhu ekstrem.',
		applications: ['Plafon Gudang & Pabrik Tinggi', 'Area Kilang & Fasilitas Kimia', 'Penerangan Lapangan & Pelabuhan', 'Lampu Sorot Keamanan'],
		items: ['LED High Bay Light', 'Heavy-Duty Floodlight', 'Explosion-Proof Light Fixtures', 'Street & Perimeter Lighting'],
		iconName: 'lighting'
	},
	{
		id: 'electrical-tape',
		name: 'Electrical Tape & Insulation',
		brand: 'Unibell',
		shortDesc: 'Pita isolasi listrik kelas industri berdaya rekat dan dielektrik tinggi.',
		description:
			'Solusi pembungkus dan isolasi sambungan kabel tegangan rendah dan tinggi dengan ketahanan terhadap kelembapan, minyak industri, dan abrasi mekanikal.',
		applications: ['Penyambungan Kabel (Splicing)', 'Perbaikan Motor & Transformator', 'Pengikatan Harness Kabel Panel'],
		items: ['PVC Insulation Tape', 'High Voltage Rubber Splicing Tape', 'Mastic Sealing Tape', 'Color Coding Identification Tape'],
		iconName: 'tape'
	},
	{
		id: 'power-backup',
		name: 'Power Backup System',
		brand: 'Shinmaywa & Industrial Grade',
		shortDesc: 'Pasokan daya darurat untuk mencegah kerugian akibat pemadaman listrik.',
		description:
			'Sistem genset diesel industri dan Uninterruptible Power Supply (UPS) dengan switch otomatis (ATS) untuk menjamin fasilitas penting tetap menyala.',
		applications: ['Data Server & Ruang Kontrol', 'Sistem Pompa Pemadam Kebakaran', 'Lini Produksi Kontinu', 'Rumah Sakit & Laboratorium'],
		items: ['Industrial Generator Sets', 'Online Double-Conversion UPS', 'Automatic Transfer Switch (ATS)', 'Battery Bank & Chargers'],
		iconName: 'backup'
	},
	{
		id: 'fluid-air',
		name: 'Fluid and Air Handling Unit',
		brand: 'Industrial Principal',
		shortDesc: 'Sirkulasi udara, ventilasi, dan penanganan fluida bertekanan.',
		description:
			'Blower sentrifugal, exhaust fan industri, kompresor udara, dan sistem perpipaan kontrol udara untuk memastikan lingkungan kerja higienis dan efisien.',
		applications: ['Sistem Ventilasi Pabrik', 'Pneumatic Control Automation', 'Pengolahan Air Bersih & Limbah', 'Exhaust Asap & Debu'],
		items: ['Industrial Axial & Centrifugal Fan', 'Air Compressor & Air Dryer', 'Pneumatic Valves & Cylinders', 'Piping & Flange Connections'],
		iconName: 'fluid'
	},
	{
		id: 'tools-machinery',
		name: 'Tools & Machinery',
		brand: 'Industrial Tools & Equipment',
		shortDesc: 'Peralatan mekanikal dan mesin pendukung perakitan fasilitas pabrik.',
		description:
			'Perkakas torsi berstandar tinggi, mesin bubut, gergaji industri, dan instrumen kalibrasi presisi untuk mendukung divisi maintenance Anda.',
		applications: ['Divisi Pemeliharaan (Maintenance)', 'Fabrikasi Logam & Workshop', 'Instalasi Lapangan & Kontraktor'],
		items: ['Heavy-Duty Power Tools', 'Precision Torque Wrenches', 'Cutting & Grinding Machinery', 'Industrial Measuring Instruments'],
		iconName: 'tools'
	},
	{
		id: 'flooring',
		name: 'Industrial Flooring',
		brand: 'Heavy-Duty Industrial Grade',
		shortDesc: 'Pelapis lantai industri tahan beban berat, kimia, dan anti-selip.',
		description:
			'Sistem epoxy flooring dan poliuretan yang dirancang untuk menahan lalu lintas forklift intensif, tumpahan bahan kimia, dan kebersihan higienis standar food & pharma.',
		applications: ['Lantai Gudang Beban Berat', 'Pabrik Farmasi & Cleanroom', 'Area Produksi Makanan & Minuman', 'Workshop Otomotif'],
		items: ['Heavy-Duty Epoxy Coating', 'Polyurethane (PU) Screed Floor', 'Anti-Static (ESD) Flooring', 'Joint Sealant & Primer'],
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
