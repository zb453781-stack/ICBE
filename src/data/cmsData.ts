import content from './content.json';

export interface ImpactStat {
  value: number;
  label: string;
  suffix?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  impactFocus: string;
  slug: string;
  image?: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  date: string;
  location: string;
  caption: string;
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
  mapUrl: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
  privacyPolicyUrl?: string;
  termsOfServiceUrl?: string;
}

interface ContentModel {
  homepage: {
    hero: {
      title: string;
      subtitle: string;
      ctaText: string;
      ctaLink: string;
    };
    impactStats: ImpactStat[];
    aboutPreviewImages: string[];
  };
  about: {
    introduction: string;
    vision: string;
    mission: string;
    objectives: string[];
    coreValues: Array<{
      title: string;
      description: string;
    }>;
    timeline: Array<{
      year: string;
      title: string;
      description: string;
    }>;
  };
  services: Service[];
  gallery: GalleryImage[];
  contact: ContactInfo;
}

const contentData = content as ContentModel;

const withBaseUrl = (path: string): string => {
  if (/^(https?:)?\/\//i.test(path)) {
    return path;
  }

  const normalizedPath = path.replace(/^\/+/, '');
  const configuredBase = import.meta.env.BASE_URL || '/';
  const normalizedBase = configuredBase.endsWith('/') ? configuredBase : `${configuredBase}/`;

  // If the app is opened outside the configured base path (common on temporary
  // previews), fall back to root-based public assets so images still render.
  if (typeof window !== 'undefined') {
    const currentPath = window.location.pathname;
    if (normalizedBase !== '/' && !currentPath.startsWith(normalizedBase)) {
      return `/${normalizedPath}`;
    }
  }

  return `${normalizedBase}${normalizedPath}`;
};

export const homepageData = {
  ...contentData.homepage,
  aboutPreviewImages: contentData.homepage.aboutPreviewImages.map(withBaseUrl),
};

export const aboutData = contentData.about;

export const servicesData: Service[] = contentData.services.map((service) => ({
  ...service,
  image: service.image ? withBaseUrl(service.image) : undefined,
}));

export const galleryData: GalleryImage[] = contentData.gallery.map((image) => ({
  ...image,
  imageUrl: withBaseUrl(image.imageUrl),
}));

export const contactInfo: ContactInfo = contentData.contact;
