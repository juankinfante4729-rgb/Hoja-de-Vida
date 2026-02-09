import React from 'react';
import { SKILLS } from '../constants';
import { Icon } from './Icon';

export const SkillsSection: React.FC = () => {
  return (
    // ATS OPTIMIZATION: print:bg-white print:text-black ensures OCR reads it perfectly without background noise.
    <div className="bg-slate-850 text-white p-6 rounded-xl shadow-lg print:shadow-none print:bg-white print:text-slate-900 print:border print:border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-white/10 rounded-lg print:bg-slate-100 print:text-slate-800">
          <Icon name="Cpu" size={24} className="text-blue-400 print:text-slate-700" />
        </div>
        <h2 className="text-xl font-bold">Competencias Clave</h2>
      </div>

      <div className="space-y-6">
        {SKILLS.map((skillGroup, index) => (
          <div key={index}>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 print:text-slate-600 print:font-bold">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 transition-colors rounded text-sm font-medium border border-white/5 print:bg-slate-100 print:text-slate-800 print:border-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
