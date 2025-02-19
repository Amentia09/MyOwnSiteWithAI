import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

const Home: React.FC = () => {
  const [showContact, setShowContact] = useState(false);
  const [showContactButton, setShowContactButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowContactButton(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const workExperience = [
    {
      company: "Beeline Kazakhstan",
      period: "2021 - Present",
      description: "Working on the front end of applications. Analytics and display of data from devices. Setting up integration systems"
    },
    {
      company: "Aitas",
      period: "2024 - 2025",
      description: "Displaying indicators in real time. Working with integration materials and databases. Providing comfortable monitoring with the development of custom widgets"
    },
    {
      company: "КГП на ПХВ \"Высший медицинский колледж\"",
      period: "2021 - 2024",
      description: "Full-stack developer working on innovative solutions. Leading and conducting psychometric testing. Publishing front and back parts of the application. Also subsequent technical maintenance."
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <img
            src="https://i.imgur.com/oIsDqu5.jpeg"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          <div>
            <h1 className="text-4xl font-bold mb-4">Anna Simonenko</h1>
            <p className="text-xl text-gray-600">Middle Full Stack Developer</p>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
          {workExperience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-blue-600">{exp.company}</h3>
              <p className="text-gray-500 mt-1">{exp.period}</p>
              <p className="mt-3">{exp.description}</p>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {showContactButton && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-8 right-8"
            >
              <button
                onClick={() => setShowContact(!showContact)}
                className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showContact && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed bottom-24 right-8 bg-white p-6 rounded-lg shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" />
                  <span>Anna.simi.007@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-600" />
                  <span>@Amentia09 - Telegram</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;