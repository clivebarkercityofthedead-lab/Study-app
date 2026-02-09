import React, { useState } from 'react';
import { calculateAkashicProfile } from './services/esotericLogic';
import { UserProfile, AnalysisResult } from './types';
import { RayBarChart } from './components/RayBarChart';
import { VehicleAnalysis } from './components/VehicleAnalysis';
import { ZodiacComparison } from './components/ZodiacComparison';
import { KarmicRadar } from './components/KarmicRadar';
import { AkashicRecords } from './components/AkashicRecords';
import { ArrowRight, Globe, Scroll, BookOpen, Layers, Star, Feather } from 'lucide-react';
import { FAMOUS_LEADERS, ESOTERIC_MASTERS } from './constants';

const DEFAULT_PROFILE: UserProfile = {
  name: "Roberto Hernan",
  birthDate: "1994-01-21",
  birthTime: "10:14",
  birthPlace: "Caracas, Venezuela",
};

export default function App() {
  const [hasCalculated, setHasCalculated] = useState(false);
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'origins' | 'karmic' | 'vehicles'>('overview');

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const res = calculateAkashicProfile(profile);
    setResult(res);
    setHasCalculated(true);
    setActiveTab('overview');
  };

  const loadPreset = (preset: UserProfile) => {
    setProfile(preset);
  };

  return (
    <div className="min-h-screen w-full bg-[#0f172a] text-slate-200 overflow-x-hidden selection:bg-purple-500 selection:text-white pb-20">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[60%] h-[60%] bg-indigo-900/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-cinzel font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-white to-purple-200 mb-4 drop-shadow-lg">
            Akashic Ray Illustrator
          </h1>
          <p className="text-slate-400 text-sm md:text-lg max-w-3xl mx-auto font-light tracking-wide flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
            <span>Geocentric</span> • <span>Heliocentric</span> • <span>Draconic (Karma)</span> • <span>Sidereal</span>
          </p>
        </header>

        {!hasCalculated ? (
          /* Input Form */
          <div className="max-w-md mx-auto animate-fade-in-up">
            <div className="glass-panel p-8 rounded-2xl shadow-2xl border-t border-white/10 mb-8">
              <h2 className="text-2xl font-cinzel text-center mb-6">Chart Calculation</h2>
              <form onSubmit={handleCalculate} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-slate-600 transition-all"
                    placeholder="e.g., Alexander the Great"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">Date</label>
                    <input 
                      type="text" 
                      value={profile.birthDate}
                      onChange={(e) => setProfile({...profile, birthDate: e.target.value})}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none text-white transition-all"
                      placeholder="YYYY-MM-DD"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">Time</label>
                    <input 
                      type="text" 
                      value={profile.birthTime}
                      onChange={(e) => setProfile({...profile, birthTime: e.target.value})}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none text-white transition-all"
                      placeholder="HH:MM"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">Place of Birth</label>
                  <input 
                    type="text" 
                    value={profile.birthPlace}
                    onChange={(e) => setProfile({...profile, birthPlace: e.target.value})}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded px-4 py-2 focus:ring-2 focus:ring-purple-500 outline-none text-white transition-all"
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full mt-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-lg shadow-indigo-900/50"
                >
                  Analyze Karma & Rays <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Quick Select */}
            <div className="glass-panel p-6 rounded-xl border border-slate-700/50">
               <h3 className="text-sm font-cinzel text-slate-400 mb-4 flex items-center gap-2 uppercase tracking-widest">
                 <Scroll className="w-4 h-4" /> 
                 Historical Presets
               </h3>
               
               {/* Historical Leaders */}
               <div className="grid grid-cols-2 gap-3 mb-6">
                 {FAMOUS_LEADERS.map((leader, idx) => (
                   <button
                     key={idx}
                     onClick={() => loadPreset(leader)}
                     className="text-left text-xs p-3 rounded bg-slate-800 hover:bg-slate-700 hover:text-purple-300 border border-slate-700 transition-colors flex flex-col gap-1 group"
                   >
                     <span className="font-bold text-slate-200 group-hover:text-white">{leader.name}</span>
                     <span className="text-[10px] text-slate-500">{leader.birthDate}</span>
                   </button>
                 ))}
               </div>

               {/* Esoteric Masters */}
               <h3 className="text-sm font-cinzel text-slate-400 mb-4 flex items-center gap-2 uppercase tracking-widest border-t border-slate-700 pt-4">
                 <Feather className="w-4 h-4" /> 
                 Esoteric & Occult Masters
               </h3>
               <div className="grid grid-cols-2 gap-3">
                 {ESOTERIC_MASTERS.map((master, idx) => (
                   <button
                     key={idx}
                     onClick={() => loadPreset(master)}
                     className="text-left text-xs p-3 rounded bg-indigo-900/30 hover:bg-indigo-900/50 hover:text-blue-300 border border-indigo-500/30 transition-colors flex flex-col gap-1 group"
                   >
                     <span className="font-bold text-slate-200 group-hover:text-white">{master.name}</span>
                     <span className="text-[10px] text-slate-500">{master.birthDate}</span>
                   </button>
                 ))}
               </div>
            </div>
          </div>
        ) : (
          /* Dashboard Results */
          <div className="animate-fade-in-up space-y-8">
            
            {/* Nav Tabs */}
            <div className="flex justify-center mb-8 px-2">
              <div className="inline-flex flex-wrap justify-center glass-panel p-1 rounded-lg gap-1">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`px-4 md:px-6 py-2 rounded-md text-xs md:text-sm font-cinzel transition-all ${activeTab === 'overview' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  <span className="flex items-center gap-2"><Globe className="w-4 h-4"/> Overview</span>
                </button>
                <button 
                  onClick={() => setActiveTab('origins')}
                  className={`px-4 md:px-6 py-2 rounded-md text-xs md:text-sm font-cinzel transition-all ${activeTab === 'origins' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  <span className="flex items-center gap-2"><Star className="w-4 h-4"/> Origins & Records</span>
                </button>
                <button 
                  onClick={() => setActiveTab('karmic')}
                  className={`px-4 md:px-6 py-2 rounded-md text-xs md:text-sm font-cinzel transition-all ${activeTab === 'karmic' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  <span className="flex items-center gap-2"><BookOpen className="w-4 h-4"/> Karma</span>
                </button>
                <button 
                  onClick={() => setActiveTab('vehicles')}
                  className={`px-4 md:px-6 py-2 rounded-md text-xs md:text-sm font-cinzel transition-all ${activeTab === 'vehicles' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                   <span className="flex items-center gap-2"><Layers className="w-4 h-4"/> Vehicles</span>
                </button>
              </div>
            </div>

            {/* Tab Content */}
            
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <ZodiacComparison result={result!} />
                
                <div className="glass-panel p-6 rounded-lg">
                  <h3 className="text-lg font-cinzel mb-4 text-emerald-300">Esoteric Interpretation</h3>
                    <div className="prose prose-invert prose-sm max-w-none text-slate-300">
                    <p>
                      The comparison between your <strong>Geocentric (Tropical)</strong> chart and your <strong>Sidereal</strong> placement reveals the difference between your conditioned personality and your true cosmic position. 
                    </p>
                    <p>
                      With a {result?.charts['Heliocentric'].sun.sign} Sun in the Heliocentric system, your Soul's intent is filtered purely through the Second Ray of Love-Wisdom, regardless of the personality struggles indicated in the Geocentric chart.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ORIGINS TAB */}
            {activeTab === 'origins' && (
               <AkashicRecords connections={result!.starseedConnections} history={result!.akashicHistory} />
            )}

            {/* KARMIC TAB */}
            {activeTab === 'karmic' && (
              <div className="space-y-6">
                 <KarmicRadar result={result!} />
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <RayBarChart title="Soul Ray Influence (Helio)" data={result!.rayDistribution.sacred} />
                    <RayBarChart title="Personality Conflict (Geo)" data={result!.rayDistribution.nonSacred} />
                    <RayBarChart title="Karmic Accumulation (Draconic)" data={result!.rayDistribution.weighted} />
                 </div>
              </div>
            )}

            {/* VEHICLES TAB */}
            {activeTab === 'vehicles' && (
              <div className="space-y-6">
                <VehicleAnalysis result={result!} />
                <div className="text-center mt-8">
                  <button 
                    onClick={() => setHasCalculated(false)}
                    className="text-sm text-slate-500 hover:text-white underline decoration-slate-600 underline-offset-4"
                  >
                    Start New Calculation
                  </button>
                </div>
              </div>
            )}

          </div>
        )}
      </div>
    </div>
  );
}