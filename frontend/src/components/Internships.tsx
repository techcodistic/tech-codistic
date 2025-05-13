import React, { useState } from 'react';
import { Search, Calendar, CheckCircle } from 'lucide-react';
import type { Internship } from '../types';

const internships: Internship[] = [
  {
    title: 'Frontend Developer Internship',
    duration: '3-6 months',
    stipend: '₹15,000-25,000/month',
    description: 'Join our frontend team to build modern, responsive web applications using React, TypeScript, and modern CSS frameworks.',
    requirements: ['Currently pursuing B.Tech/B.E. in CS/IT', 'Strong understanding of HTML, CSS, JavaScript', 'Basic knowledge of React'],
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Git']
  },
  {
    title: 'Backend Developer Internship',
    duration: '4-6 months',
    stipend: '₹20,000-30,000/month',
    description: 'Work on scalable backend systems using Node.js, Express, and various databases.',
    requirements: ['B.Tech/B.E. in CS/IT', 'Knowledge of Node.js', 'Understanding of databases'],
    skills: ['Node.js', 'Express', 'MongoDB', 'SQL']
  },
  {
    title: 'Fullstack Developer Internship',
    duration: '6 months',
    stipend: '₹25,000-35,000/month',
    description: 'Develop end-to-end applications while working with both frontend and backend technologies.',
    requirements: ['B.Tech/B.E. in CS/IT', 'Full stack development experience', 'Problem-solving skills'],
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB']
  },
  {
    title: 'Bug Bounty Internship',
    duration: '3-4 months',
    stipend: '₹20,000-40,000/month',
    description: 'Help identify and fix security vulnerabilities in our systems and applications.',
    requirements: ['Knowledge of web security', 'Experience with bug hunting', 'Understanding of OWASP'],
    skills: ['Web Security', 'Penetration Testing', 'Bug Hunting']
  },
  {
    title: 'App Developer Internship',
    duration: '4-6 months',
    stipend: '₹20,000-30,000/month',
    description: 'Build native mobile applications for iOS and Android platforms.',
    requirements: ['Mobile development experience', 'Knowledge of Swift or Kotlin', 'UI/UX understanding'],
    skills: ['iOS', 'Android', 'React Native', 'Flutter']
  },
  {
    title: 'Java Developer Internship',
    duration: '3-6 months',
    stipend: '₹18,000-28,000/month',
    description: 'Develop enterprise applications using Java and related frameworks.',
    requirements: ['Strong Java programming skills', 'Knowledge of Spring Boot', 'Database experience'],
    skills: ['Java', 'Spring Boot', 'Hibernate', 'MySQL']
  },
  {
    title: 'Python Developer Internship',
    duration: '3-6 months',
    stipend: '₹15,000-25,000/month',
    description: 'Work on Python-based applications and automation scripts.',
    requirements: ['Python programming experience', 'Knowledge of frameworks', 'Problem-solving ability'],
    skills: ['Python', 'Django', 'Flask', 'Data Analysis']
  },
  {
    title: 'Cyber Security Internship',
    duration: '4-6 months',
    stipend: '₹25,000-35,000/month',
    description: 'Learn and implement security measures to protect systems and networks.',
    requirements: ['Understanding of cybersecurity', 'Network knowledge', 'Security tools experience'],
    skills: ['Network Security', 'Ethical Hacking', 'Security Tools']
  },
  {
    title: 'Machine Learning Internship',
    duration: '6 months',
    stipend: '₹30,000-40,000/month',
    description: 'Develop and implement machine learning models and algorithms.',
    requirements: ['Strong mathematics background', 'Python programming', 'ML framework knowledge'],
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Data Science']
  },
  {
    title: 'Penetration Testing Internship',
    duration: '3-6 months',
    stipend: '₹20,000-35,000/month',
    description: 'Conduct security assessments and penetration testing of applications.',
    requirements: ['Security testing experience', 'Knowledge of security tools', 'Ethical hacking skills'],
    skills: ['Penetration Testing', 'Security Tools', 'Network Security']
  },
  {
    title: 'DevOps Internship',
    duration: '4-6 months',
    stipend: '₹25,000-35,000/month',
    description: 'Work with DevOps tools and practices to streamline development and deployment.',
    requirements: ['Understanding of DevOps', 'Cloud platforms knowledge', 'CI/CD experience'],
    skills: ['Docker', 'Kubernetes', 'AWS', 'Jenkins']
  },
  {
    title: 'Artificial Intelligence Internship',
    duration: '6 months',
    stipend: '₹30,000-45,000/month',
    description: 'Work on cutting-edge AI projects and develop intelligent systems.',
    requirements: ['Strong AI/ML fundamentals', 'Python expertise', 'Research experience'],
    skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP']
  },
  {
    title: 'Data Scientist Internship',
    duration: '4-6 months',
    stipend: '₹25,000-40,000/month',
    description: 'Apply statistical analysis and machine learning to solve complex business problems.',
    requirements: ['Statistics knowledge', 'Programming skills', 'Data visualization'],
    skills: ['Python', 'R', 'SQL', 'Tableau']
  },
  {
    title: 'C++ Programming Internship',
    duration: '3-6 months',
    stipend: '₹18,000-30,000/month',
    description: 'Develop high-performance applications using C++.',
    requirements: ['Strong C++ programming', 'Data structures', 'Algorithm design'],
    skills: ['C++', 'STL', 'Multi-threading', 'Performance Optimization']
  },
  {
    title: 'AutoCAD Internship',
    duration: '3-4 months',
    stipend: '₹15,000-25,000/month',
    description: 'Create and modify technical drawings using AutoCAD.',
    requirements: ['AutoCAD proficiency', 'Technical drawing', '2D/3D modeling'],
    skills: ['AutoCAD', '2D Design', '3D Modeling', 'Technical Drawing']
  },
  {
    title: 'AWS Internship',
    duration: '4-6 months',
    stipend: '₹25,000-35,000/month',
    description: 'Work with AWS cloud services and infrastructure.',
    requirements: ['Cloud computing knowledge', 'AWS fundamentals', 'Linux skills'],
    skills: ['AWS', 'Cloud Computing', 'DevOps', 'Infrastructure']
  },
  {
    title: 'Robotics Internship',
    duration: '6 months',
    stipend: '₹25,000-40,000/month',
    description: 'Design and program robots for various applications.',
    requirements: ['Robotics fundamentals', 'Programming skills', 'Electronics knowledge'],
    skills: ['ROS', 'Python', 'C++', 'Electronics']
  },
  {
    title: 'RCC Structure Design Internship',
    duration: '3-6 months',
    stipend: '₹18,000-28,000/month',
    description: 'Learn and apply structural design principles for RCC structures.',
    requirements: ['Civil engineering background', 'AutoCAD knowledge', 'Structural analysis'],
    skills: ['AutoCAD', 'Structural Design', 'STAAD.Pro', 'Civil Engineering']
  },
  {
    title: 'Software Testing Internship',
    duration: '3-6 months',
    stipend: '₹15,000-25,000/month',
    description: 'Learn and implement various software testing methodologies.',
    requirements: ['Testing fundamentals', 'Basic programming', 'Analytical skills'],
    skills: ['Manual Testing', 'Automation Testing', 'Selenium', 'JUnit']
  },
  {
    title: 'UI/UX Design Internship',
    duration: '3-6 months',
    stipend: '₹20,000-30,000/month',
    description: 'Create user-centered designs for web and mobile applications.',
    requirements: ['Design tools knowledge', 'UI/UX principles', 'Prototyping skills'],
    skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping']
  },
  {
    title: 'Data Analytics Internship',
    duration: '4-6 months',
    stipend: '₹20,000-35,000/month',
    description: 'Analyze data to provide actionable insights for business decisions.',
    requirements: ['Analytics tools knowledge', 'SQL proficiency', 'Statistical analysis'],
    skills: ['Python', 'SQL', 'Power BI', 'Excel']
  },
  {
    title: 'WordPress Internship',
    duration: '3-4 months',
    stipend: '₹15,000-25,000/month',
    description: 'Build and maintain WordPress websites and custom themes.',
    requirements: ['WordPress experience', 'PHP basics', 'HTML/CSS knowledge'],
    skills: ['WordPress', 'PHP', 'HTML/CSS', 'JavaScript']
  },
  {
    title: 'Digital Marketing Internship',
    duration: '3-6 months',
    stipend: '₹15,000-25,000/month',
    description: 'Learn and implement digital marketing strategies.',
    requirements: ['Marketing fundamentals', 'Social media knowledge', 'Content creation'],
    skills: ['SEO', 'Social Media', 'Content Marketing', 'Analytics']
  },
  {
    title: 'Graphic Design Internship',
    duration: '3-6 months',
    stipend: '₹15,000-25,000/month',
    description: 'Create visual content for various digital platforms.',
    requirements: ['Design software proficiency', 'Creative skills', 'Typography knowledge'],
    skills: ['Photoshop', 'Illustrator', 'InDesign', 'Typography']
  },
  {
    title: 'Data Entry Internship',
    duration: '2-3 months',
    stipend: '₹10,000-15,000/month',
    description: 'Manage and maintain accurate data records.',
    requirements: ['Attention to detail', 'MS Office proficiency', 'Typing speed'],
    skills: ['MS Excel', 'Data Entry', 'Documentation', 'Organization']
  },
  {
    title: 'Social Media Internship',
    duration: '3-4 months',
    stipend: '₹12,000-20,000/month',
    description: 'Manage and grow social media presence across platforms.',
    requirements: ['Social media knowledge', 'Content creation', 'Communication skills'],
    skills: ['Social Media Management', 'Content Creation', 'Analytics', 'Copywriting']
  },
  {
    title: 'Database Administration Internship',
    duration: '4-6 months',
    stipend: '₹20,000-30,000/month',
    description: 'Manage and maintain database systems.',
    requirements: ['Database fundamentals', 'SQL proficiency', 'System administration'],
    skills: ['SQL', 'Oracle', 'MongoDB', 'Database Management']
  },
  {
    title: 'Automotive Technician Internship',
    duration: '3-6 months',
    stipend: '₹15,000-25,000/month',
    description: 'Learn automotive repair and maintenance techniques.',
    requirements: ['Automotive knowledge', 'Technical skills', 'Diagnostic abilities'],
    skills: ['Auto Repair', 'Diagnostics', 'Maintenance', 'Technical Skills']
  },
  {
    title: 'Mechanical Designer Internship',
    duration: '4-6 months',
    stipend: '₹20,000-30,000/month',
    description: 'Design mechanical components and systems.',
    requirements: ['CAD proficiency', 'Mechanical engineering', 'Design principles'],
    skills: ['AutoCAD', 'SolidWorks', 'Mechanical Design', '3D Modeling']
  },
  {
    title: 'Robotics & Automation Internship',
    duration: '6 months',
    stipend: '₹25,000-40,000/month',
    description: 'Work on robotics and automation projects.',
    requirements: ['Robotics knowledge', 'Programming skills', 'Electronics basics'],
    skills: ['Robotics', 'PLC', 'Automation', 'Programming']
  }
];

const Internships: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInternships = internships.filter(internship =>
    internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    internship.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="internships" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Available Virtual Internships
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Kickstart your career with our industry-leading internship programs. Gain hands-on experience and learn from experts.
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by role or skill..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInternships.map((internship, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {internship.title}
                </h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{internship.duration}</span>
                  </div>
                  {/* <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span>{internship.stipend}</span>
                  </div> */}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {internship.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Requirements:</h4>
                  <ul className="space-y-2">
                    {internship.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="https://forms.gle/nDL8yUfS3xj4XHyQ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 inline-block text-center"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;