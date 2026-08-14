'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Asterisk, MapPin } from 'lucide-react';
import { MouseEvent } from 'react';

const principles = ['I design systems.', 'I lead teams.', 'I ship products.'];
const capabilities = [
  { index: '01', label: '20+ years engineering' },
  { index: '02', label: 'Hands-on technical lead' },
  { index: '03', label: 'Enterprise + applied AI' },
];

function SystemsCanvas() {
  return (
    <div className="systems-canvas" aria-hidden="true">
      <svg viewBox="0 0 640 640" className="h-full w-full" fill="none">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle
          cx="320"
          cy="320"
          r="250"
          className="canvas-orbit canvas-orbit-one"
        />
        <circle
          cx="320"
          cy="320"
          r="174"
          className="canvas-orbit canvas-orbit-two"
        />
        <path
          d="M72 397C165 397 151 222 259 222S357 437 567 254"
          className="canvas-path"
        />
        <path
          d="M112 142H235L320 320H470L552 508"
          className="canvas-path canvas-path-muted"
        />
        <circle
          cx="259"
          cy="222"
          r="5"
          className="canvas-node"
          filter="url(#glow)"
        />
        <circle
          cx="320"
          cy="320"
          r="8"
          className="canvas-node canvas-node-core"
          filter="url(#glow)"
        />
        <circle
          cx="470"
          cy="320"
          r="5"
          className="canvas-node"
          filter="url(#glow)"
        />
        <circle cx="552" cy="508" r="4" className="canvas-node" />
        <circle r="4" fill="#fff" filter="url(#glow)">
          <animateMotion
            dur="5s"
            repeatCount="indefinite"
            path="M72 397C165 397 151 222 259 222S357 437 567 254"
          />
        </circle>
      </svg>
      <span className="canvas-label canvas-label-one">SYSTEM / 01</span>
      <span className="canvas-label canvas-label-two">SIGNAL ACTIVE</span>
      <span className="canvas-status">
        <i /> BUILDING FOR CLARITY
      </span>
    </div>
  );
}

const child = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const canvasX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const canvasY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);
  const trackPointer = (event: MouseEvent<globalThis.HTMLElement>) => {
    const rect = (
      event.currentTarget as globalThis.HTMLElement
    ).getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="top"
      onMouseMove={trackPointer}
      className="hero-grid relative min-h-screen overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pt-32"
    >
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="relative mx-auto flex min-h-[calc(100vh-9rem)] max-w-[90rem] flex-col justify-between">
        <div className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:py-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
            className="relative z-10"
          >
            <motion.div
              variants={child}
              className="mb-8 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-slate-400"
            >
              <span className="flex items-center gap-2 text-emerald-300">
                <span className="status-dot" /> Available for the right problem
              </span>
              <span className="h-px w-8 bg-white/15" />
              <span className="hidden sm:inline">Palm Beach, FL</span>
            </motion.div>
            <motion.p
              variants={child}
              className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300"
            >
              <Asterisk size={14} /> Senior engineer · Technical lead
            </motion.p>
            <h1 className="font-display max-w-5xl text-[clamp(3.4rem,7.3vw,7.8rem)] font-extrabold leading-[0.88] tracking-[-0.065em] text-white">
              <motion.span variants={child} className="block">
                Complexity in.
              </motion.span>
              <motion.span variants={child} className="text-outline block">
                Clarity out.
              </motion.span>
            </h1>
            <motion.p
              variants={child}
              className="mt-8 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
            >
              I&apos;m Larry Hussey, a senior software engineer and hands-on
              technical leader with 20+ years of experience turning difficult
              product, architecture, and team problems into dependable
              enterprise software.
            </motion.p>
            <motion.div
              variants={child}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a href="#work" className="button-primary group">
                See the work{' '}
                <ArrowDownRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
              <a
                href="mailto:me@caneslarry.com"
                className="button-secondary group"
              >
                Start a conversation{' '}
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            style={{ x: canvasX, y: canvasY }}
            className="relative mx-auto aspect-square w-full max-w-[35rem] lg:max-w-none"
          >
            <SystemsCanvas />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="grid border-y border-white/[0.09] sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_auto]"
        >
          <div className="flex items-center gap-3 border-b border-white/[0.09] py-4 pr-6 sm:col-span-2 lg:col-span-1 lg:border-b-0 lg:border-r">
            <MapPin size={15} className="text-cyan-400" />
            <span className="text-xs font-medium text-slate-400">
              Building from South Florida
            </span>
          </div>
          {capabilities.map((item) => (
            <div
              key={item.index}
              className="flex items-center gap-3 border-b border-white/[0.09] py-4 sm:odd:border-r lg:border-b-0 lg:border-r lg:px-6"
            >
              <span className="font-mono text-[0.62rem] text-cyan-400">
                {item.index}
              </span>
              <span className="text-xs font-semibold text-slate-300">
                {item.label}
              </span>
            </div>
          ))}
          <a
            href="#work"
            aria-label="Scroll to selected work"
            className="hidden items-center justify-center px-5 text-slate-500 transition hover:text-cyan-300 lg:flex"
          >
            <ArrowDownRight size={19} />
          </a>
        </motion.div>
        <div className="pointer-events-none absolute bottom-28 left-0 hidden -translate-x-full -rotate-90 items-center gap-3 text-[0.6rem] font-bold uppercase tracking-[0.24em] text-slate-600 xl:flex">
          <span>Scroll to explore</span>
          <span className="block h-px w-10 bg-slate-700" />
        </div>
      </div>
      <div className="principle-marquee" aria-label="Working principles">
        <div className="principle-track">
          {[...principles, ...principles].map((principle, index) => (
            <span key={`${principle}-${index}`}>
              {principle}
              <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
