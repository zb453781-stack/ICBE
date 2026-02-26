import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Youtube,
  Instagram,
  type LucideIcon,
} from 'lucide-react';
import { contactInfo } from '../../data/cmsData';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const handleInternalNavigation = (path: string) => {
    if (typeof window !== 'undefined') {
      if (path.includes('#')) {
        return;
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  const socialLinks: Array<{
    label: string;
    href: string;
    Icon: LucideIcon;
  }> = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/icbe.pk?igsh=MWkwMXI4b2o2NXg5dw==',
      Icon: Instagram,
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@EmpowerTalksbyICBE',
      Icon: Youtube,
    },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/share/1E9n4Xfj6a/',
      Icon: Facebook,
    },
  ];

  const privacyPolicyHref =
    contactInfo.privacyPolicyUrl && contactInfo.privacyPolicyUrl.trim().length > 0
      ? contactInfo.privacyPolicyUrl
      : `mailto:${contactInfo.email}?subject=Privacy%20Policy%20Request`;

  const termsHref =
    contactInfo.termsOfServiceUrl && contactInfo.termsOfServiceUrl.trim().length > 0
      ? contactInfo.termsOfServiceUrl
      : `mailto:${contactInfo.email}?subject=Terms%20of%20Service%20Request`;

  return (
    <footer className="bg-[#0B3D91] text-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
          <div>
            <div className="mb-6 bg-white rounded-lg p-4 inline-block shadow-lg">
              <img
                src={`${import.meta.env.BASE_URL}LOGO.jpeg`}
                alt="ICBE Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-white/80 mb-6">
              Empowering Communities, Advancing Equity, Building Resilience.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(({ label, href, Icon }) => {
                const isExternal = /^https?:\/\//i.test(href);

                return (
                  <a
                    key={label}
                    href={href}
                    className="group w-11 h-11 bg-white/10 hover:bg-[#1B7F5B] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                    aria-label={label}
                    {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    <Icon size={22} className="text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 flex items-center space-x-2">
              <span className="w-1 h-6 bg-[#1B7F5B] rounded-full"></span>
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  onClick={() => handleInternalNavigation('/')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => handleInternalNavigation('/about')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => handleInternalNavigation('/services')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  onClick={() => handleInternalNavigation('/gallery')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => handleInternalNavigation('/contact')}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 flex items-center space-x-2">
              <span className="w-1 h-6 bg-[#1B7F5B] rounded-full"></span>
              <span>Core Focus Areas</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services#climate-resilience"
                  onClick={() => handleInternalNavigation('/services#climate-resilience')}
                  className="text-white/80 hover:text-white transition-colors leading-relaxed"
                >
                  Climate Resilience and Emergency Response
                </Link>
              </li>
              <li>
                <Link
                  to="/services#mental-health"
                  onClick={() => handleInternalNavigation('/services#mental-health')}
                  className="text-white/80 hover:text-white transition-colors leading-relaxed"
                >
                  Mental Health and Psychosocial Support
                </Link>
              </li>
              <li>
                <Link
                  to="/services#gbv-sea-prevention"
                  onClick={() => handleInternalNavigation('/services#gbv-sea-prevention')}
                  className="text-white/80 hover:text-white transition-colors leading-relaxed"
                >
                  GBV and SEA Prevention
                </Link>
              </li>
              <li>
                <Link
                  to="/services#youth-leadership"
                  onClick={() => handleInternalNavigation('/services#youth-leadership')}
                  className="text-white/80 hover:text-white transition-colors leading-relaxed"
                >
                  Youth Leadership and Empowerment
                </Link>
              </li>
              <li>
                <Link
                  to="/services#community-development"
                  onClick={() => handleInternalNavigation('/services#community-development')}
                  className="text-white/80 hover:text-white transition-colors leading-relaxed"
                >
                  Community Development and Governance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 flex items-center space-x-2">
              <span className="w-1 h-6 bg-[#1B7F5B] rounded-full"></span>
              <span>Contact Us</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#1B7F5B] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={20} className="text-white" />
                </div>
                <span className="text-white/80">{contactInfo.address}</span>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#1B7F5B] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={20} className="text-white" />
                </div>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white/80 hover:text-white transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#1B7F5B] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={20} className="text-white" />
                </div>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">
              &copy; {currentYear} Institute for Community Building and Empowerment (ICBE). All
              rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
              <a href={privacyPolicyHref} className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href={termsHref} className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
