import React from 'react';
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { FOUNDER_INFO } from '../data/studioData';

interface HeroProps {
  onExploreWork: () => void;
  onGetInTouch: () => void;
  onOpenFounderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onGetInTouch,
  onOpenFounderModal,
}) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-6 max-w-7xl mx-auto">
      {/* Upper Meta Kicker */}
      <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase text-neutral-400 font-mono">
        <span className="flex items-center gap-1.5 text-amber-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse inline-block" />
          Founder-Led Design Studio
        </span>
        <span aria-hidden="true" className="text-neutral-600">·</span>
        <span>Based in India, Commissioning Globally</span>
        <span aria-hidden="true" className="text-neutral-600">·</span>
        <span className="text-neutral-300">Curated by Shivam Dwivedi</span>
      </div>

      {/* Main Impact Centerpiece */}
      <div className="my-auto py-12 md:py-16 max-w-4xl">
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.06] text-white">
          Immersive Brands <br />
          <span className="text-gold-gradient">&amp; Digital Experiences</span>
        </h1>

        <p className="mt-7 text-lg sm:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed">
          Crafting bespoke visual identities, scroll-driven WebGL universes, and visceral motion systems for ambitious founders and market leaders.
        </p>

        {/* Studio Doctrine Line */}
        <div className="mt-5 flex items-center gap-3 text-sm text-neutral-400">
          <div className="w-6 h-[1px] bg-amber-400/60" />
          <span className="italic font-serif text-neutral-200">
            &ldquo;{FOUNDER_INFO.philosophy}&rdquo;
          </span>
        </div>

        {/* Primary CTA Row */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={onExploreWork}
            className="px-7 py-3.5 text-sm font-semibold tracking-wide uppercase text-neutral-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-[0_0_30px_rgba(245,158,11,0.25)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)] flex items-center gap-2 active:scale-[0.98]"
          >
            <span>Explore Work</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onGetInTouch}
            className="px-7 py-3.5 text-sm font-medium tracking-wide uppercase text-neutral-200 hover:text-white glass-panel hover:bg-white/10 rounded-xl transition-all border border-white/10 flex items-center gap-2 active:scale-[0.98]"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4 text-amber-400" />
          </button>

          {/* Interactive Founder Credit Badge */}
          <button
            type="button"
            onClick={onOpenFounderModal}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl glass-panel text-left hover:border-amber-400/40 transition-colors group cursor-pointer ml-auto sm:ml-0"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-amber-400/30 flex-shrink-0 bg-neutral-800">
              <img
                src="/src/assets/images/shivam_founder_portrait_1791263657443.jpg"
                alt="Shivam Dwivedi"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col text-xs leading-tight">
              <span className="font-semibold text-white group-hover:text-amber-400 transition-colors">
                Shivam Dwivedi
              </span>
              <span className="text-neutral-400">Founder &amp; Creative Lead</span>
            </div>
          </button>
        </div>
      </div>

      {/* Hero Bottom Bar / Stats Glance */}
      <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        <div>
          <div className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">
            1
          </div>
          <div className="text-xs text-neutral-400 font-mono mt-0.5">
            Founder-Led Studio
          </div>
        </div>

        <div>
          <div className="text-2xl sm:text-3xl font-display font-bold text-amber-400 tabular-nums">
            24+
          </div>
          <div className="text-xs text-neutral-400 font-mono mt-0.5">
            Projects Shipped
          </div>
        </div>

        <div>
          <div className="text-2xl sm:text-3xl font-display font-bold text-white tabular-nums">
            100%
          </div>
          <div className="text-xs text-neutral-400 font-mono mt-0.5">
            Original Craft
          </div>
        </div>

        <div>
          <div className="text-2xl sm:text-3xl font-display font-bold text-purple-400 tabular-nums">
            60 FPS
          </div>
          <div className="text-xs text-neutral-400 font-mono mt-0.5">
            Interactive WebGL
          </div>
        </div>
      </div>
    </section>
  );
};
