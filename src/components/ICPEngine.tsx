import React, { useState } from 'react';
import { 
  Building, 
  Users, 
  DollarSign, 
  Globe, 
  BarChart2, 
  Save,
  Download,
  Upload,
  Eye,
  EyeOff,
  Clock,
  Map,
  FileText,
  Settings,
  Database,
  Zap,
  Bell,
  Target,
  Briefcase,
  UserCircle,
  MessageSquare,
  Heart,
  CreditCard,
  Share2
} from 'lucide-react';

interface ICPTemplate {
  name: string;
  description: string;
  version: string;
  lastModified: Date;
}

interface ICPData {
  industry: string[];
  companySize: string;
  revenue: string;
  roles: string[];
  painPoints: string[];
  techStack: string[];
  integrations: string[];
  vendors: string[];
  engagement: {
    frequency: number;
    pageDepth: number;
    timeOnSite: number;
  };
  geography: {
    countries: string[];
    regions: string[];
    cities: string[];
  };
  matching: {
    enabled: boolean;
    threshold: number;
    delivery: 'instant' | 'daily';
  };
}

interface CustomerPersona {
  demographics: {
    ageRange: string;
    gender: string[];
    location: string[];
    incomeLevel: string;
  };
  psychographics: {
    interests: string[];
    values: string[];
    lifestyle: string[];
    behaviors: string[];
  };
  communication: {
    preferredChannels: string[];
    brandInteractions: string[];
    decisionFactors: string[];
  };
}

const ICPEngine: React.FC = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState<ICPTemplate | null>(null);
  const [icpData, setIcpData] = useState<ICPData>({
    industry: [],
    companySize: '10-50',
    revenue: '$1M-$10M',
    roles: [],
    painPoints: [],
    techStack: [],
    integrations: [],
    vendors: [],
    engagement: {
      frequency: 0,
      pageDepth: 0,
      timeOnSite: 0
    },
    geography: {
      countries: [],
      regions: [],
      cities: []
    },
    matching: {
      enabled: false,
      threshold: 85,
      delivery: 'instant'
    }
  });

  const [persona, setPersona] = useState<CustomerPersona>({
    demographics: {
      ageRange: '35-50',
      gender: [],
      location: [],
      incomeLevel: '$100,000-$150,000'
    },
    psychographics: {
      interests: [],
      values: [],
      lifestyle: [],
      behaviors: []
    },
    communication: {
      preferredChannels: [],
      brandInteractions: [],
      decisionFactors: []
    }
  });

  const companySizeRanges = ['10-50', '51-200', '201-500', '501-1000', '1000+'];
  const revenueRanges = ['$1M-$10M', '$10M-$50M', '$50M-$100M', '$100M+'];
  const painPointsList = [
    'Cost Optimization',
    'Process Efficiency',
    'Digital Transformation',
    'Customer Retention',
    'Market Expansion',
    'Compliance & Security'
  ];

  const handleMatchingToggle = () => {
    setIcpData({
      ...icpData,
      matching: {
        ...icpData.matching,
        enabled: !icpData.matching.enabled
      }
    });
  };

  return (
    <section className="py-20 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-dark/20 rounded-full filter blur-3xl opacity-30"></div>
      
      <div className="container-custom">
        <div className="glass-card p-8">
          {/* Header with Smart Match Toggle */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">ICP Development Engine</h2>
              <p className="text-white/70">Configure your ideal customer profile targeting settings</p>
            </div>
            <button
              onClick={handleMatchingToggle}
              className={`btn ${icpData.matching.enabled ? 'btn-primary' : 'btn-ghost'}`}
            >
              <Zap className="w-5 h-5 mr-2" />
              Smart Match {icpData.matching.enabled ? 'Enabled' : 'Disabled'}
            </button>
          </div>

          {/* Customer Persona Section */}
          <div className="glass-card p-6 mb-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <UserCircle className="w-5 h-5 mr-2 text-primary-light" />
              Customer Persona
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Demographics */}
              <div className="space-y-4">
                <h4 className="font-medium text-lg mb-4">Demographics</h4>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Age Range</label>
                  <select 
                    className="w-full bg-surface-medium p-2 rounded-lg border border-white/10"
                    value={persona.demographics.ageRange}
                    onChange={(e) => setPersona({
                      ...persona,
                      demographics: {
                        ...persona.demographics,
                        ageRange: e.target.value
                      }
                    })}
                  >
                    <option value="25-34">25-34 years</option>
                    <option value="35-50">35-50 years</option>
                    <option value="51-65">51-65 years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Income Level</label>
                  <select 
                    className="w-full bg-surface-medium p-2 rounded-lg border border-white/10"
                    value={persona.demographics.incomeLevel}
                  >
                    <option value="$75,000-$100,000">$75,000-$100,000</option>
                    <option value="$100,000-$150,000">$100,000-$150,000</option>
                    <option value="$150,000+">$150,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Primary Locations</label>
                  <div className="space-y-2">
                    {['Urban Centers', 'Suburban Areas', 'Tech Hubs', 'Financial Districts'].map(location => (
                      <label key={location} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox rounded bg-surface-medium border-white/10"
                          checked={persona.demographics.location.includes(location)}
                          onChange={(e) => {
                            const newLocations = e.target.checked
                              ? [...persona.demographics.location, location]
                              : persona.demographics.location.filter(l => l !== location);
                            setPersona({
                              ...persona,
                              demographics: {
                                ...persona.demographics,
                                location: newLocations
                              }
                            });
                          }}
                        />
                        <span>{location}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Psychographics */}
              <div className="space-y-4">
                <h4 className="font-medium text-lg mb-4">Psychographics</h4>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Key Interests</label>
                  <div className="space-y-2">
                    {[
                      'Technology Innovation',
                      'Business Growth',
                      'Digital Transformation',
                      'Industry Trends',
                      'Professional Development'
                    ].map(interest => (
                      <label key={interest} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox rounded bg-surface-medium border-white/10"
                          checked={persona.psychographics.interests.includes(interest)}
                          onChange={(e) => {
                            const newInterests = e.target.checked
                              ? [...persona.psychographics.interests, interest]
                              : persona.psychographics.interests.filter(i => i !== interest);
                            setPersona({
                              ...persona,
                              psychographics: {
                                ...persona.psychographics,
                                interests: newInterests
                              }
                            });
                          }}
                        />
                        <span>{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Core Values</label>
                  <div className="space-y-2">
                    {[
                      'Innovation',
                      'Efficiency',
                      'Data-Driven Decision Making',
                      'Customer Success',
                      'Sustainable Growth'
                    ].map(value => (
                      <label key={value} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox rounded bg-surface-medium border-white/10"
                          checked={persona.psychographics.values.includes(value)}
                          onChange={(e) => {
                            const newValues = e.target.checked
                              ? [...persona.psychographics.values, value]
                              : persona.psychographics.values.filter(v => v !== value);
                            setPersona({
                              ...persona,
                              psychographics: {
                                ...persona.psychographics,
                                values: newValues
                              }
                            });
                          }}
                        />
                        <span>{value}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Communication Preferences */}
              <div className="space-y-4">
                <h4 className="font-medium text-lg mb-4">Communication & Decision Making</h4>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Channels</label>
                  <div className="space-y-2">
                    {[
                      'Email',
                      'LinkedIn',
                      'Industry Events',
                      'Webinars',
                      'Direct Phone'
                    ].map(channel => (
                      <label key={channel} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox rounded bg-surface-medium border-white/10"
                          checked={persona.communication.preferredChannels.includes(channel)}
                          onChange={(e) => {
                            const newChannels = e.target.checked
                              ? [...persona.communication.preferredChannels, channel]
                              : persona.communication.preferredChannels.filter(c => c !== channel);
                            setPersona({
                              ...persona,
                              communication: {
                                ...persona.communication,
                                preferredChannels: newChannels
                              }
                            });
                          }}
                        />
                        <span>{channel}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Decision Factors</label>
                  <div className="space-y-2">
                    {[
                      'ROI Potential',
                      'Implementation Time',
                      'Technical Support',
                      'Integration Capabilities',
                      'Pricing Structure'
                    ].map(factor => (
                      <label key={factor} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox rounded bg-surface-medium border-white/10"
                          checked={persona.communication.decisionFactors.includes(factor)}
                          onChange={(e) => {
                            const newFactors = e.target.checked
                              ? [...persona.communication.decisionFactors, factor]
                              : persona.communication.decisionFactors.filter(f => f !== factor);
                            setPersona({
                              ...persona,
                              communication: {
                                ...persona.communication,
                                decisionFactors: newFactors
                              }
                            });
                          }}
                        />
                        <span>{factor}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rest of the existing components */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Primary Targeting */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Target className="w-5 h-5 mr-2 text-primary-light" />
                Primary Targeting
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Industry/Market</label>
                  <select
                    multiple
                    className="w-full min-h-[120px] bg-surface-medium p-3 rounded-lg border border-white/10 focus:border-primary-light focus:ring-1 focus:ring-primary-light"
                  >
                    <option value="software">Software & Technology</option>
                    <option value="finance">Financial Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="manufacturing">Manufacturing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Target Roles</label>
                  <div className="space-y-2">
                    {['C-Level', 'Director', 'Manager', 'Individual Contributor'].map(role => (
                      <label key={role} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox rounded bg-surface-medium border-white/10"
                          onChange={(e) => {
                            const newRoles = e.target.checked
                              ? [...icpData.roles, role]
                              : icpData.roles.filter(r => r !== role);
                            setIcpData({ ...icpData, roles: newRoles });
                          }}
                        />
                        <span>{role}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Pain Points (Select top 3)</label>
                  <div className="grid grid-cols-2 gap-2">
                    {painPointsList.map(point => (
                      <label key={point} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox rounded bg-surface-medium border-white/10"
                          disabled={icpData.painPoints.length >= 3 && !icpData.painPoints.includes(point)}
                          onChange={(e) => {
                            const newPainPoints = e.target.checked
                              ? [...icpData.painPoints, point]
                              : icpData.painPoints.filter(p => p !== point);
                            setIcpData({ ...icpData, painPoints: newPainPoints });
                          }}
                        />
                        <span>{point}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* AI Matching Configuration */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-primary-light" />
                Smart Match Configuration
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Match Threshold</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    className="w-full"
                    value={icpData.matching.threshold}
                    onChange={(e) => setIcpData({
                      ...icpData,
                      matching: {
                        ...icpData.matching,
                        threshold: parseInt(e.target.value)
                      }
                    })}
                  />
                  <div className="text-sm text-white/60 mt-1">
                    {icpData.matching.threshold}% minimum match required
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Delivery Preference</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="delivery"
                        value="instant"
                        checked={icpData.matching.delivery === 'instant'}
                        onChange={() => setIcpData({
                          ...icpData,
                          matching: {
                            ...icpData.matching,
                            delivery: 'instant'
                          }
                        })}
                        className="form-radio bg-surface-medium border-white/10"
                      />
                      <span>Instant</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="delivery"
                        value="daily"
                        checked={icpData.matching.delivery === 'daily'}
                        onChange={() => setIcpData({
                          ...icpData,
                          matching: {
                            ...icpData.matching,
                            delivery: 'daily'
                          }
                        })}
                        className="form-radio bg-surface-medium border-white/10"
                      />
                      <span>Daily Batch</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Data Sources</label>
                  <div className="space-y-2">
                    {['CRM Integration', 'LinkedIn Data', 'Website Analytics', 'Third-party Data'].map(source => (
                      <label key={source} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="form-checkbox rounded bg-surface-medium border-white/10"
                        />
                        <span>{source}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Tracking */}
          <div className="mt-8 glass-card p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <BarChart2 className="w-5 h-5 mr-2 text-primary-light" />
              Performance Metrics
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-4 text-center">
                <div className="text-sm text-white/60 mb-2">Qualification Rate</div>
                <div className="text-2xl font-bold">76%</div>
                <div className="text-xs text-success">↑ 12% this month</div>
              </div>
              
              <div className="glass-card p-4 text-center">
                <div className="text-sm text-white/60 mb-2">Engagement Score</div>
                <div className="text-2xl font-bold">8.4</div>
                <div className="text-xs text-success">↑ 0.6 points</div>
              </div>
              
              <div className="glass-card p-4 text-center">
                <div className="text-sm text-white/60 mb-2">Match Accuracy</div>
                <div className="text-2xl font-bold">92%</div>
                <div className="text-xs text-success">↑ 5% improvement</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="btn-primary">
              <Save className="w-4 h-4 mr-2" />
              Save Configuration
            </button>
            <button className="btn-ghost">
              <Bell className="w-4 h-4 mr-2" />
              Enable Notifications
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ICPEngine;