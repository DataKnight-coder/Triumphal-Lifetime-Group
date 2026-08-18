export type NeedType = 'grow' | 'talent' | 'property' | 'study' | 'relocate' | 'resources' | 'community' | 'tech';
export type CountryCode = 'ng' | 'ae' | 'ca' | 'other';
export type ITMode = 'hidden' | 'group-capability' | 'pillar';

export interface RouteRecommendation {
  companyName: string;
  serviceName: string;
  url: string;
  contactType: 'book' | 'enquire' | 'apply' | 'donate';
}

// Configurable flag (could be drawn from env or SiteSettings DB)
export const informationTechnologyMode: ITMode = 'group-capability';

export function getRecommendation(need: NeedType, country: CountryCode): RouteRecommendation {
  
  // Specific overrides based on location could go here
  if (need === 'tech' && informationTechnologyMode !== 'hidden') {
    return {
      companyName: 'Information Technology',
      serviceName: 'Digital Transformation & Software',
      url: '/companies/information-technology',
      contactType: 'book'
    };
  }

  switch (need) {
    case 'grow':
      return {
        companyName: 'HR & Business Consulting',
        serviceName: 'Business Consulting & Strategy',
        url: '/companies/hr-business-consulting',
        contactType: 'book'
      };
    case 'talent':
      return {
        companyName: 'HR & Business Consulting',
        serviceName: 'Recruitment & Talent Acquisition',
        url: '/companies/hr-business-consulting',
        contactType: 'enquire'
      };
    case 'property':
      return {
        companyName: 'Real Estate Services',
        serviceName: 'Property Search & Investment',
        url: '/companies/real-estate',
        contactType: 'enquire'
      };
    case 'study':
      return {
        companyName: 'Education Advisory',
        serviceName: 'University Placement & Advisory',
        url: '/companies/education-advisory',
        contactType: 'book'
      };
    case 'relocate':
      return {
        companyName: 'Global Visa & Immigration',
        serviceName: 'Mobility & Relocation Support',
        url: '/companies/global-visa-immigration',
        contactType: 'book'
      };
    case 'resources':
      return {
        companyName: 'Digital Products & Learning',
        serviceName: 'Masterclasses & Resources',
        url: '/store',
        contactType: 'enquire'
      };
    case 'community':
      return {
        companyName: 'Triumphal Charity Foundation',
        serviceName: 'Community Impact Programmes',
        url: '/foundation',
        contactType: 'donate'
      };
    default:
      return {
        companyName: 'Triumphal Lifetime Group',
        serviceName: 'General Consultation',
        url: '/contact',
        contactType: 'book'
      };
  }
}
