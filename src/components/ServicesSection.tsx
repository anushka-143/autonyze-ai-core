import { Bot, MessageSquare, Workflow, Code, ShoppingCart, Eye } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: "Generative AI & Agent-Based Automation",
      description: "Deploy intelligent AI agents for research, data, and planning tasks.",
    },
    {
      icon: MessageSquare,
      title: "Voice & Conversational AI",
      description: "Natural language interfaces that understand and respond like humans.",
    },
    {
      icon: Workflow,
      title: "Business and Workflow Automation",
      description: "Streamline operations with intelligent process automation.",
    },
    {
      icon: Code,
      title: "Web Development & App Engineering",
      description: "Modern applications built with AI-first architecture.",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce AI & 3D Services",
      description: "Immersive shopping experiences powered by AI and 3D technology.",
    },
    {
      icon: Eye,
      title: "Computer Vision & OCR",
      description: "Extract insights from images and documents automatically.",
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
            return (
              <div 
                key={index}
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
                </div>
                
                <div className="pt-4 border-t border-border">
                  <span className="text-sm text-accent font-medium group-hover:underline cursor-pointer">
                    Learn More →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;