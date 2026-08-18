export type ServiceStatus = 'available' | 'partner-delivered' | 'information-only' | 'coming-soon' | 'unavailable';
export type PricingMode = 'fixed' | 'starting-at' | 'custom-quote' | 'free';

export interface ServiceAvailability {
  serviceId: string;
  countryCode: string;
  status: ServiceStatus;
  positioning: string;
  currency?: string;
  contactMethods: ('email' | 'phone' | 'whatsapp')[];
  representativeId?: string;
  bookingAvailable: boolean;
  pricingMode: PricingMode;
  complianceNoticeId?: string;
  ctaConfiguration: {
    primaryText: string;
    primaryAction: 'book' | 'enquire' | 'apply' | 'upload';
    secondaryText?: string;
  };
}

export const MOCK_AVAILABILITY: ServiceAvailability[] = [
  {
    serviceId: 'hr-strategy',
    countryCode: 'ng',
    status: 'available',
    positioning: 'Tailored HR strategy for Nigerian SMEs and growing enterprises.',
    currency: 'NGN',
    contactMethods: ['email', 'whatsapp'],
    bookingAvailable: true,
    pricingMode: 'custom-quote',
    ctaConfiguration: {
      primaryText: 'Book an HR Consultation',
      primaryAction: 'book'
    }
  },
  {
    serviceId: 'visa-support',
    countryCode: 'ca',
    status: 'information-only',
    positioning: 'General administrative support and information for Canadian relocation.',
    contactMethods: ['email'],
    bookingAvailable: false,
    pricingMode: 'fixed',
    complianceNoticeId: 'visa-canada-no-guarantee',
    ctaConfiguration: {
      primaryText: 'Request Information',
      primaryAction: 'enquire'
    }
  },
  {
    serviceId: 'real-estate-sales',
    countryCode: 'ae',
    status: 'partner-delivered',
    positioning: 'Premium property acquisitions delivered through licensed UAE partners.',
    currency: 'AED',
    contactMethods: ['whatsapp', 'phone'],
    bookingAvailable: true,
    pricingMode: 'custom-quote',
    complianceNoticeId: 'real-estate-no-returns',
    ctaConfiguration: {
      primaryText: 'Speak to a Property Advisor',
      primaryAction: 'book'
    }
  }
];
