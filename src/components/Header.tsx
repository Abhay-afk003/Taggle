import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Users, Target, BarChart2, Book, Headphones, MessageSquare, Database, RefreshCw } from 'lucide-react';
import { Transition } from '@headlessui/react';

interface DropdownProps {
  title: string;
  items: {
    icon: React.ReactNode;
    title: string;
    description: string;
    href?: string;
  }[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative\" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="nav-link flex items-center">
        {title}
        <ChevronDown className="w-4 h-4 ml-1" />
      </button>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <div className="absolute left-0 w-80 mt-2 origin-top-right bg-surface-light backdrop-blur-lg rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-4 grid gap-4">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href || "#features"}
                className="flex items-start p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 w-full text-left"
              >
                <div className="flex-shrink-0 p-2 rounded-lg bg-primary-dark/10">
                  {item.icon}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-white">{item.title}</p>
                  <p className="text-sm text-white/60">{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Transition>
    </div>
  );
};

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featureItems = [
    {
      icon: <Target className="w-5 h-5 text-primary-light" />,
      title: "Refined Targeting",
      description: "Advanced ICP development and targeting tools",
      href: "#features"
    },
    {
      icon: <Users className="w-5 h-5 text-primary-light" />,
      title: "Data Enrichment",
      description: "Real-time data updates and profile integration",
      href: "#features"
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-primary-light" />,
      title: "Lead Scoring",
      description: "AI-powered scoring and prioritization",
      href: "#features"
    },
    {
      icon: <Database className="w-5 h-5 text-primary-light" />,
      title: "CRM Integration",
      description: "Seamless sync with major CRM platforms",
      href: "#features"
    }
  ];

  const resourceItems = [
    {
      icon: <Book className="w-5 h-5 text-primary-light" />,
      title: "Documentation",
      description: "Detailed guides and API references"
    },
    {
      icon: <Headphones className="w-5 h-5 text-primary-light" />,
      title: "Support",
      description: "24/7 customer support and resources"
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-primary-light" />,
      title: "Community",
      description: "Join our growing community of users"
    }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 h-20 flex items-center ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/Untitled design.png" alt="logo" className="h-8" />
          <span className="brand-text">aggle</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Dropdown title="Features" items={featureItems} />
          <a href="#pricing" className="nav-link">Pricing</a>
          <Dropdown title="Resources" items={resourceItems} />
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#login" className="btn-ghost py-2 px-4">Login</a>
          <a href="#get-started" className="btn-primary">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isMobileMenuOpen}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute top-20 left-0 w-full bg-background/95 backdrop-blur-md shadow-lg lg:hidden">
          <div className="container-custom py-6">
            <nav className="flex flex-col space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-white/60 px-4">Features</p>
                {featureItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href || "#features"}
                    className="flex items-center px-4 py-2 hover:bg-white/5 w-full text-left"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.icon}
                    <span className="ml-3">{item.title}</span>
                  </a>
                ))}
              </div>
              
              <a href="#pricing" className="px-4 py-2 hover:bg-white/5">Pricing</a>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-white/60 px-4">Resources</p>
                {resourceItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center px-4 py-2 hover:bg-white/5"
                  >
                    {item.icon}
                    <span className="ml-3">{item.title}</span>
                  </a>
                ))}
              </div>
            </nav>
            
            <div className="mt-6 flex flex-col space-y-3 px-4">
              <a href="#login" className="btn-ghost w-full">Login</a>
              <a href="#get-started" className="btn-primary w-full">Get Started</a>
            </div>
          </div>
        </div>
      </Transition>
    </header>
  );
};

export default Header;