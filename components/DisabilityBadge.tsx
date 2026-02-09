import React from 'react';
import { PROFILE } from '../constants';
import { Icon } from './Icon';

export const DisabilityBadge: React.FC = () => {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg shadow-sm mb-8 transform transition hover:scale-[1.01] print:bg-white print:border print:border-slate-200 print:border-l-4 print:border-l-blue-600 print:shadow-none">
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-3 rounded-full text-blue-700 flex-shrink-0 print:bg-slate-100 print:text-slate-700">
          <Icon name="Accessibility" size={32} />
        </div>
        <div>
          <h3 className="text-blue-900 font-bold text-lg mb-1 print:text-slate-900">
            Perfil Diverso e Inclusivo
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed print:text-slate-700">
            {PROFILE.disabilityInfo.description}
          </p>
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-blue-200 shadow-sm text-xs font-semibold text-blue-700 print:border-slate-300 print:text-slate-800 print:shadow-none">
            <Icon name="CheckCircle2" size={14} />
            <span>Discapacidad Física {PROFILE.disabilityInfo.percentage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};