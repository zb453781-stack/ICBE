import { motion } from 'framer-motion';
import { Sprout, Shield, Users, Heart, Truck, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/cmsData';

function PageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-[#0B3D91] to-[#1B7F5B]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl text-white/90">{subtitle}</p>
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F5]'}`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          <div className={reverse ? 'lg:order-2' : ''}>
            <div className="w-20 h-20 bg-[#0B3D91]/10 rounded-2xl flex items-center justify-center mb-8">
              <Icon className="text-[#0B3D91]" size={40} />
            </div>
            <h2 className="text-4xl font-bold text-[#0B3D91] mb-6">{service.title}</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">{service.description}</p>
            
            <div className="bg-white border-l-4 border-[#1B7F5B] p-6 rounded-r-xl mb-8 shadow-sm">
              <h3 className="font-semibold text-[#0B3D91] mb-2">Impact Focus</h3>
              <p className="text-gray-700">{service.impactFocus}</p>
            </div>

            <div className="space-y-3 mb-8">
              {getServiceKeyPoints(service.id).map((point, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckCircle className="text-[#1B7F5B] flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-[#1B7F5B] text-white rounded-lg hover:bg-[#166646] transition-colors group"
            >
              Learn More
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>

          <div className={reverse ? 'lg:order-1' : ''}>
            <div className="relative">
              <img
                src={getServiceImage(service.id)}
                alt={service.title}
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#1B7F5B]/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function getServiceImage(serviceId: string): string {
  const matchedService = servicesData.find((service) => service.id === serviceId);
  return matchedService?.image || `${import.meta.env.BASE_URL}assets/images/services/default.svg`;
}

function getServiceKeyPoints(serviceId: string): string[] {
  const points: Record<string, string[]> = {
    'climate-resilience': [
      'Community-based adaptation and disaster risk reduction',
      'Sustainable agriculture and water management training',
      'Early warning systems and emergency preparedness',
      'Climate-smart livelihood development'
    ],
    'gbv-prevention': [
      'Safe spaces and counseling for survivors',
      'Community awareness and prevention programs',
      'Legal support and advocacy services',
      'Women\'s empowerment and economic independence'
    ],
    'youth-leadership': [
      'Leadership and civic engagement training',
      'Skills development and entrepreneurship programs',
      'Youth-led community development projects',
      'Mentorship and networking opportunities'
    ],
    'mental-health': [
      'Individual and group counseling services',
      'Trauma-informed care and support',
      'Community mental health awareness',
      'Psychosocial support for vulnerable populations'
    ],
    'mobile-outreach': [
      'Healthcare services in remote communities',
      'Educational programs and literacy training',
      'Essential service delivery to underserved areas',
      'Community health worker support and capacity building'
    ],
  };
  return points[serviceId] || [];
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
            Partner With Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-10"
          >
            Interested in collaborating on these programs or bringing them to your community? Get in touch with us today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0B3D91] rounded-lg font-semibold hover:bg-gray-100 transition-colors group"
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
        subtitle="Comprehensive programs addressing the most critical challenges facing vulnerable communities"
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

