import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Transforming Ideas into 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {" Digital Excellence"}
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses with cutting-edge technology solutions, expert development, and innovative digital strategies for the modern age.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
            <a
              href="#services"
              className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Our Services
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 text-lg font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-2 left-1/2 hidden md:block transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToServices}
            className="p-2 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
            aria-label="Scroll to services"
          >
            <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;