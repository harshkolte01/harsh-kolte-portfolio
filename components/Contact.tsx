import React, { useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, Github, Instagram, Linkedin, Loader2 } from 'lucide-react';
import { siteConfig } from '../data/site';
import { SplitWords, useLocalTime, useMagnetic, useReveal, useSplitReveal } from '../lib/motion';

const projectTypes = ['AI / agents', 'Web app or SaaS', 'Desktop app', 'Dashboard', 'Something else'];
const budgets = ['Under $1k', '$1k – $3k', '$3k – $8k', '$8k+', 'Not sure yet'];

const socials = [
  { label: 'GitHub', href: siteConfig.githubUrl, icon: Github },
  { label: 'LinkedIn', href: siteConfig.linkedinUrl, icon: Linkedin },
  { label: 'Instagram', href: siteConfig.instagramUrl, icon: Instagram },
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

const Contact: React.FC = () => {
  const scope = useRef<HTMLElement>(null);
  const submit = useMagnetic<HTMLButtonElement>(0.15);
  const time = useLocalTime(siteConfig.timeZone);
  const [status, setStatus] = useState<Status>('idle');
  const [copied, setCopied] = useState(false);
  useReveal(scope);
  useSplitReveal(scope);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${siteConfig.email}`;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const type = String(data.get('type') ?? '');
    const budget = String(data.get('budget') ?? '');
    const message = String(data.get('message') ?? '');

    // Without a Web3Forms key the form falls back to a prefilled email draft.
    if (!accessKey) {
      const subject = encodeURIComponent(`Project enquiry — ${type || 'new project'}`);
      const body = encodeURIComponent(`${message}\n\nProject type: ${type}\nBudget: ${budget}\n\n${name}\n${email}`);
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Project enquiry — ${type || 'new project'} (${name})`,
          from_name: 'harshkolte portfolio',
          name,
          email,
          project_type: type,
          budget,
          message,
          botcheck: data.get('botcheck') ? 'true' : '',
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section ref={scope} id="contact" aria-labelledby="contact-heading" className="section overflow-hidden">
      <div className="container-x">
        <div data-reveal className="flex items-center gap-4 border-t border-line pt-5">
          <span className="eyebrow text-accent">(05)</span>
          <span className="eyebrow">Contact</span>
        </div>

        <h2 id="contact-heading" data-split className="display mt-12 text-[clamp(3rem,10vw,10rem)] lg:mt-16">
          <SplitWords text="Let’s build" />
          <br />
          <SplitWords text="something good." wordClassName="serif-em text-accent" />
        </h2>

        <div className="mt-16 grid gap-16 lg:mt-24 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24">
          <div className="flex flex-col gap-10">
            <div data-reveal>
              <p className="eyebrow">Email</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a href={`mailto:${siteConfig.email}`} className="link-underline text-[clamp(1.25rem,2.2vw,1.75rem)] tracking-[-0.025em]">
                  {siteConfig.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="grid h-9 w-9 place-items-center rounded-full border border-line-strong text-muted transition-colors hover:border-fg hover:text-fg"
                  aria-label={copied ? 'Email copied' : 'Copy email address'}
                >
                  {copied ? <Check className="h-4 w-4 text-ok" /> : <Copy className="h-4 w-4" />}
                </button>
                <span className="sr-only" aria-live="polite">
                  {copied ? 'Email address copied to clipboard' : ''}
                </span>
              </div>
            </div>

            <dl data-reveal className="grid grid-cols-2 gap-6 border-t border-line pt-6">
              <div>
                <dt className="eyebrow">Status</dt>
                <dd className="mt-2 flex items-center gap-2.5 text-[15px]">
                  <span className="status-dot" aria-hidden="true" />
                  Taking new projects
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Local time</dt>
                <dd className="mt-2 text-[15px]">{time} · Ahmedabad</dd>
              </div>
            </dl>

            <ul data-reveal className="flex flex-wrap gap-2 border-t border-line pt-6">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost h-11 px-4 text-[14px]">
                    <Icon className="h-4 w-4" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form data-reveal onSubmit={handleSubmit} className="flex flex-col gap-9" noValidate={false}>
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid gap-9 sm:grid-cols-2">
              <label className="block">
                <span className="eyebrow">Your name</span>
                <input name="name" type="text" required autoComplete="name" className="field" placeholder="Jane Doe" />
              </label>
              <label className="block">
                <span className="eyebrow">Email</span>
                <input name="email" type="email" required autoComplete="email" className="field" placeholder="jane@company.com" />
              </label>
            </div>

            <fieldset>
              <legend className="eyebrow">What are we building?</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {projectTypes.map((type, i) => (
                  <label key={type}>
                    <input type="radio" name="type" value={type} defaultChecked={i === 0} className="peer sr-only" />
                    <span className="choice">{type}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="eyebrow">Budget</legend>
              <div className="mt-4 flex flex-wrap gap-2">
                {budgets.map((budget) => (
                  <label key={budget}>
                    <input type="radio" name="budget" value={budget} defaultChecked={budget === 'Not sure yet'} className="peer sr-only" />
                    <span className="choice">{budget}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="block">
              <span className="eyebrow">Tell me about it</span>
              <textarea
                name="message"
                required
                rows={4}
                className="field resize-none"
                placeholder="What it is, who it’s for, and when you’d like it live."
              />
            </label>

            <div className="flex flex-wrap items-center gap-5">
              <button ref={submit} type="submit" disabled={status === 'sending'} className="btn btn-primary h-14 px-7 text-[16px] disabled:opacity-60">
                {status === 'sending' ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                {status === 'sending' ? 'Sending' : accessKey ? 'Send message' : 'Send via email'}
                {status !== 'sending' ? <ArrowUpRight className="btn-arrow h-4 w-4" /> : null}
              </button>
              <p className="text-[14px] text-muted" role="status" aria-live="polite">
                {status === 'sent' && 'Thanks — your message is in. I’ll reply from my own inbox.'}
                {status === 'error' && (
                  <>
                    Something went wrong. Email me directly at{' '}
                    <a className="text-fg underline" href={`mailto:${siteConfig.email}`}>
                      {siteConfig.email}
                    </a>
                    .
                  </>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
