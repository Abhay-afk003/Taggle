import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, role, company, image, rating }) => {
  return (
    <div className="flex-shrink-0 w-80 mx-4 p-6 bg-gradient-to-br from-zinc-900/90 to-zinc-800/90 rounded-2xl border border-zinc-700/50 backdrop-blur-sm shadow-xl">
      {/* Header with rating */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-500'}`}
            />
          ))}
        </div>
        <Quote className="w-8 h-8 text-purple-400/40" />
      </div>

      {/* Quote */}
      <p className="text-white/90 text-sm leading-relaxed mb-6 line-clamp-4">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex items-center">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500/30"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-zinc-900"></div>
        </div>
        <div className="ml-3">
          <h4 className="font-semibold text-white text-sm">{name}</h4>
          <p className="text-gray-400 text-xs">{role}</p>
          <p className="text-purple-400 text-xs font-medium">{company}</p>
        </div>
      </div>
    </div>
  );
};

const testimonials: TestimonialProps[] = [
  {
    quote: "Taggle has transformed our B2B outreach completely. We've seen a 43% increase in qualified leads and our sales team is closing deals 30% faster than before.",
    name: "Sarah Johnson",
    role: "VP of Sales",
    company: "TechGrowth Inc.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    rating: 5,
  },
  {
    quote: "Thanks to Taggle, we're focusing only on leads that are 5x more likely to convert. It's saved our team countless hours every week.",
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Innovate Solutions",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    rating: 5,
  },
  {
    quote: "Since switching to Taggle, our cost per acquisition dropped by 35% and our conversion rate doubled. It's honestly a no-brainer for any B2B company.",
    name: "Emma Rodriguez",
    role: "Growth Lead",
    company: "Scale Ventures",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    rating: 5,
  },
  {
    quote: "The quality of leads from Taggle is unmatched. Every prospect we receive is perfectly aligned with our ICP and ready to engage.",
    name: "David Kim",
    role: "CEO",
    company: "StartupFlow",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    rating: 5,
  },
  {
    quote: "Taggle's automation features have revolutionized our lead nurturing process. We're seeing 60% better engagement rates.",
    name: "Lisa Zhang",
    role: "Sales Manager",
    company: "CloudTech Pro",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    rating: 5,
  },
  {
    quote: "The ROI on Taggle is incredible. We've cut our prospecting time in half while tripling our qualified pipeline.",
    name: "Alex Thompson",
    role: "Business Development",
    company: "Growth Labs",
    image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  // Duplicate testimonials for seamless loop
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-heading">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-white/70 text-lg">
            See how companies are scaling their outreach with Taggle.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
          
          {/* Scrolling testimonials */}
          <div className="flex animate-marquee space-x-0 hover:pause-animation">
            {allTestimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm mb-4">Join 500+ companies already using Taggle</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 5).map((testimonial, i) => (
                <img
                  key={i}
                  src={testimonial.image}
                  className="w-8 h-8 rounded-full border-2 border-background"
                  alt="Customer"
                />
              ))}
            </div>
            <span className="text-white/60 text-sm">and many more...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;