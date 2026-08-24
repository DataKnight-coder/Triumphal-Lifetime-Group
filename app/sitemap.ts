import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
 const baseUrl = 'https://triumphallifetimegroup.com';
 
 const staticRoutes = [
 '',
 '/about',
 '/about/our-story',
 '/about/leadership',
 '/about/global-presence',
 '/companies',
 '/solutions/hr-consulting',
 '/solutions/real-estate',
 '/solutions/education',
 '/solutions/global-mobility',
 '/solutions/digital-learning',
 '/solutions/technology',
 '/impact',
 '/insights',
 '/careers',
 '/contact',
 '/book',
 '/partnerships',
 '/privacy',
 '/terms',
 '/cookies'
 ];

 return staticRoutes.map((route) => ({
 url: `${baseUrl}${route}`,
 lastModified: new Date(),
 changeFrequency: 'weekly',
 priority: route === '' ? 1 : 0.8,
 }));
}
