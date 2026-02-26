import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Sprout, Shield, Truck, CheckCircle } from 'lucide-react';
import { homepageData, servicesData, galleryData, aboutData } from '../../data/cmsData';

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
    <div ref={ref} className="text-3xl sm:text-5xl font-bold text-[#0C3F66]">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 hero-pattern-bg" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0C3F66] mb-6 leading-tight"
          >
            {homepageData.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed"
          >
            {homepageData.hero.subtitle}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function ImpactStatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {homepageData.impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 sm:p-8 rounded-2xl bg-[#F5F5F5] transition-shadow"
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
    <section className="py-16 sm:py-24 bg-[#F5F5F5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0C3F66] mb-6">
              Empowering Communities, Advancing Equity, Building Resilience
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
              {aboutData.introduction}
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {aboutData.mission}
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-[#0F7F4F] flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">Inclusive and community-driven programming</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-[#0F7F4F] flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">Survivor-centered and evidence-informed action</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="text-[#0F7F4F] flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-700">Sustainable and equity-focused community impact</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img
                src={firstImage}
                alt="Community development"
                className="rounded-2xl object-cover h-56 sm:h-64 w-full"
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
                className="rounded-2xl object-cover h-56 sm:h-64 w-full sm:mt-8"
                onError={(event) => {
                  const target = event.currentTarget;
                  if (target.src !== fallbackAboutImages[1]) {
                    target.src = fallbackAboutImages[1];
                  }
                }}
              />
            </div>
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
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#0C3F66]/10 text-[#0C3F66] rounded-full font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0C3F66] mb-6">
            Our Core Focus Areas
          </h2>
          <p className="text-lg text-gray-600">
            Climate resilience, mental health support, gender justice, youth leadership, and participatory governance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Users;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 transition-all group"
              >
                <div className="w-14 h-14 bg-[#0C3F66]/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-[#0C3F66]" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-[#0C3F66] mb-4">{service.title}</h3>
                <Link
                  to={`/services#${encodeURIComponent(service.id)}`}
                  className="inline-flex items-center text-[#0F7F4F] font-medium hover:text-[#138A58] transition-colors group"
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
            className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-[#0C3F66] text-white rounded-lg font-semibold hover:bg-[#0C3F66] transition-colors group"
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
    <section className="py-16 sm:py-24 bg-[#F5F5F5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#0F7F4F]/10 text-[#0F7F4F] rounded-full font-medium mb-6">
            Our Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0C3F66] mb-6">
            Stories from the Field
          </h2>
          <p className="text-lg text-gray-600">
            Moments of resilience, dignity, and collective action across Balochistan
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
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="text-sm font-medium text-[#0F7F4F] mb-2">{image.category}</div>
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
            className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-[#0F7F4F] text-white rounded-lg font-semibold hover:bg-[#138A58] transition-colors group"
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
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#0C3F66] mb-6"
          >
            Be Part of the Change
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-xl text-gray-600 mb-10"
          >
            ICBE welcomes volunteers, youth leaders, community activists, development partners, researchers, and donors to build inclusive systems together.
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
              className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-white text-[#0C3F66] rounded-lg font-semibold hover:bg-gray-100 transition-colors group"
            >
              Contact Us
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
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

