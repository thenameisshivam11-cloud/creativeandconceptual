import React, { useEffect } from 'react';
import { X, Mail, Phone, MessageSquare, Check, Sparkles } from 'lucide-react';
import { FOUNDER_INFO } from '../data/studioData';

interface FounderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const FounderModal: React.FC<FounderModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-panel border border-white/20 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-amber-400/40 bg-neutral-900 flex-shrink-0">
              <img
                src="/src/assets/images/shivam_founder_portrait_1791263657443.jpg"
                alt="Shivam Dwivedi"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                Founder Profile
              </span>
              <h2 className="font-display text-2xl font-bold text-white">
                Shivam Dwivedi
              </h2>
              <p className="text-xs text-neutral-400">
                Principal Creative Director &amp; Technologist
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white transition-colors bg-white/5"
            aria-label="Close founder modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Narrative Content */}
        <div className="mt-6 space-y-6 text-sm text-neutral-300 leading-relaxed font-light">
          <p>
            {FOUNDER_INFO.bio}
          </p>

          <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-400/20 text-amber-100 font-serif italic text-base">
            &ldquo;My rule is non-negotiable: {FOUNDER_INFO.philosophy}. If a brand looks like everyone else, it has surrendered its greatest strategic advantage.&rdquo;
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Direct Founder Commitment
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-200">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Single Point of Contact Throughout</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Zero Account Manager Middle-Layers</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>100% Bespoke Code &amp; Visuals</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Sub-24h Response SLA</span>
              </div>
            </div>
          </div>

          {/* Direct channels */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono text-neutral-400">
              Phone: <span className="text-white">{FOUNDER_INFO.phone}</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`mailto:${FOUNDER_INFO.email}`}
                className="flex-1 sm:flex-initial px-4 py-2 text-center text-xs font-mono uppercase tracking-wider text-white border border-white/20 rounded-xl hover:border-amber-400 transition-colors"
              >
                Send Direct Email
              </a>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="flex-1 sm:flex-initial px-5 py-2 text-center text-xs font-semibold uppercase tracking-wider text-neutral-900 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all"
              >
                Start Commission
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
