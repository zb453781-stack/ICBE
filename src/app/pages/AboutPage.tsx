import { motion } from 'framer-motion';
import { Target, Eye, Award, Heart, Users, Lightbulb } from 'lucide-react';
import { aboutData } from '../../data/cmsData';

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

function IntroductionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-gray-700 leading-relaxed">
              {aboutData.introduction}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function VisionMissionSection() {
  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-10 shadow-sm"
          >
            <div className="w-16 h-16 bg-[#0B3D91]/10 rounded-xl flex items-center justify-center mb-6">
              <Eye className="text-[#0B3D91]" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-[#0B3D91] mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutData.vision}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-10 shadow-sm"
          >
            <div className="w-16 h-16 bg-[#1B7F5B]/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-[#1B7F5B]" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-[#0B3D91] mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {aboutData.mission}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ObjectivesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#0B3D91] mb-6">Strategic Objectives</h2>
          <p className="text-lg text-gray-600">
            Our comprehensive approach to creating lasting change in communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {aboutData.objectives.map((objective, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 p-6 bg-[#F5F5F5] rounded-xl hover:bg-white hover:shadow-md transition-all"
            >
              <div className="w-8 h-8 bg-[#1B7F5B] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">
                {index + 1}
              </div>
              <p className="text-gray-700 leading-relaxed">{objective}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreValuesSection() {
  const iconMap: Record<number, any> = {
    0: Users,
    1: Heart,
    2: Award,
    3: Heart,
    4: Target,
    5: Lightbulb,
  };

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#0B3D91] mb-6">Our Core Values</h2>
          <p className="text-lg text-gray-600">
            The principles that guide our work and define our organizational culture
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutData.coreValues.map((value, index) => {
            const Icon = iconMap[index] || Users;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#0B3D91]/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="text-[#0B3D91]" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-[#0B3D91] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#0B3D91] mb-6">Our Journey</h2>
          <p className="text-lg text-gray-600">
            Key milestones in our commitment to community empowerment
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#1B7F5B]/20" />

            {aboutData.timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative mb-12 md:mb-16 flex ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                <div className="w-full md:w-1/2">
                  <div className={`bg-[#F5F5F5] rounded-xl p-6 hover:shadow-lg transition-shadow ${
                    index % 2 === 0 ? 'md:mr-auto md:text-left' : 'md:ml-auto md:text-right'
                  }`}>
                    <div className={`inline-block px-4 py-1 bg-[#0B3D91] text-white rounded-full text-sm font-semibold mb-4`}>
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-[#0B3D91] mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1B7F5B] rounded-full border-4 border-white" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About ICBE"
        subtitle="Building Empowerment Through Community-Centered Development"
      />
      <IntroductionSection />
      <VisionMissionSection />
      <ObjectivesSection />
      <CoreValuesSection />
      <TimelineSection />
    </div>
  );
}
