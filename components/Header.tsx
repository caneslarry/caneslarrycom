import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/#work', label: 'Work' },
  { href: '/experience', label: 'Experience' },
];

export default function Header() {
  return (
    <header className="studio-header">
      <div className="studio-wrap studio-header-inner">
        <Link className="studio-brand" href="/" aria-label="Larry Hussey, home">
          <span className="studio-brand-mark">
            LH<span>.</span>
          </span>
          <span className="studio-brand-text">
            LARRY HUSSEY <small>AI ENGINEERING / ONE PERSON SHOP</small>
          </span>
        </Link>
        <nav className="studio-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <a
            className="studio-nav-contact"
            href="mailto:me@caneslarry.com?subject=Let's%20talk%20about%20a%20project"
          >
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </nav>
        <details className="studio-mobile-nav">
          <summary aria-label="Open navigation">
            Menu <span>+</span>
          </summary>
          <nav aria-label="Mobile navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <a href="mailto:me@caneslarry.com?subject=Let's%20talk%20about%20a%20project">
              Let&apos;s talk ↗
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
