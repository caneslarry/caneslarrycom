import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Projects from './Projects';
import Skills from './Skills';

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
];

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Projects />
      <Skills />

      <section id="experience" className="section-shell scroll-mt-20">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Career journey</p>
            <h2 className="section-title">Built through experience.</h2>
          </div>
          <p className="section-intro">
            Two decades of hands-on engineering, technical direction, and
            building teams around meaningful product outcomes.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-cyan-400 via-white/20 to-transparent md:left-1/2" />
          <div className="space-y-10 md:space-y-0">
            {experience.map((item, index) => (
              <article
                key={`${item.company}-${item.dates}`}
                className={`relative pl-10 md:grid md:grid-cols-2 md:gap-16 md:pb-14 md:pl-0 ${
                  index % 2 === 0 ? '' : 'md:[&>div]:col-start-2'
                }`}
              >
                <span className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-4 border-slate-950 bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,0.65)] md:left-1/2 md:-translate-x-1/2" />
                <div
                  className={`glass-card p-6 sm:p-7 ${
                    index % 2 === 0 ? 'md:text-right' : ''
                  }`}
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
                  <p className="mt-4 leading-7 text-slate-400">
                    {item.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="glass-card p-6">
            <p className="eyebrow">Education</p>
            <h3 className="font-display mt-3 text-xl font-bold text-white">
              B.S. in Computer Science
            </h3>
            <p className="mt-2 text-slate-400">
              Florida Atlantic University · 1998–2002
            </p>
          </div>
          <div className="glass-card p-6">
            <p className="eyebrow">Certification</p>
            <h3 className="font-display mt-3 text-xl font-bold text-white">
              Certified ScrumMaster
            </h3>
            <p className="mt-2 text-slate-400">Scrum Alliance · Since 2018</p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 pb-8 pt-20 sm:px-8 sm:pt-28">
        <div className="contact-panel relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] px-6 py-14 sm:px-12 sm:py-20 lg:px-20">
          <div className="relative z-10 max-w-3xl">
            <p className="eyebrow">Let&apos;s build something useful</p>
            <h2 className="font-display mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
              Have a difficult product or engineering problem?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I&apos;m always interested in ambitious products, complex systems,
              and opportunities to help a strong engineering team deliver its
              best work.
            </p>
            <a href="mailto:me@caneslarry.com" className="button-primary mt-9">
              <Mail size={18} aria-hidden="true" />
              Start a conversation
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-slate-300">Larry Hussey</p>
          <p className="mt-1 flex items-center gap-1.5">
            <MapPin size={14} aria-hidden="true" />
            Palm Beach, Florida
          </p>
        </div>
        <p>Senior engineering leadership, from architecture to delivery.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/caneslarry"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaGithub aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/larryhussey/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaLinkedin aria-hidden="true" />
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
