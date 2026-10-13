import Link from 'next/link';

export default function StudioFooter() {
  return (
    <footer className="studio-footer">
      <div className="studio-wrap studio-footer-inner">
        <div>
          <Link href="/" className="studio-footer-brand">
            LARRY HUSSEY<span>✳</span>
          </Link>
          <p>Independent AI engineering for the work that matters.</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/services">Services</Link>
          <Link href="/experience">Experience</Link>
          <a
            href="https://github.com/caneslarry"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/larryhussey/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>
        </nav>
        <span className="studio-footer-location">
          PALM BEACH, FL · WORKING EVERYWHERE
        </span>
      </div>
    </footer>
  );
}
