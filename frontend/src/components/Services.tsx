import React from 'react';
import { 
  Code, 
  Smartphone, 
  Globe, 
  LineChart, 
  Shield, 
  Server,
  GraduationCap,
  Brain,
  Cpu
} from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies for exceptional user experiences.',
    icon: 'Code'
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
    icon: 'Smartphone'
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions to increase your online visibility and connect with your audience.',
    icon: 'Globe'
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics and visualization tools.',
    icon: 'LineChart'
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your digital assets with comprehensive security solutions and best practices.',
    icon: 'Shield'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable, reliable cloud infrastructure and services tailored to your business needs.',
    icon: 'Server'
  },
  {
    title: 'Internship Programs',
    description: 'Comprehensive training programs for students and professionals to gain hands-on industry experience.',
    icon: 'GraduationCap'
  },
  {
    title: 'AI Solutions',
    description: 'Cutting-edge artificial intelligence and machine learning solutions for business automation and optimization.',
    icon: 'Brain'
  },
  {
    title: 'IoT Development',
    description: 'Connected device solutions and IoT infrastructure for smart business applications.',
    icon: 'Cpu'
  }
];

const getIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case 'Code': return <Code className={className} />;
    case 'Smartphone': return <Smartphone className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'LineChart': return <LineChart className={className} />;
    case 'Shield': return <Shield className={className} />;
    case 'Server': return <Server className={className} />;
    case 'GraduationCap': return <GraduationCap className={className} />;
    case 'Brain': return <Brain className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    default: return <Code className={className} />;
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            We offer a comprehensive range of digital solutions to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-700 rounded-lg p-6 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border border-gray-100 dark:border-gray-600"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white group-hover:scale-110 transition-transform duration-300">
                {getIcon(service.icon, "w-6 h-6")}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;