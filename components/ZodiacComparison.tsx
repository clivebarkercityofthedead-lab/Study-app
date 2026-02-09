import React from 'react';
import { AnalysisResult, SystemType, RayId } from '../types';
import { RAYS } from '../constants';
import { ArrowRightLeft, Globe, Sun, Zap, Sparkles } from 'lucide-react';

interface Props {
  result: AnalysisResult;
}

const SystemCard = ({ type, icon: Icon, color, data }: { type: SystemType, icon: any, color: string, data: any }) => {
  if (!data) return null;
  const sunSign = data.sun?.sign || data.earth?.sign || "Unknown";
  const ray = RAYS[data.rulerRay as RayId] || RAYS[RayId.One];

  return (
    <div className={`glass-panel p-4 rounded-lg border-t-2 ${color} flex flex-col h-full`}>
      <div className="flex items-center gap-2 mb-3">
        <div className={`p-2 rounded-full bg-slate-900 ${color.replace('border-', 'text-')}`}>
          <Icon className="w-4 h-4" />
        </div>
        <h4 className="font-bold text-sm text-slate-200">{type}</h4>
      </div>
      
      <div className="space-y-3 flex-grow">
        <div>
          <span className="text-xs text-slate-500 uppercase tracking-wide">Primary Focus</span>
          <div className="text-lg font-cinzel text-white">{sunSign}</div>
        </div>
        
        <div>
           <span className="text-xs text-slate-500 uppercase tracking-wide">Ruling Ray</span>
           <div className="flex items-center gap-2">
             <div className="w-3 h-3 rounded-full" style={{ background: ray.color }}></div>
             <span className="text-sm text-slate-300">Ray {ray.id}: {ray.name}</span>
           </div>
        </div>

        <p className="text-xs text-slate-400 italic leading-relaxed border-t border-slate-700/50 pt-2 mt-2">
          {data.interpretation}
        </p>
      </div>
    </div>
  );
};

export const ZodiacComparison: React.FC<Props> = ({ result }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-cinzel text-slate-200 flex items-center gap-2">
        <ArrowRightLeft className="w-5 h-5 text-purple-400" /> Multi-Dimensional Zodiac Analysis
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <SystemCard 
          type={SystemType.Geocentric} 
          data={result.charts[SystemType.Geocentric]} 
          icon={Globe}
          color="border-blue-500"
        />
        <SystemCard 
          type={SystemType.Heliocentric} 
          data={result.charts[SystemType.Heliocentric]} 
          icon={Sun}
          color="border-yellow-500"
        />
        <SystemCard 
          type={SystemType.Draconic} 
          data={result.charts[SystemType.Draconic]} 
          icon={Zap}
          color="border-red-500"
        />
        <SystemCard 
          type={SystemType.Sidereal} 
          data={result.charts[SystemType.Sidereal]} 
          icon={Sparkles}
          color="border-cyan-500"
        />
      </div>
    </div>
  );
};