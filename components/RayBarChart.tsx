import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';
import { RayScore } from '../types';
import { RAYS } from '../constants';

interface RayBarChartProps {
  data: RayScore[];
  title: string;
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as RayScore;
    const rayInfo = RAYS[data.rayId];
    return (
      <div className="bg-slate-800 border border-slate-600 p-2 rounded shadow-lg text-xs">
        <p className="font-bold text-white">{`Ray ${data.rayId}: ${rayInfo.name}`}</p>
        <p className="text-slate-300">{`Strength: ${data.score}`}</p>
      </div>
    );
  }
  return null;
};

export const RayBarChart: React.FC<RayBarChartProps> = ({ data, title }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2 glass-panel rounded-lg">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-2">{title}</h3>
      <div className="w-full h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis type="number" hide domain={[0, 100]} />
            <YAxis 
              type="category" 
              dataKey="rayId" 
              tick={{ fill: '#94a3b8', fontSize: 12 }} 
              width={30}
              tickFormatter={(val) => `R${val}`}
            />
            <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
            <Bar dataKey="score" radius={[0, 4, 4, 0]} barSize={15}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={RAYS[entry.rayId].color} stroke="#000" strokeOpacity={0.2} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};