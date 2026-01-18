export type ProductCategory = "Admixture" | "Waterproofing" | "Plaster";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  /** Shown on product card */
  shortDescription: string;
  /** Shown in modal */
  fullDescription: string;
  keyBenefits: string[];
  recommendedApplications: string[];
  image: string;
};

// NOTE: Product name, description, and category are kept exactly as provided.
export const products: Product[] = [
  {
    id: "speedmix",
    name: "SPEEDMIX",
    category: "Admixture",
    shortDescription:
      "High-performance PCE-based admixture engineered for precast and high-speed concrete production.",
    fullDescription:
      "High-performance PCE-based admixture engineered for precast and high-speed concrete production. Reduces setting time and accelerates early strength for faster demoulding.",
    keyBenefits: [
      "Accelerates early strength gain",
      "Reduces setting time for faster cycles",
      "Improves workability and finish",
      "Supports efficient precast production"
    ],
    recommendedApplications: [
      "Precast elements and hollowcore",
      "High-speed production concrete",
      "Fast demoulding applications"
    ],
    image: "/images/speedmix.png"
  },
  {
    id: "set-plus",
    name: "SET PLUS",
    category: "Admixture",
    shortDescription:
      "PCE-based superplasticizer providing excellent workability and superior flow.",
    fullDescription:
      "PCE-based superplasticizer providing excellent workability, superior flow, and high early strength for precast and premium concrete.",
    keyBenefits: [
      "Excellent workability and flow",
      "High early strength development",
      "Improves pumpability and placement",
      "Enhances surface finish"
    ],
    recommendedApplications: [
      "Precast and premium concrete",
      "High-flow concrete mixes",
      "Architectural concrete"
    ],
    image: "/images/set-plus.png"
  },
  {
    id: "ultra-max",
    name: "ULTRA MAX",
    category: "Admixture",
    shortDescription:
      "High-performance PCE admixture enhancing strength, workability, and surface finish.",
    fullDescription:
      "High-performance PCE admixture enhancing strength, workability, and surface finish for precast concrete.",
    keyBenefits: [
      "Enhances strength and durability",
      "Improves workability and flow",
      "Better surface finish",
      "Optimized for precast performance"
    ],
    recommendedApplications: [
      "Precast structural elements",
      "Pavers and kerbstones",
      "Concrete with superior finish requirements"
    ],
    image: "/images/ultra-max.png"
  },
  {
    id: "maxset",
    name: "MAXSET",
    category: "Admixture",
    shortDescription:
      "Premium liquid admixture for paver blocks, tiles, fly ash bricks, and precast products.",
    fullDescription:
      "Premium liquid admixture for paver blocks, tiles, fly ash bricks, and precast products. 1:19 dilution, replaces multiple chemicals.",
    keyBenefits: [
      "Cost-efficient 1:19 dilution",
      "Replaces multiple chemicals",
      "Improves compaction and finish",
      "Supports consistent production quality"
    ],
    recommendedApplications: [
      "Paver blocks and tiles",
      "Fly ash bricks",
      "Precast products and yard mixes"
    ],
    image: "/images/maxset.png"
  },
  {
    id: "rmc-pce-admixture",
    name: "RMC PCE Admixture",
    category: "Admixture",
    shortDescription:
      "PCE admixture for ready-mix concrete with slump retention and pumpability.",
    fullDescription:
      "PCE admixture for ready-mix concrete with excellent slump retention, pumpability, and early strength.",
    keyBenefits: [
      "Excellent slump retention",
      "Improved pumpability",
      "Early strength development",
      "Better workability at site"
    ],
    recommendedApplications: [
      "Ready-mix concrete (RMC)",
      "Pumped concrete",
      "Transport and placement demanding projects"
    ],
    image: "/images/rmc-pce-admixture.png"
  },
  {
    id: "slump-retarder-admixture",
    name: "Slump Retarder Admixture",
    category: "Admixture",
    shortDescription:
      "Controls setting time and maintains workability during transport and placement.",
    fullDescription:
      "Controls setting time and maintains workability during transport and placement.",
    keyBenefits: [
      "Maintains workability during transit",
      "Improves placement flexibility",
      "Helps manage setting time",
      "Reduces risk of cold joints"
    ],
    recommendedApplications: [
      "Long haul RMC",
      "Hot weather concreting",
      "Large pours and staged placements"
    ],
    image: "/images/slump-retarder-admixture.png"
  },
  {
    id: "sbr-latex",
    name: "SBR Latex",
    category: "Waterproofing",
    shortDescription:
      "Bonding and waterproofing admixture improving adhesion, flexibility, and durability.",
    fullDescription:
      "Bonding and waterproofing admixture improving adhesion, flexibility, and durability.",
    keyBenefits: [
      "Improves bonding to substrates",
      "Increases flexibility",
      "Boosts durability and water resistance",
      "Enhances mortar performance"
    ],
    recommendedApplications: [
      "Bond coats and repair mortars",
      "Screeds and renders",
      "Waterproofing admixture for cementitious systems"
    ],
    image: "/images/sbr-latex.png"
  },
  {
    id: "acrylic-waterproofing",
    name: "Acrylic Waterproofing",
    category: "Waterproofing",
    shortDescription:
      "Ready-to-use flexible coating forming a seamless, UV-resistant waterproof membrane.",
    fullDescription:
      "Ready-to-use flexible coating forming a seamless, UV-resistant waterproof membrane.",
    keyBenefits: [
      "Seamless waterproof layer",
      "UV-resistant performance",
      "Flexible coating reduces cracking risk",
      "Ready-to-use application"
    ],
    recommendedApplications: [
      "Terraces and rooftops",
      "External walls",
      "Sun-exposed waterproofing areas"
    ],
    image: "/images/acrylic-waterproofing.png"
  },
  {
    id: "pu-coolcoat-waterproofing",
    name: "PU CoolCoat Waterproofing",
    category: "Waterproofing",
    shortDescription:
      "Polyurethane waterproofing with heat-reflective and UV-resistant properties.",
    fullDescription:
      "Polyurethane waterproofing with heat-reflective and UV-resistant properties.",
    keyBenefits: [
      "Heat-reflective coating",
      "UV-resistant polyurethane layer",
      "Durable waterproof protection",
      "Suitable for demanding exposure"
    ],
    recommendedApplications: [
      "Rooftops and metal roofs",
      "Exposed terraces",
      "Areas needing heat reduction"
    ],
    image: "/images/pu-coolcoat-waterproofing.png"
  },
  {
    id: "gypsum-plaster",
    name: "Gypsum Plaster",
    category: "Plaster",
    shortDescription:
      "Premium interior plaster delivering smooth, crack-free surfaces with fast setting.",
    fullDescription:
      "Premium interior plaster delivering smooth, crack-free surfaces with fast setting.",
    keyBenefits: [
      "Smooth premium finish",
      "Fast setting for quicker completion",
      "Crack-resistant performance",
      "Ideal for interiors"
    ],
    recommendedApplications: [
      "Interior wall plastering",
      "Ceiling finishes",
      "High-quality surface preparation"
    ],
    image: "/images/gypsum-plaster.png"
  }
];
