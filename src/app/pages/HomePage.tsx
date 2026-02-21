import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Sprout, Shield, Truck, CheckCircle } from 'lucide-react';
import { homepageData, servicesData, galleryData } from '../../data/cmsData';

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-5xl font-bold text-[#0B3D91]">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 bg-gradient-to-br from-[#0B3D91] via-[#0B3D91] to-[#1B7F5B] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            {homepageData.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-10 leading-relaxed"
          >
            {homepageData.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to={homepageData.hero.ctaLink}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0B3D91] rounded-lg font-semibold hover:bg-gray-100 transition-colors group"
            >
              {homepageData.hero.ctaText}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#1B7F5B] text-white rounded-lg font-semibold hover:bg-[#166646] transition-colors"
            >
              Get Involved
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ImpactStatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {homepageData.impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-[#F5F5F5] hover:shadow-lg transition-shadow"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-3 text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreviewSection() {
  const fallbackAboutImages = [
    `${import.meta.env.BASE_URL}assets/images/gallery/icbe-gallery-01.jpeg`,
    `${import.meta.env.BASE_URL}assets/images/gallery/icbe-gallery-02.jpeg`,
  ];
  const firstImage = homepageData.aboutPreviewImages[0] || fallbackAboutImages[0];
  const secondImage = homepageData.aboutPreviewImages[1] || fallbackAboutImages[1];

  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-[#1B7F5B]/10 text-[#1B7F5B] rounded-full font-medium mb-6">
              About ICBE
            </div>
            <h2 className="text-4xl font-bold text-[#0B3D91] mb-6">
              Empowering Communities, Building Futures
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The International Center for Building Empowerment (ICBE) is a humanitarian organization dedicated to creating sustainable change in vulnerable communities across Pakistan.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe in the power of local solutions, community participation, and integrated approaches to development. Our work spans climate resilience, gender equality, youth empowerment, mental health, and essential service delivery.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-[#1B7F5B] flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">Community-centered approach to sustainable development</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-[#1B7F5B] flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">Evidence-based programs with measurable impact</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-[#1B7F5B] flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">Long-term partnerships with local communities</p>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 bg-[#0B3D91] text-white rounded-lg hover:bg-[#082d6b] transition-colors group"
            >
              Learn More About Us
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src={firstImage}
                alt="Community development"
                className="rounded-2xl object-cover h-64 w-full shadow-lg"
                onError={(event) => {
                  const target = event.currentTarget;
                  if (target.src !== fallbackAboutImages[0]) {
                    target.src = fallbackAboutImages[0];
                  }
                }}
              />
              <img
                src={secondImage}
                alt="Women empowerment"
                className="rounded-2xl object-cover h-64 w-full shadow-lg mt-8"
                onError={(event) => {
                  const target = event.currentTarget;
                  if (target.src !== fallbackAboutImages[1]) {
                    target.src = fallbackAboutImages[1];
                  }
                }}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#1B7F5B] rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const iconMap: Record<string, any> = {
    CloudRain: Sprout,
    Shield: Shield,
    Users: Users,
    Heart: Heart,
    Truck: Truck,
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#0B3D91]/10 text-[#0B3D91] rounded-full font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-4xl font-bold text-[#0B3D91] mb-6">
            How We Create Impact
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive programs designed to address the most pressing challenges facing vulnerable communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Users;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-[#1B7F5B] transition-all group"
              >
                <div className="w-14 h-14 bg-[#0B3D91]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0B3D91] transition-colors">
                  <Icon className="text-[#0B3D91] group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-[#0B3D91] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-[#1B7F5B] font-medium hover:text-[#166646] transition-colors group"
                >
                  Learn more
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-[#0B3D91] text-white rounded-lg font-semibold hover:bg-[#082d6b] transition-colors group"
          >
            View All Services
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function GalleryPreviewSection() {
  const previewImages = galleryData.slice(0, 6);

  return (
    <section className="py-24 bg-[#F5F5F5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#1B7F5B]/10 text-[#1B7F5B] rounded-full font-medium mb-6">
            Our Impact
          </div>
          <h2 className="text-4xl font-bold text-[#0B3D91] mb-6">
            Stories from the Field
          </h2>
          <p className="text-lg text-gray-600">
            See the real impact of our work through moments captured in communities across Pakistan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl aspect-[4/3] bg-gray-200"
            >
              <img
                src={image.imageUrl}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm font-medium text-[#1B7F5B] mb-2">{image.category}</div>
                  <h3 className="font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm text-white/80">{image.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center px-8 py-4 bg-[#1B7F5B] text-white rounded-lg font-semibold hover:bg-[#166646] transition-colors group"
          >
            View Full Gallery
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#0B3D91] to-[#1B7F5B]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            Be Part of the Change
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-10"
          >
            Join us in building resilient, empowered communities. Whether through volunteering, partnerships, or support, your involvement makes a real difference.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0B3D91] rounded-lg font-semibold hover:bg-gray-100 transition-colors group"
            >
              Contact Us
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#0B3D91] transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <ImpactStatsSection />
      <AboutPreviewSection />
      <ServicesSection />
      <GalleryPreviewSection />
      <CTASection />
    </div>
  );
}



