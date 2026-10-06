import React, { useState } from 'react';
import { ArrowUpRight, Eye, X, Check, Sparkles, ExternalLink } from 'lucide-react';
import { PROJECTS, Project } from '../data/studioData';

export const Portfolio: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterOptions = [
    { label: 'All Works', value: 'all' },
    { label: 'Brand Identity', value: 'brand' },
    { label: 'Digital & 3D', value: 'digital' },
    { label: 'Motion', value: 'motion' },
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'brand') return proj.category.toLowerCase().includes('brand');
    if (selectedFilter === 'digital') return proj.category.toLowerCase().includes('web') || proj.category.toLowerCase().includes('digital');
    if (selectedFilter === 'motion') return proj.category.toLowerCase().includes('motion');
    return true;
  });

  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto relative">
      {/* Editorial Section Kicker */}
      <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-amber-400 font-mono mb-4">
        <span>03. Selected Case Studies</span>
        <span aria-hidden="true" className="text-neutral-700">·</span>
        <span className="text-neutral-400">Archive 2023–2025</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Original Works, <br />
            <span className="text-gold-gradient">Zero Repetition.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-lg">
            Every release is an architected artifact. Click any study to inspect full creative direction, metrics, and deliverable specs.
          </p>
        </div>

        {/* Interactive Filter Control */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-900/80 rounded-xl border border-white/10 overflow-x-auto">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setSelectedFilter(opt.value)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                selectedFilter === opt.value
                  ? 'bg-amber-400 text-neutral-950 font-semibold shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid: 2x2 Bento Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveProject(project)}
            className="group rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-amber-400/40 transition-all duration-500 cursor-pointer flex flex-col justify-between"
          >
            {/* Visual Media Container */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Top Meta Badges (Unboxed metadata) */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-neutral-300">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
                  <span className="text-amber-400">{project.year}</span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span>{project.category}</span>
                </div>

                <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed font-light">
                  {project.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
                <span className="font-mono text-amber-400">
                  {project.metrics}
                </span>
                <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-white font-medium">
                  Inspect Study
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Lightbox Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel border border-white/15 rounded-3xl p-6 sm:p-10 text-white shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-6 border-b border-white/10 gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-1">
                  <span>{activeProject.year}</span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span>{activeProject.category}</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                  {activeProject.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="p-2 rounded-full border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white transition-colors bg-white/5"
                aria-label="Close case study modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-6 space-y-8">
              {/* Image banner */}
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] w-full bg-neutral-950">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Grid detail */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-7 space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Case Narrative &amp; Direction
                  </h4>
                  <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-light">
                    {activeProject.fullDescription}
                  </p>
                  <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-400/20 text-xs sm:text-sm text-amber-200 font-serif italic">
                    &ldquo;{activeProject.highlight}&rdquo;
                  </div>
                </div>

                <div className="md:col-span-5 space-y-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Verified Impact
                    </h4>
                    <p className="text-sm font-semibold text-amber-400 font-mono">
                      {activeProject.metrics}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Shipped Deliverables
                    </h4>
                    <div className="space-y-1.5">
                      {activeProject.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-neutral-300">
                          <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Color Discipline
                    </h4>
                    <div className="flex items-center gap-2">
                      {activeProject.palette.map((color) => (
                        <div
                          key={color}
                          className="w-6 h-6 rounded-full border border-white/20 shadow-sm"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action row in modal */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-neutral-400 font-mono">
                  Curated &amp; Directed by Shivam Dwivedi
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setActiveProject(null);
                    const contactEl = document.getElementById('contact');
                    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all"
                >
                  Commission Similar Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
