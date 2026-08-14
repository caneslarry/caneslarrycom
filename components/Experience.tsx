'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import SpotlightCard from './SpotlightCard';

const experience = [
  {
    role: 'Senior Software Engineer / Team Lead',
    company: 'Agora Data, LLC',
    dates: 'June 2024 — Present',
    summary:
      'Leading AI-driven dashboard development with React, Next.js, and GraphQL while improving delivery systems and full-stack performance.',
  },
  {
    role: 'Senior Full Stack Developer',
    company: 'WDG — The Web Development Group',
    dates: 'April 2023 — April 2024',
    summary:
      'Led large-scale PHP, JavaScript, and Python initiatives, including Salesforce-connected WordPress experiences and CI/CD delivery.',
  },
  {
    role: 'Senior Software Engineer / Team Lead',
    company: 'Model B',
    dates: 'March 2021 — March 2023',
    summary:
      'Built marketing automation products integrating analytics, customer engagement platforms, AWS, and Google Cloud.',
  },
  {
    role: 'Senior Software Engineer',
    company: 'ApparelMagic',
    dates: 'November 2018 — March 2021',
    summary:
      'Delivered business-critical integrations and guided Agile execution as a hands-on engineer and Scrum Master.',
  },
  {
    role: 'Lead Applications Architect / Director of Technology',
    company: 'The John Maxwell Team',
    dates: 'April 2010 — November 2018',
    summary:
      'Architected platforms serving 20,000+ clients, connected marketing journeys to Salesforce, built a custom LMS, and led the move from physical servers to cloud infrastructure.',
  },
];

export default function Experience() {
  const ref = useRef<globalThis.HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 65%', 'end 70%'],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 22 });
  return (
    <section id="experience" className="section-shell scroll-mt-20">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Career journey</p>
          <h2 className="section-title">A career built in systems.</h2>
        </div>
        <p className="section-intro">
          A career progressing from enterprise application foundations to
          architecture, product ownership, and hands-on engineering leadership.
        </p>
      </div>
      <div ref={ref} className="relative mt-14">
        <div className="absolute bottom-0 left-[7px] top-2 w-px bg-white/10 md:left-1/2">
          <motion.div
            style={{ scaleY: progress }}
            className="h-full origin-top bg-gradient-to-b from-cyan-400 via-sky-400 to-indigo-400"
          />
        </div>
        <div className="space-y-10 md:space-y-0">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.dates}`}
              initial={{ opacity: 0, x: index % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-18%' }}
              transition={{ duration: 0.55 }}
              className={`relative pl-10 md:grid md:grid-cols-2 md:gap-16 md:pb-14 md:pl-0 ${index % 2 ? 'md:[&>div]:col-start-2' : ''}`}
            >
              <span className="timeline-node absolute left-0 top-2 md:left-1/2 md:-translate-x-1/2" />
              <SpotlightCard
                className={`glass-card p-6 sm:p-7 ${index % 2 ? '' : 'md:text-right'}`}
              >
                <p className="text-sm font-semibold text-cyan-300">
                  {item.dates}
                </p>
                <h3 className="font-display mt-2 text-xl font-bold text-white">
                  {item.role}
                </h3>
                <p className="mt-1 font-medium text-slate-300">
                  {item.company}
                </p>
                <p className="mt-4 leading-7 text-slate-400">{item.summary}</p>
              </SpotlightCard>
            </motion.article>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-9 max-w-3xl text-center text-sm leading-6 text-slate-500">
        Earlier roles at Forte Interactive and Newsmax Media established the
        foundation: leading enterprise application development, creating
        reusable frameworks, and moving systems toward service-based
        architecture.
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <SpotlightCard className="glass-card p-6">
          <p className="eyebrow">Education</p>
          <h3 className="font-display mt-3 text-xl font-bold text-white">
            B.S. in Computer Science
          </h3>
          <p className="mt-2 text-slate-400">
            Florida Atlantic University · 1998–2002
          </p>
        </SpotlightCard>
        <SpotlightCard className="glass-card p-6">
          <p className="eyebrow">Certification</p>
          <h3 className="font-display mt-3 text-xl font-bold text-white">
            Certified ScrumMaster
          </h3>
          <p className="mt-2 text-slate-400">Scrum Alliance · Since 2018</p>
        </SpotlightCard>
      </div>
    </section>
  );
}
