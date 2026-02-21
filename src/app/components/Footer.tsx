import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  type LucideIcon,
} from 'lucide-react';
import { contactInfo } from '../../data/cmsData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks: Array<{
    label: string;
    href?: string;
    Icon: LucideIcon;
  }> = [
    { label: 'Facebook', href: contactInfo.socialLinks?.facebook, Icon: Facebook },
    { label: 'Twitter', href: contactInfo.socialLinks?.twitter, Icon: Twitter },
    { label: 'LinkedIn', href: contactInfo.socialLinks?.linkedin, Icon: Linkedin },
    { label: 'Instagram', href: contactInfo.socialLinks?.instagram, Icon: Instagram },
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
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6 bg-white rounded-lg p-4 inline-block shadow-lg">
              <img
                src={`${import.meta.env.BASE_URL}LOGO.jpeg`}
                alt="ICBE Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-white/80 mb-6">
              Empowering vulnerable communities through climate resilience, gender equality, and
              community-driven development.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(({ label, href, Icon }) => {
                if (!href) {
                  return (
                    <span
                      key={label}
                      className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center opacity-50 cursor-not-allowed"
                      aria-label={`${label} link coming soon`}
                      title={`${label} link coming soon`}
                    >
                      <Icon size={22} className="text-white" />
                    </span>
                  );
                }

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
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-white/80 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6 flex items-center space-x-2">
              <span className="w-1 h-6 bg-[#1B7F5B] rounded-full"></span>
              <span>Our Services</span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Climate Resilience
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  GBV Prevention
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Youth Leadership
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Mental Health Support
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Mobile Outreach
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
              &copy; {currentYear} ICBE - International Center for Building Empowerment. All
              rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
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
