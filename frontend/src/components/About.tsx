import React from 'react';
import { CheckCircle, Award, Users, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl transform -rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Our team collaborating"
                className="relative rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">500+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Team Members</div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Pioneering Digital Innovation at <span className="font-bold text-xxl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">TechCodistic</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Founded in 2024, TechCodistic has established itself as a leading force in digital transformation. 
              Our mission is to empower businesses with innovative technology solutions that drive growth and 
              create lasting impact. With a team of passionate experts and a culture of continuous innovation, 
              we've helped hundreds of organizations across the globe achieve their digital ambitions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              We believe in creating solutions that not only solve today's challenges but are built to evolve 
              with your business. Our client-first approach, combined with technical excellence and industry 
              expertise, ensures that every project we undertake delivers exceptional value and results.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Industry Recognition</h3>
                  <p className="text-gray-600 dark:text-gray-300">Multiple credits for digital innovation</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Expert Team</h3>
                  <p className="text-gray-600 dark:text-gray-300">Certified professionals across technologies</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Globe className="w-8 h-8 text-green-600 dark:text-green-400" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Global Reach</h3>
                  <p className="text-gray-600 dark:text-gray-300">Serving clients worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;