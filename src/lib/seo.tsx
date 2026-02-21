import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export const SEO = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
}: SEOProps) => {
  const fullTitle = title
    ? `${title} | ICBE`
    : 'ICBE - International Center for Building Empowerment';

  const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.trim();
  const runtimeOrigin =
    typeof window !== 'undefined' ? window.location.origin : 'https://icbe-ngo.org';
  const siteUrl = (configuredSiteUrl || runtimeOrigin).replace(/\/+$/, '');

  const canonicalUrl = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${siteUrl}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
    : siteUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content="#0B3D91" />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;
