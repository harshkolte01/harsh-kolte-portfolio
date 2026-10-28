import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const EASE = 'expo.out';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenisInstance: Lenis | null = null;

export const scrollToTarget = (target: string | number | HTMLElement) => {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: typeof target === 'number' ? 0 : -24, duration: 1.4 });
    return;
  }
  if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' });
  } else {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    el?.scrollIntoView({ behavior: 'smooth' });
  }
};

export const setScrollLocked = (locked: boolean) => {
  if (lenisInstance) {
    locked ? lenisInstance.stop() : lenisInstance.start();
  }
  document.documentElement.style.overflow = locked ? 'hidden' : '';
};

/** Drives Lenis from GSAP's ticker so ScrollTrigger and smooth scroll share one clock. */
export const useSmoothScroll = () => {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4) });
    lenisInstance = lenis;
    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;
      const el = document.querySelector(hash);
      if (!el) return;
      event.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: hash === '#top' ? 0 : -24, duration: 1.4 });
      history.replaceState(null, '', hash);
    };
    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
};

/**
 * Fades and lifts every `[data-reveal]` inside the scope as it enters the viewport.
 * Siblings sharing a parent are staggered.
 */
export const useReveal = (scope: React.RefObject<HTMLElement | null>) => {
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const items = gsap.utils.toArray<HTMLElement>('[data-reveal]');
      ScrollTrigger.batch(items, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.1, ease: EASE, stagger: 0.08, overwrite: true }
          ),
      });
      gsap.set(items, { opacity: 0 });
    },
    { scope }
  );
};

/** Masked word-by-word rise for headings. Words are animated by the parent's timeline or on scroll. */
export const SplitWords: React.FC<{ text: string; className?: string; wordClassName?: string }> = ({
  text,
  className,
  wordClassName,
}) => (
  <span className={className} aria-label={text}>
    {text.split(' ').map((word, i, arr) => (
      <React.Fragment key={`${word}-${i}`}>
        <span className="word-mask" aria-hidden="true">
          <span className={`split-word ${wordClassName ?? ''}`}>{word}</span>
        </span>
        {i < arr.length - 1 ? ' ' : null}
      </React.Fragment>
    ))}
  </span>
);

/** Animates `.split-word` children of the scope when the scope scrolls into view. */
export const useSplitReveal = (scope: React.RefObject<HTMLElement | null>, selector = '[data-split]') => {
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.utils.toArray<HTMLElement>(selector).forEach((heading) => {
        const words = heading.querySelectorAll('.split-word');
        gsap.fromTo(
          words,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1.2,
            ease: EASE,
            stagger: 0.045,
            scrollTrigger: { trigger: heading, start: 'top 85%', once: true },
          }
        );
      });
    },
    { scope }
  );
};

/** Pulls an element slightly toward the pointer while hovered. */
export const useMagnetic = <T extends HTMLElement>(strength = 0.25) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || window.matchMedia('(hover: none)').matches) return;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      xTo((event.clientX - (rect.left + rect.width / 2)) * strength);
      yTo((event.clientY - (rect.top + rect.height / 2)) * strength);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [strength]);

  return ref;
};

/** Live wall-clock time in a given IANA zone, updated every 15s. */
export const useLocalTime = (timeZone: string) => {
  const format = () =>
    new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone }).format(new Date());
  const [time, setTime] = useState(format);

  useEffect(() => {
    const id = window.setInterval(() => setTime(format()), 15_000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone]);

  return time;
};

export { gsap, ScrollTrigger, useGSAP };
