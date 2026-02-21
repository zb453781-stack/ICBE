const gaId = import.meta.env.VITE_GA_ID?.trim();
let gaInitialized = false;

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export const initializeGA = () => {
  if (gaInitialized || typeof window === 'undefined') {
    return;
  }

  if (!gaId) {
    return;
  }

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);

  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  function gtag(...args: any[]) {
    if (window.dataLayer) {
      window.dataLayer.push(args);
    }
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', gaId, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  gaInitialized = true;
};

export const trackPageView = (page: string) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: page,
    });
  }
};

export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
