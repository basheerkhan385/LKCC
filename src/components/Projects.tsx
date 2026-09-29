import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Layers, X, ExternalLink, ArrowRight, ArrowLeft, Info } from 'lucide-react';

interface ProjectItem {
  id: string;
  name: string;
  category: 'residential' | 'commercial' | 'renovation' | 'civil';
  categoryLabel: string;
  location: string;
  description: string;
  scope: string;
  status: string;
  image: string;
}

export const Projects: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const categories = [
    { id: 'all', label: t.projects.all },
    { id: 'residential', label: t.projects.residential },
    { id: 'commercial', label: t.projects.commercial },
    { id: 'renovation', label: t.projects.renovation },
    { id: 'civil', label: t.projects.civil },
  ];

  const filteredProjects = activeCategory === 'all'
    ? t.projects.items
    : t.projects.items.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-amber-500 font-bold tracking-wider text-xs uppercase mb-3">
            {t.projects.sectionTag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.projects.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Category Filters (Clean Segmented Bar) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-slate-900 border border-slate-800 rounded-xl w-fit">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 shadow-xl"
            >
              <div>
                {/* Image Container with Fallback */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  {/* Clean unboxed category marker (Zero-pill discipline) */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="font-semibold text-amber-400 bg-slate-950/80 backdrop-blur-md px-2.5 py-1 rounded">
                      {project.categoryLabel}
                    </span>
                    <span className="text-[11px] font-mono text-slate-300 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded">
                      DEMO
                    </span>
                  </div>

                  {/* Project Location Marker */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-1.5 text-xs text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Demo Notice Banner */}
                  <div className="text-[11px] font-mono text-amber-500/90 mb-2 flex items-center gap-1">
                    <Info className="w-3 h-3 shrink-0" />
                    <span className="truncate">{t.projects.demoNotice}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4 font-mono sm:font-sans">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project as ProjectItem)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>{t.projects.viewDetails}</span>
                  <ArrowIcon className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* Header Image */}
              <div className="relative aspect-video max-h-72 w-full overflow-hidden bg-slate-800">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close project modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8">
                <div className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-1">
                  {selectedProject.categoryLabel}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {selectedProject.name}
                </h3>

                <div className="space-y-4 mb-6 text-sm text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="font-semibold text-slate-400 block text-xs uppercase mb-1">
                      {t.projects.modalLocation}:
                    </span>
                    <span className="font-mono text-xs text-amber-300">{selectedProject.location}</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="font-semibold text-slate-400 block text-xs uppercase mb-1">
                      {t.projects.modalScope}:
                    </span>
                    <span>{selectedProject.scope}</span>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="font-semibold text-slate-400 block text-xs uppercase mb-1">
                      {t.projects.modalStatus}:
                    </span>
                    <span>{selectedProject.status}</span>
                  </div>

                  <p className="text-slate-300 leading-relaxed pt-2">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 text-xs font-bold rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors cursor-pointer"
                  >
                    {t.projects.closeModal}
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
