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
      {
        source: '/companies/hr-business-consulting',
        destination: '/solutions/hr-consulting',
        permanent: true,
      },
      {
        source: '/companies/real-estate',
        destination: '/solutions/real-estate',
        permanent: true,
      },
      {
        source: '/companies/education-advisory',
        destination: '/solutions/education',
        permanent: true,
      },
      {
        source: '/companies/global-visa-immigration',
        destination: '/solutions/global-mobility',
        permanent: true,
      },
      {
        source: '/companies/digital-products-learning',
        destination: '/solutions/digital-learning',
        permanent: true,
      },
      {
        source: '/companies/information-technology',
        destination: '/solutions/technology',
        permanent: true,
      },
      {
        source: '/foundation',
        destination: '/impact',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
