import React, { useState } from 'react';
import { Menu, X, Code, GraduationCap } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo.png';
import { NavLink } from '../types';


const links: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  // { name: 'Features', href: '#features' },
  { name: 'Blog', href: '#blog' },
  { name: 'Internships', href: '#internships' },
  { name: 'Verify ID', href: '#verify' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="h-13 w-12" />
              <span className="font-bold text-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent redressed-font">
                TechCodistic
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors flex items-center gap-1
                  ${link.name === 'Verify ID' ? 'bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full' : ''}`}
              >
                {link.name === 'Verify ID' && <GraduationCap className="w-4 h-4" />}
                {link.name}
              </a>
            ))}
            <ThemeToggle />
            <a
              href="#contact"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
            >
              Get Started
            </a>
          </nav>

          <div className="flex items-center md:hidden gap-4">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all duration-300">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-2
                  ${link.name === 'Verify ID' ? 'bg-green-50 dark:bg-green-900/20 rounded-md' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name === 'Verify ID' && <GraduationCap className="w-4 h-4" />}
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                className="block w-full text-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;