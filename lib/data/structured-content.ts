export type CountryCode = 'ng' | 'ae' | 'ca';

export interface Company {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  coreCapabilities: string[];
  imageUrl: string;
}

export interface Service {
  id: string;
  companyId: string;
  title: string;
  description: string;
  eligibility?: string;
  inclusions?: string[];
}

export const COMPANIES: Company[] = [
  {
    id: 'hr-consulting',
    name: 'HR & Business Consulting',
    slug: 'hr-business-consulting',
    shortDescription: 'Helping organisations build better people, stronger systems and sustainable strategies for growth.',
    coreCapabilities: ['HR Strategy & Advisory', 'Policies & Handbooks', 'Recruitment & Talent Acquisition'],
    imageUrl: '/images/hr-consulting.jpg' // Placeholder
  },
  {
    id: 'real-estate',
    name: 'Real Estate Services',
    slug: 'real-estate-services',
    shortDescription: 'Helping individuals, families, businesses and investors make informed property decisions.',
    coreCapabilities: ['Property Sales & Leasing', 'Property Search & Buyer Support', 'Property Management'],
    imageUrl: '/images/real-estate.jpg' // Placeholder
  },
  // Other pillars omitted for Phase B brevity, though they exist in data.
];

export const HR_SERVICES: Service[] = [
  {
    id: 'hr-strategy',
    companyId: 'hr-consulting',
    title: 'HR Strategy and Advisory',
    description: 'Assess workforce needs, structure and business goals; create a practical roadmap covering recruitment, performance, retention, culture and leadership.'
  },
  {
    id: 'policies-handbooks',
    companyId: 'hr-consulting',
    title: 'Policies, Handbooks and Compliance Support',
    description: 'Develop or review employee handbooks, leave rules, codes of conduct, remote-work rules, grievance procedures and onboarding/offboarding processes.'
  },
  {
    id: 'recruitment',
    companyId: 'hr-consulting',
    title: 'Recruitment and Talent Acquisition',
    description: 'Define roles, prepare job descriptions, advertise vacancies, screen candidates, coordinate interviews, support checks and design onboarding plans.'
  }
];
