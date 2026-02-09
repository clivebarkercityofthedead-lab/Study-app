export enum RayId {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
}

export enum SystemType {
  Geocentric = "Geocentric (Tropical)",
  Heliocentric = "Heliocentric",
  Draconic = "Draconic (Karmic)",
  Sidereal = "Sidereal (Cosmic)"
}

export interface RayDefinition {
  id: RayId;
  name: string;
  color: string;
  description: string;
  quality: string;
}

export interface PlanetPosition {
  planet: string;
  sign: string;
  degree: number;
  house: number;
  ray: RayId; // Esoteric Ray associated with the planet/sign combo
}

export interface ChartData {
  system: SystemType;
  sun: PlanetPosition;
  earth?: PlanetPosition; // For Helio
  moon?: PlanetPosition; // Not for Helio
  ascendant?: PlanetPosition; // Not for Helio
  rulerRay: RayId;
  interpretation: string;
}

export interface StarseedConnection {
  starSystem: string;
  fixedStar: string;
  degree: number;
  sign: string;
  description: string;
  connectionType: 'Mental' | 'Astral' | 'Physical' | 'Spiritual';
}

export interface AkashicRecord {
  era: string;
  location: string;
  role: string;
  starOrigin: string; // The star system influencing this life
  lesson: string;
  rayFocus: RayId;
}

export interface RayScore {
  rayId: RayId;
  score: number;
  type: 'Sacred' | 'Non-Sacred' | 'Esoteric' | 'Exoteric';
}

export interface UserProfile {
  name: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
}

export interface AnalysisResult {
  profile: UserProfile;
  charts: Record<SystemType, ChartData>;
  monadicRay: RayId;
  soulRay: RayId;
  personalityRay: RayId;
  mentalRay: RayId;
  astralRay: RayId;
  physicalRay: RayId;
  karmicDebtRay: RayId; 
  starseedConnections: StarseedConnection[];
  akashicHistory: AkashicRecord[]; // New field for past lives
  rayDistribution: {
    sacred: RayScore[];
    nonSacred: RayScore[];
    weighted: RayScore[];
  };
}