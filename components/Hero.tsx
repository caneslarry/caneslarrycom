'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="top"
      className="hero-grid relative flex min-h-[88vh] items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8"
    >
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-sm font-medium text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
            Available for ambitious engineering work
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
            Senior Software Engineer · Team Lead
          </p>
          <h1 className="font-display max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
            I build systems that move businesses{' '}
            <span className="text-gradient">forward.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            I&apos;m Larry Hussey, a full-stack engineering leader focused on
            scalable products, practical AI, cloud architecture, and teams that
            ship with confidence.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className="button-primary">
              Explore my work
              <ArrowDown size={17} aria-hidden="true" />
            </a>
            <a href="mailto:me@caneslarry.com" className="button-secondary">
              Start a conversation
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass-card relative p-6 sm:p-8"
          aria-label="Career highlights"
        >
          <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full bg-cyan-400/10 blur-2xl" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Engineering snapshot
          </p>
          <div className="mt-7 grid grid-cols-2 gap-6">
            <div>
              <p className="font-display text-4xl font-bold text-white">20+</p>
              <p className="mt-1 text-sm text-slate-400">Years building</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold text-white">4</p>
              <p className="mt-1 text-sm text-slate-400">Cloud platforms</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold text-white">360°</p>
              <p className="mt-1 text-sm text-slate-400">Product ownership</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold text-white">CSM</p>
              <p className="mt-1 text-sm text-slate-400">Certified leader</p>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-slate-300">
            <MapPin size={16} className="text-cyan-400" aria-hidden="true" />
            Palm Beach, Florida
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
