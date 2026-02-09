import React from 'react';
import { PROFILE } from '../constants';
import { Icon } from './Icon';

export const Header: React.FC = () => {
  // Helper to display clean URL (removes https://)
  const displayUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '');

  return (
    <header className="bg-slate-850 text-white p-8 md:p-12 rounded-t-lg shadow-lg relative overflow-hidden print:bg-white print:text-slate-900 print:shadow-none print:p-0 print:pb-6 print:border-b-2 print:border-slate-200">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 print:hidden"></div>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 relative z-10">
        
        {/* Static Image Container */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/20 shadow-xl overflow-hidden flex-shrink-0 bg-gray-200 print:border-slate-200 print:shadow-none print:w-32 print:h-32">
           <img 
            src={PROFILE.image} 
            alt={PROFILE.name}
            className="w-full h-full object-cover"
           />
        </div>

        <div className="flex-1 text-center md:text-left space-y-3 w-full">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2 print:text-4xl print:text-slate-900 leading-tight">
              {PROFILE.name}
            </h1>
            {/* ATS TIP: Clear Job Title with keywords */}
            <p className="text-blue-400 font-medium text-lg md:text-xl leading-snug print:text-blue-700 print:font-bold">
              {PROFILE.title}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-y-2 gap-x-4 md:gap-x-6 text-sm text-gray-300 mt-4 print:text-slate-600 print:mt-2">
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={16} className="print:text-slate-500" />
              <span>{PROFILE.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={16} className="print:text-slate-500" />
              <span>{PROFILE.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Mail" size={16} className="print:text-slate-500" />
              <a href={`mailto:${PROFILE.email}`} className="hover:text-white transition-colors text-inherit no-underline print:text-slate-800 break-all sm:break-normal">{PROFILE.email}</a>
            </div>
             <div className="flex items-center gap-2">
              <Icon name="Linkedin" size={16} className="print:text-slate-500" />
              {/* ATS TIP: Display clean URL, link to full URL */}
              <a 
                href={`https://${displayUrl(PROFILE.linkedin)}`} 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-white transition-colors text-inherit no-underline print:text-slate-800 break-all sm:break-normal"
              >
                {displayUrl(PROFILE.linkedin)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};