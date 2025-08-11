import { Metadata } from 'next';
import seoConfig from '@/config/seo.json';

type PagePath = keyof typeof seoConfig.pages;

interface GenerateMetadataOptions {
  path?: PagePath;
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noindex?: boolean;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
  };
}

export function generatePageMetadata(options: GenerateMetadataOptions = {}): Metadata {
  const { global, pages } = seoConfig;
  const pageConfig = options.path ? pages[options.path] : null;
  
  const title = options.title || pageConfig?.title || global.defaultTitle;
  const description = options.description || pageConfig?.description || global.defaultDescription;
  const keywords = options.keywords || (pageConfig && 'keywords' in pageConfig ? pageConfig.keywords : global.defaultKeywords);
  const image = options.image || global.defaultImage;
  const noindex = options.noindex || (pageConfig && 'noindex' in pageConfig ? pageConfig.noindex : false);
  
  const url = options.path 
    ? `${global.siteUrl}${options.path === '/' ? '' : options.path}`
    : global.siteUrl;

  const metadata: Metadata = {
    metadataBase: new URL(global.siteUrl),
    title: options.title && !options.path 
      ? global.titleTemplate.replace('%s', options.title)
      : title,
    description,
    keywords,
    authors: [{ name: global.organization.name }],
    creator: global.organization.name,
    publisher: global.organization.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: global.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: global.locale,
      type: options.article ? 'article' : 'website',
      ...(options.article && {
        publishedTime: options.article.publishedTime,
        modifiedTime: options.article.modifiedTime,
        authors: options.article.author ? [options.article.author] : undefined,
        tags: options.article.tags,
      }),
    },
    twitter: {
      card: global.twitter.card as 'summary' | 'summary_large_image' | 'app' | 'player',
      title,
      description,
      images: [image],
      ...(global.twitter.site && { site: global.twitter.site }),
    },
    robots: noindex 
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large' as const,
            'max-snippet': -1,
          },
        },
  };

  return metadata;
}

export function generateOrganizationSchema() {
  const { global } = seoConfig;
  const { organization } = global;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: organization.name,
    description: organization.description,
    url: global.siteUrl,
    telephone: organization.telephone,
    email: organization.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: organization.address.streetAddress,
      addressLocality: organization.address.addressLocality,
      addressRegion: organization.address.addressRegion,
      postalCode: organization.address.postalCode,
      addressCountry: organization.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: organization.geo.latitude,
      longitude: organization.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: organization.openingHours.days,
        opens: organization.openingHours.opens,
        closes: organization.openingHours.closes,
      },
    ],
    priceRange: organization.priceRange,
    image: `${global.siteUrl}${global.defaultImage}`,
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  const { global } = seoConfig;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${global.siteUrl}${item.url}`,
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  author?: string;
  publishedTime: string;
  modifiedTime?: string;
  image?: string;
  url: string;
}) {
  const { global } = seoConfig;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author || global.organization.name,
    },
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime || article.publishedTime,
    publisher: {
      '@type': 'Organization',
      name: global.organization.name,
      logo: {
        '@type': 'ImageObject',
        url: `${global.siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${global.siteUrl}${article.url}`,
    },
    image: article.image ? `${global.siteUrl}${article.image}` : `${global.siteUrl}${global.defaultImage}`,
  };
}