import React from 'react';
import { AkashicRecord, StarseedConnection } from '../types';
import { RAYS } from '../constants';
import { Sparkles, History, Scroll, MapPin, Hourglass } from 'lucide-react';

interface Props {
  connections: StarseedConnection[];
  history: AkashicRecord[];
}

export const AkashicRecords: React.FC<Props> = ({ connections, history }) => {
  return (
    <div className="space-y-8">
      
      {/* Introduction */}
      <div className="glass-panel p-6 rounded-lg border-l-4 border-purple-500">
        <h3 className="text-xl font-cinzel text-purple-200 mb-2 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-400" /> Starseed Origin Records
        </h3>
        <p className="text-sm text-slate-300">
          The Akashic Records reveal the trajectory of your soul through the cosmos. 
          By cross-referencing your Heliocentric Earth position with Fixed Stars, we identify the root races and civilizations your soul has influenced.
        </p>
      </div>

      {/* Grid of Records */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Left Col: Star Connections */}
        <div className="space-y-4">
           <h4 className="font-cinzel text-lg text-slate-200 border-b border-slate-700 pb-2">Cosmic Lineage</h4>
           {connections.map((conn, idx) => (
             <div key={idx} className="bg-slate-900/60 p-5 rounded-lg border border-slate-700 hover:border-blue-500 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h5 className="font-bold text-lg text-blue-200">{conn.starSystem}</h5>
                    <span className="text-xs uppercase tracking-wider text-slate-500">Fixed Star: {conn.fixedStar} ({conn.degree}° {conn.sign})</span>
                  </div>
                  <span className="text-[10px] bg-blue-900/30 text-blue-300 px-2 py-1 rounded border border-blue-900/50">
                    {conn.connectionType} Plane
                  </span>
                </div>
                <p className="text-sm text-slate-400 italic">"{conn.description}"</p>
             </div>
           ))}
        </div>

        {/* Right Col: Past Life History */}
        <div className="space-y-4">
           <h4 className="font-cinzel text-lg text-slate-200 border-b border-slate-700 pb-2">Soul Memory (Past Lives)</h4>
           {history.map((record, idx) => {
             const ray = RAYS[record.rayFocus];
             return (
               <div key={idx} className="bg-slate-900/60 p-5 rounded-lg border border-slate-700 hover:border-amber-500 transition-all relative overflow-hidden">
                  {/* Subtle Background Ray Color */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-white opacity-5 rounded-bl-full pointer-events-none" style={{ backgroundColor: ray.color }}></div>

                  <div className="flex items-center gap-2 mb-3 text-amber-200">
                     <History className="w-4 h-4" />
                     <h5 className="font-bold text-md">{record.era}</h5>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                       <MapPin className="w-3 h-3" /> {record.location}
                    </div>
                    <div className="flex items-center gap-2">
                       <Hourglass className="w-3 h-3" /> {record.role}
                    </div>
                  </div>

                  <div className="bg-slate-950/50 p-3 rounded border border-slate-800">
                    <div className="flex items-center gap-2 mb-1">
                      <Scroll className="w-3 h-3 text-slate-500" />
                      <span className="text-xs font-bold text-slate-300">Karmic Lesson (Ray {ray.id})</span>
                    </div>
                    <p className="text-sm text-slate-300">{record.lesson}</p>
                  </div>
               </div>
             );
           })}
        </div>

      </div>
    </div>
  );
};