import { useState } from "react";
import { Bot, MessageSquare, Workflow, Code, ShoppingCart, Eye, ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const ServicesSection = () => {
  const [expandedServices, setExpandedServices] = useState<Set<number>>(new Set());

  const toggleService = (index: number) => {
    const newExpanded = new Set(expandedServices);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedServices(newExpanded);
  };

  const services = [
    {
      icon: Bot,
      title: "Generative AI & Agent-Based Automation",
      description: "Deploy intelligent AI agents for research, data, and planning tasks.",
      expandedDescription: "Our advanced AI agents leverage cutting-edge generative models to automate complex workflows. These intelligent systems can conduct in-depth research across multiple data sources, analyze patterns, generate insights, and execute multi-step planning tasks. Perfect for businesses looking to scale their analytical capabilities while maintaining accuracy and efficiency.",
      features: ["Multi-source data analysis", "Automated report generation", "Intelligent task prioritization", "Continuous learning capabilities"]
    },
    {
      icon: MessageSquare,
      title: "Voice & Conversational AI",
      description: "Natural language interfaces that understand and respond like humans.",
      expandedDescription: "Transform customer interactions with our sophisticated conversational AI platforms. Our voice AI systems feature natural speech recognition, context-aware responses, and emotional intelligence to create seamless user experiences. Integrate across phone systems, web chat, and mobile applications for consistent omnichannel support.",
      features: ["Natural language processing", "Voice synthesis & recognition", "Multi-language support", "Emotion detection", "24/7 availability"]
    },
    {
      icon: Workflow,
      title: "Business and Workflow Automation",
      description: "Streamline operations with intelligent process automation.",
      expandedDescription: "Revolutionize your business processes with end-to-end automation solutions that adapt and optimize over time. Our intelligent workflow systems identify bottlenecks, predict resource needs, and automatically route tasks for maximum efficiency. Integration with existing tools ensures minimal disruption during implementation.",
      features: ["Process mapping & optimization", "Real-time monitoring", "Predictive analytics", "Integration APIs", "Custom workflow designer"]
    },
    {
      icon: Code,
      title: "Web Development & App Engineering",
      description: "Modern applications built with AI-first architecture.",
      expandedDescription: "Create next-generation applications that leverage AI at their core. Our development approach integrates machine learning models, intelligent user interfaces, and automated testing to deliver scalable, maintainable solutions. From concept to deployment, we build applications that evolve with your business needs.",
      features: ["AI-powered user interfaces", "Scalable cloud architecture", "Real-time data processing", "Cross-platform compatibility", "Automated testing & deployment"]
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce AI & 3D Services",
      description: "Immersive shopping experiences powered by AI and 3D technology.",
      expandedDescription: "Transform online retail with immersive 3D product visualization and AI-driven personalization. Our solutions include virtual try-on experiences, intelligent product recommendations, and automated inventory management. Boost conversion rates and reduce returns with engaging, interactive shopping experiences.",
      features: ["3D product visualization", "Virtual try-on technology", "Personalized recommendations", "Inventory optimization", "AR/VR integration"]
    },
    {
      icon: Eye,
      title: "Computer Vision & OCR",
      description: "Extract insights from images and documents automatically.",
      expandedDescription: "Unlock the potential of visual data with advanced computer vision and optical character recognition systems. Process documents, analyze images, detect objects, and extract actionable insights at scale. Perfect for automating data entry, quality control, and content analysis workflows.",
      features: ["Document digitization", "Object detection & tracking", "Facial recognition", "Quality control automation", "Real-time image analysis"]
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="display-title text-foreground mb-4">
            Core Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive AI solutions designed to transform every aspect of your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isExpanded = expandedServices.has(index);
            return (
              <Collapsible key={index} open={isExpanded} onOpenChange={() => toggleService(index)}>
                <div 
                  className="service-card group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="section-title text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <CollapsibleContent className="mt-4">
                      <div className="space-y-4 pt-4 border-t border-border">
                        <p className="text-sm text-foreground leading-relaxed">
                          {service.expandedDescription}
                        </p>
                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-accent">Key Features:</h4>
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CollapsibleContent>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <CollapsibleTrigger asChild>
                      <button className="flex items-center justify-between w-full text-sm text-accent font-medium group-hover:underline cursor-pointer">
                        <span>{isExpanded ? "Show Less" : "Learn More"}</span>
                        {isExpanded ? 
                          <ChevronUp className="w-4 h-4 ml-2" /> : 
                          <ChevronDown className="w-4 h-4 ml-2" />
                        }
                      </button>
                    </CollapsibleTrigger>
                  </div>
                </div>
              </Collapsible>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;