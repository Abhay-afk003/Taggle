import React, { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  UserCheck,
  FileSearch,
  Zap,
  Database,
  Clock,
  DollarSign,
  BarChart3,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Features: React.FC = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
  });
  const swiperRef = useRef<any>(null);

  const features = [
    {
      icon: <UserCheck className="w-8 h-8 text-white" />,
      title: 'Verified Leads',
      description:
        'Receive laser-targeted leads, fully verified and aligned to your ideal customer profile (ICP), right in your inbox.',
    },
    {
      icon: <FileSearch className="w-8 h-8 text-white" />,
      title: 'Prospect Intelligence',
      description:
        "Gain insight into each lead's buying signals, firmographics, and intent, all enriched automatically.",
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Automations',
      description:
        'Enable intelligent automation to save hours every week and nurture leads without manual intervention.',
    },
    {
      icon: <Database className="w-8 h-8 text-white" />,
      title: 'CRM Integrations',
      description:
        'Seamlessly integrate with Salesforce, HubSpot, and more. Handled separately to keep your pipeline fresh.',
    },
  ];

  const handleMouseEnter = useCallback(() => {
    swiperRef.current?.autoplay?.stop();
  }, []);

  const handleMouseLeave = useCallback(() => {
    swiperRef.current?.autoplay?.start();
  }, []);

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Taggle Delivers the <span className="gradient-text">Leads That Convert</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-8">
            Verified contacts. Real-time insights. Automations. Integrations ready.
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >
            {[Clock, DollarSign, BarChart3].map((Icon, idx) => (
              <motion.div
                key={idx}
                className="bg-black/30 border border-white/10 p-4 flex items-center justify-center rounded-xl"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                <Icon className="w-5 h-5 text-purple-400 mr-2" />
                <span className="font-medium text-white text-sm sm:text-base">
                  {idx === 0 && 'Save 25+ hours weekly'}
                  {idx === 1 && 'Cut CAC by up to 60%'}
                  {idx === 2 && '3x higher conversions'}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div
          className="group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1.1}
            spaceBetween={16}
            loop
            speed={600}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
            breakpoints={{ 640: { slidesPerView: 1.2 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          >
            {features.map((feature, idx) => (
              <SwiperSlide key={idx}>
                <div className="text-white rounded-2xl border border-purple-500/20 bg-gradient-to-tr from-[#0F0F0F] to-[#0B0B0B] p-6 sm:p-8 mx-auto h-full min-h-[300px] max-w-[320px]">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="mb-6">
                      <div className="p-4 rounded-full border border-purple-500/20 bg-black/40">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-purple-400 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Features;