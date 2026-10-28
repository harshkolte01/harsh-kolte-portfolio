import React, { useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Circle,
  Droplet,
  FileText,
  Folder,
  GitPullRequest,
  ScanText,
  Square,
  Terminal,
  Type,
  Video,
} from 'lucide-react';
import { ProjectVisual } from '../types';
import { EASE, ScrollTrigger, gsap, prefersReducedMotion, useGSAP } from '../lib/motion';

/** Plays a timeline once when the visual scrolls into view. */
const useEnter = (scope: React.RefObject<HTMLDivElement | null>, build: (tl: gsap.core.Timeline) => void) => {
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const tl = gsap.timeline({ paused: true, defaults: { ease: EASE } });
      build(tl);
      ScrollTrigger.create({ trigger: scope.current, start: 'top 75%', once: true, onEnter: () => tl.play() });
    },
    { scope }
  );
};

/* ---------------- AgentForge ---------------- */

const AgentVisual: React.FC = () => {
  const scope = useRef<HTMLDivElement>(null);
  useEnter(scope, (tl) =>
    tl
      .from('.af-msg', { y: 14, opacity: 0, duration: 0.8 })
      .from('.af-step', { x: -10, opacity: 0, duration: 0.6, stagger: 0.28 }, '+=0.15')
      .from('.af-card', { y: 18, opacity: 0, scale: 0.97, duration: 0.9 }, '+=0.1')
      .fromTo('.af-approve', { boxShadow: '0 0 0 0 rgba(255,91,36,0)' }, { boxShadow: '0 0 0 6px rgba(255,91,36,0.18)', duration: 0.8, repeat: 1, yoyo: true })
  );

  const steps = [
    { icon: Search2, text: 'searched “express rate limit middleware”' },
    { icon: FileText, text: 'read src/routes/upload.ts' },
    { icon: Terminal, text: 'npm test — 42 passed' },
  ];

  return (
    <div ref={scope} className="relative flex h-full items-center justify-center px-4 py-10 sm:p-10">
      <div className="mock-window w-full max-w-[460px]">
        <div className="mock-bar">
          <i /><i /><i />
          <span className="ml-3 font-mono text-[10.5px] text-faint">agentforge · ask me</span>
        </div>
        <div className="space-y-4 p-4 sm:p-5">
          <div className="af-msg ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-surface-2 px-4 py-2.5 text-[13px] leading-snug">
            Add rate limiting to /api/upload and open a PR
          </div>
          <ul className="space-y-2 font-mono text-[11px] text-muted">
            {steps.map(({ icon: Icon, text }) => (
              <li key={text} className="af-step flex items-center gap-2.5">
                <Check className="h-3.5 w-3.5 shrink-0 text-ok" />
                <Icon className="h-3.5 w-3.5 shrink-0 text-faint" />
                <span className="truncate">{text}</span>
              </li>
            ))}
          </ul>
          <div className="af-card rounded-xl border border-line-strong bg-bg-2 p-3.5">
            <div className="flex items-center gap-2 text-[12px] text-muted">
              <GitPullRequest className="h-3.5 w-3.5 text-accent" />
              Wants to open a pull request
            </div>
            <div className="mt-2.5 rounded-md bg-bg px-3 py-2 font-mono text-[11px] text-fg">
              feat/upload-rate-limit <span className="text-faint">→ main</span>
              <span className="ml-2 text-ok">+38</span> <span className="text-accent">−4</span>
            </div>
            <div className="mt-3 flex gap-2">
              <span className="af-approve rounded-full bg-fg px-3.5 py-1.5 text-[12px] font-medium text-bg">Approve</span>
              <span className="rounded-full border border-line-strong px-3.5 py-1.5 text-[12px] text-muted">Decline</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Search2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

/* ---------------- CapturePro ---------------- */

const CaptureVisual: React.FC = () => {
  const scope = useRef<HTMLDivElement>(null);
  useEnter(scope, (tl) =>
    tl
      .from('.cp-region', { width: 0, height: 0, duration: 1.4, ease: 'expo.inOut' })
      .from('.cp-size', { opacity: 0, y: 6, duration: 0.5 }, '-=0.3')
      .from('.cp-tool', { y: 10, opacity: 0, duration: 0.5, stagger: 0.05 }, '-=0.2')
  );

  const tools = [Square, ArrowUpRight, Type, Droplet, ScanText, Video];

  return (
    <div ref={scope} className="relative flex h-full items-center justify-center px-4 py-10 sm:p-10">
      <div className="mock-window relative w-full max-w-[480px] overflow-hidden">
        <div className="mock-bar">
          <i /><i /><i />
        </div>
        <div className="relative h-[230px] sm:h-[260px]">
          {/* Faux desktop content under the dim layer */}
          <div className="absolute inset-0 grid grid-cols-3 gap-3 p-5 opacity-80">
            <div className="col-span-2 space-y-2.5">
              <div className="skeleton w-2/3" />
              <div className="skeleton w-full" />
              <div className="skeleton w-5/6" />
              <div className="mt-4 h-16 rounded-lg bg-[linear-gradient(135deg,#2a2a27,#1a1a18)]" />
              <div className="skeleton w-3/4" />
            </div>
            <div className="space-y-2.5">
              <div className="h-20 rounded-lg bg-surface-2" />
              <div className="skeleton w-full" />
              <div className="skeleton w-1/2" />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/55" />
          <div
            className="cp-region absolute left-[18%] top-[16%] h-[54%] w-[56%] border border-accent"
            style={{ boxShadow: '0 0 0 9999px rgba(0,0,0,0.25)', background: 'rgba(255,91,36,0.04)' }}
          >
            {['-left-1 -top-1', '-right-1 -top-1', '-left-1 -bottom-1', '-right-1 -bottom-1'].map((pos) => (
              <span key={pos} className={`absolute h-2 w-2 bg-accent ${pos}`} />
            ))}
            <span className="absolute inset-y-0 left-1/3 w-px bg-accent/25" />
            <span className="absolute inset-y-0 left-2/3 w-px bg-accent/25" />
            <span className="absolute inset-x-0 top-1/3 h-px bg-accent/25" />
            <span className="absolute inset-x-0 top-2/3 h-px bg-accent/25" />
            <span className="cp-size absolute -top-7 left-0 rounded bg-accent px-1.5 py-0.5 font-mono text-[10px] text-bg">1280 × 720</span>
          </div>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1 rounded-full border border-line-strong bg-bg/90 p-1 backdrop-blur">
            {tools.map((Icon, i) => (
              <span
                key={i}
                className={`cp-tool grid h-7 w-7 place-items-center rounded-full ${i === 4 ? 'bg-fg text-bg' : 'text-muted'}`}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- HDF Viewer ---------------- */

const HdfVisual: React.FC = () => {
  const scope = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const cols = 64;
    const rows = 40;
    canvas.width = cols;
    canvas.height = rows;
    const image = ctx.createImageData(cols, rows);
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const nx = x / cols;
        const ny = y / rows;
        let v =
          Math.sin(nx * 9 + ny * 3) * 0.35 +
          Math.cos(ny * 11 - nx * 4) * 0.25 +
          Math.exp(-((nx - 0.62) ** 2 + (ny - 0.45) ** 2) * 18) * 0.9;
        v = Math.min(1, Math.max(0, (v + 0.6) / 1.8));
        // Ramp: near-black → ember → accent → warm white
        const r = v < 0.5 ? 20 + v * 2 * 200 : 220 + (v - 0.5) * 2 * 35;
        const g = v < 0.5 ? 18 + v * 2 * 50 : 68 + (v - 0.5) * 2 * 160;
        const b = v < 0.5 ? 16 + v * 2 * 20 : 36 + (v - 0.5) * 2 * 150;
        const i = (y * cols + x) * 4;
        image.data[i] = r;
        image.data[i + 1] = g;
        image.data[i + 2] = b;
        image.data[i + 3] = 255;
      }
    }
    ctx.putImageData(image, 0, 0);
  }, []);

  useEnter(scope, (tl) =>
    tl
      .from('.hdf-node', { x: -8, opacity: 0, duration: 0.5, stagger: 0.07 })
      .from('.hdf-plot', { clipPath: 'inset(0 100% 0 0)', duration: 1.4, ease: 'expo.inOut' }, 0.2)
      .from('.hdf-line', { strokeDashoffset: 600, duration: 1.6, ease: 'power2.inOut' }, 0.6)
  );

  const tree = [
    { depth: 0, label: '/', icon: Folder },
    { depth: 1, label: 'payload', icon: Folder },
    { depth: 2, label: 'band_01', icon: Folder },
    { depth: 3, label: 'radiance', icon: FileText, meta: '2048×2048 f32', active: true },
    { depth: 3, label: 'geolocation', icon: FileText, meta: '2048×2 f64' },
    { depth: 2, label: 'band_02', icon: Folder },
    { depth: 1, label: 'attributes', icon: Folder },
  ];

  return (
    <div ref={scope} className="relative flex h-full items-center justify-center px-4 py-10 sm:p-10">
      <div className="mock-window w-full max-w-[500px]">
        <div className="mock-bar">
          <i /><i /><i />
          <span className="ml-3 truncate font-mono text-[10.5px] text-faint">s3://sac-payload/L1B_2026_03.h5</span>
        </div>
        <div className="grid grid-cols-[150px_1fr] sm:grid-cols-[170px_1fr]">
          <ul className="space-y-1 border-r border-line p-3 font-mono text-[10.5px]">
            {tree.map((node) => {
              const Icon = node.icon;
              return (
                <li
                  key={node.label}
                  className={`hdf-node flex items-center gap-1.5 rounded px-1.5 py-1 ${node.active ? 'bg-accent-soft text-fg' : 'text-muted'}`}
                  style={{ paddingLeft: 6 + node.depth * 9 }}
                >
                  {node.icon === Folder ? <ChevronRight className="h-3 w-3 shrink-0 text-faint" /> : null}
                  <Icon className={`h-3 w-3 shrink-0 ${node.active ? 'text-accent' : 'text-faint'}`} />
                  <span className="truncate">{node.label}</span>
                </li>
              );
            })}
          </ul>
          <div className="p-3">
            <div className="flex items-center justify-between font-mono text-[10px] text-faint">
              <span>radiance [0:2048, 0:2048]</span>
              <span className="hidden sm:inline">heatmap</span>
            </div>
            <canvas ref={canvasRef} className="hdf-plot mt-2 aspect-[64/40] w-full rounded-md [image-rendering:pixelated]" aria-hidden="true" />
            <svg viewBox="0 0 300 60" className="mt-3 h-12 w-full" aria-hidden="true">
              <path d="M0 59.5H300" stroke="rgba(237,236,230,0.12)" />
              <path
                className="hdf-line"
                d="M0 44 L20 40 L40 46 L60 30 L80 34 L100 22 L120 28 L140 12 L160 20 L180 16 L200 30 L220 26 L240 38 L260 32 L280 42 L300 36"
                fill="none"
                stroke="#ff5b24"
                strokeWidth="1.5"
                strokeDasharray="600"
                strokeDashoffset="0"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- WATabs ---------------- */

const TabsVisual: React.FC = () => {
  const scope = useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(1);
  const accounts = [
    { initial: 'P', name: 'Personal', session: 'A', tint: '#4ade80' },
    { initial: 'B', name: 'Business', session: 'B', tint: '#ff5b24', unread: 3 },
    { initial: 'S', name: 'Support', session: 'C', tint: '#7dd3fc', unread: 12 },
  ];

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = window.setInterval(() => setActive((value) => (value + 1) % accounts.length), 2600);
    return () => window.clearInterval(id);
  }, [accounts.length]);

  useEnter(scope, (tl) => tl.from('.wt-row', { y: 10, opacity: 0, duration: 0.6, stagger: 0.06 }));

  const current = accounts[active];

  return (
    <div ref={scope} className="relative flex h-full items-center justify-center px-4 py-10 sm:p-10">
      <div className="mock-window w-full max-w-[480px] overflow-hidden">
        <div className="mock-bar">
          <i /><i /><i />
          <span className="ml-3 font-mono text-[10.5px] text-faint">WATabs</span>
        </div>
        <div className="grid h-[240px] grid-cols-[56px_1fr] sm:h-[260px]">
          <div className="flex flex-col items-center gap-2.5 border-r border-line py-3">
            {accounts.map((account, index) => (
              <button
                type="button"
                tabIndex={-1}
                key={account.name}
                onClick={() => setActive(index)}
                className={`relative grid h-9 w-9 place-items-center rounded-xl text-[12px] font-semibold transition-all duration-500 ${
                  index === active ? 'scale-100 text-bg' : 'scale-90 bg-surface-2 text-muted'
                }`}
                style={index === active ? { background: account.tint } : undefined}
                aria-label={account.name}
              >
                {account.initial}
                {account.unread ? (
                  <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-fg px-1 font-mono text-[9px] text-bg">
                    {account.unread}
                  </span>
                ) : null}
              </button>
            ))}
            <span className="mt-1 grid h-9 w-9 place-items-center rounded-xl border border-dashed border-line-strong text-faint">+</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
              <span className="text-[13px] font-medium">{current.name}</span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-faint">
                <Circle className="h-2 w-2" style={{ fill: current.tint, color: current.tint }} />
                session {current.session} · isolated
              </span>
            </div>
            <ul key={active} className="flex-1 space-y-3.5 px-4 py-3.5">
              {[0.7, 0.45, 0.85, 0.55].map((w, i) => (
                <li key={i} className="wt-row flex items-center gap-3">
                  <span className="h-7 w-7 shrink-0 rounded-full bg-surface-2" />
                  <span className="flex-1 space-y-1.5">
                    <span className="skeleton block" style={{ width: `${w * 60}%` }} />
                    <span className="skeleton block opacity-60" style={{ width: `${w * 100}%` }} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Amazon scraper ---------------- */

const ScraperVisual: React.FC = () => {
  const scope = useRef<HTMLDivElement>(null);
  useEnter(scope, (tl) =>
    tl
      .from('.sc-progress', { scaleX: 0, transformOrigin: 'left', duration: 1.6, ease: 'expo.inOut' })
      .from('.sc-row', { opacity: 0, y: 8, duration: 0.5, stagger: 0.12 }, 0.2)
  );

  const rows = [
    { asin: 'B0CX23V2ZK', title: 'Stainless steel water bottle', ok: true },
    { asin: 'B09G9FPHY6', title: 'Wireless ergonomic mouse', ok: true },
    { asin: 'B0BSHF7WHW', title: 'Ceramic pour-over set', ok: true },
    { asin: 'B07PGL2N7J', title: 'Page unavailable — retry queued', ok: false },
    { asin: 'B0D1XD1ZV3', title: 'Bamboo desk organiser', ok: true },
  ];

  return (
    <div ref={scope} className="relative flex h-full items-center justify-center px-4 py-10 sm:p-10">
      <div className="mock-window w-full max-w-[480px]">
        <div className="mock-bar">
          <i /><i /><i />
          <span className="ml-3 font-mono text-[10.5px] text-faint">Amazon Product Scraper</span>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between font-mono text-[10.5px] text-muted">
            <span>run_2026-08-07_14-22</span>
            <span>38 / 50</span>
          </div>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-surface-2">
            <div className="sc-progress h-full w-[76%] rounded-full bg-accent" />
          </div>
          <table className="mt-4 w-full font-mono text-[10.5px]">
            <thead>
              <tr className="text-left text-faint">
                <th className="pb-2 font-normal">ASIN</th>
                <th className="pb-2 font-normal">title</th>
                <th className="pb-2 text-right font-normal">status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.asin} className="sc-row border-t border-line">
                  <td className="py-2 pr-3 text-muted">{row.asin}</td>
                  <td className={`max-w-0 truncate py-2 pr-3 ${row.ok ? 'text-fg' : 'text-faint'}`}>{row.title}</td>
                  <td className="py-2 text-right">
                    <span className={`inline-block h-1.5 w-1.5 rounded-full ${row.ok ? 'bg-ok' : 'bg-accent'}`} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-3 flex justify-end">
            <span className="rounded-full border border-line-strong px-3 py-1 font-mono text-[10.5px] text-muted">export .csv</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- Linksht ---------------- */

const LinksVisual: React.FC = () => {
  const scope = useRef<HTMLDivElement>(null);
  const bars = [32, 45, 38, 52, 60, 48, 72, 66, 80, 58, 90, 84, 96, 78];
  useEnter(scope, (tl) =>
    tl
      .from('.ls-bar', { scaleY: 0, transformOrigin: 'bottom', duration: 1, stagger: 0.04 })
      .from('.ls-split', { scaleX: 0, transformOrigin: 'left', duration: 1.2, ease: 'expo.inOut' }, 0.3)
  );

  return (
    <div ref={scope} className="relative flex h-full items-center justify-center px-4 py-10 sm:p-10">
      <div className="mock-window w-full max-w-[460px] p-5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[12px] text-fg">linksht.me/launch</span>
          <span className="rounded-full bg-[#d4a531]/15 px-2.5 py-0.5 font-mono text-[10px] text-[#e6bd52]">PRO</span>
        </div>
        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase text-faint">clicks · 14 days</p>
            <p className="mt-1 text-[32px] font-medium leading-none tracking-tight">2,418</p>
          </div>
          <p className="font-mono text-[11px] text-ok">+18.4%</p>
        </div>
        <div className="mt-5 flex h-24 items-end gap-1.5">
          {bars.map((h, i) => (
            <span
              key={i}
              className={`ls-bar flex-1 rounded-sm ${i === bars.length - 2 ? 'bg-accent' : 'bg-surface-2'}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-5">
          <div className="ls-split flex h-1.5 overflow-hidden rounded-full">
            <span className="w-[58%] bg-fg" />
            <span className="w-[34%] bg-muted" />
            <span className="w-[8%] bg-faint" />
          </div>
          <div className="mt-2 flex gap-4 font-mono text-[10px] text-muted">
            <span>mobile 58%</span>
            <span>desktop 34%</span>
            <span>tablet 8%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const visuals: Record<ProjectVisual, React.FC> = {
  agent: AgentVisual,
  capture: CaptureVisual,
  hdf: HdfVisual,
  tabs: TabsVisual,
  scraper: ScraperVisual,
  links: LinksVisual,
};

const ProjectVisualFrame: React.FC<{ visual: ProjectVisual; label: string }> = ({ visual, label }) => {
  const Visual = visuals[visual];
  return (
    <div className="visual-frame w-full sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[440px]" role="img" aria-label={label}>
      <div className="visual-parallax relative h-full sm:absolute sm:inset-0" aria-hidden="true">
        <Visual />
      </div>
    </div>
  );
};

export default ProjectVisualFrame;
