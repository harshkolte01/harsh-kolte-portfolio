import React, { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../lib/motion';

const GAP = 26;
const RADIUS = 220;

/**
 * A quiet dot lattice behind the hero. Dots near the pointer brighten and lean
 * away from it; with no pointer (touch, reduced motion) a slow glow drifts instead.
 */
const HeroField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduced = prefersReducedMotion();
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let visible = true;
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999, active: false };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      if (!pointer.active) {
        // Idle drift so the field is never fully static.
        pointer.tx = width * (0.62 + Math.sin(time / 4200) * 0.18);
        pointer.ty = height * (0.42 + Math.cos(time / 5100) * 0.16);
      }
      pointer.x += (pointer.tx - pointer.x) * 0.08;
      pointer.y += (pointer.ty - pointer.y) * 0.08;

      for (let y = GAP / 2; y < height; y += GAP) {
        for (let x = GAP / 2; x < width; x += GAP) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const dist = Math.hypot(dx, dy);
          const t = Math.max(0, 1 - dist / RADIUS);
          const eased = t * t * (3 - 2 * t);
          const push = eased * 7;
          const px = x + (dist ? (dx / dist) * push : 0);
          const py = y + (dist ? (dy / dist) * push : 0);
          const size = 0.9 + eased * 1.3;

          if (eased > 0.02) {
            const r = Math.round(237 + (255 - 237) * eased);
            const g = Math.round(236 + (91 - 236) * eased);
            const b = Math.round(230 + (36 - 230) * eased);
            ctx.fillStyle = `rgba(${r},${g},${b},${0.1 + eased * 0.75})`;
          } else {
            ctx.fillStyle = 'rgba(237,236,230,0.1)';
          }
          ctx.fillRect(px - size / 2, py - size / 2, size, size);
        }
      }
    };

    const loop = (time: number) => {
      if (visible) draw(time);
      frame = requestAnimationFrame(loop);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = event.clientX - rect.left;
      pointer.ty = event.clientY - rect.top;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
    };

    resize();
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(canvas);
    window.addEventListener('resize', resize);

    if (reduced) {
      pointer.x = pointer.tx = width * 0.65;
      pointer.y = pointer.ty = height * 0.4;
      pointer.active = true;
      draw(0);
    } else {
      if (finePointer) {
        window.addEventListener('pointermove', onMove, { passive: true });
        document.documentElement.addEventListener('pointerleave', onLeave);
      }
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_80%_70%_at_60%_40%,#000_30%,transparent_100%)]"
    />
  );
};

export default HeroField;
