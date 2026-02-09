import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { DisabilityBadge } from './components/DisabilityBadge';
import { CertificationsSection } from './components/CertificationsSection';
import { LanguagesSection } from './components/LanguagesSection';
import { PROFILE } from './constants';
import { Icon } from './components/Icon';

const App: React.FC = () => {

  // Update document title for better PDF filename when saving
  useEffect(() => {
    // Normalizes name for filename: "CV_Ing_Alex_Rivera_Digitalizacion"
    document.title = `CV_${PROFILE.name.replace(/[^a-zA-Z0-9]/g, '_')}_Digitalizacion`;
  }, []);

  const handlePrint = () => {
    try {
      window.print();
    } catch (error) {
      console.error("Error al intentar imprimir:", error);
      alert("La función de impresión automática no está disponible. Por favor, presiona Ctrl+P (o Cmd+P en Mac) y selecciona 'Guardar como PDF' en el destino de la impresora.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white">
      {/* Print Controls (Hidden when printing) */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 print:hidden">
        <button 
          onClick={handlePrint}
          className="bg-slate-850 text-white p-4 rounded-full shadow-xl hover:bg-slate-700 transition-all flex items-center gap-2 group border border-slate-700"
          title="Guardar como PDF"
        >
          <Icon name="Download" size={24} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap font-medium pl-0 group-hover:pl-2">
            Guardar PDF
          </span>
        </button>
      </div>

      <main className="max-w-5xl mx-auto bg-white rounded-lg shadow-2xl overflow-hidden print:shadow-none print:max-w-none print:rounded-none">
        
        {/* Header Section */}
        <Header />

        {/* ATS BEST PRACTICE: Use a standard flow in print (Top to Bottom). 
            We force display:block in print to stack columns sequentially instead of side-by-side. 
        */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 md:p-12 print:p-8 print:pt-4 print:gap-6 print:block">
          
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-2 space-y-10 order-2 lg:order-1 print:mb-6">
            
            {/* Professional Summary */}
            <section className="print:break-inside-avoid print:mb-6">
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2 print:text-slate-600 print:text-base print:border-b print:border-gray-300 print:pb-1">
                <Icon name="Award" size={16} />
                Perfil Profesional
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg text-justify print:text-base print:text-slate-800">
                {PROFILE.summary}
              </p>
            </section>

            {/* Disability Highlight Section */}
            <div className="print:break-inside-avoid print:mb-6">
              <DisabilityBadge />
            </div>

            {/* Experience Section */}
            <div className="print:break-inside-avoid print:mb-6">
              <ExperienceSection />
            </div>
          </div>

          {/* Sidebar (Right Column) - In print, this will stack BELOW the main content */}
          <div className="lg:col-span-1 space-y-8 order-1 lg:order-2 print:space-y-6">
            
            {/* Skills */}
            <div className="print:break-inside-avoid">
              <SkillsSection />
            </div>

            {/* Education */}
            <div className="print:break-inside-avoid">
              <EducationSection />
            </div>

            {/* Certifications - Added here */}
            <div className="print:break-inside-avoid">
              <CertificationsSection />
            </div>

            {/* Languages - Added here */}
            <div className="print:break-inside-avoid">
              <LanguagesSection />
            </div>

            {/* Additional info / Call to action for recruiters (Hidden in Print) */}
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 text-center print:hidden">
              <p className="text-sm text-blue-800 font-medium mb-2">
                ¿Interesado en mi perfil?
              </p>
              <a 
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm w-full justify-center"
              >
                <Icon name="Mail" size={16} />
                Contactar Ahora
              </a>
            </div>

          </div>
        </div>

        {/* Footer for print */}
        <div className="bg-slate-50 p-6 text-center text-gray-400 text-sm border-t border-slate-100 print:block hidden print:bg-white print:border-none print:pt-4">
          <p>&copy; {new Date().getFullYear()} {PROFILE.name} - Documento generado digitalmente.</p>
        </div>
      </main>

      {/* Global Print Styles to ensure graphics/backgrounds print correctly */}
      <style>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          @page {
            margin: 1.5cm; /* Standard margins */
            size: auto;
          }
          /* Ensure headers are clearly defined for ATS parsing */
          h1, h2, h3 {
            page-break-after: avoid;
          }
          /* Fix for link colors in print */
          a {
            text-decoration: none !important;
            color: #1e293b !important; /* Dark slate */
          }
        }
      `}</style>
    </div>
  );
};

export default App;