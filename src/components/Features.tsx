import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Crosshair,
  ScanSearch,
  ActivitySquare,
  Merge,
  Clock,
  DollarSign,
  BarChart3,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Features: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const swiperRef = useRef<any>(null);

  const features = [
    {
      icon: <Crosshair className="w-8 h-8 text-white group-hover:text-purple-400 transition-colors duration-300" />,
      title: 'Precision Targeting That Converts',
      description:
        'Our AI finds your perfect target prospects with up to 94% accuracy, eliminating guesswork and reducing acquisition costs by up to 60%.',
    },
    {
      icon: <ScanSearch className="w-8 h-8 text-white group-hover:text-purple-400 transition-colors duration-300" />,
      title: 'Complete Prospect Intelligence',
      description:
        'From partial lists, get full profiles with verified emails, phone numbers, company data, and real-time buying signals.',
    },
    {
      icon: <ActivitySquare className="w-8 h-8 text-white group-hover:text-purple-400 transition-colors duration-300" />,
      title: 'Smart Lead Prioritization',
      description:
        'Our AI scores each lead on conversion probability and helping you close up to 3× more deals by focusing on ready-to-buy prospects first.',
    },
    {
      icon: <Merge className="w-8 h-8 text-white group-hover:text-purple-400 transition-colors duration-300" />,
      title: 'Seamless Workflow Automation',
      description:
        'Sync data instantly with Salesforce, HubSpot, and custom workflows, eliminating manual updates and keeping pipelines fresh.',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Turn More Prospects Into <span className="gradient-text">Paying Customers</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg mb-8">
            We help you find, score, and convert the right leads—faster.
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[Clock, DollarSign, BarChart3].map((Icon, idx) => (
              <motion.div
                key={idx}
                className="glass-card p-4 flex items-center justify-center rounded-xl bg-black/30 backdrop-blur-md border border-white/10 hover:border-purple-500/40 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                whileHover={{ scale: 1.03 }}
              >
                <Icon className="w-5 h-5 text-purple-400 animate-bounce mr-2" />
                <span className="font-medium text-white text-sm sm:text-base">
                  {idx === 0 && 'Save 25+ hours weekly'}
                  {idx === 1 && 'Reduce costs by 60%'}
                  {idx === 2 && '3x higher close rates'}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div
          className="group"
          onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1.1}
            spaceBetween={16}
            loop
            speed={800}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
            breakpoints={{ 640: { slidesPerView: 1.2 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          >
            {features.map((feature, idx) => (
              <SwiperSlide key={idx}>
                <div className="group text-white rounded-3xl border border-purple-500/20 bg-gradient-to-tr from-[#0F0F0F] to-[#0B0B0B] shadow-2xl duration-700 relative backdrop-blur-xl hover:border-purple-500/40 overflow-hidden hover:shadow-purple-500/10 hover:shadow-3xl p-6 sm:p-8 mx-auto h-full min-h-[300px] max-w-[320px]">
                  {/* background visuals unchanged */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-purple-400/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-purple-500/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700"></div>
                    <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-purple-500/5 blur-xl animate-ping"></div>
                    <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-purple-500/5 blur-lg animate-ping delay-1000"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 animate-ping"></div>
                      <div className="absolute inset-0 rounded-full border border-purple-500/10 animate-pulse delay-500"></div>
                      <div className="p-6 rounded-full backdrop-blur-lg border border-purple-500/20 bg-gradient-to-br from-black/80 to-gray-900/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                        <div className="transform group-hover:rotate-180 transition-transform duration-700">
                          {feature.icon}
                        </div>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 bg-clip-text text-transparent mb-4">
                      {feature.title}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed sm:text-base group-hover:text-gray-200 transition-colors duration-300">
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