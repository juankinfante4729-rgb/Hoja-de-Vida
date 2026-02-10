import React from 'react';
import { SKILLS } from '../constants';
import { Icon } from './Icon';

export const SkillsSection: React.FC = () => {
  return (
    // ATS OPTIMIZATION: print:bg-white print:text-black ensures OCR reads it perfectly without background noise.
    <div className="bg-slate-850 text-white p-6 rounded-xl shadow-lg print:shadow-none print:bg-white print:text-slate-900 print:border print:border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-white/10 rounded-lg print:bg-slate-100 print:text-slate-800">
          {/* Changed CPU to Brain to highlight the AI focus */}
          <Icon name="Brain" size={24} className="text-blue-400 print:text-slate-700" />
        </div>
        <h2 className="text-xl font-bold">Competencias & Tecnología</h2>
      </div>

      <div className="space-y-6">
        {SKILLS.map((skillGroup, index) => (
          <div key={index}>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 print:text-slate-600 print:font-bold flex items-center gap-2">
              {index === 0 && <Icon name="Sparkles" size={14} className="text-yellow-400 print:text-yellow-600" />}
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item, i) => (
                <span 
                  key={i} 
                  className={`px-3 py-1.5 transition-colors rounded text-sm font-medium border print:bg-slate-100 print:text-slate-800 print:border-slate-200 ${
                    index === 0 
                      ? 'bg-blue-600/30 border-blue-400/30 text-blue-100 hover:bg-blue-600/50' 
                      : 'bg-white/10 border-white/5 hover:bg-white/20'
                  }`}
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