import React from 'react';
import { AnalysisResult, RayId, SystemType } from '../types';
import { RAYS } from '../constants';
import { Scroll, AlertCircle, Scale } from 'lucide-react';

interface Props {
  result: AnalysisResult;
}

export const KarmicRadar: React.FC<Props> = ({ result }) => {
  const draconic = result.charts[SystemType.Draconic];
  const karmicRay = RAYS[result.karmicDebtRay];

  // Defensive check if chart data is missing
  if (!draconic) return null;

  return (
    <div className="glass-panel p-6 rounded-lg border border-red-900/30 bg-gradient-to-br from-slate-900 to-red-950/20">
      <h3 className="text-xl font-cinzel text-red-200 mb-6 flex items-center gap-2">
        <Scale className="w-5 h-5" /> Karmic & Draconic Study
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">The Draconic Chart (Soul Memory)</h4>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            Based on the Lunar Nodes, the Draconic chart reveals the unconscious emotional patterns and the "Soul Contract" agreed upon before incarnation.
          </p>
          
          <div className="bg-slate-900/50 p-4 rounded border border-slate-700">
            <div className="flex justify-between items-center mb-2">
              <span className="text-red-300 font-cinzel">Draconic Sun</span>
              <span className="text-white font-bold">{draconic.sun?.sign || 'N/A'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-red-300 font-cinzel">Draconic Ascendant</span>
              <span className="text-white font-bold">{draconic.ascendant?.sign || 'N/A'}</span>
            </div>
          </div>
        </div>

        <div>
           <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Karmic Ray Influence</h4>
           <div className="flex items-start gap-4">
             <div className="p-3 bg-red-500/10 rounded-full border border-red-500/20">
                <AlertCircle className="w-6 h-6 text-red-400" />
             </div>
             <div>
               <h5 className="font-bold text-white text-lg">Ray {karmicRay.id} Karma</h5>
               <p className="text-xs text-red-300 mb-2">{karmicRay.name}</p>
               <p className="text-sm text-slate-300 italic">
                 "Your soul is working to balance the energy of {karmicRay.name}. 
                 This manifests as a need to master {karmicRay.quality.toLowerCase()} through 
                 emotional discipline."
               </p>
             </div>
           </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/5">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Scroll className="w-4 h-4" />
          <span>Alice Bailey Note: The Draconic layer filters the Light of the Soul through the veil of past-life matter.</span>
        </div>
      </div>
    </div>
  );
};