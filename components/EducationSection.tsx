import React from 'react';
import { EDUCATION } from '../constants';
import { Icon } from './Icon';

export const EducationSection: React.FC = () => {
  return (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-white text-slate-800 rounded-lg shadow-sm border border-slate-100">
          <Icon name="GraduationCap" size={24} />
        </div>
        <h2 className="text-xl font-bold text-slate-800">Formación Académica</h2>
      </div>

      <div className="space-y-6">
        {EDUCATION.map((edu) => (
          <div key={edu.id} className="relative group">
            <h3 className="font-bold text-slate-800 text-base">{edu.degree}</h3>
            <div className="text-blue-600 font-medium text-sm mb-1">{edu.institution}</div>
            <div className="text-xs text-gray-500 mb-2">{edu.year}</div>
            {edu.details && (
              <p className="text-sm text-gray-600 leading-snug">{edu.details}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
