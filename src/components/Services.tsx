import React, { useState } from 'react';
import { ArrowUpRight, Check, ChevronDown, ChevronUp, Layers, Palette, Globe, Film, Package, Sparkles } from 'lucide-react';
import { SERVICES, Service } from '../data/studioData';

interface ServicesProps {
  onSelectServiceForInquiry?: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const [expandedId, setExpandedId] = useState<string | null>('web-design-dev');

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'brand-identity':
        return <Palette className="w-5 h-5 text-amber-400" />;
      case 'web-design-dev':
        return <Globe className="w-5 h-5 text-purple-400" />;
      case 'motion-animation':
        return <Film className="w-5 h-5 text-sky-400" />;
      case 'art-direction':
        return <Sparkles className="w-5 h-5 text-pink-400" />;
      case 'packaging-print':
        return <Package className="w-5 h-5 text-yellow-400" />;
      default:
        return <Layers className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto relative">
      {/* Section Kicker */}
      <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-amber-400 font-mono mb-4">
        <span>02. Disciplines &amp; Capabilities</span>
        <span aria-hidden="true" className="text-neutral-700">·</span>
        <span className="text-neutral-400">What We Do</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            High-Touch Disciplines, <br />
            <span className="text-gold-gradient">Zero Shortcuts.</span>
          </h2>
        </div>
        <p className="text-neutral-400 max-w-md text-sm sm:text-base">
          From raw identity geometry to real-time 3D web environments and physical print masterpieces, explore our five core specializations.
        </p>
      </div>

      {/* Services Stack List */}
      <div className="space-y-4">
        {SERVICES.map((service) => {
          const isExpanded = expandedId === service.id;

          return (
            <div
              key={service.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isExpanded
                  ? 'glass-panel border-amber-400/40 bg-neutral-900/80 shadow-[0_10px_35px_rgba(0,0,0,0.5)]'
                  : 'glass-panel border-white/10 hover:border-white/20 bg-neutral-950/40'
              }`}
            >
              {/* Service Header Row */}
              <button
                type="button"
                onClick={() => setExpandedId(isExpanded ? null : service.id)}
                className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-sm text-neutral-500 font-medium">
                    {service.number}
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 hidden sm:flex">
                      {getServiceIcon(service.id)}
                    </div>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 mt-1 line-clamp-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-wider text-neutral-400">
                    {isExpanded ? 'Collapse' : 'Expand Details'}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors bg-white/5">
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </div>
              </button>

              {/* Expanded Detail Tray */}
              {isExpanded && (
                <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 animate-fadeIn">
                  <div className="md:col-span-6 space-y-4">
                    <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2">
                      <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                        Core Tech &amp; Software
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs text-neutral-300 font-mono">
                        {service.techOrTools.map((tool, idx) => (
                          <span key={tool} className="flex items-center gap-1.5">
                            <span className="text-amber-400">#</span>
                            <span>{tool}</span>
                            {idx < service.techOrTools.length - 1 && (
                              <span aria-hidden="true" className="text-neutral-600">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-6 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                        Included Deliverables
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.deliverables.map((item) => (
                          <div key={item} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200">
                            <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs text-neutral-400">
                        Commissioning available for Q2/Q3
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          if (onSelectServiceForInquiry) {
                            onSelectServiceForInquiry(service.title);
                          }
                          const contactEl = document.getElementById('contact');
                          if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all"
                      >
                        <span>Inquire This Discipline</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
