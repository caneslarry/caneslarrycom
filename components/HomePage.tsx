import { MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Contact from './Contact';
import Experience from './Experience';
import Impact from './Impact';
import Projects from './Projects';
import Skills from './Skills';

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Impact />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
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
