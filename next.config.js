/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: __dirname,
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'egtzvtwnlhedxsqxcmja.supabase.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cms.triumphallifetimegroup.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/solutions/hr-consulting', destination: '/hr-business-consulting', permanent: true },
      { source: '/companies/hr-business-consulting', destination: '/hr-business-consulting', permanent: true },
      { source: '/solutions/real-estate', destination: '/real-estate-advisory', permanent: true },
      { source: '/companies/real-estate', destination: '/real-estate-advisory', permanent: true },
      { source: '/solutions/education', destination: '/global-education-advisory', permanent: true },
      { source: '/companies/education-advisory', destination: '/global-education-advisory', permanent: true },
      { source: '/solutions/global-mobility', destination: '/global-mobility-visa-services', permanent: true },
      { source: '/companies/global-visa-immigration', destination: '/global-mobility-visa-services', permanent: true },
      { source: '/solutions/digital-learning', destination: '/digital-products-ecommerce', permanent: true },
      { source: '/companies/digital-products-learning', destination: '/digital-products-ecommerce', permanent: true },
      { source: '/solutions/technology', destination: '/it-solutions', permanent: true },
      { source: '/companies/information-technology', destination: '/it-solutions', permanent: true },
      { source: '/foundation', destination: '/charity-foundation', permanent: true },
      { source: '/impact', destination: '/charity-foundation', permanent: true },
      { source: '/about/leadership', destination: '/leadership', permanent: true },
      { source: '/about/global-presence', destination: '/global-presence', permanent: true },
      { source: '/partnerships', destination: '/partners', permanent: true },
      { source: '/about/partners', destination: '/partners', permanent: true },
      { source: '/cookie-policy', destination: '/cookies', permanent: true },
    ];
  },
};

module.exports = nextConfig;
