'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { Blocks, Cloud, Compass, Database, Rocket, Users } from 'lucide-react';
import { useRef } from 'react';

const journey = [
  {
    title: 'Product strategy',
    short: 'Frame',
    description:
      'Find the real constraint, define the useful outcome, and translate stakeholder needs into an executable product direction.',
    icon: Compass,
    skills: ['Discovery', 'Requirements', 'Product UX', 'Technical direction'],
  },
  {
    title: 'System design',
    short: 'Design',
    description:
      'Modernize complex systems with clear boundaries, dependable data, and room to evolve.',
    icon: Database,
    skills: ['Architecture', 'GraphQL', 'Postgres', 'APIs', 'Cloud migration'],
  },
  {
    title: 'Engineering',
    short: 'Build',
    description:
      'Create maintainable enterprise and AI-assisted products across the stack with quality built into the workflow.',
    icon: Blocks,
    skills: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'PHP'],
  },
  {
    title: 'Delivery',
    short: 'Ship',
    description:
      'Move deliberately from code to production through observable, repeatable delivery systems.',
    icon: Rocket,
    skills: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'CI/CD'],
  },
  {
    title: 'Team leadership',
    short: 'Scale',
    description:
      'Align teams, executives, and clients around the context, standards, and trust required to deliver well.',
    icon: Users,
    skills: ['Mentoring', 'Agile', 'Security', 'Scrum'],
  },
];

export default function Skills() {
  const ref = useRef<globalThis.HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 65%'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section
      id="expertise"
      className="relative scroll-mt-20 border-y border-white/[0.06] bg-white/[0.012]"
    >
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">How I work</p>
            <h2 className="section-title">
              From first question to lasting system.
            </h2>
          </div>
          <p className="section-intro">
            The value is not one framework or cloud. It is connecting product
            judgment, architecture, execution, and leadership into one
            continuous practice.
          </p>
        </div>

        <div ref={ref} className="relative mt-16 lg:mt-24">
          <div className="absolute bottom-10 left-[1.15rem] top-10 w-px bg-white/10 lg:bottom-auto lg:left-0 lg:right-0 lg:top-[2.2rem] lg:h-px lg:w-auto">
            <motion.div
              style={{ scaleY: progress }}
              className="h-full origin-top bg-gradient-to-b from-cyan-400 to-indigo-400 lg:hidden"
            />
            <motion.div
              style={{ scaleX: progress }}
              className="hidden h-full origin-left bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 lg:block"
            />
          </div>
          <div className="relative grid gap-7 lg:grid-cols-5 lg:gap-4">
            {journey.map(
              ({ title, short, description, icon: Icon, skills }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-12%' }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="group grid grid-cols-[2.4rem_1fr] gap-5 lg:block"
                >
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#05080d] text-slate-500 transition duration-300 group-hover:border-cyan-400/50 group-hover:text-cyan-300 lg:mb-8">
                    <Icon size={16} aria-hidden="true" />
                    <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-slate-700 transition group-hover:bg-cyan-300 group-hover:shadow-[0_0_12px_#22d3ee]" />
                  </div>
                  <div className="pb-6 lg:pr-5">
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-cyan-500">
                      0{index + 1} / {short}
                    </span>
                    <h3 className="font-display mt-3 text-xl font-bold text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[0.68rem] font-semibold text-slate-500 transition group-hover:text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              )
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.035] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Cloud size={19} className="text-cyan-300" />
            <p className="font-display font-bold text-white">
              Broad technology range. One accountable owner.
            </p>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            I can move from a product conversation to an architecture review to
            the implementation details without losing the thread.
          </p>
        </div>
      </div>
    </section>
  );
}
