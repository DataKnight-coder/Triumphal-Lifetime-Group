export type NoticeLevel = 'info' | 'warning' | 'strict-compliance';
export type PlacementRequirement = 'footer' | 'near-cta' | 'page-top' | 'form-consent';

export interface ComplianceNotice {
  id: string;
  serviceCategory: string;
  countryCode: string | 'all';
  level: NoticeLevel;
  placement: PlacementRequirement[];
  disclaimerText: string;
  ctaRestriction?: boolean;
  requiresRegulatedProfessional: boolean;
}

export const COMPLIANCE_NOTICES: ComplianceNotice[] = [
  {
    id: 'real-estate-no-returns',
    serviceCategory: 'real-estate',
    countryCode: 'all',
    level: 'strict-compliance',
    placement: ['near-cta', 'footer'],
    disclaimerText: 'Do not promise returns or present unverified listings. Regulated brokerage, legal, valuation and financial services must be provided by appropriately licensed professionals in each country.',
    requiresRegulatedProfessional: true
  },
  {
    id: 'visa-canada-no-guarantee',
    serviceCategory: 'global-visa-immigration',
    countryCode: 'ca',
    level: 'strict-compliance',
    placement: ['near-cta', 'footer', 'form-consent'],
    disclaimerText: 'We do not guarantee visas, permits, permanent residence or processing times. Regulated immigration advice must be provided by authorised professionals.',
    requiresRegulatedProfessional: true,
    ctaRestriction: true
  },
  {
    id: 'education-no-admission-guarantee',
    serviceCategory: 'education-advisory',
    countryCode: 'all',
    level: 'warning',
    placement: ['footer'],
    disclaimerText: 'We do not guarantee university admission, scholarships, or study permits.',
    requiresRegulatedProfessional: false
  },
  {
    id: 'it-no-complete-security',
    serviceCategory: 'information-technology',
    countryCode: 'all',
    level: 'info',
    placement: ['footer'],
    disclaimerText: 'We do not claim that any system is completely secure or risk-free.',
    requiresRegulatedProfessional: false
  }
];
