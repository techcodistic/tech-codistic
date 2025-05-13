export type Theme = 'dark' | 'light';

export interface NavLink {
  name: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
}

export interface Internship {
  title: string;
  duration: string;
  stipend: string;
  description: string;
  requirements: string[];
  skills: string[];
}

export interface VerificationStatus {
  isVerified: boolean;
  message: string;
}