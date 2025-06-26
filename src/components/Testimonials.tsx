import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, company, image, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      className="rounded-xl p-4 sm:p-6 lg:p-8 bg-surface-medium border border-surface-dark backdrop-blur-md relative overflow-hidden shadow-xl hover:scale-105 transition-all duration-500 h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <Quote className="absolute top-3 sm:top-4 left-3 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 text-primary-light opacity-20" />
      <div className="pt-4 sm:pt-6">
        <p className="text-white/90 text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-6 relative z-10 text-container">
          {quote}
        </p>
        <div className="flex items-center">
          <img 
            src={image} 
            alt={name} 
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-2 sm:mr-3 ring-2 ring-primary-dark flex-shrink-0" 
          />
          <div className="overflow-hidden">
            <h4 className="font-heading text-white text-xs sm:text-sm lg:text-base truncate">
              {name}
            </h4>
            <p className="text-white/60 text-xs lg:text-sm truncate">
              {role}, {company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const testimonials = [
  {
    quote: "Taggle has transformed our B2B outreach. We've seen a 43% increase in qualified leads and our sales team is closing deals 30% faster.",
    name: "Sarah Johnson",
    role: "VP of Sales",
    company: "TechGrowth Inc.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    delay: 0.1,
  },
  {
    quote: "Thanks to Taggle, we're focusing only on leads that are 5x more likely to convert. It's saved our team hours every week.",
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Innovate Solutions",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    delay: 0.2,
  },
  {
    quote: "Since switching to Taggle, our cost per acquisition dropped by 35% and our conversion rate doubled. It's a no-brainer.",
    name: "Emma Rodriguez",
    role: "Growth Lead",
    company: "Scale Ventures",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    delay: 0.3,
  },
];

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-background relative z-0 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-radial from-primary-dark/20 via-background to-transparent opacity-30 pointer-events-none" />

      <div className="container-custom relative z-10 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-container mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4 text-white font-heading leading-tight">
              <span className="text-white">Trusted by </span>
              <span className="gradient-text italic">Industry Leaders</span>
            </h2>
          </div>
          
          <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
            See how companies are scaling their outreach with Taggle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;