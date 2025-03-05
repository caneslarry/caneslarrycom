import ThemeToggle from './ThemeToggle';
import Hero from './Hero';
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import ChatbotModal from './ChatbotModal';

export default function Header() {
  return (
    <div className="text-gray-900 dark:text-white dark:bg-gray-900 bg-gray-100">
      {/* Fixed Top Bar */}
      <div className="fixed top-0 left-0 w-full z-50 flex flex-col items-center px-4 py-3 bg-gray-200 dark:bg-gray-800 shadow-md">
        {/* Contact Info - Full width on mobile, centered on larger screens */}
        <div className="w-full flex justify-between items-center md:justify-center">
          <div className="w-full grid grid-cols-5 sm:flex sm:justify-center gap-4 text-sm">
            <a
              href="mailto:me@caneslarry.com"
              className="flex items-center justify-center gap-2 hover:text-blue-500"
            >
              <FaEnvelope />
              <span className="hidden md:block">me@caneslarry.com</span>
            </a>
            <a
              href="tel:+15615100447"
              className="flex items-center justify-center gap-2 hover:text-green-500"
            >
              <FaPhone />
              <span className="hidden md:block">+1 (561) 510-0447</span>
            </a>
            <a
              href="https://www.linkedin.com/in/larry.hussey"
              target="_blank"
              className="flex items-center justify-center gap-2 hover:text-blue-700"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <span className="hidden md:block">LinkedIn</span>
            </a>
            <a
              href="https://github.com/caneslarry"
              target="_blank"
              className="flex items-center justify-center gap-2 hover:text-gray-500"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span className="hidden md:block">GitHub</span>
            </a>
            <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
              <FaMapMarkerAlt />
              <span className="hidden md:block">Palm Beach,</span> FL
            </div>
          </div>
          {/* Dark Mode Toggle */}
          <div className="pl-4">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Push content down to prevent overlap */}
      <div className="pt-24">
        <Hero />
      </div>
      <ChatbotModal />
    </div>
  );
}
