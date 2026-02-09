import React from 'react';
import { RayId, AnalysisResult } from '../types';
import { RAYS } from '../constants';
import { Disc, User, Heart, Brain, Box } from 'lucide-react';

interface Props {
  result: AnalysisResult;
}

const VehicleCard = ({ label, rayId, icon: Icon }: { label: string, rayId: RayId, icon: any }) => {
  const ray = RAYS[rayId];
  return (
    <div className="flex flex-col items-center p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
      <div className="mb-2 p-2 rounded-full bg-slate-900 border border-slate-700">
        <Icon className="w-5 h-5 text-slate-300" />
      </div>
      <span className="text-xs uppercase tracking-widest text-slate-400 mb-1">{label}</span>
      <div className="w-full h-1.5 rounded-full bg-slate-700 mb-2 overflow-hidden">
        <div className="h-full w-full" style={{ backgroundColor: ray.color }}></div>
      </div>
      <span className="font-bold text-white text-lg">Ray {ray.id}</span>
      <span className="text-[10px] text-center text-slate-400 leading-tight">{ray.name}</span>
    </div>
  );
};

export const VehicleAnalysis: React.FC<Props> = ({ result }) => {
  return (
    <div className="glass-panel p-6 rounded-lg w-full">
      <h3 className="text-xl font-cinzel text-blue-300 mb-6 border-b border-slate-700 pb-2">
        Esoteric Constitution
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <VehicleCard 
          label="Monad" 
          rayId={result.monadicRay} 
          icon={Disc} 
        />
        <VehicleCard 
          label="Soul" 
          rayId={result.soulRay} 
          icon={Heart} 
        />
        <VehicleCard 
          label="Personality" 
          rayId={result.personalityRay} 
          icon={User} 
        />
        <VehicleCard 
          label="Mental" 
          rayId={result.mentalRay} 
          icon={Brain} 
        />
        <VehicleCard 
          label="Astral" 
          rayId={result.astralRay} 
          icon={Disc} 
        />
      </div>

      <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
        <h4 className="text-sm font-bold text-purple-200 mb-2">Akashic Synthesis</h4>
        <p className="text-sm text-slate-300 leading-relaxed">
          The alignment between the <span className="text-white font-semibold">Soul (Ray {result.soulRay})</span> and the <span className="text-white font-semibold">Personality (Ray {result.personalityRay})</span> suggests a lifetime focused on integrating {RAYS[result.soulRay].name} into the vehicle of {RAYS[result.personalityRay].name}. 
          The Heliocentric Earth position opposes your Personality Sun, grounding these high-frequency energies into practical service.
        </p>
      </div>
    </div>
  );
};