import { AnalysisResult, RayId, UserProfile, RayScore, SystemType, ChartData, AkashicRecord, StarseedConnection } from '../types';

/**
 * Generates archetypal past life records based on Starseed connections.
 */
const generateAkashicHistory = (connections: StarseedConnection[]): AkashicRecord[] => {
  const history: AkashicRecord[] = [];

  connections.forEach(conn => {
    if (conn.starSystem === "Sirius") {
      history.push({
        era: "Dynastic Epoch (c. 1350 BC)",
        location: "Ancient Egypt (Thebes)",
        role: "Temple Initiate of Isis",
        starOrigin: "Sirius A",
        lesson: "Balancing power with sacred wisdom; retrieving the lost codes of resurrection.",
        rayFocus: RayId.Two
      });
    }
    else if (conn.starSystem === "Pleiades") {
      history.push({
        era: "Pre-Diluvian (c. 10,000 BC)",
        location: "Atlantis (Poseidonis)",
        role: "Crystal Healer / Sound Keeper",
        starOrigin: "Alcyone",
        lesson: "Healing the separation trauma; using sound frequency to restructure matter.",
        rayFocus: RayId.Seven
      });
    }
    else if (conn.starSystem === "Arcturus") {
      history.push({
        era: "Golden Age of Philosophy",
        location: "Ancient Greece (Athens)",
        role: "Pythagorean Mathematician",
        starOrigin: "Arcturus",
        lesson: "Understanding the geometry of the soul and the logic of higher dimensions.",
        rayFocus: RayId.Five
      });
    }
    else if (conn.starSystem === "Orion") {
      history.push({
        era: "Feudal Era",
        location: "Japan (Kamakura)",
        role: "Samurai / Warrior Monk",
        starOrigin: "Rigel",
        lesson: "Transmuting conflict into inner discipline; the path of the peaceful warrior.",
        rayFocus: RayId.One
      });
    }
    else if (conn.starSystem === "Lyra") {
      history.push({
        era: "First Earth Seeding",
        location: "Lemuria (Mu)",
        role: "Earth Guardian",
        starOrigin: "Vega",
        lesson: "Grounding the first spiritual laws into the physical grid of the planet.",
        rayFocus: RayId.Three
      });
    }
  });

  // Default record if no specific connection generates one
  if (history.length === 0) {
    history.push({
      era: "Renaissance",
      location: "Florence, Italy",
      role: "Apprentice of Arts",
      starOrigin: "Solar System",
      lesson: "Expression of beauty through form.",
      rayFocus: RayId.Four
    });
  }

  return history;
};

/**
 * Calculates profiles for Geocentric, Heliocentric, Draconic, and Sidereal systems.
 */
export const calculateAkashicProfile = (profile: UserProfile): AnalysisResult => {
  const nameLower = profile.name.toLowerCase();

  // Curated logic for famous figures
  if (nameLower.includes("alexander")) return createFamousProfile(profile, "Alexander");
  if (nameLower.includes("cleopatra")) return createFamousProfile(profile, "Cleopatra");
  if (nameLower.includes("caesar")) return createFamousProfile(profile, "Caesar");
  if (nameLower.includes("akhenaten")) return createFamousProfile(profile, "Akhenaten");
  
  // Curated logic for Esoteric Masters
  if (nameLower.includes("blavatsky")) return createEsotericProfile(profile, "Blavatsky");
  if (nameLower.includes("bailey")) return createEsotericProfile(profile, "Bailey");
  if (nameLower.includes("steiner")) return createEsotericProfile(profile, "Steiner");
  if (nameLower.includes("jung")) return createEsotericProfile(profile, "Jung");

  // Standard Simulation Logic
  // 1. Generate Base (Geocentric)
  const geoData: ChartData = {
    system: SystemType.Geocentric,
    sun: { planet: "Sun", sign: "Aquarius", degree: 15, house: 11, ray: RayId.Five },
    moon: { planet: "Moon", sign: "Scorpio", degree: 22, house: 8, ray: RayId.Four },
    ascendant: { planet: "Ascendant", sign: "Gemini", degree: 10, house: 1, ray: RayId.Two },
    rulerRay: RayId.Five, // Personality Ray
    interpretation: "The Mask & Personality. Your tool for interaction in this incarnation."
  };

  // 2. Generate Heliocentric (Soul View - Sun is center, Earth is position)
  const helioData: ChartData = {
    system: SystemType.Heliocentric,
    sun: { planet: "Sun (Center)", sign: "Leo", degree: 0, house: 0, ray: RayId.One },
    earth: { planet: "Earth", sign: "Leo", degree: 15, house: 5, ray: RayId.Two },
    rulerRay: RayId.Two, // Soul Ray
    interpretation: "The Soul's Perspective. Pure solar intent untainted by lunar personality filters."
  };

  // 3. Generate Draconic (Karmic/Soul Memory)
  const draconicData: ChartData = {
    system: SystemType.Draconic,
    sun: { planet: "Sun", sign: "Libra", degree: 5, house: 11, ray: RayId.Three },
    moon: { planet: "Moon", sign: "Cancer", degree: 12, house: 8, ray: RayId.Seven },
    ascendant: { planet: "Ascendant", sign: "Aquarius", degree: 25, house: 1, ray: RayId.Five },
    rulerRay: RayId.Seven, // Karmic Ray
    interpretation: "The Karmic Layer. Soul contracts, past life accumulations, and 'what lies beneath'."
  };

  // 4. Generate Sidereal (Cosmic/Star)
  const siderealData: ChartData = {
    system: SystemType.Sidereal,
    sun: { planet: "Sun", sign: "Capricorn", degree: 21, house: 11, ray: RayId.One },
    moon: { planet: "Moon", sign: "Libra", degree: 28, house: 8, ray: RayId.Three },
    ascendant: { planet: "Ascendant", sign: "Taurus", degree: 16, house: 1, ray: RayId.Four },
    rulerRay: RayId.One, // Cosmic Ray
    interpretation: "The Star Lineage. Your true position against the fixed stars."
  };

  const starseedConnections: StarseedConnection[] = [
    {
      starSystem: "Sirius",
      fixedStar: "Sirius A",
      degree: 14,
      sign: "Cancer",
      description: "Direct conduit to the Great White Lodge. Suggests a mission of teaching and cosmic initiation.",
      connectionType: "Spiritual"
    },
    {
      starSystem: "Pleiades",
      fixedStar: "Alcyone",
      degree: 0,
      sign: "Gemini",
      description: "Strong emphasis on communication of higher wisdom and healing of the astral body.",
      connectionType: "Astral"
    }
  ];

  return {
    profile,
    charts: {
      [SystemType.Geocentric]: geoData,
      [SystemType.Heliocentric]: helioData,
      [SystemType.Draconic]: draconicData,
      [SystemType.Sidereal]: siderealData
    },
    monadicRay: RayId.One,
    soulRay: RayId.Two,
    personalityRay: RayId.Five,
    mentalRay: RayId.Four,
    astralRay: RayId.Six,
    physicalRay: RayId.Three,
    karmicDebtRay: RayId.Seven, 
    
    starseedConnections,
    akashicHistory: generateAkashicHistory(starseedConnections),

    rayDistribution: {
      sacred: [
        { rayId: RayId.Two, score: 85, type: 'Sacred' },
        { rayId: RayId.Four, score: 65, type: 'Sacred' },
        { rayId: RayId.One, score: 30, type: 'Sacred' },
      ],
      nonSacred: [
        { rayId: RayId.Five, score: 90, type: 'Non-Sacred' },
        { rayId: RayId.Three, score: 70, type: 'Non-Sacred' },
      ],
      weighted: [
        { rayId: RayId.Two, score: 90, type: 'Esoteric' },
        { rayId: RayId.Five, score: 85, type: 'Esoteric' },
        { rayId: RayId.Seven, score: 40, type: 'Esoteric' },
      ]
    }
  };
};

// Helper for famous profiles
const createFamousProfile = (profile: UserProfile, key: string): AnalysisResult => {
  const isAlex = key === "Alexander";
  const isCleo = key === "Cleopatra";
  
  let connections: StarseedConnection[] = [];
  if (isAlex) {
     connections = [
        { starSystem: "Antares", fixedStar: "Alpha Scorpii", degree: 9, sign: "Sagittarius", description: "Warrior energy", connectionType: "Physical" },
        { starSystem: "Orion", fixedStar: "Betelgeuse", degree: 28, sign: "Gemini", description: "Military honor", connectionType: "Mental" }
     ];
  } else if (isCleo) {
      connections = [
        { starSystem: "Sirius", fixedStar: "Sirius A", degree: 14, sign: "Cancer", description: "Isis connection", connectionType: "Spiritual" }
      ];
  }

  return {
    profile,
    charts: {
      [SystemType.Geocentric]: {
        system: SystemType.Geocentric,
        sun: { planet: "Sun", sign: isAlex ? "Leo" : "Capricorn", degree: 20, house: 10, ray: RayId.One },
        rulerRay: isAlex ? RayId.One : RayId.Seven,
        interpretation: "The Personality Vehicle."
      } as ChartData,
      [SystemType.Heliocentric]: {
         system: SystemType.Heliocentric,
         sun: { planet: "Sun", sign: "Center", degree: 0, house: 0, ray: RayId.One },
         earth: { planet: "Earth", sign: isAlex ? "Aquarius" : "Cancer", degree: 20, house: 4, ray: RayId.Five },
         rulerRay: RayId.Two,
         interpretation: "The Soul Purpose."
      } as ChartData,
      [SystemType.Draconic]: {
         system: SystemType.Draconic,
         sun: { planet: "Sun", sign: isAlex ? "Aries" : "Libra", degree: 5, house: 1, ray: RayId.One },
         rulerRay: RayId.Four,
         interpretation: "The Karmic Contract."
      } as ChartData,
      [SystemType.Sidereal]: {
         system: SystemType.Sidereal,
         sun: { planet: "Sun", sign: isAlex ? "Cancer" : "Sagittarius", degree: 25, house: 10, ray: RayId.Three },
         rulerRay: RayId.Three,
         interpretation: "The Cosmic Origin."
      } as ChartData
    },
    monadicRay: RayId.One,
    soulRay: RayId.One,
    personalityRay: RayId.Six,
    mentalRay: RayId.Four,
    astralRay: RayId.Six,
    physicalRay: RayId.Three,
    karmicDebtRay: RayId.Four,
    starseedConnections: connections,
    akashicHistory: generateAkashicHistory(connections),
    rayDistribution: { 
      sacred: [{ rayId: RayId.One, score: 100, type: 'Sacred' }], 
      nonSacred: [{ rayId: RayId.Six, score: 80, type: 'Non-Sacred' }], 
      weighted: [{ rayId: RayId.One, score: 95, type: 'Esoteric' }] 
    } 
  };
}

// Helper for Esoteric Masters
const createEsotericProfile = (profile: UserProfile, key: string): AnalysisResult => {
  let geoSun = { sign: "Leo", degree: 20, ray: RayId.One };
  let helioEarth = { sign: "Aquarius", degree: 20, ray: RayId.Five };
  let soulRay = RayId.One;
  let personalityRay = RayId.Three; // Blavatsky default
  let connections: StarseedConnection[] = [];
  let history: AkashicRecord[] = [];

  if (key === "Blavatsky") {
    // HPB
    geoSun = { sign: "Leo", degree: 19, ray: RayId.One };
    helioEarth = { sign: "Aquarius", degree: 19, ray: RayId.Five };
    soulRay = RayId.One; // Will/Power - Breaking forms
    personalityRay = RayId.Three; // Active Intelligence - The Secret Doctrine scribe
    connections = [
       { starSystem: "Sirius", fixedStar: "Sirius A", degree: 14, sign: "Cancer", description: "Direct Hierarchical Impulse", connectionType: "Spiritual" }
    ];
    history = [{
       era: "Tibetan Era",
       location: "Himalayas",
       role: "Chela of M.",
       starOrigin: "Sirius",
       lesson: "Bringing the Wisdom of the East to the West.",
       rayFocus: RayId.One
    }];
  } else if (key === "Bailey") {
    // Alice Bailey
    geoSun = { sign: "Gemini", degree: 25, ray: RayId.Two };
    helioEarth = { sign: "Sagittarius", degree: 25, ray: RayId.Four }; // Earth in Sag (Helio)
    soulRay = RayId.Two; // Love-Wisdom - The Teacher/Scribe
    personalityRay = RayId.One; // Organizational Power (Arcane School)
    connections = [
       { starSystem: "Pleiades", fixedStar: "Alcyone", degree: 0, sign: "Gemini", description: "Esoteric Astrology Transmission", connectionType: "Astral" }
    ];
    history = [{
       era: "Early Christian Era",
       location: "Alexandria",
       role: "Gnostic Scribe",
       starOrigin: "Pleiades",
       lesson: "Externalization of the Hierarchy.",
       rayFocus: RayId.Two
    }];
  } else if (key === "Steiner") {
    // Rudolf Steiner
    geoSun = { sign: "Pisces", degree: 9, ray: RayId.Six }; // Mystic/Sensitive
    helioEarth = { sign: "Virgo", degree: 9, ray: RayId.Two };
    soulRay = RayId.Two; // Teacher/Love-Wisdom
    personalityRay = RayId.Five; // Concrete Science -> Spiritual Science (Anthroposophy)
    connections = [
       { starSystem: "Arcturus", fixedStar: "Arcturus", degree: 24, sign: "Libra", description: "Akashic Reader & Spiritual Scientist", connectionType: "Mental" }
    ];
    history = [{
       era: "Rosicrucian Era",
       location: "Germany",
       role: "Initiate of the Rose Cross",
       starOrigin: "Arcturus",
       lesson: "Uniting Science and Spirituality.",
       rayFocus: RayId.Five
    }];
  } else if (key === "Jung") {
    // Carl Jung
    geoSun = { sign: "Leo", degree: 3, ray: RayId.One };
    helioEarth = { sign: "Aquarius", degree: 3, ray: RayId.Five };
    soulRay = RayId.Two; // Healer/Psychologist
    personalityRay = RayId.Five; // Scientific approach to the Soul
    connections = [
       { starSystem: "Lyra", fixedStar: "Vega", degree: 15, sign: "Capricorn", description: "Explorer of the Collective Unconscious", connectionType: "Mental" }
    ];
    history = [{
       era: "Alchemical Era",
       location: "Basel",
       role: "Alchemist of the Soul",
       starOrigin: "Lyra",
       lesson: "Individuation and Shadow Work.",
       rayFocus: RayId.Four
    }];
  }

  return {
    profile,
    charts: {
      [SystemType.Geocentric]: {
        system: SystemType.Geocentric,
        sun: { planet: "Sun", sign: geoSun.sign, degree: geoSun.degree, house: 1, ray: geoSun.ray },
        rulerRay: personalityRay,
        interpretation: "The vehicle of the Personality chosen for specific service."
      } as ChartData,
      [SystemType.Heliocentric]: {
         system: SystemType.Heliocentric,
         sun: { planet: "Sun", sign: "Center", degree: 0, house: 0, ray: RayId.One },
         earth: { planet: "Earth", sign: helioEarth.sign, degree: helioEarth.degree, house: 7, ray: helioEarth.ray },
         rulerRay: soulRay,
         interpretation: "The Soul's Perspective."
      } as ChartData,
      [SystemType.Draconic]: {
         system: SystemType.Draconic,
         sun: { planet: "Sun", sign: "Scorpio", degree: 15, house: 8, ray: RayId.Six }, // Archetypal
         rulerRay: RayId.Four,
         interpretation: "The Karmic necessities of the Disciple."
      } as ChartData,
      [SystemType.Sidereal]: {
         system: SystemType.Sidereal,
         sun: { planet: "Sun", sign: geoSun.sign === "Pisces" ? "Aquarius" : "Cancer", degree: 5, house: 12, ray: RayId.Three },
         rulerRay: RayId.Three,
         interpretation: "The Cosmic Lineage."
      } as ChartData
    },
    monadicRay: RayId.One,
    soulRay: soulRay,
    personalityRay: personalityRay,
    mentalRay: RayId.Four,
    astralRay: RayId.Six,
    physicalRay: RayId.Seven,
    karmicDebtRay: RayId.Four,
    starseedConnections: connections,
    akashicHistory: history,
    rayDistribution: { 
      sacred: [{ rayId: soulRay, score: 95, type: 'Sacred' }], 
      nonSacred: [{ rayId: personalityRay, score: 85, type: 'Non-Sacred' }], 
      weighted: [{ rayId: soulRay, score: 100, type: 'Esoteric' }] 
    } 
  };
}