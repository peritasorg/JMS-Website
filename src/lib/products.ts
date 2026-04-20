export type ProductCategory = {
  slug: string;
  name: string;
  tagline: string;
  short: string;
  intro: string;
  image: string;
  highlights: string[];
  groups: {
    title: string;
    body: string;
    bullets?: string[];
  }[];
  why: string[];
  accentHue: string;
};

export const categories: ProductCategory[] = [
  {
    slug: "home-bedding",
    image: "/imagery/bedding.jpg",
    name: "Home & Bedding",
    tagline: "Comfort, Quality, and Everyday Elegance",
    short: "Textiles, bedding sets and soft furnishings packaged retail-ready.",
    intro:
      "JMS Trading's Home & Bedding collection brings together comfort, durability, and style — a dependable range of textiles and soft furnishings curated for volume retailers, independents and online sellers.",
    highlights: [
      "Retail-ready packaging",
      "Polyester-cotton blends & microfibre",
      "Four-piece coordinated sets",
      "High-turnover everyday essentials",
    ],
    groups: [
      {
        title: "Bedding Sets",
        body: "Coordinated duvet covers, pillowcases and fitted sheets available in single, double, king and super king sizes.",
        bullets: [
          "4-Piece Sets: Duvet covers, pillowcases & fitted sheets",
          "Polyester-cotton blends and microfibre fabrics",
          "Neatly packaged and display-ready",
        ],
      },
      {
        title: "Blankets, Throws & Quilts",
        body: "A seasonal range that layers warmth and style across living spaces and bedrooms.",
        bullets: ["Double-ply luxury blankets", "Printed & embossed throws", "Seasonal quilts"],
      },
      {
        title: "Curtains & Drapery",
        body: "Ring-top and pencil-pleat styles available in the most popular retail sizes.",
        bullets: ["66\"×72\", 90\"×72\", 90\"×90\"", "Polyester and jacquard weaves", "Barcoded polybag packaging"],
      },
      {
        title: "Mattress Protectors & Accessories",
        body: "Breathable, waterproof and everyday protective layers that sit quietly behind the label.",
        bullets: ["Mattress covers & pillow protectors", "Breathable, waterproof materials"],
      },
    ],
    why: [
      "Coordinated ranges that merchandise as a story",
      "Dependable fabric sourcing and consistent sizing",
      "Trade-friendly carton quantities with clear labelling",
      "Fast turnover across independents, supermarkets & online",
    ],
    accentHue: "from-amber-200/50 to-rose-200/40",
  },
  {
    slug: "travel",
    image: "/imagery/travel.jpg",
    name: "Travel Accessories",
    tagline: "Designed for Everyday Mobility",
    short: "Bags, travel essentials and sports & leisure gear built to last.",
    intro:
      "JMS Trading's Bags, Travel & Accessories collection brings together durability, style and practicality for people on the move — from the morning commute to a family holiday.",
    highlights: [
      "Adjustable padded straps",
      "Reinforced stitching",
      "Trade-focused packaging",
      "Universal everyday appeal",
    ],
    groups: [
      {
        title: "Backpacks & Rucksacks",
        body: "Compact everyday bags for students alongside large-capacity rucksacks built for travel.",
        bullets: ["Adjustable padded straps", "Reinforced stitching", "Multiple compartments"],
      },
      {
        title: "Shopping & Utility Bags",
        body: "Reusable shopping bags, foldable totes and two-wheel trolleys made from durable fabrics.",
      },
      {
        title: "Travel Accessories",
        body: "The small things travellers forget until they need them.",
        bullets: ["Digital luggage scales", "Combination locks", "Passport covers", "Travel-sized storage pouches"],
      },
      {
        title: "Sports & Leisure Gear",
        body: "A ready-to-merchandise line of active essentials.",
        bullets: ["Sports bags", "Footballs & basketballs", "Inflating pumps"],
      },
    ],
    why: [
      "Versatile range covering commute, travel and active use",
      "Built to last with reinforced stitching and padded straps",
      "Trade-focused packaging with barcoded polybags",
      "Universal appeal across demographics and retail formats",
    ],
    accentHue: "from-sky-200/50 to-emerald-200/40",
  },
  {
    slug: "hardware",
    image: "/imagery/hardware.jpg",
    name: "Hardware",
    tagline: "Reliable Tools and Everyday Fixing Solutions",
    short: "Hand tools, fasteners, security and decorating supplies.",
    intro:
      "A comprehensive hardware and DIY collection serving professionals and everyday users. Durable, dependable and priced to work for resellers — for household repairs, trade jobs and larger renovation projects.",
    highlights: [
      "Carbon steel construction",
      "Retail-ready & bulk trade options",
      "Competitive reseller pricing",
      "Barcoded polybag packaging",
    ],
    groups: [
      {
        title: "Hand Tools",
        body: "Everyday hand tools built from carbon steel with ergonomic grips.",
        bullets: ["Hammers, chisels & screwdrivers", "Paint tools & utility knives", "Carbon steel construction"],
      },
      {
        title: "Fasteners & Fittings",
        body: "The small things that hold it all together — available in retail-ready packs and bulk trade options.",
        bullets: ["Screws, wall plugs & bolts", "Cable ties", "Retail-ready & bulk trade options"],
      },
      {
        title: "Home Utility & Security",
        body: "Organisation, security and maintenance essentials for the home.",
        bullets: ["Padlocks & hooks", "Hangers", "Door stoppers"],
      },
      {
        title: "Decorating & Maintenance",
        body: "Surface prep and finishing supplies that deliver a professional result.",
        bullets: ["Paint rollers & brushes", "Masking tape", "Sandpaper"],
      },
    ],
    why: [
      "Durable and dependable across the trade day",
      "Retail and trade friendly packaging",
      "Competitive pricing engineered for resellers",
      "Suited to household, professional and renovation use",
    ],
    accentHue: "from-slate-200/50 to-zinc-200/40",
  },
  {
    slug: "stationery",
    image: "/imagery/stationery.jpg",
    name: "Stationery",
    tagline: "Everyday Essentials for Work, School, and Home",
    short: "Writing, desk, school and display essentials — ready to shelf.",
    intro:
      "A comprehensive stationery collection combining practicality, quality and affordability — built for schools, offices and households. High-turnover items, easy to stock and display.",
    highlights: [
      "Barcoded and retail-ready",
      "Assorted colours & pack sizes",
      "Education, office & general retail",
      "High-volume value stock",
    ],
    groups: [
      {
        title: "Writing Instruments",
        body: "Pens, pencils, markers and highlighters in assorted colours and pack sizes.",
        bullets: [
          "Ballpoint pens with smooth ink flow",
          "Fade-resistant highlighters",
          "Assorted colours & pack sizes",
        ],
      },
      {
        title: "Desk & Office Accessories",
        body: "Reliable desk tooling and tidy, organised storage.",
        bullets: [
          "Staplers, hole punches, scissors, adhesives",
          "Mesh pen holders, desk organisers & document trays",
        ],
      },
      {
        title: "School & Art Supplies",
        body: "Classroom and home-study essentials across the school year.",
        bullets: ["Notebooks, rulers, sharpeners, erasers", "Drawing sets"],
      },
      {
        title: "Boards & Display",
        body: "A tidy corner of the classroom, office or kitchen.",
        bullets: ["Whiteboards, notice boards & cork boards", "Dry-erase markers"],
      },
    ],
    why: [
      "Wide variety across multiple market segments",
      "Retail-ready and barcoded for immediate distribution",
      "High-volume stock that balances quality with value",
      "Suitable for education, office and general retail",
    ],
    accentHue: "from-lime-200/50 to-amber-200/40",
  },
  {
    slug: "rugs",
    image: "/imagery/rugs.jpg",
    name: "Rugs",
    tagline: "Style, Comfort, and Lasting Quality",
    short: "Three signature collections from hallway runners to statement pieces.",
    intro:
      "Our rug programme brings elegance, texture and warmth to any interior — craftsmanship balanced against commercial realities for retailers and homeware stores.",
    highlights: [
      "Three signature collections",
      "80×200 cm to 300×400 cm",
      "Machine-woven synthetic fibres",
      "Mixed-size ordering available",
    ],
    groups: [
      {
        title: "Mazar",
        body: "Traditional artistry paired with modern durability — geometric and floral designs suited to formal living spaces.",
      },
      {
        title: "Milan",
        body: "Minimalist tones and contemporary patterns for apartments and modern offices.",
      },
      {
        title: "Paris",
        body: "Bold, luxury-inspired designs that bring personality to a room.",
      },
      {
        title: "Sizes & Materials",
        body: "A size for every floorplan, woven for easy care.",
        bullets: [
          "80×200 cm runners to 300×400 cm statement pieces",
          "Hallways, lounges and open-plan spaces",
          "Machine-woven synthetic fibres — soft, stain-resistant, easy to clean",
        ],
      },
    ],
    why: [
      "Premium aesthetics at a commercial price point",
      "Durable, easy-care materials",
      "Design options across three distinct collections",
      "Trade-focused bulk supply with mixed-size ordering",
    ],
    accentHue: "from-rose-200/50 to-orange-200/40",
  },
  {
    slug: "kitchenware",
    image: "/imagery/kitchenware.jpg",
    name: "Kitchenware",
    tagline: "Practical Design, Everyday Performance",
    short: "Utensils, cookware and storage for homes and professional kitchens.",
    intro:
      "Kitchenware that combines functionality, precision and durability — built for home cooks and professional kitchens alike. Retail-ready presentation, wholesale-friendly packaging.",
    highlights: [
      "Stainless steel & BPA-free materials",
      "Ergonomic handles",
      "12 cm to 40 cm sizing",
      "Multi-market appeal",
    ],
    groups: [
      {
        title: "Utensils & Essentials",
        body: "The everyday tools every kitchen reaches for first.",
        bullets: [
          "Can openers, peelers, spatulas, meat hammers",
          "Stainless steel with ergonomic handles",
        ],
      },
      {
        title: "Colanders, Strainers & Baskets",
        body: "Heavy-duty stainless steel in a complete size range.",
        bullets: ["12 cm to 40 cm", "Wire-mesh frying baskets"],
      },
      {
        title: "Kitchen Knives & Accessories",
        body: "Balanced, controlled cutting for home and professional use.",
        bullets: ["Chef's, carving, boning & paring knives", "Balanced handles for control and performance"],
      },
      {
        title: "Food Preparation & Storage",
        body: "Prep, measure and store — clean and reliable.",
        bullets: [
          "Chopping boards, measuring jugs",
          "Food containers with airtight lids",
          "BPA-free materials",
        ],
      },
    ],
    why: [
      "Premium-grade materials and reliable quality",
      "Retail-ready presentation for strong shelf presence",
      "Comprehensive range across prep, cook and store",
      "Multi-market appeal — retail, wholesale and hospitality",
    ],
    accentHue: "from-teal-200/50 to-sky-200/40",
  },
  {
    slug: "bathroom",
    image: "/imagery/bathroom.jpg",
    name: "Bathroom Essentials",
    tagline: "Comfort, Cleanliness, and Convenience",
    short: "Everyday bathroom essentials — practical, durable, retail-ready.",
    intro:
      "A considered range of bathroom essentials — towels, accessories and everyday cleanliness items — packaged and priced for retail shelves and online marketplaces.",
    highlights: [
      "Absorbent cotton blends",
      "Ready-to-merchandise packs",
      "Bathroom-safe finishes",
      "High turnover SKUs",
    ],
    groups: [
      {
        title: "Towels & Linens",
        body: "Absorbent, soft-touch cotton blends in the sizes customers reach for.",
        bullets: ["Bath sheets, bath towels & hand towels", "Cotton blends with soft hand-feel"],
      },
      {
        title: "Bathroom Accessories",
        body: "The small shelf fillers with reliable repeat demand.",
        bullets: ["Soap dispensers & tumblers", "Toothbrush holders", "Storage baskets"],
      },
      {
        title: "Everyday Cleanliness",
        body: "Practical essentials that move quickly through the basket.",
        bullets: ["Shower curtains & liners", "Bath mats", "Sponges & cleaning accessories"],
      },
    ],
    why: [
      "Everyday practicality customers reorder",
      "Retail-ready barcoded packaging",
      "Soft-touch fabrics and bathroom-safe finishes",
      "A range that merchandises as a complete bathroom aisle",
    ],
    accentHue: "from-indigo-200/50 to-sky-200/40",
  },
];

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);
