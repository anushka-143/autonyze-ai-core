const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg">
                A
              </div>
              <span className="text-xl font-bold tracking-tight">AUTONYZE</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              Scaling intelligence and automating success for next-generation businesses 
              through cutting-edge AI solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#services" className="block text-muted-foreground hover:text-foreground transition-colors">Services</a>
              <a href="#solutions" className="block text-muted-foreground hover:text-foreground transition-colors">Solutions</a>
              <a href="#contact" className="block text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-2">
              <a href="mailto:hello@autonyze.com" className="block text-muted-foreground hover:text-foreground transition-colors">
                hello@autonyze.com
              </a>
              <a href="tel:+15551234567" className="block text-muted-foreground hover:text-foreground transition-colors">
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © 2024 Autonyze. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;