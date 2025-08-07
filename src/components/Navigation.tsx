import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-lg">
              A
            </div>
            <span className="text-xl font-bold tracking-tight">AUTONYZE</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              About
            </a>
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Services
            </a>
            <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Solutions
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
              Contact
            </a>
            <button className="cta-button">
              Book Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="h-0.5 bg-foreground transition-all duration-200"></div>
              <div className="h-0.5 bg-foreground transition-all duration-200"></div>
              <div className="h-0.5 bg-foreground transition-all duration-200"></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;