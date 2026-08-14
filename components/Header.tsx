'use client';

import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Hero from './Hero';

const navigation = [
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Expertise', href: '#expertise', id: 'expertise' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Header() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState('top');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    const sections = ['top', ...navigation.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter((section): section is globalThis.HTMLElement => Boolean(section));
    const observer = new globalThis.IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.1, 0.25] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="relative overflow-hidden">
      <nav
        aria-label="Primary navigation"
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${scrolled ? 'border-white/10 bg-[#05080d]/85 shadow-[0_12px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl' : 'border-transparent bg-transparent'}`}
      >
        <motion.div
          className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400"
          style={{ scaleX: scrollYProgress }}
        />
        <div className="mx-auto flex h-[4.5rem] max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label="Larry Hussey, back to top"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] font-display text-sm font-extrabold text-white transition group-hover:border-cyan-400/50 group-hover:text-cyan-300">
              LH
            </span>
            <span className="hidden font-display text-sm font-bold tracking-tight text-white sm:block">
              Larry Hussey<span className="text-cyan-400">.</span>
            </span>
          </a>
          <div className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.035] p-1 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={
                  activeSection === item.id ? 'location' : undefined
                }
                className={`relative rounded-full px-4 py-2 text-xs font-semibold transition-colors ${activeSection === item.id ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                {activeSection === item.id && (
                  <motion.span
                    layoutId="active-navigation"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.09]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <a
              href="https://github.com/caneslarry"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Larry Hussey on GitHub"
              className="icon-button hidden sm:inline-flex"
            >
              <FaGithub aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/larryhussey/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Larry Hussey on LinkedIn"
              className="icon-button hidden sm:inline-flex"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
            <button
              type="button"
              aria-label={
                menuOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="icon-button md:hidden"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-white/10 bg-[#05080d]/95 backdrop-blur-xl md:hidden"
            >
              <div className="space-y-1 px-5 py-5">
                {navigation.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                    className="flex items-center justify-between rounded-xl px-3 py-3 font-display text-lg font-bold text-white hover:bg-white/[0.06]"
                  >
                    {item.label}
                    <span className="text-xs font-medium text-slate-600">
                      0{index + 1}
                    </span>
                  </motion.a>
                ))}
                <div className="flex gap-3 px-3 pt-4 text-sm text-slate-400">
                  <a
                    href="https://github.com/caneslarry"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/larryhussey/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <Hero />
    </header>
  );
}
