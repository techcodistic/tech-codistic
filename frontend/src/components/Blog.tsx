import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'The Security Risks of Changing Package Owners',
    rank: 'By CEO & Co-Founder',
    excerpt: 'Explore the critical security implications of package ownership transfers in software development. Learn about potential supply chain attacks through compromised packages and best practices for verifying package authenticity. Discover essential steps to protect your projects from malicious package takeovers.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    // category: 'Web Development',
    
  },
  {
    title: 'Tips To Protecting Your Business and Family',
    rank: 'By Business Analyst',
    excerpt: 'Discover comprehensive strategies for safeguarding both your business assets and family,s digital security. Learn about implementing robust cybersecurity measures, creating secure backup systems about online safety. Get practical tips on securing networks, and protecting sensitive data across both professional and personal domains.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    // category: 'Artificial Intelligence',
    
  },
  {
    title: 'Protect Your Workplace From Cyber Attacks',
    rank: 'By Chief Technology Officer',
    excerpt: 'Learn essential strategies for defending your organization against evolving cyber threats. Discover how to implement multi-layered security measures, train employees on cybersecurity, and establish incident protocols. Get actionable insights on vulnerability assessments, access control, and creating a security-first workplace culture.',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    // category: 'Security',
   
  }
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with our latest insights, tutorials, and industry news.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                {/* <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {post.category}
                  </span>
                </div> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {post.rank}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                {/* <a
                  href="#"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a> */}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;