import { motion } from 'framer-motion';
import { Sprout, Shield, Users, Heart, Truck, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/cmsData';

function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C3F66] mb-6">{title}</h1>
          <p className="text-base sm:text-xl text-gray-600">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, reverse = false }: { service: any; index: number; reverse?: boolean }) {
  const iconMap: Record<string, any> = {
    CloudRain: Sprout,
    Shield: Shield,
    Users: Users,
    Heart: Heart,
    Truck: Truck,
  };

  const Icon = iconMap[service.icon] || Users;

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`py-12 sm:py-16 scroll-mt-24 sm:scroll-mt-28 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F5]'}`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className={reverse ? 'lg:order-2' : ''}>
            <div className="w-20 h-20 bg-[#0C3F66]/10 rounded-2xl flex items-center justify-center mb-8">
              <Icon className="text-[#0C3F66]" size={40} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0C3F66] mb-6">{service.title}</h2>
            <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">{service.description}</p>
            
            <div className="bg-white border-l-4 border-[#0F7F4F] p-6 rounded-r-xl mb-8">
              <h3 className="font-semibold text-[#0C3F66] mb-2">Impact Focus</h3>
              <p className="text-gray-700">{service.impactFocus}</p>
            </div>

            <div className="space-y-3">
              {getServiceKeyPoints(service.id).map((point, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckCircle className="text-[#0F7F4F] flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={reverse ? 'lg:order-1' : ''}>
            <div className="relative">
              <img
                src={getServiceImage(service.id)}
                alt={service.title}
                className="rounded-2xl w-full h-64 sm:h-80 lg:h-[400px] object-cover"
                onError={(event) => {
                  const target = event.currentTarget;
                  const baseDefault = `${import.meta.env.BASE_URL}assets/images/gallery/icbe-gallery-01.jpeg`;
                  if (target.src !== baseDefault) {
                    target.src = baseDefault;
                    return;
                  }

                  if (!target.src.endsWith('/assets/images/gallery/icbe-gallery-01.jpeg')) {
                    target.src = '/assets/images/gallery/icbe-gallery-01.jpeg';
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function getServiceImage(serviceId: string): string {
  const matchedService = servicesData.find((service) => service.id === serviceId);
  return matchedService?.image || `${import.meta.env.BASE_URL}assets/images/gallery/icbe-gallery-01.jpeg`;
}

function getServiceKeyPoints(serviceId: string): string[] {
  const points: Record<string, string[]> = {
    'climate-resilience': [
      'Disaster preparedness and rapid response planning',
      'Climate adaptation awareness and community training',
      'Practical resilience skills for remote communities',
      'Mobile outreach for disaster-affected populations'
    ],
    'mental-health': [
      'Trauma-informed individual and group counseling',
      'Focused support for adolescents and frontline workers',
      'Awareness sessions that reduce stigma and isolation',
      'Community coping and psychosocial support skills'
    ],
    'gbv-sea-prevention': [
      'Survivor-centered support with confidentiality and safety',
      'District awareness campaigns on protective behaviors',
      'Case management capacity building for local responders',
      'Safe referral pathways and protection systems'
    ],
    'youth-leadership': [
      'Leadership development for confident change-makers',
      'Digital literacy for modern opportunities',
      'Peacebuilding and civic responsibility initiatives',
      'Social entrepreneurship mentorship and coaching'
    ],
    'community-development': [
      'Participatory governance and inclusive decision-making',
      'Intergenerational dialogue between youth and elders',
      'Strengthening local institutions and accountability',
      'Community-led planning for sustainable development'
    ],
  };
  return points[serviceId] || [];
}

function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F5F5F5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-[#0C3F66] mb-6"
          >
            Partner With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-xl text-gray-600 mb-10"
          >
            Work with ICBE as a volunteer, youth leader, community activist, researcher, donor, or development partner.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
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

export function ServicesPage() {
  return (
    <div>
      <PageHeader
        title="Our Services"
        subtitle="Core focus areas advancing climate resilience, equity, psychosocial wellbeing, and community leadership"
      />
      
      {servicesData.map((service, index) => (
        <ServiceCard
          key={service.id}
          service={service}
          index={index}
          reverse={index % 2 !== 0}
        />
      ))}

      <CTASection />
    </div>
  );
}

