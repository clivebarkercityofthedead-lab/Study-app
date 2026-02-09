import React from 'react';
import { StarseedConnection as IStarseedConnection } from '../types';
import { Sparkles, Anchor, Brain, Zap } from 'lucide-react';

interface Props {
  connections: IStarseedConnection[];
}

export const StarseedConnections: React.FC<Props> = ({ connections }) => {
  
  const getIcon = (type: string) => {
    switch(type) {
      case 'Spiritual': return <Sparkles className="w-4 h-4 text-purple-400" />;
      case 'Physical': return <Anchor className="w-4 h-4 text-red-400" />;
      case 'Mental': return <Brain className="w-4 h-4 text-yellow-400" />;
      case 'Astral': return <Zap className="w-4 h-4 text-blue-400" />;
      default: return <Sparkles className="w-4 h-4 text-white" />;
    }
  };

  return (
    <div className="glass-panel p-6 rounded-lg w-full">
      <h3 className="text-xl font-cinzel text-purple-300 mb-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5" /> Starseed Origins & Fixed Stars
      </h3>
      
      <div className="grid grid-cols-1 gap-4">
        {connections.map((conn, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative p-4 bg-slate-900 rounded-lg border border-slate-700 hover:border-slate-500 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-lg text-slate-100">{conn.starSystem} <span className="text-xs font-normal text-slate-400">({conn.fixedStar})</span></h4>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">{conn.degree}° {conn.sign}</p>
                </div>
                <div className="flex flex-col items-end">
                   <div className="flex items-center gap-1 text-xs font-mono bg-slate-800 px-2 py-1 rounded border border-slate-700">
                     {getIcon(conn.connectionType)}
                     <span>{conn.connectionType} Body</span>
                   </div>
                </div>
              </div>
              <p className="text-sm text-slate-300 italic">
                "{conn.description}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};