import ThemeToggle from './ThemeToggle';
import Hero from './Hero';
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Header() {
  return (
    <div className="text-gray-900 dark:text-white dark:bg-gray-900 bg-gray-100">
      {/* Fixed Top Bar */}
      <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-3 bg-gray-200 dark:bg-gray-800 shadow-md">
        {/* Contact Info */}
        <div className="flex items-center gap-4 text-sm">
          <a
            href="mailto:me@caneslarry.com"
            className="flex items-center gap-2 hover:text-blue-500"
          >
            <FaEnvelope /> me@caneslarry.com
          </a>
          <a
            href="tel:+15615100447"
            className="flex items-center gap-2 hover:text-green-500"
          >
            <FaPhone /> +1 (561) 510-0447
          </a>
          <a
            href="https://www.linkedin.com/in/larry.hussey"
            target="_blank"
            className="flex items-center gap-2 hover:text-blue-700"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/caneslarry"
            target="_blank"
            className="flex items-center gap-2 hover:text-gray-500"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <FaMapMarkerAlt /> West Palm Beach, FL
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <ThemeToggle />
      </div>

      {/* Push content down to prevent overlap */}
      <div className="pt-24">
        <Hero />
      </div>
    </div>
  );
}
