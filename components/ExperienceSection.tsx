import React from 'react';
import { EXPERIENCE } from '../constants';
import { Icon } from './Icon';

export const ExperienceSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-slate-800 text-white rounded-lg">
          <Icon name="Briefcase" size={24} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">Experiencia Profesional</h2>
      </div>

      <div className="border-l-2 border-slate-200 ml-3 md:ml-4 space-y-10">
        {EXPERIENCE.map((job) => (
          <div key={job.id} className="relative pl-8 md:pl-10">
            {/* Timeline dot */}
            <div className={`absolute -left-[9px] top-1 w-5 h-5 rounded-full border-4 border-white ${job.isCurrent ? 'bg-blue-600' : 'bg-slate-300'}`}></div>
            
            <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 gap-2">
              <h3 className="text-xl font-bold text-slate-800 leading-tight">{job.role}</h3>
              {/* Fixed width for date badges to ensure consistency regardless of content length */}
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full min-w-[160px] text-center whitespace-nowrap border border-blue-100 flex-shrink-0 shadow-sm">
                {job.period}
              </span>
            </div>
            
            <div className="text-lg font-medium text-slate-600 mb-3">{job.company}</div>
            
            <p className="text-gray-600 mb-4 leading-relaxed italic">
              {job.description}
            </p>

            {job.achievements.length > 0 && (
              <ul className="space-y-2">
                {job.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};