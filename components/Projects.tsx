'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, CornerDownRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { featuredProjects, projects, type Project } from '../lib/projects';

function ProjectStory({ project, index }: { project: Project; index: number }) {
  const ref = useRef<globalThis.HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);

  return (
    <article
      ref={ref}
      className="case-study-grid border-t border-white/[0.09] py-16 sm:py-24 lg:py-32"
    >
      <div
        className={`lg:sticky lg:top-28 lg:self-start ${index % 2 ? 'lg:order-2' : ''}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.65 }}
          className="project-window group"
        >
          <div className="project-window-bar">
            <span />
            <span />
            <span />
            <p>{project.slug}.product</p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
            <motion.div
              style={{ y: imageY }}
              className="absolute -inset-y-[4%] inset-x-0"
            >
              <Image
                src={project.image}
                alt={`${project.title} product interface`}
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.025]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#05080d]/65 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-slate-950/75 px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-slate-300 backdrop-blur">
              Product view / 0{index + 1}
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className={index % 2 ? 'lg:order-1' : ''}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-cyan-400">0{index + 1}</span>
          <span className="h-px w-10 bg-white/15" />
          <p className="eyebrow">{project.eyebrow}</p>
        </div>
        <h3 className="font-display mt-5 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
          {project.title}
        </h3>
        <p className="mt-4 text-sm font-semibold text-cyan-200/80">
          {project.role}
        </p>
        <p className="mt-7 text-lg leading-8 text-slate-300">
          {project.description}
        </p>

        <dl className="mt-9 space-y-7">
          <div className="story-point">
            <dt>Challenge</dt>
            <dd>{project.challenge}</dd>
          </div>
          <div className="story-point">
            <dt>Key decision</dt>
            <dd>{project.decision}</dd>
          </div>
          <div className="story-point">
            <dt>Outcome</dt>
            <dd>{project.outcome}</dd>
          </div>
        </dl>

        <div className="mt-9 grid grid-cols-3 border-y border-white/[0.09]">
          {project.signals.map((signal) => (
            <div key={signal.label} className="py-4 pr-2">
              <strong className="block font-display text-base text-white sm:text-lg">
                {signal.value}
              </strong>
              <span className="mt-1 block text-[0.65rem] leading-4 text-slate-500">
                {signal.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href={`/work/${project.slug}`} className="case-link">
            Read the case study <ArrowRight size={16} />
          </Link>
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="case-link case-link-muted"
            >
              Visit live product <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </motion.div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-20">
      <div className="section-shell pb-0">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title">The thinking behind the build.</h2>
          </div>
          <div>
            <p className="section-intro">
              Selected systems spanning enterprise scale, measurable growth,
              applied AI, and product engineering—along with the decisions and
              outcomes behind each build.
            </p>
            <p className="mt-5 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-slate-600">
              <CornerDownRight size={14} /> Scroll through the decisions
            </p>
          </div>
        </div>
        <div className="mt-10 sm:mt-16">
          {featuredProjects.map((project, index) => (
            <ProjectStory key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="pb-20 pt-8 sm:pb-28 sm:pt-12">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="eyebrow">More systems</p>
              <h3 className="font-display mt-3 text-3xl font-bold text-white">
                Additional impact.
              </h3>
            </div>
            <span className="hidden font-mono text-[0.65rem] text-slate-600 sm:block">
              04 — 07
            </span>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.09] md:grid-cols-3">
            {projects.slice(3).map((project) => (
              <article
                key={project.slug}
                className="group bg-[#05080d] p-7 transition duration-300 hover:bg-slate-900/80"
              >
                <p className="eyebrow">{project.eyebrow}</p>
                <h4 className="font-display mt-4 text-xl font-bold text-white">
                  {project.title}
                </h4>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {project.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="tech-tag">
                      {technology}
                    </span>
                  ))}
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition group-hover:text-cyan-300">
                  System snapshot <ArrowRight size={14} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
