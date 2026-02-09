import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { Icon } from './Icon';

export const CertificationsSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm print:shadow-none print:border print:border-slate-200">
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 bg-yellow-50 text-yellow-700 rounded-lg shadow-sm border border-yellow-100 print:border-slate-200 print:bg-slate-50 print:text-slate-700">
          <Icon name="ScrollText" size={24} />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Certificaciones</h2>
      </div>

      <div className="space-y-4">
        {CERTIFICATIONS.map((cert) => (
          <div key={cert.id} className="flex flex-col border-b border-slate-50 last:border-0 pb-3 last:pb-0">
            <h3 className="font-bold text-slate-800 text-sm">{cert.name}</h3>
            <div className="flex justify-between items-center mt-1">
              <span className="text-blue-600 font-medium text-xs">{cert.issuer}</span>
              <span className="text-gray-400 text-xs bg-gray-50 px-2 py-0.5 rounded-full">{cert.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};