import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    content: "Working with TechCodistic transformed our business. Their team delivered a solution that exceeded our expectations and has significantly improved our customer engagement.",
    author: "Alexandra Rivera",
    role: "CEO",
    company: "TechStart Inc."
  },
  {
    content: "The mobile app developed by TechCodistic helped us reach a whole new audience. Their attention to detail and user experience expertise made all the difference.",
    author: "James Wilson",
    role: "Marketing Director",
    company: "Innovate Solutions"
  },
  {
    content: "We've worked with several development agencies, but none have matched the level of professionalism and technical expertise that TechCodistic brings to the table.",
    author: "Sophia Chen",
    role: "CTO",
    company: "Future Finance"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Don't just take our word for it. Hear from some of our satisfied clients.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 md:p-12 shadow-md">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-blue-300 dark:text-blue-800/40" />
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl italic mb-6 text-gray-700 dark:text-gray-300">
                "{testimonials[currentIndex].content}"
              </p>
              <div className="flex flex-col md:flex-row justify-end items-start md:items-center">
                {/* <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                </div> */}
                <div className="flex space-x-2 mt-4 md:mt-0">
                  <button 
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-white dark:bg-gray-700 shadow hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex 
                    ? 'bg-blue-600 dark:bg-blue-400' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;