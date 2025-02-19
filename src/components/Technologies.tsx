import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Layout, Code, Box } from 'lucide-react';

const Technologies: React.FC = () => {
  const technologies = [
    {
      name: 'React',
      icon: <Layout className="w-8 h-8" />,
      description: 'A JavaScript library for building user interfaces with reusable components and efficient state management.',
      features: ['Component-Based', 'Virtual DOM', 'Unidirectional Data Flow']
    },
    {
      name: 'Next.js',
      icon: <Code className="w-8 h-8" />,
      description: 'The React framework for production that enables features like server-side rendering and static site generation.',
      features: ['Server-Side Rendering', 'Static Site Generation', 'API Routes']
    },
    {
      name: 'Docker',
      icon: <Box className="w-8 h-8" />,
      description: 'A platform for developing, shipping, and running applications in containers.',
      features: ['Containerization', 'Microservices', 'Easy Deployment']
    },
    {
      name: 'Nginx',
      icon: <Server className="w-8 h-8" />,
      description: 'A high-performance HTTP server and reverse proxy server.',
      features: ['Load Balancing', 'Caching', 'SSL/TLS']
    },
    {
      name: 'Express.js',
      icon: <Database className="w-8 h-8" />,
      description: 'A minimal and flexible Node.js web application framework.',
      features: ['Middleware', 'Routing', 'Template Engines']
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Technologies</h2>
        
        <div className="space-y-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="text-blue-600">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                  <p className="text-gray-600 mb-4">{tech.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tech.features.map((feature) => (
                      <span
                        key={feature}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;