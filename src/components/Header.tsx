import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const sections = ['Home', 'My Skills', 'Technologies Used'];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-4">
        <ul className="flex space-x-8 h-16 items-center">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => setActiveSection(section)}
                className={`relative px-3 py-2 text-lg transition-colors ${
                  activeSection === section ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'
                }`}
              >
                {section}
                {activeSection === section && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;