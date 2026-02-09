import React from 'react';
import { LANGUAGES } from '../constants';
import { Icon } from './Icon';

export const LanguagesSection: React.FC = () => {
  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 print:bg-white print:border-slate-200">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 bg-white text-blue-600 rounded-lg shadow-sm border border-slate-100 print:text-slate-700 print:border-slate-200">
          <Icon name="Globe" size={24} />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Idiomas</h2>
      </div>

      <div className="space-y-4">
        {LANGUAGES.map((lang, index) => (
          <div key={index}>
            <div className="flex justify-between items-end mb-1">
              <span className="font-bold text-slate-700">{lang.language}</span>
              <span className="text-xs text-blue-600 font-semibold">{lang.level}</span>
            </div>
            {/* Visual Bar */}
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full print:bg-slate-800" 
                style={{ width: `${lang.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};