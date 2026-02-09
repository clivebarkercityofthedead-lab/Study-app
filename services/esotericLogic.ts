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
    } else if (conn.starSystem === "Algol") {
      history.push({
        era: "Babylonian Era",
        location: "Mesopotamia",
        role: "Priest of the Underworld",
        starOrigin: "Beta Persei",
        lesson: "Confronting the shadow self and integrating primal fear.",
        rayFocus: RayId.One
      });
    } else if (conn.starSystem === "Alcyone") {
      history.push({
        era: "Vedic Era",
        location: "Northern India",
        role: "Rishi of the Forest",
        starOrigin: "Pleiades",
        lesson: "Dissolving the ego into the Oneness of Brahman.",
        rayFocus: RayId.Two
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

  // Curated logic for Theosophists & Mystics
  if (nameLower.includes("krishnamurti")) return createTheosophyProfile(profile, "Krishnamurti");
  if (nameLower.includes("besant")) return createTheosophyProfile(profile, "Besant");
  if (nameLower.includes("leadbeater")) return createTheosophyProfile(profile, "Leadbeater");
  if (nameLower.includes("hall")) return createTheosophyProfile(profile, "Hall");

  // Curated logic for Horror Authors
  if (nameLower.includes("lovecraft")) return createHorrorProfile(profile, "Lovecraft");
  if (nameLower.includes("poe")) return createHorrorProfile(profile, "Poe");
  if (nameLower.includes("shelley")) return createHorrorProfile(profile, "Shelley");
  if (nameLower.includes("king")) return createHorrorProfile(profile, "King");

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
    interpretation: "The Karmic Layer. Soul contracts, past life accumulations, and 'what lies beneath'.",
    sunAspects: [
      {
        planet: "Moon",
        type: "Square",
        orb: 7,
        interpretation: "Tension between the Soul's higher purpose (Libra) and past-life emotional security habits (Cancer). Requires balancing dependency with autonomy."
      },
      {
        planet: "Ascendant",
        type: "Trine",
        orb: 1,
        interpretation: "Harmonious flow between Soul intent and the Draconic Ascendant filter. Indicates a lifetime where karmic expression comes naturally."
      }
    ]
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
  let draconicAspects = [];

  if (isAlex) {
     connections = [
        { starSystem: "Antares", fixedStar: "Alpha Scorpii", degree: 9, sign: "Sagittarius", description: "Warrior energy", connectionType: "Physical" },
        { starSystem: "Orion", fixedStar: "Betelgeuse", degree: 28, sign: "Gemini", description: "Military honor", connectionType: "Mental" }
     ];
     draconicAspects = [
       { planet: "Mars", type: "Trine", orb: 2, interpretation: "Aries Sun trine Mars: Infinite reservoir of combat energy and leadership will from past lives." },
       { planet: "Pluto", type: "Opposition", orb: 4, interpretation: "Power struggles with authority figures embedded in the soul contract." }
     ];
  } else if (isCleo) {
      connections = [
        { starSystem: "Sirius", fixedStar: "Sirius A", degree: 14, sign: "Cancer", description: "Isis connection", connectionType: "Spiritual" }
      ];
      draconicAspects = [
        { planet: "Venus", type: "Conjunction", orb: 1, interpretation: "Libra Sun conjunct Venus: Charisma and diplomacy are mastered soul talents brought forward." },
        { planet: "Saturn", type: "Square", orb: 5, interpretation: "Karmic burden of responsibility and loss of structure." }
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
         interpretation: "The Karmic Contract.",
         sunAspects: draconicAspects
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

// Helper for Theosophists & Mystics
const createTheosophyProfile = (profile: UserProfile, key: string): AnalysisResult => {
  let geoSun = { sign: "Taurus", degree: 20, ray: RayId.Four };
  let helioEarth = { sign: "Scorpio", degree: 20, ray: RayId.Four };
  let soulRay = RayId.Two; // Default: Teacher
  let personalityRay = RayId.Four; 
  let connections: StarseedConnection[] = [];
  let history: AkashicRecord[] = [];
  let draconicAspects: any[] = [];

  if (key === "Krishnamurti") {
    // Jiddu Krishnamurti: Taurus Sun, Ray 2 Soul (The World Teacher Vehicle), Ray 4 Personality (Harmony through Conflict/Renunciation)
    // Famous for dissolving the Order of the Star.
    geoSun = { sign: "Taurus", degree: 20, ray: RayId.Four };
    helioEarth = { sign: "Scorpio", degree: 20, ray: RayId.Four };
    soulRay = RayId.Two; // Pure Love-Wisdom, the Maitreya vehicle attempt.
    personalityRay = RayId.Four; // The conflict of rejecting the form/organization.
    connections = [
      { starSystem: "Pleiades", fixedStar: "Alcyone", degree: 0, sign: "Gemini", description: "The central spiritual sun. The individual path to truth.", connectionType: "Spiritual" }
    ];
    history = [{
      era: "Vedic India",
      location: "Himalayas",
      role: "Young Brahmin",
      starOrigin: "Alcyone",
      lesson: "Truth is a pathless land.",
      rayFocus: RayId.Two
    }];
    draconicAspects = [
      { planet: "Uranus", type: "Opposition", orb: 1, interpretation: "Sudden liberation from established orders and cults." },
      { planet: "Neptune", type: "Trine", orb: 2, interpretation: "Direct mystical perception without intermediaries." }
    ];
  } else if (key === "Besant") {
    // Annie Besant: Libra Sun (Activist/Orator), Ray 6 Soul (Devotion to the Cause), shifting to Ray 2.
    geoSun = { sign: "Libra", degree: 8, ray: RayId.Three }; 
    helioEarth = { sign: "Aries", degree: 8, ray: RayId.One };
    soulRay = RayId.Six; // Devotion to the Masters and the Work.
    personalityRay = RayId.One; // Powerful will, President of TS.
    connections = [
      { starSystem: "Sirius", fixedStar: "Sirius A", degree: 14, sign: "Cancer", description: "Political and spiritual leadership. The Great White Lodge connection.", connectionType: "Spiritual" }
    ];
    history = [{
      era: "Hypatia's Alexandria",
      location: "Egypt",
      role: "Orator of Wisdom",
      starOrigin: "Sirius",
      lesson: "Martyrdom for the cause of truth.",
      rayFocus: RayId.Six
    }];
    draconicAspects = [
      { planet: "Mars", type: "Conjunction", orb: 3, interpretation: "Warrior spirit fighting for social justice and spiritual truth." }
    ];
  } else if (key === "Leadbeater") {
    // C.W. Leadbeater: Aquarius Sun, Ray 5 (Clairvoyant Research), Ray 7 (Ceremonial Magic/LCC).
    geoSun = { sign: "Aquarius", degree: 27, ray: RayId.Five }; 
    helioEarth = { sign: "Leo", degree: 27, ray: RayId.One };
    soulRay = RayId.Seven; // Ceremonial Order (Liberal Catholic Church).
    personalityRay = RayId.Five; // Detailed clairvoyant investigations (Occult Chemistry).
    connections = [
      { starSystem: "Arcturus", fixedStar: "Arcturus", degree: 24, sign: "Libra", description: "Structuring of the mental plane. Occult science.", connectionType: "Mental" }
    ];
    history = [{
      era: "Atlantis",
      location: "Temple of Poseidon",
      role: "High Priest of Ritual",
      starOrigin: "Arcturus",
      lesson: "Using ritual to ground high frequencies.",
      rayFocus: RayId.Seven
    }];
    draconicAspects = [
      { planet: "Mercury", type: "Sextile", orb: 1, interpretation: "Ability to articulate and document the invisible worlds." }
    ];
  } else if (key === "Hall") {
    // Manly P. Hall: Pisces Sun (The Mystic Encyclopedia), Ray 3 (Active Intelligence/Philosophy).
    geoSun = { sign: "Pisces", degree: 27, ray: RayId.Six }; 
    helioEarth = { sign: "Virgo", degree: 27, ray: RayId.Two };
    soulRay = RayId.Three; // The Great Weaver of knowledge (Secret Teachings of All Ages).
    personalityRay = RayId.Two; // Teacher/Sage.
    connections = [
      { starSystem: "Lyra", fixedStar: "Vega", degree: 15, sign: "Capricorn", description: "Preservation of Ancient Wisdom traditions.", connectionType: "Mental" }
    ];
    history = [{
      era: "Alexandrian Library",
      location: "Egypt",
      role: "Keeper of Scrolls",
      starOrigin: "Lyra",
      lesson: "Synthesis of all religions and philosophies.",
      rayFocus: RayId.Three
    }];
    draconicAspects = [
      { planet: "Jupiter", type: "Conjunction", orb: 2, interpretation: "Vast accumulation of higher knowledge and wisdom." }
    ];
  }

  return {
    profile,
    charts: {
      [SystemType.Geocentric]: {
        system: SystemType.Geocentric,
        sun: { planet: "Sun", sign: geoSun.sign, degree: geoSun.degree, house: 12, ray: geoSun.ray },
        rulerRay: personalityRay,
        interpretation: "The vehicle of the Initiate."
      } as ChartData,
      [SystemType.Heliocentric]: {
         system: SystemType.Heliocentric,
         sun: { planet: "Sun", sign: "Center", degree: 0, house: 0, ray: RayId.One },
         earth: { planet: "Earth", sign: helioEarth.sign, degree: helioEarth.degree, house: 6, ray: helioEarth.ray },
         rulerRay: soulRay,
         interpretation: "The Soul's Perspective."
      } as ChartData,
      [SystemType.Draconic]: {
         system: SystemType.Draconic,
         sun: { planet: "Sun", sign: "Sagittarius", degree: 10, house: 9, ray: RayId.Six },
         rulerRay: RayId.Two,
         interpretation: "The Karmic Contract of Teaching.",
         sunAspects: draconicAspects
      } as ChartData,
      [SystemType.Sidereal]: {
         system: SystemType.Sidereal,
         sun: { planet: "Sun", sign: geoSun.sign === "Pisces" ? "Aquarius" : "Aries", degree: 5, house: 12, ray: RayId.Three },
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
    karmicDebtRay: RayId.Two,
    starseedConnections: connections,
    akashicHistory: history,
    rayDistribution: { 
      sacred: [{ rayId: soulRay, score: 95, type: 'Sacred' }], 
      nonSacred: [{ rayId: personalityRay, score: 85, type: 'Non-Sacred' }], 
      weighted: [{ rayId: soulRay, score: 100, type: 'Esoteric' }] 
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
  let draconicAspects = [];

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
    draconicAspects = [
      { planet: "Neptune", type: "Trine", orb: 0, interpretation: "Fluid access to the astral plane and akashic records." },
      { planet: "Mercury", type: "Square", orb: 3, interpretation: "Intense mental pressure to communicate the ineffable." }
    ];
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
    draconicAspects = [
      { planet: "Jupiter", type: "Conjunction", orb: 2, interpretation: "Expansion of wisdom and the role of the teacher." },
      { planet: "Chiron", type: "Opposition", orb: 4, interpretation: "The wounded healer archetype played out through service." }
    ];
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
    draconicAspects = [
      { planet: "Uranus", type: "Sextile", orb: 1, interpretation: "Innovative spiritual concepts and breaking traditional forms." }
    ];
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
    draconicAspects = [
      { planet: "Moon", type: "Conjunction", orb: 3, interpretation: "Deep integration of the unconscious/subconscious into the conscious self." }
    ];
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
         interpretation: "The Karmic necessities of the Disciple.",
         sunAspects: draconicAspects
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

// Helper for Horror Authors
const createHorrorProfile = (profile: UserProfile, key: string): AnalysisResult => {
  let geoSun = { sign: "Leo", degree: 0, ray: RayId.One };
  let helioEarth = { sign: "Aquarius", degree: 0, ray: RayId.Five };
  let soulRay = RayId.Four; // Default: Harmony through Conflict (Art)
  let personalityRay = RayId.Four; 
  let connections: StarseedConnection[] = [];
  let history: AkashicRecord[] = [];
  let draconicAspects: any[] = [];

  if (key === "Lovecraft") {
    // H.P. Lovecraft: Leo Sun, Ray 5 Soul (Science/Concrete Knowledge -> Cosmic indifference)
    geoSun = { sign: "Leo", degree: 27, ray: RayId.One };
    helioEarth = { sign: "Aquarius", degree: 27, ray: RayId.Five };
    soulRay = RayId.Five; // The Ray of Concrete Science/Knowledge - revealing the terrifying mechanics of the cosmos
    personalityRay = RayId.Four; // Artistic struggle, isolation
    connections = [
      { starSystem: "Algol", fixedStar: "Beta Persei", degree: 26, sign: "Taurus", description: "Connection to the 'Demon Star'. Channeling primal fear and the grotesque.", connectionType: "Mental" }
    ];
    history = [{
      era: "Sumerian Empire",
      location: "Ur",
      role: "Priest of the Void",
      starOrigin: "Algol",
      lesson: "Confronting the abyss without losing the mind.",
      rayFocus: RayId.Five
    }];
    draconicAspects = [
      { planet: "Pluto", type: "Conjunction", orb: 1, interpretation: "Draconic Sun conjunct Pluto: Obsession with the hidden, death, and transformation." },
      { planet: "Neptune", type: "Square", orb: 4, interpretation: "Dissolution of boundaries between reality and nightmare." }
    ];
  } else if (key === "Poe") {
    // Edgar Allan Poe: Capricorn Sun, Ray 4 Soul (Beauty through Suffering)
    geoSun = { sign: "Capricorn", degree: 29, ray: RayId.One }; // Melancholy/Saturnine
    helioEarth = { sign: "Cancer", degree: 29, ray: RayId.Three };
    soulRay = RayId.Four; // The Artist, Harmony through Conflict
    personalityRay = RayId.Six; // Devotion/Idealism -> Obsessive love/loss
    connections = [
      { starSystem: "Fomalhaut", fixedStar: "Alpha Piscis Austrini", degree: 3, sign: "Pisces", description: "The Lonely One. Spiritual solitude and poetic genius.", connectionType: "Astral" }
    ];
    history = [{
      era: "Late Atlantis",
      location: "Poseidonis",
      role: "Tragic Poet",
      starOrigin: "Fomalhaut",
      lesson: "Transmuting deep grief into immortal art.",
      rayFocus: RayId.Four
    }];
    draconicAspects = [
      { planet: "Moon", type: "Opposition", orb: 2, interpretation: "Emotional turbulence and the haunting of the feminine principle." },
      { planet: "Mercury", type: "Trine", orb: 3, interpretation: "Brilliant, rhythmic communication of the macabre." }
    ];
  } else if (key === "Shelley") {
    // Mary Shelley: Virgo Sun, Ray 3 Soul (Active Intelligence - Weaving complex life/Frankenstein)
    geoSun = { sign: "Virgo", degree: 7, ray: RayId.Two };
    helioEarth = { sign: "Pisces", degree: 7, ray: RayId.Six };
    soulRay = RayId.Three; // The Weaver/Creator of Form
    personalityRay = RayId.Two; // Love-Wisdom (The tragedy of the creature)
    connections = [
      { starSystem: "Lyra", fixedStar: "Vega", degree: 15, sign: "Capricorn", description: "Visionary creative power. Giving life to the inanimate.", connectionType: "Mental" }
    ];
    history = [{
      era: "Medieval Europe",
      location: "Ingolstadt",
      role: "Alchemist's Daughter",
      starOrigin: "Lyra",
      lesson: "Responsibility of the creator for the creation.",
      rayFocus: RayId.Three
    }];
    draconicAspects = [
      { planet: "Uranus", type: "Trine", orb: 1, interpretation: "Revolutionary ideas (Science Fiction) and breaking societal norms." }
    ];
  } else if (key === "King") {
    // Stephen King: Virgo Sun, Ray 6 Soul (The battle between Good & Evil)
    geoSun = { sign: "Virgo", degree: 27, ray: RayId.Two }; // Work ethic/Detail
    helioEarth = { sign: "Pisces", degree: 27, ray: RayId.Six };
    soulRay = RayId.Six; // Devotion/Idealism (Strong focus on Light vs Dark)
    personalityRay = RayId.Seven; // Ceremonial Order (Grounding magic in reality/ritual of writing)
    connections = [
      { starSystem: "Antares", fixedStar: "Alpha Scorpii", degree: 9, sign: "Sagittarius", description: "Intensity and the courage to face inner demons.", connectionType: "Astral" }
    ];
    history = [{
      era: "Colonial America",
      location: "New England",
      role: "Storyteller / Seer",
      starOrigin: "Antares",
      lesson: "Revealing the darkness under the surface of the mundane.",
      rayFocus: RayId.Six
    }];
    draconicAspects = [
      { planet: "Saturn", type: "Conjunction", orb: 5, interpretation: "Disciplined manifestation of fears. The master of structure." }
    ];
  }

  return {
    profile,
    charts: {
      [SystemType.Geocentric]: {
        system: SystemType.Geocentric,
        sun: { planet: "Sun", sign: geoSun.sign, degree: geoSun.degree, house: 8, ray: geoSun.ray }, // House 8 typical for horror/occult
        rulerRay: personalityRay,
        interpretation: "The vehicle of the Author shaped by specific rays."
      } as ChartData,
      [SystemType.Heliocentric]: {
         system: SystemType.Heliocentric,
         sun: { planet: "Sun", sign: "Center", degree: 0, house: 0, ray: RayId.One },
         earth: { planet: "Earth", sign: helioEarth.sign, degree: helioEarth.degree, house: 2, ray: helioEarth.ray },
         rulerRay: soulRay,
         interpretation: "The Soul's Perspective."
      } as ChartData,
      [SystemType.Draconic]: {
         system: SystemType.Draconic,
         sun: { planet: "Sun", sign: "Scorpio", degree: 0, house: 12, ray: RayId.Six }, // Archetypal Scorpio for horror
         rulerRay: RayId.Four,
         interpretation: "The Karmic Contract to explore the shadow.",
         sunAspects: draconicAspects
      } as ChartData,
      [SystemType.Sidereal]: {
         system: SystemType.Sidereal,
         sun: { planet: "Sun", sign: geoSun.sign === "Virgo" ? "Leo" : "Sagittarius", degree: 10, house: 12, ray: RayId.Three },
         rulerRay: RayId.Three,
         interpretation: "The Cosmic Lineage."
      } as ChartData
    },
    monadicRay: RayId.One,
    soulRay: soulRay,
    personalityRay: personalityRay,
    mentalRay: RayId.Five,
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