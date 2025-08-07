import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For now, we'll show a success message and provide contact options
      toast({
        title: "Message Received!",
        description: "We'll get back to you within 24 hours. For immediate assistance, call our voice agent.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        phone: ""
      });

      // Show contact options
      setTimeout(() => {
        toast({
          title: "Quick Contact Options",
          description: "Call +1 (762) 465-8869 for immediate assistance or we'll email you back soon.",
        });
      }, 2000);

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try calling us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-card border border-border rounded-3xl card-elevated">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h3>
        <p className="text-muted-foreground">Send us a message or call our voice agent directly</p>
      </div>

      {/* Quick Contact Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <a
          href="tel:+17624658869"
          className="flex items-center justify-center space-x-2 p-4 bg-accent/10 hover:bg-accent/20 rounded-xl transition-colors group"
        >
          <Phone className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
          <span className="font-medium">Call Voice Agent</span>
        </a>
        <a
          href="mailto:anushkatomar555@gmail.com"
          className="flex items-center justify-center space-x-2 p-4 bg-accent/10 hover:bg-accent/20 rounded-xl transition-colors group"
        >
          <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
          <span className="font-medium">Send Email</span>
        </a>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent rounded-xl blur-xl"></div>
        
        <form onSubmit={handleSubmit} className="relative space-y-6 p-6 bg-background/50 rounded-xl border border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name *
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-background border-border focus:border-accent"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-background border-border focus:border-accent"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                Company
              </label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="bg-background border-border focus:border-accent"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-background border-border focus:border-accent"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message *
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="bg-background border-border focus:border-accent resize-none"
              placeholder="Tell us about your project and how we can help..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full cta-button group"
          >
            <span className="flex items-center justify-center space-x-2">
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </Button>

          <p className="text-sm text-muted-foreground text-center">
            We typically respond within 24 hours. For immediate assistance, call our voice agent.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;