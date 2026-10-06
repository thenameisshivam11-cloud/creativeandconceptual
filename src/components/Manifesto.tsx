import React, { useState } from 'react';
import { MANIFESTO_PILLARS, FOUNDER_INFO } from '../data/studioData';
import { ShieldCheck, Flame, Compass, Check, X } from 'lucide-react';

export const Manifesto: React.FC = () => {
  const [comparisonMode, setComparisonMode] = useState<'standard' | 'contrast'>('standard');

  return (
    <section id="philosophy" className="py-24 px-6 max-w-7xl mx-auto relative">
      {/* Section Kicker */}
      <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-amber-400 font-mono mb-4">
        <span>04. Studio Philosophy</span>
        <span aria-hidden="true" className="text-neutral-700">·</span>
        <span className="text-neutral-400">The Anti-Template Doctrine</span>
      </div>

      <div className="max-w-3xl mb-16">
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
          Crafted for those who <br />
          <span className="text-gold-gradient">refuse to blend in.</span>
        </h2>
        <p className="mt-4 text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
          We operate on the conviction that a brand&apos;s digital surface is its most valuable contemporary architecture.
        </p>
      </div>

      {/* Manifesto 3-Pillar Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {MANIFESTO_PILLARS.map((pillar) => (
          <div
            key={pillar.number}
            className="p-8 rounded-2xl glass-panel border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="font-mono text-sm text-amber-400 mb-6">
                Pillar {pillar.number}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm font-serif italic text-amber-200/90 mb-4">
                &ldquo;{pillar.quote}&rdquo;
              </p>
              <p className="text-sm text-neutral-300 leading-relaxed font-light">
                {pillar.body}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
              Guaranteed by Shivam Dwivedi
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Contrast Table: Agency Template vs Creative & Conceptual */}
      <div className="rounded-3xl glass-panel border border-white/10 p-6 sm:p-10 overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-white/10 gap-4">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              The Reality Check
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              How our founder-led boutique model contrasts with bloated agencies.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-neutral-400">Verified Standards</span>
          </div>
        </div>

        <div className="divide-y divide-white/10 mt-2">
          {[
            {
              metric: 'Who Actually Builds Your Work',
              agency: 'Junior interns or outsourced overseas contractors',
              studio: 'Shivam Dwivedi directly (Founder & Principal)',
            },
            {
              metric: 'Underlying Codebase & Assets',
              agency: 'Recycled WordPress or standard Webflow template packs',
              studio: '100% custom Three.js WebGL & tailored typography',
            },
            {
              metric: 'Creative Feedback Velocity',
              agency: 'Account manager delays, multi-week committee reviews',
              studio: 'Direct founder messaging via WhatsApp & private video',
            },
            {
              metric: 'Originality Guarantee',
              agency: 'Non-existent; identical layouts reused across clients',
              studio: '“Nothing ships that looks like a template” rule',
            },
          ].map((row, index) => (
            <div key={index} className="py-5 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-4 text-sm font-semibold text-white">
                {row.metric}
              </div>
              <div className="md:col-span-4 text-xs sm:text-sm text-neutral-400 flex items-start gap-2">
                <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span>{row.agency}</span>
              </div>
              <div className="md:col-span-4 text-xs sm:text-sm text-amber-300 font-medium flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{row.studio}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
