import { ServiceItem, GalleryItem, FaqItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Lahore Detailing Solutions',
  tagline: 'Precision Auto Detailing & Paint Protection',
  category: 'Car Wash and Auto Detailing',
  location: 'DHA Phase 7, Lahore, Pakistan',
  phoneDisplay: '+92 322 4811924',
  phoneTel: '+923224811924',
  listingUrl: 'https://www.autoyas.com/PK/Lahore/111231400270601/Lahore-Detailing-Solutions',
  linkedinUrl: 'https://www.linkedin.com/posts/lahore-detailing-solutions-461ab8230_ceramiccoating-detailing-lahorecardetailing-activity-6897063432437207040-KtTQ',
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=DHA+Phase+7+Lahore+Pakistan',
} as const;

export const IMAGES = {
  hero: '/src/assets/images/hero_automotive_detailing_1792237096068.jpg',
  paintCorrection: '/src/assets/images/exterior_paint_correction_1792237096599.jpg',
  coating: '/src/assets/images/automotive_coating_application_1792237096105.jpg',
  interior: '/src/assets/images/interior_detailing_cabin_1792237097838.jpg',
  workshop: '/src/assets/images/detailing_craft_workshop_1792237098601.jpg',
} as const;

export const SERVICES: ServiceItem[] = [
  {
    id: 'auto-detailing',
    title: 'Auto Detailing',
    subtitle: 'Comprehensive Surface Preparation & Decontamination',
    description:
      'Thorough vehicle cleansing, paint surface decontamination, and multi-stage preparation designed to remove embedded contaminants, road residue, and industrial fallout from exterior surfaces.',
    purpose:
      'To systematically cleanse vehicle exterior panels and restore clean paintwork foundations without abrasive damage.',
    scopePoints: [
      'Chemical and mechanical surface decontamination',
      'Wheel arch, rim face, and brake-caliper surface cleansing',
      'Exterior trim, badge recess, and window seal conditioning',
      'Controlled surface drying with dedicated plush microfiber media',
    ],
    image: IMAGES.paintCorrection,
    altText: 'Close up of automotive detailing tool and surface preparation process',
  },
  {
    id: 'paint-protection',
    title: 'Paint Protection',
    subtitle: 'Surface Shielding Against Harsh Urban Elements',
    description:
      'Specialized application of sacrificial barriers over clear coat surfaces to shield vehicle bodywork from intense solar UV exposure, dust accumulation, acid rain, and bird droppings encountered across Lahore.',
    purpose:
      'To provide durable exterior protection that simplifies maintenance washing and preserves clear coat stability.',
    scopePoints: [
      'Multi-stage paint assessment and pre-cleanse wipe-down',
      'Application of high-grade protective paint sealants',
      'Hydrophobic barrier formation for enhanced water and dirt repellency',
      'Longer-lasting gloss enhancement across factory clear coat',
    ],
    image: IMAGES.hero,
    altText: 'Dark luxury sports car with reflective paint finish undergoing detailing',
  },
  {
    id: 'automotive-coatings',
    title: 'Automotive Coatings',
    subtitle: 'Hydrophobic & Gloss-Enhancing Surface Treatments',
    description:
      'Advanced liquid coating applications engineered to bond with factory paintwork, imparting high surface tension, intense optical depth, and resistance to environmental staining.',
    purpose:
      'To lock in gloss, repel standing water, and reduce dirt adhesion through a hardened hydrophobic layer.',
    scopePoints: [
      'Precision panel-by-panel application in controlled ambient conditions',
      'Deep optical gloss enhancement across metallic and solid finishes',
      'Extreme water contact angle facilitating effortless wash cycles',
      'Protection against road films and seasonal atmospheric precipitation',
    ],
    image: IMAGES.coating,
    altText: 'Macro view of hydrophobic water beading on automotive paintwork coating',
  },
  {
    id: 'interior-exterior-care',
    title: 'Interior & Exterior Care',
    subtitle: 'Cabin Refreshment & Exterior Detail Synergy',
    description:
      'Complete vehicle care pairing meticulous exterior detailing with deep interior cleansing, vacuuming, cockpit wipe-down, and surface conditioning.',
    purpose:
      'To maintain vehicle hygiene, cabin comfort, and overall visual standard across both exterior bodywork and passenger spaces.',
    scopePoints: [
      'High-filtration interior vacuuming of carpets, mats, and seat seams',
      'Dashboard, center console, and instrument panel dust evacuation',
      'Leather and vinyl surface conditioning with UV-resistant finishes',
      'Streak-free interior and exterior automotive glass clarification',
    ],
    image: IMAGES.interior,
    altText: 'Cleaned and detailed luxury vehicle interior cabin with leather seats',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Mirror Clear Coat Reflection',
    category: 'reflection',
    categoryLabel: 'Surface Reflection',
    description: 'Precision illumination revealing razor-sharp clear coat reflections and rich paint depth.',
    image: IMAGES.hero,
    altText: 'Deep graphite vehicle finish showing crisp linear reflections under studio illumination',
  },
  {
    id: 'gal-2',
    title: 'Mechanical Surface Cleansing & Prep',
    category: 'exterior',
    categoryLabel: 'Paint Preparation',
    description: 'Careful pad and compound contact minimizing haze and restoring true metallic paint luster.',
    image: IMAGES.paintCorrection,
    altText: 'Dual-action detailing machine smoothing automotive clear coat',
  },
  {
    id: 'gal-3',
    title: 'Hydrophobic Surface Beading',
    category: 'coating',
    categoryLabel: 'Automotive Coating',
    description: 'Uniform hydrophobic water beading demonstrating high surface tension from protective coating.',
    image: IMAGES.coating,
    altText: 'Tight circular water droplets beading across coated vehicle hood',
  },
  {
    id: 'gal-4',
    title: 'Cockpit Leather & Console Detailing',
    category: 'interior',
    categoryLabel: 'Interior Cabin',
    description: 'Conditioned matte leather surfaces, vacuumed floor mats, and clarified touch surfaces.',
    image: IMAGES.interior,
    altText: 'Conditioned luxury car cabin with spotless steering wheel and leather upholstery',
  },
  {
    id: 'gal-5',
    title: 'Dedicated Detailing Workshop Lighting',
    category: 'reflection',
    categoryLabel: 'Surface Reflection',
    description: 'High-CRI diffuse ceiling array highlighting exterior body contours and finish uniformity.',
    image: IMAGES.workshop,
    altText: 'Vehicle positioned under architectural hex lighting inside automotive studio',
  },
  {
    id: 'gal-6',
    title: 'Flawless Paintwork Reflection',
    category: 'exterior',
    categoryLabel: 'Paint Preparation',
    description: 'Reflective paint panel prepared for subsequent protective barrier application.',
    image: IMAGES.paintCorrection,
    altText: 'Detailed vehicle surface with high-clarity reflection',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Contact & Inquiries',
    question: 'How can I contact Lahore Detailing Solutions?',
    answer:
      'You can reach Lahore Detailing Solutions directly by calling +92 322 4811924. You may also submit an inquiry through our website contact form with your vehicle make, model, and the service you are interested in.',
  },
  {
    id: 'faq-2',
    category: 'Location',
    question: 'Where is Lahore Detailing Solutions located?',
    answer:
      'The business is listed in DHA Phase 7, Lahore, Pakistan. For specific directions and route consultation based on your location within DHA or greater Lahore, please call us at +92 322 4811924.',
  },
  {
    id: 'faq-3',
    category: 'Services',
    question: 'What automotive care services are available?',
    answer:
      'Lahore Detailing Solutions offers vehicle auto detailing, paint protection treatments, automotive coatings, and comprehensive interior and exterior care. Contact us to discuss options suited to your vehicle.',
  },
  {
    id: 'faq-4',
    category: 'Consultation',
    question: 'How can I receive a cost estimate or quote for my vehicle?',
    answer:
      'Because every vehicle differs in body size, clear coat condition, and required preparation, please call +92 322 4811924 or submit an inquiry with your vehicle details so we can discuss the appropriate treatment.',
  },
  {
    id: 'faq-5',
    category: 'Preparation',
    question: 'What details should I have ready when inquiring?',
    answer:
      'Having your vehicle make, model, model year, exterior color, and general paint condition (such as recent exposure, swirl marks, or dullness) helps us provide accurate recommendations for treatment.',
  },
  {
    id: 'faq-6',
    category: 'Maintenance',
    question: 'How does paint protection help in Lahore’s driving conditions?',
    answer:
      'Lahore experiences elevated atmospheric dust, intense summer UV radiation, and seasonal humidity. Protective coatings and sealants provide a sacrificial barrier that reduces road dirt adhesion, minimizes sun-induced clear coat dulling, and makes regular washing significantly easier and safer.',
  },
  {
    id: 'faq-7',
    category: 'Service Availability',
    question: 'How do I confirm appointment availability?',
    answer:
      'Direct telephone communication at +92 322 4811924 is the recommended method to check current bay capacity, schedule consultation times, and confirm service scheduling.',
  },
];
