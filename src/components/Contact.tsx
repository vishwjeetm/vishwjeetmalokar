import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Mail, Send, Copy, Check, AlertCircle, ShieldCheck, MapPin, ExternalLink, MessageSquare, Loader2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon, FiverrIcon, FreelancerIcon } from './Icons';
import { useTheme } from '../context/ThemeContext';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const { styles } = useTheme();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(preselectedService || 'Full-Stack Web Development');
  const [budget, setBudget] = useState('Flexible / Discuss Scope');
  const [message, setMessage] = useState('');
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [copiedDraft, setCopiedDraft] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Update service if preselectedService prop changes
  React.useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const serviceOptions = [
    'Full-Stack Web Development',
    'AI-Powered Applications & Integrations',
    'GEO & AI Search Visibility Auditing',
    'Business Applications & ERP Workflows',
    'API & Database Development',
    'Deployment & Development Workflow Support',
    'General Software Consultation / Other'
  ];

  const budgetOptions = [
    'Flexible / Discuss Scope',
    'Under $1,000 (Small Task / Audit / MVP Feature)',
    '$1,000 - $3,000 (Full-Stack Module / Workflow Automation)',
    '$3,000 - $8,000 (Complete Web Application / Custom System)',
    '$8,000+ (Comprehensive Platform / Ongoing Retainer)'
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Please provide your name or organization.';
    if (!email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!message.trim() || message.length < 20) {
      errs.message = 'Please provide at least 20 characters describing your project or goals.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      // Direct submission to vmgvyt@gmail.com using FormSubmit AJAX endpoint
      const response = await fetch('https://formsubmit.co/ajax/vmgvyt@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          service: service,
          budget: budget,
          message: message,
          _subject: `New Project Inquiry: ${service} — from ${name}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Server returned an error');
      }
    } catch {
      // Fallback: trigger user's mail client directly with prefilled valid inquiry
      setSubmitError('Automatic delivery encountered a network delay. Triggered direct email client as fallback.');
      const emailSubject = encodeURIComponent(`Project Inquiry: ${service} — ${name}`);
      const emailBody = encodeURIComponent(
        `Hello Vishwjeet,\n\n` +
        `My name is ${name} (${email}).\n\n` +
        `Service Requested: ${service}\n` +
        `Budget Range: ${budget}\n\n` +
        `Project Overview & Objectives:\n${message}\n\n` +
        `Looking forward to your response.`
      );
      window.location.href = `mailto:vmgvyt@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyProposalToClipboard = () => {
    if (!validate()) return;

    const formattedProposal = 
      `Project Inquiry for Vishwjeet\n` +
      `============================\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Service: ${service}\n` +
      `Budget: ${budget}\n\n` +
      `Project Overview:\n${message}\n`;

    navigator.clipboard.writeText(formattedProposal);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 4000);
  };

  return (
    <section id="contact" className={`py-24 relative ${styles.sectionDivider}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono uppercase tracking-wider mb-3 ${styles.badgePrimary}`}>
            <MessageSquare className="w-3.5 h-3.5" />
            Direct Collaboration &amp; Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Let's Discuss Your Software Solution.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Have a custom web application to build, an ERP workflow to automate, an AI integration to deploy, or a GEO audit requirement? Get in touch directly to review scope, architecture, and timeline.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Configurable Social Links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className={`rounded-2xl p-7 space-y-6 ${styles.card}`}>
              <h3 className="text-lg font-bold text-white mb-2">
                Direct Channels &amp; Profiles
              </h3>

              {/* Email channel */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                    Professional Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.actualEmail}`}
                    className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                  >
                    {siteConfig.contact.actualEmail}
                  </a>
                </div>
              </div>

              {/* Instagram channel */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 shrink-0">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                    Instagram Profile
                  </span>
                  <a
                    href={siteConfig.contact.actualInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-pink-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{siteConfig.contact.instagramPlaceholder}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Truelancer channel */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <ExternalLink className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                    Truelancer Freelance Profile
                  </span>
                  <a
                    href={siteConfig.contact.actualTruelancer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{siteConfig.contact.truelancerPlaceholder}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Fiverr channel */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 shrink-0">
                  <FiverrIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                    Fiverr Profile
                  </span>
                  <a
                    href={siteConfig.contact.actualFiverr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-green-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{siteConfig.contact.fiverrPlaceholder}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Freelancer.com channel */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 shrink-0">
                  <FreelancerIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                    Freelancer.in Profile
                  </span>
                  <a
                    href={siteConfig.contact.actualFreelancer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-sky-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{siteConfig.contact.freelancerPlaceholder}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* LinkedIn channel */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                    LinkedIn Profile
                  </span>
                  <a
                    href={siteConfig.contact.actualLinkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{siteConfig.contact.linkedinPlaceholder}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* GitHub channel */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-slate-500/10 border border-slate-500/20 text-slate-200 shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                    GitHub Profile
                  </span>
                  <a
                    href={siteConfig.contact.actualGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>github.com/{siteConfig.contact.githubPlaceholder}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                <div className="p-2.5 rounded-xl bg-slate-500/10 border border-slate-500/20 text-slate-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block font-semibold">
                    Professional Location
                  </span>
                  <p className="text-xs text-slate-300">
                    {siteConfig.contact.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Client Reassurance Box */}
            <div className={`p-5 rounded-2xl space-y-3 ${styles.card}`}>
              <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                Engagement Terms &amp; Professional Standards
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Non-Disclosure Agreements (NDAs) respected and signed prior to proprietary discussions.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Direct communication with the engineer building your product — no intermediary agency layers.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Typical initial inquiry review within 24 business hours.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Verified Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className={`rounded-2xl p-8 shadow-2xl ${styles.card}`}>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  Start a Conversation
                </h3>
                <p className="text-xs text-slate-400">
                  Fill in your project context. Your inquiry will be sent directly to Vishwjeet's inbox (<code className="text-blue-400 font-mono">vmgvyt@gmail.com</code>).
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                      Your Name / Company *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Rahul Sharma / Acme Corp"
                      className={`w-full px-4 py-2.5 text-sm ${styles.input}`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400 font-mono">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. name@company.com"
                      className={`w-full px-4 py-2.5 text-sm ${styles.input}`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Service Category Selection */}
                <div>
                  <label htmlFor="contact-service" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                    Service of Interest *
                  </label>
                  <select
                    id="contact-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={`w-full px-4 py-2.5 text-sm ${styles.input}`}
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-slate-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Range (Optional) */}
                <div>
                  <label htmlFor="contact-budget" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                    Estimated Budget Range (Optional)
                  </label>
                  <select
                    id="contact-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className={`w-full px-4 py-2.5 text-sm ${styles.input}`}
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-slate-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1.5">
                    Project Description &amp; Requirements *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Describe what you are looking to build, any existing software stack, key business workflows, or target deadlines..."
                    className={`w-full px-4 py-2.5 text-sm resize-y ${styles.input}`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold text-sm cursor-pointer disabled:opacity-75 ${styles.btnPrimary}`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Directly to vmgvyt@gmail.com...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message Directly</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={copyProposalToClipboard}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold cursor-pointer ${styles.btnSecondary}`}
                  >
                    {copiedDraft ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 font-mono">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Proposal Text</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Direct Transmission Feedback Banners */}
                {submitSuccess && (
                  <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-700 text-xs text-emerald-200 flex items-start gap-3 animate-in fade-in duration-300">
                    <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm text-emerald-100 mb-0.5">Inquiry Delivered Successfully!</p>
                      <p>Your message has been directly sent to Vishwjeet at <strong className="text-white underline">vmgvyt@gmail.com</strong>. Vishwjeet reviews incoming inquiries and responds within 24 business hours.</p>
                    </div>
                  </div>
                )}

                {submitError && (
                  <div className="p-4 rounded-xl bg-amber-950/70 border border-amber-800 text-xs text-amber-300 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-amber-200 mb-0.5">Fallback Triggered</p>
                      <p>{submitError}</p>
                    </div>
                  </div>
                )}

                {/* Direct Transmission Explanation */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/10 text-[11px] text-slate-400 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <p>
                    <strong>Direct Mail Delivery:</strong> Clicking above immediately sends your inquiry directly to <code className="text-blue-400 font-mono">{siteConfig.contact.actualEmail}</code>. You can also use the "Copy Proposal Text" button for your records.
                  </p>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
