import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/site';

interface Repo {
  name: string;
  html_url: string;
  language: string | null;
  pushed_at: string;
  fork: boolean;
  description: string | null;
}

// Shown until the live request resolves, and kept if GitHub is unreachable or rate-limited.
const fallback: Repo[] = [
  { name: 'voice_assistance', html_url: `${siteConfig.githubUrl}/voice_assistance`, language: 'Python', pushed_at: '2026-10-13T00:00:00Z', fork: false, description: null },
  { name: 'AgentForge', html_url: `${siteConfig.githubUrl}/AgentForge`, language: 'Python', pushed_at: '2026-10-12T00:00:00Z', fork: false, description: null },
  { name: 'auctionarcmain', html_url: `${siteConfig.githubUrl}/auctionarcmain`, language: 'CSS', pushed_at: '2026-10-12T00:00:00Z', fork: false, description: null },
  { name: 'olympus-bot-2.0.1', html_url: `${siteConfig.githubUrl}/olympus-bot-2.0.1`, language: 'Python', pushed_at: '2026-10-12T00:00:00Z', fork: false, description: null },
  { name: 'local-ai-models', html_url: `${siteConfig.githubUrl}/local-ai-models`, language: 'Python', pushed_at: '2026-10-07T00:00:00Z', fork: false, description: null },
];

const languageColor: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572a5',
  CSS: '#663399',
  'C++': '#f34b7d',
  Java: '#b07219',
};

const relative = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

const shortDate = new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', timeZone: 'UTC' });

const timeAgo = (iso: string, now: number | null) => {
  // Before mount there is no trustworthy "now" (the markup is prerendered), so show a fixed date.
  if (now === null) return shortDate.format(new Date(iso));
  const diff = (new Date(iso).getTime() - now) / 1000;
  const steps: [Intl.RelativeTimeFormatUnit, number][] = [
    ['year', 31_536_000],
    ['month', 2_592_000],
    ['week', 604_800],
    ['day', 86_400],
    ['hour', 3_600],
    ['minute', 60],
  ];
  for (const [unit, seconds] of steps) {
    if (Math.abs(diff) >= seconds) return relative.format(Math.round(diff / seconds), unit);
  }
  return 'just now';
};

const GitHubActivity: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>(fallback);
  const [live, setLive] = useState(false);
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const controller = new AbortController();
    fetch(`https://api.github.com/users/${siteConfig.githubUser}/repos?sort=pushed&per_page=20`, { signal: controller.signal })
      .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
      .then((data: Repo[]) => {
        const own = data.filter((repo) => !repo.fork && repo.name !== siteConfig.githubUser).slice(0, 5);
        if (own.length) {
          setRepos(own);
          setLive(true);
        }
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  return (
    <div className="rounded-[24px] border border-line p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <p className="eyebrow">Lately on GitHub</p>
        <span className="flex items-center gap-2 font-mono text-[11px] text-faint">
          {live ? <span className="status-dot" aria-hidden="true" /> : null}
          {live ? 'live' : 'recent'}
        </span>
      </div>
      <ul className="mt-4">
        {repos.map((repo) => (
          <li key={repo.name} className="border-t border-line first:border-t-0">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-3"
            >
              <span className="flex min-w-0 items-center gap-3">
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ background: (repo.language && languageColor[repo.language]) || 'var(--color-faint)' }}
                  aria-hidden="true"
                />
                <span className="truncate font-mono text-[13px] text-fg transition-colors group-hover:text-accent">{repo.name}</span>
              </span>
              <span className="flex shrink-0 items-center gap-2 font-mono text-[11.5px] text-faint">
                <time dateTime={repo.pushed_at}>{timeAgo(repo.pushed_at, now)}</time>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubActivity;
