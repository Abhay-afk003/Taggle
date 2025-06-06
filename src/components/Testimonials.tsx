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
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="glass-card p-8 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
    >
      <Quote className="absolute top-6 left-6 w-12 h-12 text-primary-light opacity-20" />
      <div className="pt-8">
        <p className="text-white/90 mb-6 relative z-10">{quote}</p>
        <div className="flex items-center">
          <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover mr-4" />
          <div>
            <h4 className="font-heading font-semibold">{name}</h4>
            <p className="text-white/60 text-sm">{role}, {company}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      quote: "AI Lead Finder has transformed our B2B sales process. We've seen a 43% increase in qualified leads and our sales team is closing deals 30% faster.",
      name: "Sarah Johnson",
      role: "VP of Sales",
      company: "TechGrowth Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      delay: 0.1,
    },
    {
      quote: "The AI-powered lead scoring has been a game-changer. We're now focusing our efforts on leads that are 5x more likely to convert, saving us time and resources.",
      name: "Michael Chen",
      role: "Marketing Director",
      company: "Innovate Solutions",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      delay: 0.2,
    },
    {
      quote: "Since implementing AI Lead Finder, our cost per acquisition has dropped by 35% while our conversion rate has doubled. The ROI has been exceptional.",
      name: "Emma Rodriguez",
      role: "Growth Lead",
      company: "Scale Ventures",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      delay: 0.3,
    },
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary-dark/20 to-transparent opacity-30"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by <span className="gradient-text">Industry Leaders</span></h2>
          <p className="text-white/70 text-lg">See how companies are transforming their lead generation with our AI-powered platform.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-center text-white/60 mb-10 text-lg">Trusted by innovative companies worldwide</h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            <img src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Company logo" className="h-8 opacity-40" />
            <img src="https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Company logo" className="h-8 opacity-40" />
            <img src="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Company logo" className="h-8 opacity-40" />
            <img src="https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Company logo" className="h-8 opacity-40" />
            <img src="https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Company logo" className="h-8 opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;