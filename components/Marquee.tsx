import React from 'react';

const items = [
  'TypeScript',
  'Next.js',
  'React',
  'Node.js',
  'FastAPI',
  'PostgreSQL',
  'Electron',
  'AI agents',
  'MCP',
  'E2B',
  'Socket.IO',
  'Prisma',
  'Python',
  'Tailwind CSS',
];

const Track: React.FC<{ hidden?: boolean }> = ({ hidden }) => (
  <ul className="marquee-track items-center" aria-hidden={hidden || undefined}>
    {items.map((item) => (
      <li key={item} className="flex items-center gap-10 pr-10 text-[clamp(1.25rem,2.4vw,2rem)] font-medium tracking-[-0.03em] text-faint">
        {item}
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      </li>
    ))}
  </ul>
);

const Marquee: React.FC = () => (
  <div className="border-y border-line py-7" aria-label="Technologies I work with">
    <div className="marquee">
      <Track />
      <Track hidden />
    </div>
  </div>
);

export default Marquee;
