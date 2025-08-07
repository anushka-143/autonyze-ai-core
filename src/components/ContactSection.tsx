import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="display-title text-foreground mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Let's discuss how AI automation can revolutionize your operations and drive unprecedented growth.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email us</div>
                  <div className="text-muted-foreground">hello@autonyze.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Call us</div>
                  <div className="text-muted-foreground">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Visit us</div>
                  <div className="text-muted-foreground">San Francisco, CA</div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="pt-8 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">What you get:</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Free consultation and strategy session</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">Custom AI solution roadmap</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">ROI analysis and timeline</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - CTA Card */}
          <div className="relative">
            <div className="bg-card border border-border rounded-3xl p-8 card-elevated">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto">
                  <ArrowRight className="w-8 h-8 text-accent" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Start Your AI Journey
                  </h3>
                  <p className="text-muted-foreground">
                    Book a free consultation to explore how AI can transform your business
                  </p>
                </div>

                <button className="cta-button w-full group">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Book Free Consultation</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </button>

                <div className="text-sm text-muted-foreground">
                  No commitment • 30-minute session • Immediate value
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-3xl scale-110 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;