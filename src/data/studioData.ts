export interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  role: string;
  image: string;
  summary: string;
  fullDescription: string;
  metrics: string;
  deliverables: string[];
  palette: string[];
  highlight: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  techOrTools: string[];
  accentColor: string;
}

export const FOUNDER_INFO = {
  name: 'Shivam Dwivedi',
  role: 'Founder & Principal Creative Director',
  studio: 'Creative & Conceptual',
  phone: '+91 63776 60271',
  email: 'creativeandconceptual1@gmail.com',
  whatsappUrl: 'https://wa.me/916377660271',
  location: 'Global / New Delhi & Mumbai',
  philosophy: 'Nothing ships that looks like a template',
  bio: 'Shivam Dwivedi leads Creative & Conceptual with an uncompromising devotion to bespoke craft. Rejecting automated layouts and cookie-cutter design systems, every brand identity and WebGL experience is sculpted from first principles.',
  stats: [
    { label: 'Founder-Led Studio', value: '1', suffix: '' },
    { label: 'Projects Shipped', value: '24', suffix: '+' },
    { label: 'Original Work', value: '100', suffix: '%' },
    { label: 'Template Code Used', value: '0', suffix: '%' },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'halcyon-rebrand',
    title: 'Halcyon Rebrand',
    year: '2025',
    category: 'Brand Identity & Strategy',
    role: 'Creative Direction, Identity System, Print Architecture',
    image: '/src/assets/images/halcyon_rebrand_project_1791263593009.jpg',
    summary: 'A monumental rebrand for a high-end architectural estate collective, bridging tactile gold debossing with monolithic modern typography.',
    fullDescription: 'Halcyon required an identity that commanded silent authority. We architected a custom typographic ligature system, hand-finished blind deboss stationery on 600gsm raw slate paper, and an ultra-minimalist brand design book distributed to private collectors worldwide.',
    metrics: '+185% private client inquiries in 90 days',
    deliverables: ['Monogram & Logo System', 'Custom Display Typeface', 'Luxury Foil Print Collateral', 'Bespoke Brand Guidelines'],
    palette: ['#0A0A0C', '#D4AF37', '#2A2A32', '#F4F4F5'],
    highlight: 'Pure bespoke craftsmanship with zero pre-fabricated assets.'
  },
  {
    id: 'nocturne-web',
    title: 'Nocturne Site Web Experience',
    year: '2024',
    category: 'Web Design & Development',
    role: '3D WebGL Engineering, Art Direction, UI/UX Architecture',
    image: '/src/assets/images/nocturne_web_experience_1791263606007.jpg',
    summary: 'Scroll-driven real-time 3D narrative for an avant-garde sound design laboratory, powered by custom shaders and spatial audio integration.',
    fullDescription: 'Nocturne challenged us to build an audio-visual dimension that responds instantaneously to user scroll velocity. We programmed bespoke GLSL vertex distortion shaders, dynamic dark-glass refraction buffers, and an intuitive micro-interaction language.',
    metrics: '4m 12s average session duration (top 1% globally)',
    deliverables: ['Custom Three.js WebGL Pipeline', 'Responsive Spatial Audio UI', 'Performance Optimization (60fps on mobile)', 'CMS Integration'],
    palette: ['#050508', '#7C3AED', '#38BDF8', '#1E1B4B'],
    highlight: 'Awarded Site of the Month candidate across digital design juries.'
  },
  {
    id: 'signal-garden',
    title: 'Signal Garden',
    year: '2024',
    category: 'Art Direction & Digital Visuals',
    role: 'Generative Art Direction, Identity, Experiential Media',
    image: '/src/assets/images/signal_garden_project_1791263616523.jpg',
    summary: 'A bioluminescent digital installation and brand visualizer exploring generative flora driven by environmental telemetry data.',
    fullDescription: 'Bridging botanical morphology and computational algorithms, Signal Garden brought living generative visuals to high-profile gallery spaces and digital flagships. We crafted organic wireframe geometries and deep chromatic light choreography.',
    metrics: 'Over 1.2M online impressions across design publications',
    deliverables: ['Generative Visual System', 'Digital Installation Guidelines', 'Interactive Web Showcase', 'Soundtrack Art Direction'],
    palette: ['#040B0A', '#10B981', '#F59E0B', '#064E3B'],
    highlight: 'A hybrid living identity system responding to real-world data.'
  },
  {
    id: 'ferrous-studio-reel',
    title: 'Ferrous Studio Reel',
    year: '2023',
    category: 'Motion & Animation',
    role: 'CGI Motion Direction, 3D Fluid Dynamics, Audio Master',
    image: '/src/assets/images/ferrous_studio_reel_1791263626260.jpg',
    summary: 'A visceral cinematic showreel featuring liquid chrome physics, anisotropic reflections, and bespoke typography in zero-gravity motion.',
    fullDescription: 'Ferrous showcases our motion engineering capabilities through physical simulation. Suspended chrome spheres rupture and reconstitute into typographic glyphs against stark graphite planes, matched frame-by-frame with custom sub-bass sound design.',
    metrics: 'Featured in contemporary 3D motion design showcases',
    deliverables: ['Cinema 4D & Houdini Simulations', 'Procedural Chrome Shaders', 'Title Sequence Typography', 'Dolby Atmos Sound Sync'],
    palette: ['#0C0D0E', '#E2E8F0', '#F59E0B', '#475569'],
    highlight: 'Zero stock footage. 100% computed motion poetry.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'brand-identity',
    number: '01',
    title: 'Brand Identity',
    tagline: 'Singular visual languages that stand out in crowded markets.',
    description: 'We conceive and sculpt identities designed to endure for decades. From mathematical logomarks and bespoke typography to exhaustive brand architecture systems that ensure brand consistency across every physical and digital touchpoint.',
    deliverables: ['Logo & Monogram Architecture', 'Custom Typography & Glyphs', 'Comprehensive Brand Manuals', 'Color & Spatial Systems'],
    techOrTools: ['Glyphs 3', 'Illustrator', 'Figma', 'Custom Font Engineering'],
    accentColor: '#F59E0B'
  },
  {
    id: 'web-design-dev',
    number: '02',
    title: 'Web Design & Development',
    tagline: 'Scroll-driven 3D immersive sites built from the ground up.',
    description: 'We do not build with templates, WordPress themes, or bloated page builders. We write bespoke Three.js WebGL shaders, responsive high-performance code, and fluid GSAP interactions calibrated to sub-second load times.',
    deliverables: ['Interactive 3D WebGL Stages', 'Fluid GSAP & CSS Animation', 'Headless CMS Integration', 'Zero-Jank 60FPS Optimization'],
    techOrTools: ['Three.js', 'React/Next', 'GSAP', 'GLSL Shaders', 'Tailwind CSS'],
    accentColor: '#A855F7'
  },
  {
    id: 'motion-animation',
    number: '03',
    title: 'Motion & Animation',
    tagline: 'Hypnotic brand motion and product reveals that arrest attention.',
    description: 'Motion isn’t decoration—it’s how your brand breathes. We choreograph physics-based 3D simulations, macro product reveal cinematics, and micro-interaction states that make every user gesture feel tactile and rewarding.',
    deliverables: ['Brand Motion Systems', '3D Product Reveal Cinematics', 'Interactive Micro-Interactions', 'Lottie / WebGL Animation Rigs'],
    techOrTools: ['Cinema 4D', 'After Effects', 'Blender', 'Rive', 'Lottie'],
    accentColor: '#38BDF8'
  },
  {
    id: 'art-direction',
    number: '04',
    title: 'Art Direction',
    tagline: 'Comprehensive creative vision for campaigns and showreels.',
    description: 'Translating high-level brand ethos into cohesive visual storytelling. We helm the creative direction for campaign shoots, digital brand films, 3D worldbuilding, and editorial layouts with obsessive attention to chiaroscuro lighting.',
    deliverables: ['Visual Storyboarding & Styleframes', 'Editorial Shoot Direction', 'Spatial Concept Art', 'Color Grading Guidance'],
    techOrTools: ['Midjourney Ideation', 'Photoshop', 'DaVinci Resolve', 'Styleframe Decks'],
    accentColor: '#EC4899'
  },
  {
    id: 'packaging-print',
    number: '05',
    title: 'Packaging & Print',
    tagline: 'Tactile physical systems crafted with luxury material discipline.',
    description: 'Physical objects must feel heavier, richer, and more deliberate than digital screens. We engineer structural unboxing experiences, blind foil deboss dies, custom die-cut patterns, and sustainable luxury paper selections.',
    deliverables: ['Structural Packaging Engineering', 'Foil Stamping & Embossing Dies', 'Editorial Lookbooks & Monographs', 'Custom Unboxing Prototypes'],
    techOrTools: ['Esko ArtiosCAD', 'InDesign', 'Specialty Substrates & Foils'],
    accentColor: '#EAB308'
  }
];

export const MANIFESTO_PILLARS = [
  {
    number: '01',
    title: 'The Anti-Template Rule',
    quote: 'Nothing ships that looks like a template.',
    body: 'Modular template kits dilute individuality. Every project that departs our studio is conceived on a blank canvas, with custom geometry, tailored typography, and proprietary motion curves.'
  },
  {
    number: '02',
    title: 'Founder-Led Directness',
    quote: 'No account managers. No middle layers.',
    body: 'When you partner with Creative & Conceptual, you work directly with founder Shivam Dwivedi from initial strategy through final shader deploy. Decisions happen swiftly with absolute creative integrity.'
  },
  {
    number: '03',
    title: 'Obsessive Spatial Detail',
    quote: 'Every pixel, vertex, and millisecond matters.',
    body: 'We obsess over the invisible: the friction damping of a scroll curve, the chromatic aberration at screen edges, and the tactile weight of 600gsm foil-stamped stationery.'
  }
];
