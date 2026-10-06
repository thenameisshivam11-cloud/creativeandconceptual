import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Copy, Check, Send, Sparkles, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FOUNDER_INFO, SERVICES } from '../data/studioData';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedService ? [preselectedService] : ['Web Design & Development']
  );
  const [budget, setBudget] = useState('$10k – $25k');
  const [timeline, setTimeline] = useState('Within 4-6 weeks');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== title));
      }
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Trigger festive luxury gold & purple confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#d97706', '#a855f7', '#ffffff'],
        });
      } catch {
        // Fallback gracefully
      }
    }, 600);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto relative">
      {/* Editorial Section Kicker */}
      <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-amber-400 font-mono mb-4">
        <span>05. Commission Direct</span>
        <span aria-hidden="true" className="text-neutral-700">·</span>
        <span className="text-neutral-400">Direct Contact with Shivam Dwivedi</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Founder Contact Dossier (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Let&apos;s build your <br />
              <span className="text-gold-gradient">next benchmark.</span>
            </h2>
            <p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed font-light">
              Every commission begins with an open conversation with studio founder Shivam Dwivedi. We review briefs within 24 hours.
            </p>
          </div>

          {/* Direct Channels Card */}
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 space-y-6">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 border-b border-white/10 pb-3">
              Direct Founder Coordinates
            </div>

            {/* Email Channel */}
            <div className="space-y-1.5">
              <span className="text-xs text-neutral-400 font-mono">Official Studio Email</span>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <a
                  href={`mailto:${FOUNDER_INFO.email}`}
                  className="flex items-center gap-2.5 text-sm font-medium text-white hover:text-amber-400 transition-colors truncate"
                >
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span className="truncate">{FOUNDER_INFO.email}</span>
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(FOUNDER_INFO.email, 'email')}
                  className="p-1.5 text-neutral-400 hover:text-white transition-colors rounded-md bg-white/5 hover:bg-white/10 flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone & WhatsApp Channel */}
            <div className="space-y-1.5">
              <span className="text-xs text-neutral-400 font-mono">Founder Direct Line</span>
              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <a
                  href={`tel:${FOUNDER_INFO.phone}`}
                  className="flex items-center gap-2.5 text-sm font-medium text-white hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>{FOUNDER_INFO.phone}</span>
                </a>
                <div className="flex items-center gap-1">
                  <a
                    href={FOUNDER_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-emerald-400 hover:text-emerald-300 transition-colors rounded-md bg-emerald-950/40 hover:bg-emerald-900/50 text-xs font-mono flex items-center gap-1"
                    title="Direct WhatsApp"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(FOUNDER_INFO.phone, 'phone')}
                    className="p-1.5 text-neutral-400 hover:text-white transition-colors rounded-md bg-white/5 hover:bg-white/10"
                    title="Copy phone to clipboard"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Founder Verification Signature Box */}
            <div className="p-4 rounded-xl bg-neutral-900/90 border border-white/10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-400/30 flex-shrink-0 bg-neutral-800">
                <img
                  src="/src/assets/images/shivam_founder_portrait_1791263657443.jpg"
                  alt="Shivam Dwivedi"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-xs">
                <div className="font-semibold text-white">Shivam Dwivedi</div>
                <div className="text-neutral-400 text-[11px]">Direct response guaranteed within 24h</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Project Inquiry Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl glass-panel border border-white/15 p-8 sm:p-10 shadow-2xl relative">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/30 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Inquiry Dispatched to Shivam
                </h3>
                <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed font-light">
                  Thank you, <strong className="text-white">{name}</strong>. Shivam Dwivedi will personally review your brief and get back to <span className="text-amber-400 font-mono">{email}</span> within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 rounded-xl border border-white/20 text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white hover:border-amber-400 transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    Commission Request
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                    Please provide essential context about your project goals.
                  </p>
                </div>

                {/* Service Selection Pills */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2.5">
                    Disciplines Required
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map((s) => {
                      const isSelected = selectedServices.includes(s.title);
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => toggleService(s.title)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-amber-400 text-neutral-950 font-semibold'
                              : 'bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/10'
                          }`}
                        >
                          {s.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Your Name / Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Elena Vance / Apex Labs"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors placeholder:text-neutral-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors placeholder:text-neutral-600"
                    />
                  </div>
                </div>

                {/* Budget & Timeline Selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Estimated Investment
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                    >
                      <option value="$5k – $10k">$5,000 – $10,000</option>
                      <option value="$10k – $25k">$10,000 – $25,000</option>
                      <option value="$25k – $50k">$25,000 – $50,000</option>
                      <option value="$50k+">$50,000+ (Comprehensive Brand &amp; 3D)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Target Launch Window
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                    >
                      <option value="Urgent (2-4 weeks)">Urgent (2–4 weeks)</option>
                      <option value="Standard (4-8 weeks)">Standard (4–8 weeks)</option>
                      <option value="Q3/Q4 2026">Later this year / Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Project Message / Brief */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                    Project Vision &amp; Deliverables
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell Shivam about your brand vision, target timeline, or what makes your project singular..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors placeholder:text-neutral-600 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl text-sm font-semibold uppercase tracking-wider text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(245,158,11,0.3)] active:scale-[0.99] cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Routing to Shivam...
                    </span>
                  ) : (
                    <>
                      <span>Transmit Inquiry to Shivam Dwivedi</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="text-center text-xs text-neutral-500 font-mono">
                  Zero Spam · 100% Confidential · Strict Anti-Template Guarantee
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
