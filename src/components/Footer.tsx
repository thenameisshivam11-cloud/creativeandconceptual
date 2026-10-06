import React from 'react';
import { ArrowUp, Mail, Phone, MessageSquare } from 'lucide-react';
import { FOUNDER_INFO } from '../data/studioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#070709] text-neutral-400 py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-12">
        {/* Upper Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Doctrine */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="font-display text-2xl font-bold tracking-tight text-white hover:text-amber-400 transition-colors"
            >
              Creative &amp; Conceptual
            </a>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed font-light">
              Founder-led design studio engineered by Shivam Dwivedi. Bespoke brand architecture, real-time WebGL spatial experiences, and high-fidelity motion.
            </p>
            <div className="text-xs font-serif italic text-amber-300/80">
              &ldquo;{FOUNDER_INFO.philosophy}&rdquo;
            </div>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-300">
              Direct Contact
            </div>
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${FOUNDER_INFO.email}`}
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{FOUNDER_INFO.email}</span>
              </a>
              <a
                href={`tel:${FOUNDER_INFO.phone}`}
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{FOUNDER_INFO.phone}</span>
              </a>
              <a
                href={FOUNDER_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageSquare className="w-4 h-4 flex-shrink-0" />
                <span>WhatsApp Direct ({FOUNDER_INFO.phone})</span>
              </a>
            </div>
          </div>

          {/* Fast Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-300">
              Index
            </div>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  01. About &amp; Founder
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  02. What We Do (Services)
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  03. Selected Work
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-white transition-colors">
                  04. Studio Philosophy
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  05. Commission Direct
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Creative &amp; Conceptual. Founded &amp; Directed by Shivam Dwivedi. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-400 hover:text-amber-400 transition-colors py-1 px-3 rounded-lg border border-white/5 hover:border-white/20"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
