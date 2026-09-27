export interface ColorOption {
  id: string;
  name: string;
  hex: string;
  price: number;
}

export interface WheelOption {
  id: string;
  name: string;
  size: string;
  image?: string;
  price: number;
}

export interface InteriorOption {
  id: string;
  name: string;
  material: string;
  colorHex: string;
  price: number;
}

export interface Vehicle {
  id: string;
  name: string;
  series: string;
  category: "BMW M" | "BMW i" | "BMW 7 Series" | "BMW 5 Series" | "BMW 3 Series" | "BMW X Series";
  tagline: string;
  bodyType: string;
  fuelType: "Gasoline" | "All-Electric" | "Plug-in Hybrid";
  power: string; // e.g. "617 HP"
  powerNumeric: number;
  torque: string; // e.g. "553 lb-ft"
  acceleration: string; // e.g. "3.0s"
  accelerationNumeric: number; // 3.0
  topSpeed: string; // "190 MPH"
  range?: string; // "318 Miles"
  drivetrain: string; // "M xDrive with 2WD mode"
  transmission: string; // "8-speed M Steptronic"
  engine: string; // "4.4L BMW M TwinPower Turbo V-8"
  price: number; // MSRP
  featuredImage: string;
  heroFrameReference?: string;
  gallery: string[];
  colors: ColorOption[];
  wheels: WheelOption[];
  interiors: InteriorOption[];
  features: string[];
  specifications: {
    label: string;
    value: string;
  }[];
}

export const VEHICLES: Vehicle[] = [
  {
    id: "bmw-m8-gran-coupe",
    name: "BMW M8 Competition Gran Coupé",
    series: "8 Series",
    category: "BMW M",
    tagline: "The Zenith of High-Performance Luxury",
    bodyType: "4-Door Gran Coupé",
    fuelType: "Gasoline",
    power: "617 HP",
    powerNumeric: 617,
    torque: "553 lb-ft",
    acceleration: "3.0 sec",
    accelerationNumeric: 3.0,
    topSpeed: "190 mph",
    drivetrain: "M xDrive all-wheel drive with 2WD drift mode",
    transmission: "8-speed M Steptronic with Drivelogic",
    engine: "4.4-liter BMW M TwinPower Turbo V8",
    price: 138800,
    featuredImage: "/frames/ezgif-frame-269.jpg",
    gallery: [
      "/frames/ezgif-frame-269.jpg",
      "/frames/ezgif-frame-170.jpg",
      "/frames/ezgif-frame-120.jpg",
      "/frames/ezgif-frame-045.jpg",
    ],
    colors: [
      { id: "donington-grey", name: "Donington Grey Metallic", hex: "#5a5e62", price: 0 },
      { id: "isle-of-man-green", name: "Isle of Man Green", hex: "#164434", price: 650 },
      { id: "marina-bay-blue", name: "Marina Bay Blue Metallic", hex: "#0c3b6d", price: 650 },
      { id: "black-sapphire", name: "Black Sapphire Metallic", hex: "#111214", price: 0 },
      { id: "frozen-pure-grey", name: "Frozen Pure Grey Matte", hex: "#7a7e85", price: 3600 },
      { id: "alpine-white", name: "Alpine White", hex: "#eceff1", price: 0 },
    ],
    wheels: [
      { id: "w-810m", name: "20\" M Star-Spoke Bi-Color Style 810M", size: "20 inch", price: 0 },
      { id: "w-813m", name: "20\" M Star-Spoke Gloss Black Style 813M", size: "20 inch", price: 1300 },
      { id: "w-863m", name: "20\" M Performance Forged Style 863M Ferric Grey", size: "20 inch", price: 2800 },
    ],
    interiors: [
      { id: "int-black", name: "Full Merino Leather Black", material: "Fine-grain Merino", colorHex: "#1c1c1e", price: 0 },
      { id: "int-sakhir", name: "Full Merino Leather Sakhir Orange / Black", material: "Bicolor Merino", colorHex: "#b53b1b", price: 1000 },
      { id: "int-taruma", name: "Full Merino Leather Taruma Brown", material: "Fine-grain Merino", colorHex: "#5c3d28", price: 1000 },
      { id: "int-silverstone", name: "Full Merino Leather Silverstone", material: "Fine-grain Merino", colorHex: "#d8dadc", price: 1000 },
    ],
    features: [
      "M Carbon Ceramic Brakes with Gold Calipers",
      "Adaptive M Suspension Professional with active anti-roll",
      "BMW Laserlight with blue accented design elements",
      "Bowers & Wilkins Diamond Surround Sound System (1,400W)",
      "M Driver's Package with 190 mph top speed calibration",
      "M Carbon Exterior Package (Diffuser, mirror caps, front inlets)",
    ],
    specifications: [
      { label: "Engine Displacement", value: "4,395 cc Twin-Turbo V8" },
      { label: "Horsepower", value: "617 hp @ 6,000 rpm" },
      { label: "Torque", value: "553 lb-ft @ 1,800 - 5,690 rpm" },
      { label: "Curb Weight", value: "4,480 lbs" },
      { label: "Weight Distribution", value: "52.8% Front / 47.2% Rear" },
      { label: "Length / Width / Height", value: "200.3\" / 76.5\" / 55.9\"" },
      { label: "Wheelbase", value: "119.2\"" },
      { label: "Fuel Tank Capacity", value: "20.1 gallons" },
    ],
  },
  {
    id: "bmw-i7-m70",
    name: "BMW i7 M70 xDrive",
    series: "7 Series",
    category: "BMW i",
    tagline: "Forwardism in Electric Form",
    bodyType: "Full-Size Luxury Sedan",
    fuelType: "All-Electric",
    power: "650 HP",
    powerNumeric: 650,
    torque: "748 lb-ft",
    acceleration: "3.5 sec",
    accelerationNumeric: 3.5,
    topSpeed: "155 mph",
    range: "291 Miles",
    drivetrain: "Dual Electric Motors with xDrive intelligent AWD",
    transmission: "Single-speed fixed ratio automatic",
    engine: "Dual 5th-Gen Electrically Excited Synchronous Motors",
    price: 168500,
    featuredImage: "/assets/models/i7.jpg",
    gallery: [
      "/assets/models/i7.jpg",
      "/frames/ezgif-frame-269.jpg",
    ],
    colors: [
      { id: "two-tone-black-oxide", name: "Two-Tone Black Sapphire / Oxide Grey", hex: "#222428", price: 12000 },
      { id: "carbon-black", name: "Carbon Black Metallic", hex: "#101622", price: 0 },
      { id: "tanzanite-blue", name: "BMW Individual Tanzanite Blue II", hex: "#16284f", price: 1950 },
      { id: "davit-grey", name: "Dravit Grey Metallic", hex: "#4b4e52", price: 1950 },
    ],
    wheels: [
      { id: "w-i7-909m", name: "21\" M Aerodynamic Style 909M Jet Black", size: "21 inch", price: 0 },
      { id: "w-i7-910m", name: "21\" M Aerodynamic Style 910M Bicolor", size: "21 inch", price: 1200 },
    ],
    interiors: [
      { id: "int-i7-kashmir", name: "BMW Individual Cashmere / Merino Wool Smoke White", material: "Merino Wool Blend", colorHex: "#dcdfd6", price: 3000 },
      { id: "int-i7-black", name: "BMW Individual Merino Black", material: "Full Merino Leather", colorHex: "#1a1a1a", price: 0 },
      { id: "int-i7-tartufo", name: "BMW Individual Merino Tartufo", material: "Full Merino Leather", colorHex: "#6c4125", price: 0 },
    ],
    features: [
      "31.3\" BMW Theater Screen in 8K with Amazon Fire TV built-in",
      "Executive Lounge Seating with 42.5° recline and calf rest",
      "BMW Interaction Bar with faceted crystalline glass backlighting",
      "Integral Active Steering with 3.5° rear axle steering",
      "Automatic opening and closing comfort doors with gesture control",
      "Panoramic Sky Lounge LED Roof with dynamic light patterns",
    ],
    specifications: [
      { label: "Battery Capacity", value: "105.7 kWh (101.7 kWh usable)" },
      { label: "Peak DC Fast Charging", value: "195 kW (10-80% in 34 mins)" },
      { label: "System Output", value: "650 hp & 748 lb-ft torque" },
      { label: "Length / Width / Height", value: "212.2\" / 76.8\" / 60.8\"" },
      { label: "Turning Radius", value: "40.3 ft" },
      { label: "Cargo Volume", value: "17.7 cu ft" },
    ],
  },
  {
    id: "bmw-m4-competition",
    name: "BMW M4 Competition Coupé",
    series: "4 Series",
    category: "BMW M",
    tagline: "The Benchmark of Pure Racing Dynamics",
    bodyType: "2-Door High-Performance Coupé",
    fuelType: "Gasoline",
    power: "523 HP",
    powerNumeric: 523,
    torque: "479 lb-ft",
    acceleration: "3.4 sec",
    accelerationNumeric: 3.4,
    topSpeed: "180 mph",
    drivetrain: "M xDrive with Rear-Wheel Drive mode",
    transmission: "8-speed M Sport Automatic",
    engine: "3.0L BMW M TwinPower Turbo Inline 6-Cylinder",
    price: 83200,
    featuredImage: "/assets/models/m4.jpg",
    gallery: [
      "/assets/models/m4.jpg",
      "/frames/ezgif-frame-269.jpg",
    ],
    colors: [
      { id: "sao-paulo-yellow", name: "Sao Paulo Yellow", hex: "#cfd223", price: 650 },
      { id: "portimao-blue", name: "Portimao Blue Metallic", hex: "#154273", price: 650 },
      { id: "toronto-red", name: "Toronto Red Metallic", hex: "#9a1818", price: 650 },
      { id: "brooklyn-grey", name: "M Brooklyn Grey Metallic", hex: "#838891", price: 650 },
    ],
    wheels: [
      { id: "w-826m", name: "19\"/20\" M Double-Spoke Black Style 826M", size: "19/20 inch", price: 0 },
      { id: "w-825m", name: "19\"/20\" M Double-Spoke Bicolor Style 825M", size: "19/20 inch", price: 1300 },
    ],
    interiors: [
      { id: "int-m4-yas", name: "Full Merino Yas Marina Blue / Black", material: "Merino Leather", colorHex: "#2a7ba5", price: 1500 },
      { id: "int-m4-black", name: "Extended Merino Black", material: "Merino Leather", colorHex: "#1a1a1a", price: 0 },
      { id: "int-m4-orange", name: "Kyalami Orange / Black", material: "Merino Leather", colorHex: "#c84719", price: 1500 },
    ],
    features: [
      "M Carbon Bucket Seats (-21 lbs weight reduction)",
      "M Carbon Ceramic Brake System",
      "Adaptive M Suspension with active electronic dampers",
      "M Drive Professional with 10-stage M Traction Control",
      "M Drift Analyzer and Laptimer",
    ],
    specifications: [
      { label: "Engine Displacement", value: "2,993 cc Twin-Turbo I-6" },
      { label: "Horsepower", value: "523 hp @ 6,250 rpm" },
      { label: "Torque", value: "479 lb-ft @ 2,750 - 5,730 rpm" },
      { label: "Redline", value: "7,200 rpm" },
      { label: "Length / Width / Height", value: "189.1\" / 74.3\" / 54.8\"" },
    ],
  },
  {
    id: "bmw-x7-m60i",
    name: "BMW X7 M60i",
    series: "X Series",
    category: "BMW X Series",
    tagline: "Unrivaled Presence. Elevated Command.",
    bodyType: "3-Row Luxury Sports Activity Vehicle",
    fuelType: "Gasoline",
    power: "523 HP",
    powerNumeric: 523,
    torque: "553 lb-ft",
    acceleration: "4.5 sec",
    accelerationNumeric: 4.5,
    topSpeed: "155 mph",
    drivetrain: "xDrive intelligent all-wheel drive",
    transmission: "8-speed Sport Automatic with Launch Control",
    engine: "4.4-liter BMW M TwinPower Turbo V8 with 48V Mild Hybrid",
    price: 110900,
    featuredImage: "/assets/models/x7.jpg",
    gallery: [
      "/assets/models/x7.jpg",
      "/frames/ezgif-frame-269.jpg",
    ],
    colors: [
      { id: "mineral-white", name: "Mineral White Metallic", hex: "#f0f2f5", price: 0 },
      { id: "marina-bay-blue", name: "Marina Bay Blue Metallic", hex: "#0c3b6d", price: 650 },
      { id: "carbon-black", name: "Carbon Black Metallic", hex: "#11151c", price: 0 },
      { id: "aventurin-red", name: "Aventurin Red Metallic", hex: "#631720", price: 1950 },
    ],
    wheels: [
      { id: "w-x7-755m", name: "22\" V-Spoke Jet Black Style 755M", size: "22 inch", price: 1300 },
      { id: "w-x7-913m", name: "23\" BMW Individual V-Spoke Style 913M", size: "23 inch", price: 2600 },
    ],
    interiors: [
      { id: "int-x7-ivory", name: "BMW Individual Ivory White / Atlas Grey Full Merino", material: "Merino Leather", colorHex: "#e3e3dc", price: 2700 },
      { id: "int-x7-coffee", name: "Sensafin Coffee with decor stitching", material: "Sensafin Luxury Leatherette", colorHex: "#48362b", price: 0 },
    ],
    features: [
      "Two-Axle Air Suspension with automatic level calibration",
      "Executive Package with Sky Lounge LED panoramic roof",
      "Split Headlight Design with crystal glass elements by Swarovski",
      "Captain's Chairs 6-passenger configuration option",
      "Active Roll Stabilization and Integral Active 4-wheel Steering",
    ],
    specifications: [
      { label: "Towing Capacity", value: "7,500 lbs" },
      { label: "Cargo Capacity", value: "90.4 cu ft max" },
      { label: "Curb Weight", value: "5,895 lbs" },
      { label: "Length / Width / Height", value: "203.9\" / 78.7\" / 71.3\"" },
    ],
  },
  {
    id: "bmw-ix-m60",
    name: "BMW iX M60",
    series: "X Series",
    category: "BMW i",
    tagline: "Electrified Super-SAV Architecture",
    bodyType: "Electric Sports Activity Vehicle",
    fuelType: "All-Electric",
    power: "610 HP",
    powerNumeric: 610,
    torque: "811 lb-ft",
    acceleration: "3.6 sec",
    accelerationNumeric: 3.6,
    topSpeed: "155 mph",
    range: "296 Miles",
    drivetrain: "Dual Motor All-Wheel Drive with Launch Control",
    transmission: "Single-speed transmission",
    engine: "Dual Electrically Excited Synchronous Motors (eDrive)",
    price: 111500,
    featuredImage: "/assets/models/ix.jpg",
    gallery: [
      "/assets/models/ix.jpg",
      "/frames/ezgif-frame-269.jpg",
    ],
    colors: [
      { id: "storm-bay", name: "Storm Bay Metallic", hex: "#5b6670", price: 1950 },
      { id: "oxide-grey", name: "Oxide Grey Metallic", hex: "#7f7e79", price: 0 },
      { id: "dark-graphite", name: "Dark Graphite Metallic", hex: "#2b2f33", price: 0 },
      { id: "alpine-white", name: "Alpine White", hex: "#f5f6f8", price: 0 },
    ],
    wheels: [
      { id: "w-ix-1021", name: "21\" Aero Bi-Color Style 1021", size: "21 inch", price: 0 },
      { id: "w-ix-1023", name: "22\" M Aero Bi-Color Bronze Style 1023", size: "22 inch", price: 1950 },
    ],
    interiors: [
      { id: "int-ix-amido", name: "Natural Leather Amido (Olive-leaf tanned)", material: "Sustainably Tanned Leather", colorHex: "#272a2e", price: 3500 },
      { id: "int-ix-castanea", name: "Natural Leather Castanea Chestnut", material: "Sustainably Tanned Leather", colorHex: "#613624", price: 3500 },
    ],
    features: [
      "Carbon Cage architecture with exposed carbon fibre elements",
      "Self-Healing Intelligence Kidney Grille with embedded sensors",
      "Electrochromic Panoramic Glass Roof with instant shading",
      "Bowers & Wilkins Diamond 4D Sound with in-seat exciters",
      "Hexagonal steering wheel inspired by Formula racing",
    ],
    specifications: [
      { label: "Battery Usable Capacity", value: "105.2 kWh" },
      { label: "Fast Charging Speed", value: "195 kW DC (10-80% in 35 min)" },
      { label: "Drag Coefficient (Cd)", value: "0.26" },
      { label: "Torque in Launch Control", value: "811 lb-ft" },
    ],
  },
  {
    id: "bmw-5-series-sedan",
    name: "BMW 530i xDrive Sedan",
    series: "5 Series",
    category: "BMW 5 Series",
    tagline: "The Modern Business Athlete",
    bodyType: "Executive Sedan",
    fuelType: "Gasoline",
    power: "255 HP",
    powerNumeric: 255,
    torque: "295 lb-ft",
    acceleration: "5.8 sec",
    accelerationNumeric: 5.8,
    topSpeed: "155 mph",
    drivetrain: "xDrive intelligent all-wheel drive",
    transmission: "8-speed Sport Automatic",
    engine: "2.0-liter BMW TwinPower Turbo 4-Cylinder with 48V Hybrid",
    price: 60200,
    featuredImage: "/assets/models/5series.jpg",
    gallery: [
      "/assets/models/5series.jpg",
      "/frames/ezgif-frame-269.jpg",
    ],
    colors: [
      { id: "cape-york-green", name: "Cape York Green Metallic", hex: "#4a5a54", price: 650 },
      { id: "phytonic-blue", name: "Phytonic Blue Metallic", hex: "#1a3b5c", price: 650 },
      { id: "brooklyn-grey", name: "M Brooklyn Grey Metallic", hex: "#848a92", price: 650 },
      { id: "black-sapphire", name: "Black Sapphire Metallic", hex: "#111215", price: 0 },
    ],
    wheels: [
      { id: "w-5-935m", name: "19\" M Double Spoke Style 935M Bicolor", size: "19 inch", price: 0 },
      { id: "w-5-937", name: "20\" Aero Style 937 Titanium Bronze", size: "20 inch", price: 1800 },
    ],
    interiors: [
      { id: "int-5-vegazza-black", name: "Veganza Perforated Black (Vegan Luxury)", material: "Veganza Synthetic Leather", colorHex: "#1b1b1c", price: 0 },
      { id: "int-5-merino-copper", name: "BMW Individual Merino Copper Brown", material: "Merino Leather", colorHex: "#774229", price: 2450 },
    ],
    features: [
      "Highway Assistant with Active Lane Change by eye activation",
      "AirConsole In-Car Gaming Platform on BMW Curved Display",
      "BMW Interaction Bar with backlit touch controls",
      "Iconic Glow illuminated kidney grille surround",
      "Harman Kardon Premium Surround Sound System",
    ],
    specifications: [
      { label: "Engine", value: "2.0L 4-Cylinder Turbo" },
      { label: "Combined MPG", value: "30 MPG Est." },
      { label: "Length / Width / Height", value: "199.2\" / 74.8\" / 59.6\"" },
      { label: "Trunk Capacity", value: "18.4 cu ft" },
    ],
  },
];
