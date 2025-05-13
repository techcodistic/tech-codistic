import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, LineChart, Shield, Server, GraduationCap, Brain, Cpu } from 'lucide-react';

const features = [
  {
    title: 'Web Development',
    description: 'Build responsive and dynamic websites using modern technologies.',
    icon: Code,
    color: 'blue'
  },
  {
    title: 'App Development',
    description: 'Create native and cross-platform mobile applications.',
    icon: Smartphone,
    color: 'purple'
  },
  {
    title: 'Digital Marketing',
    description: 'Boost your online presence with effective marketing strategies.',
    icon: Globe,
    color: 'green'
  },
  {
    title: 'UI/UX Design',
    description: 'Design intuitive and engaging user interfaces.',
    icon: LineChart,
    color: 'pink'
  },
  {
    title: 'Cloud Computing',
    description: 'Leverage cloud technologies for scalable solutions.',
    icon: Server,
    color: 'indigo'
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your digital assets with advanced security measures.',
    icon: Shield,
    color: 'red'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the powerful features that make TechCodistic stand out from the crowd.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-lg bg-${feature.color}-100 dark:bg-${feature.color}-900/30 flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}-600 dark:text-${feature.color}-400`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;