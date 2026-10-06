import React, { useState } from 'react';
import { Sparkles, Shield, Cpu, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { FOUNDER_INFO } from '../data/studioData';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'discipline' | 'process' | 'guarantee'>('discipline');

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative">
      {/* Editorial Section Kicker */}
      <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-amber-400 font-mono mb-4">
        <span>01. The Studio &amp; Founder</span>
        <span aria-hidden="true" className="text-neutral-700">·</span>
        <span className="text-neutral-400">Direct Craft</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Typography & Philosophy (7 cols) */}
        <div className="lg:col-span-7">
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            We build monuments, <br />
            <span className="text-gold-gradient">not modular commodities.</span>
          </h2>

          <div className="mt-8 space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
            <p>
              Founded by <strong className="font-semibold text-white">Shivam Dwivedi</strong>,{' '}
              <strong className="font-semibold text-white">Creative &amp; Conceptual</strong> was established on a radical standard in an era of boilerplate design systems:
            </p>

            <blockquote className="p-6 rounded-2xl bg-amber-950/20 border-l-2 border-amber-400 text-amber-100 font-serif italic text-xl">
              &ldquo;{FOUNDER_INFO.philosophy}.&rdquo;
              <footer className="mt-3 text-xs not-italic font-mono uppercase tracking-wider text-amber-400">
                — Shivam Dwivedi, Founder &amp; Creative Lead
              </footer>
            </blockquote>

            <p>
              In traditional agencies, clients are sold by senior partners and then quietly passed off to junior production interns. At Creative &amp; Conceptual, there are no account managers, no layers of bureaucracy, and zero off-the-shelf templates.
            </p>

            <p>
              Every brand identity, WebGL shader curve, and interactive frame is authored with surgical intentionality directly with Shivam.
            </p>
          </div>

          {/* Interactive Philosophy Switcher */}
          <div className="mt-10 p-6 rounded-2xl glass-panel border border-white/10">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Studio Standards
              </div>
              <div className="flex items-center gap-1">
                {(['discipline', 'process', 'guarantee'] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 rounded-md text-xs font-medium capitalize transition-all ${
                      activeTab === tab
                        ? 'bg-amber-400 text-neutral-900 font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === 'discipline' && (
              <div className="space-y-3">
                <h4 className="text-white font-display font-semibold text-base">
                  Bespoke Architectural Engineering
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  We program custom WebGL shaders, tailored bezier physics, and bespoke brand typography for each client. No Bootstrap, no generic Webflow themes, no mass-market kits.
                </p>
                <div className="flex items-center gap-2 text-xs text-amber-400 pt-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>100% custom-crafted codebase and proprietary assets.</span>
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="space-y-3">
                <h4 className="text-white font-display font-semibold text-base">
                  Direct Founder-to-Founder Collaboration
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Communication happens directly over private studio channels. Rapid iteration sprints eliminate the 4-week deliberation delays typical of bloated agencies.
                </p>
                <div className="flex items-center gap-2 text-xs text-amber-400 pt-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Direct phone, WhatsApp, and private video review sessions.</span>
                </div>
              </div>
            )}

            {activeTab === 'guarantee' && (
              <div className="space-y-3">
                <h4 className="text-white font-display font-semibold text-base">
                  The Zero-Compromise Guarantee
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  If any deliverable resembles existing public template libraries, we scrap it and rebuild from raw geometry. Originality is our foundational currency.
                </p>
                <div className="flex items-center gap-2 text-xs text-amber-400 pt-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Strict guarantee applied across all 24+ delivered projects.</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Founder Portrait & Verification Card (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl overflow-hidden glass-panel border border-white/10 glow-border group">
            {/* Founder Image */}
            <div className="relative aspect-square w-full overflow-hidden bg-neutral-900">
              <img
                src="/src/assets/images/shivam_founder_portrait_1791263657443.jpg"
                alt="Shivam Dwivedi, Founder of Creative & Conceptual"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-black/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                  Principal &amp; Founder
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  Shivam Dwivedi
                </h3>
                <p className="text-xs text-neutral-300 mt-1 font-light">
                  Creative Director, 3D Spatial Technologist, Brand Architect
                </p>
              </div>
            </div>

            {/* Quick Metrics Bar Inside Founder Card */}
            <div className="p-6 grid grid-cols-2 gap-4 border-t border-white/10 bg-black/40">
              <div>
                <span className="text-xs text-neutral-400 font-mono">Leadership</span>
                <p className="text-sm font-semibold text-white mt-0.5">1-Founder Model</p>
              </div>
              <div>
                <span className="text-xs text-neutral-400 font-mono">Shipped Record</span>
                <p className="text-sm font-semibold text-amber-400 mt-0.5">24 Global Releases</p>
              </div>
              <div>
                <span className="text-xs text-neutral-400 font-mono">Craft Standard</span>
                <p className="text-sm font-semibold text-white mt-0.5">100% Bespoke Code</p>
              </div>
              <div>
                <span className="text-xs text-neutral-400 font-mono">Template Ratio</span>
                <p className="text-sm font-semibold text-purple-400 mt-0.5">0.00% Tolerated</p>
              </div>
            </div>
          </div>

          {/* Quick Direct Founder Connect */}
          <div className="p-6 rounded-2xl glass-panel border border-white/10 flex items-center justify-between">
            <div>
              <div className="text-xs font-mono uppercase text-neutral-400">
                Direct Inquiries
              </div>
              <div className="text-sm font-medium text-white mt-0.5">
                Speak directly with Shivam
              </div>
            </div>
            <a
              href={`mailto:${FOUNDER_INFO.email}`}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-400 border border-amber-400/30 rounded-lg hover:bg-amber-400 hover:text-black transition-all"
            >
              Reach Founder
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
