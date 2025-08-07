import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="display-title text-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Let's discuss how AI automation can revolutionize your operations and drive unprecedented growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Methods */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-card rounded-xl border border-border hover:border-accent transition-colors">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email us</div>
                  <a 
                    href="mailto:anushkatomar555@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    anushkatomar555@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-card rounded-xl border border-border hover:border-accent transition-colors">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Call Voice Agent</div>
                  <a href="tel:+17624658869" className="text-muted-foreground hover:text-accent transition-colors text-lg font-medium">
                    +1 (762) 465-8869
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-card rounded-xl border border-border">
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

            {/* Quick CTA Card */}
            <div className="bg-card border border-border rounded-2xl p-6 card-elevated">
              <div className="text-center space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                  <ArrowRight className="w-6 h-6 text-accent" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Immediate Assistance
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Talk to our AI voice agent right now
                  </p>
                </div>

                <a 
                  href="tel:+17624658869"
                  className="cta-button w-full group block text-center"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Call Voice Agent Now</span>
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </span>
                </a>

                <div className="text-xs text-muted-foreground">
                  Available 24/7 • Instant response • No waiting
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;