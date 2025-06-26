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
      className="rounded-2xl p-8 bg-zinc-900 border border-zinc-800 relative"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay }}
    >
      <Quote className="absolute top-6 left-6 w-8 h-8 text-purple-400 opacity-30" />
      <div className="pt-6">
        <p className="text-white/90 text-base leading-relaxed mb-6">{quote}</p>
        <div className="flex items-center">
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4" 
          />
          <div>
            <h4 className="font-semibold text-white">{name}</h4>
            <p className="text-white/60 text-sm">{role}, {company}</p>
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
  const [ref, inView] = useInView({ 
    triggerOnce: true, 
    threshold: 0.2,
  });

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Trusted by <span className="gradient-text">Industry Leaders</span>
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