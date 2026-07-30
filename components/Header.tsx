import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import Hero from './Hero';

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <nav
        aria-label="Primary navigation"
        className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-white"
          >
            Larry<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/caneslarry"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Larry Hussey on GitHub"
              className="icon-button"
            >
              <FaGithub aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/larryhussey/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Larry Hussey on LinkedIn"
              className="icon-button"
            >
              <FaLinkedin aria-hidden="true" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </nav>
      <Hero />
    </header>
  );
}
