import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { featuredProjects, getProject } from '../../../lib/projects';

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return project
    ? {
        title: `${project.title} Case Study | Larry Hussey`,
        description: project.description,
      }
    : {};
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || !project.architecture.length) notFound();
  const currentIndex = featuredProjects.findIndex((item) => item.slug === slug);
  const nextProject =
    featuredProjects[(currentIndex + 1) % featuredProjects.length];

  return (
    <main className="min-h-screen overflow-hidden">
      <nav
        className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#05080d]/85 backdrop-blur-xl"
        aria-label="Case study navigation"
      >
        <div className="mx-auto flex h-[4.5rem] max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/#work" className="case-nav-link">
            <ArrowLeft size={16} /> All work
          </Link>
          <span className="font-display text-sm font-bold text-white">
            Larry Hussey<span className="text-cyan-400">.</span>
          </span>
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="case-nav-link"
            >
              Live product <ArrowUpRight size={15} />
            </a>
          ) : (
            <span className="w-20" />
          )}
        </div>
      </nav>

      <header className="case-hero px-5 pb-16 pt-36 sm:px-8 sm:pb-24 lg:px-12 lg:pt-44">
        <div className="mx-auto max-w-[90rem]">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <div>
              <p className="eyebrow">{project.eyebrow} · Case study</p>
              <h1 className="font-display mt-5 text-5xl font-extrabold tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
                {project.title}
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-300">
                {project.description}
              </p>
            </div>
            <div className="border-l border-white/10 pl-6">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-slate-500">
                My role
              </p>
              <p className="mt-3 font-display text-lg font-bold leading-7 text-white">
                {project.role}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="tech-tag">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="project-window mt-14 sm:mt-20">
            <div className="project-window-bar">
              <span />
              <span />
              <span />
              <p>{project.slug}.product</p>
            </div>
            <div className="relative aspect-[16/8] overflow-hidden">
              <Image
                src={project.image}
                alt={`${project.title} product interface`}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </header>

      <section className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:gap-24">
          <div>
            <p className="eyebrow">The assignment</p>
            <h2 className="font-display mt-4 text-4xl font-bold tracking-tight text-white">
              Make the difficult thing feel obvious.
            </h2>
          </div>
          <div className="space-y-12">
            <CaseSection
              number="01"
              title="Challenge"
              body={project.challenge}
            />
            <CaseSection
              number="02"
              title="Key decision"
              body={project.decision}
            />
            <CaseSection number="03" title="Outcome" body={project.outcome} />
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-white/[0.015]">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="eyebrow">System view</p>
            <h2 className="section-title">
              Architecture people can reason about.
            </h2>
            <p className="section-intro mt-5">
              A strong system makes its transformations visible. Each layer has
              one job and a clear contract with the next.
            </p>
          </div>
          <div className="architecture-flow mt-14">
            {project.architecture.map((step, index) => (
              <div key={step.label} className="architecture-step">
                <span>0{index + 1}</span>
                <CheckCircle2 size={17} />
                <h3>{step.label}</h3>
                <p>{step.detail}</p>
                {index < project.architecture.length - 1 && (
                  <ArrowRight className="architecture-arrow" size={18} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <Link
          href={`/work/${nextProject.slug}`}
          className="next-case group mx-auto flex max-w-[90rem] items-end justify-between"
        >
          <div>
            <p className="eyebrow">Next case study</p>
            <h2 className="font-display mt-4 text-4xl font-bold text-white transition group-hover:text-cyan-200 sm:text-6xl">
              {nextProject.title}
            </h2>
          </div>
          <ArrowRight
            className="mb-2 text-cyan-300 transition-transform group-hover:translate-x-2"
            size={34}
          />
        </Link>
      </section>
    </main>
  );
}

function CaseSection({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <article className="grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-[4rem_1fr]">
      <span className="font-mono text-xs text-cyan-500">{number}</span>
      <div>
        <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
        <p className="mt-4 text-lg leading-8 text-slate-400">{body}</p>
      </div>
    </article>
  );
}
