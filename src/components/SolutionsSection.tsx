import { Phone, BookOpen, MapPin, Zap } from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Phone,
      title: "AI Voice Receptionist",
      description: "24/7 intelligent call handling with natural conversation",
      features: ["Natural language processing", "Multi-language support", "CRM integration"],
      highlight: "99.9% Uptime"
    },
    {
      icon: BookOpen,
      title: "Academic Research Assistant",
      description: "AI-powered research and citation management",
      features: ["Paper analysis", "Citation generation", "Data synthesis"],
      highlight: "10x Faster Research"
    },
    {
      icon: MapPin,
      title: "Virtual Try-On",
      description: "AI-powered virtual fitting and product visualization",
      features: ["Real-time rendering", "Body measurement", "Style recommendations"],
      highlight: "Immersive Experience"
    },
    {
      icon: Zap,
      title: "Custom AI Solutions",
      description: "Tailored AI systems for your specific business needs",
      features: ["Custom development", "Enterprise integration", "Ongoing support"],
      highlight: "Fully Customized"
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
            return (
              <div 
                key={index}
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
                  <div className="space-y-2 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="w-full py-3 border border-border rounded-xl font-medium text-foreground hover:bg-secondary transition-colors duration-200 group-hover:border-accent">
                    Learn More
                  </button>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to see these solutions in action?
          </p>
          <button className="cta-button">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;