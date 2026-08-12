import type { MetadataRoute } from 'next'

const baseUrl = 'https://pilvilinnanleipomo.fi'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/assortment`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ordering`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]
}
