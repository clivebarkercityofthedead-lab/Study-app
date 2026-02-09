import { RayId, RayDefinition, StarseedConnection, UserProfile } from './types';

export const RAYS: Record<RayId, RayDefinition> = {
  [RayId.One]: {
    id: RayId.One,
    name: "Will or Power",
    color: "#ef4444", // Red
    description: "The Ray of Will, Power, and Governance.",
    quality: "Dynamic intensity, destruction of forms, synthesis.",
  },
  [RayId.Two]: {
    id: RayId.Two,
    name: "Love-Wisdom",
    color: "#3b82f6", // Blue
    description: "The Ray of Love, Wisdom, and Healing.",
    quality: "Inclusiveness, coherence, attraction, teaching.",
  },
  [RayId.Three]: {
    id: RayId.Three,
    name: "Active Intelligence",
    color: "#22c55e", // Green
    description: "The Ray of Abstract Intelligence and adaptability.",
    quality: "Philosophical understanding, planning, strategy.",
  },
  [RayId.Four]: {
    id: RayId.Four,
    name: "Harmony through Conflict",
    color: "#eab308", // Yellow
    description: "The Ray of Beauty, Art, and Mediation.",
    quality: "Unity amidst diversity, artistic expression, balance.",
  },
  [RayId.Five]: {
    id: RayId.Five,
    name: "Concrete Science",
    color: "#f97316", // Orange
    description: "The Ray of Concrete Knowledge and Science.",
    quality: "Detailed analysis, research, technological precision.",
  },
  [RayId.Six]: {
    id: RayId.Six,
    name: "Devotion & Idealism",
    color: "#06b6d4", // Cyan/Light Blue (Matches PDF visual)
    description: "The Ray of Abstract Idealism and Devotion.",
    quality: "One-pointedness, religious fervor, loyalty.",
  },
  [RayId.Seven]: {
    id: RayId.Seven,
    name: "Ceremonial Order",
    color: "#d946ef", // Magenta/Violet
    description: "The Ray of Ritual, Order, and Magic.",
    quality: "Organization, grounding spirit in matter, rhythm.",
  },
};

export const FIXED_STARS: StarseedConnection[] = [
  {
    starSystem: "Sirius",
    fixedStar: "Sirius A",
    degree: 14,
    sign: "Cancer",
    description: "Higher Mind, Great White Lodge connection, Cosmic Freedom.",
    connectionType: "Spiritual",
  },
  {
    starSystem: "Pleiades",
    fixedStar: "Alcyone",
    degree: 0,
    sign: "Gemini",
    description: "Communication, unconditional love, healing the inner child.",
    connectionType: "Astral",
  },
  {
    starSystem: "Arcturus",
    fixedStar: "Arcturus",
    degree: 24,
    sign: "Libra",
    description: "Advanced technology, higher geometry, emotional balance.",
    connectionType: "Mental",
  },
  {
    starSystem: "Orion",
    fixedStar: "Rigel",
    degree: 16,
    sign: "Gemini",
    description: "Integration of polarity, warrior spirit, technical mastery.",
    connectionType: "Physical",
  },
  {
    starSystem: "Lyra",
    fixedStar: "Vega",
    degree: 15,
    sign: "Capricorn",
    description: "Ancient wisdom, musical harmony, foundational starseed origins.",
    connectionType: "Spiritual",
  },
];

export const FAMOUS_LEADERS: UserProfile[] = [
  {
    name: "Alexander the Great",
    birthDate: "356 BC (July 20)",
    birthTime: "Unknown",
    birthPlace: "Pella, Macedon"
  },
  {
    name: "Cleopatra VII",
    birthDate: "69 BC (Jan 1)",
    birthTime: "Unknown",
    birthPlace: "Alexandria, Egypt"
  },
  {
    name: "Julius Caesar",
    birthDate: "100 BC (July 12)",
    birthTime: "Unknown",
    birthPlace: "Rome, Republic"
  },
  {
    name: "Akhenaten",
    birthDate: "1351 BC",
    birthTime: "Dawn",
    birthPlace: "Thebes, Egypt"
  }
];

export const ESOTERIC_MASTERS: UserProfile[] = [
  {
    name: "Helena Blavatsky",
    birthDate: "1831-08-12",
    birthTime: "01:42",
    birthPlace: "Yekaterinoslav, Ukraine"
  },
  {
    name: "Alice Bailey",
    birthDate: "1880-06-16",
    birthTime: "07:40",
    birthPlace: "Manchester, England"
  },
  {
    name: "Rudolf Steiner",
    birthDate: "1861-02-27",
    birthTime: "23:15",
    birthPlace: "Murakirály, Austria-Hungary"
  },
  {
    name: "Carl Jung",
    birthDate: "1875-07-26",
    birthTime: "19:29",
    birthPlace: "Kesswil, Switzerland"
  }
];