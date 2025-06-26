import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, company, image }) => {
  return (
    <div className="rounded-2xl p-8 bg-surface-medium border border-surface-dark backdrop-blur-md relative shadow-xl">
      <Quote className="absolute top-6 left-6 w-10 h-10 text-primary-light opacity-20" />
      <div className="pt-8">
        <p className="text-white/90 text-base leading-relaxed mb-6 relative z-10">{quote}</p>
        <div className="flex items-center">
          <img 
            src={image} 
            alt={name} 
            className="w-14 h-14 rounded-full object-cover mr-4 ring-2 ring-primary-dark" 
          />
          <div>
            <h4 className="font-heading font-semibold text-white">{name}</h4>
            <p className="text-white/60 text-sm">{role}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const testimonials = [
  {
    quote: "Taggle has transformed our B2B outreach. We've seen a 43% increase in qualified leads and our sales team is closing deals 30% faster.",
    name: "Sarah Johnson",
    role: "VP of Sales",
    company: "TechGrowth Inc.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
  },
  {
    quote: "Thanks to Taggle, we're focusing only on leads that are 5x more likely to convert. It's saved our team hours every week.",
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Innovate Solutions",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    quote: "Since switching to Taggle, our cost per acquisition dropped by 35% and our conversion rate doubled. It's a no-brainer.",
    name: "Emma Rodriguez",
    role: "Growth Lead",
    company: "Scale Ventures",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
  },
];

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.2,
  });

  return (
    <section id="testimonials" className="py-24 bg-background relative z-0">
      <div className="absolute inset-0 bg-gradient-radial from-primary-dark/20 via-background to-transparent opacity-30 pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-heading">
            Trusted by <span className="bg-gradient-to-r from-primary-light via-primary-dark to-primary-light bg-clip-text text-transparent animate-gradient">Industry Leaders</span>
          </h2>
          <p className="text-white/70 text-lg">
            See how companies are scaling their outreach with Taggle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;