import { useState } from "react";
import { Phone, BookOpen, MapPin, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import DemoBookingModal from "./DemoBookingModal";

const SolutionsSection = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [expandedSolutions, setExpandedSolutions] = useState<Set<number>>(new Set());

  const toggleSolution = (index: number) => {
    const newExpanded = new Set(expandedSolutions);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedSolutions(newExpanded);
  };

  const solutions = [
    {
      icon: Phone,
      title: "AI Voice Receptionist",
      description: "24/7 intelligent call handling with natural conversation",
      expandedDescription: "Our AI Voice Receptionist revolutionizes customer service by providing human-like interactions around the clock. Using advanced natural language processing, it understands caller intent, handles complex queries, and seamlessly transfers calls when needed. The system learns from each interaction to continuously improve response quality and customer satisfaction.",
      features: ["Natural language processing", "Multi-language support", "CRM integration"],
      additionalFeatures: ["Call sentiment analysis", "Appointment scheduling", "Lead qualification", "Custom voice training", "Real-time transcription"],
      highlight: "99.9% Uptime",
      useCases: ["Reception desk replacement", "After-hours support", "Lead capture", "Appointment booking"]
    },
    {
      icon: BookOpen,
      title: "Academic Research Assistant",
      description: "AI-powered research and citation management",
      expandedDescription: "Accelerate academic research with our intelligent assistant that can analyze thousands of papers, extract key insights, and generate comprehensive literature reviews. The system automatically formats citations, identifies research gaps, and suggests relevant sources, allowing researchers to focus on analysis and discovery rather than manual data collection.",
      features: ["Paper analysis", "Citation generation", "Data synthesis"],
      additionalFeatures: ["Plagiarism detection", "Research trend analysis", "Collaboration tools", "Multi-format export", "Reference validation"],
      highlight: "10x Faster Research",
      useCases: ["Literature reviews", "Grant applications", "Thesis research", "Academic writing"]
    },
    {
      icon: MapPin,
      title: "Virtual Try-On",
      description: "AI-powered virtual fitting and product visualization",
      expandedDescription: "Transform e-commerce with immersive virtual try-on experiences that reduce returns and increase customer confidence. Our technology creates accurate 3D body models, realistic fabric simulation, and personalized fit recommendations. Customers can visualize products in real-time using their camera or uploaded photos.",
      features: ["Real-time rendering", "Body measurement", "Style recommendations"],
      additionalFeatures: ["Fabric physics simulation", "Size prediction", "Color matching", "Social sharing", "Analytics dashboard"],
      highlight: "Immersive Experience",
      useCases: ["Fashion retail", "Eyewear fitting", "Jewelry preview", "Home furnishing"]
    },
    {
      icon: Zap,
      title: "Custom AI Solutions",
      description: "Tailored AI systems for your specific business needs",
      expandedDescription: "Every business is unique, and so are their AI requirements. Our custom development team works closely with you to design, build, and deploy AI solutions that address your specific challenges. From data pipeline automation to predictive analytics, we create scalable systems that grow with your business and integrate seamlessly with existing workflows.",
      features: ["Custom development", "Enterprise integration", "Ongoing support"],
      additionalFeatures: ["Scalable architecture", "Security compliance", "Performance monitoring", "Training & documentation", "24/7 maintenance"],
      highlight: "Fully Customized",
      useCases: ["Industry-specific automation", "Predictive maintenance", "Fraud detection", "Supply chain optimization"]
    }
  ];

  return (
    <section id="solutions" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="display-title text-foreground mb-4">
            Featured Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flagship AI solutions that demonstrate the power of intelligent automation
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            const isExpanded = expandedSolutions.has(index);
            return (
              <Collapsible key={index} open={isExpanded} onOpenChange={() => toggleSolution(index)}>
                <div 
                  className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                        <IconComponent className="w-7 h-7 text-accent" />
                      </div>
                      <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {solution.highlight}
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expanded Content */}
                    <CollapsibleContent>
                      <div className="space-y-6 pt-6 border-t border-border">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">Detailed Overview</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {solution.expandedDescription}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-accent mb-3">Advanced Features:</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {solution.additionalFeatures.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-3">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                                <span className="text-sm text-muted-foreground">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-accent mb-3">Use Cases:</h4>
                          <div className="flex flex-wrap gap-2">
                            {solution.useCases.map((useCase, useCaseIndex) => (
                              <span key={useCaseIndex} className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs">
                                {useCase}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>

                    {/* CTA */}
                    <div className={isExpanded ? "mt-6" : "mt-2"}>
                      <CollapsibleTrigger asChild>
                        <button className="w-full py-3 border border-border rounded-xl font-medium text-foreground hover:bg-secondary transition-colors duration-200 group-hover:border-accent flex items-center justify-center space-x-2">
                          <span>{isExpanded ? "Show Less" : "Learn More"}</span>
                          {isExpanded ? 
                            <ChevronUp className="w-4 h-4" /> : 
                            <ChevronDown className="w-4 h-4" />
                          }
                        </button>
                      </CollapsibleTrigger>
                    </div>
                  </div>

                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </Collapsible>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to see these solutions in action?
          </p>
          <button 
            className="cta-button"
            onClick={() => setIsDemoModalOpen(true)}
          >
            Schedule a Demo
          </button>
        </div>
        
        <DemoBookingModal 
          isOpen={isDemoModalOpen} 
          onClose={() => setIsDemoModalOpen(false)} 
        />
      </div>
    </section>
  );
};

export default SolutionsSection;