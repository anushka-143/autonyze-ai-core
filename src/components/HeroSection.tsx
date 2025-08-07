const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Spotlight Effect */}
      <div className="absolute inset-0 hero-spotlight"></div>
      
      {/* 3D Model Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Text Content */}
        <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-4">
            <h1 className="hero-title text-foreground">
              Scaling 
              <span className="block text-accent">Intelligence.</span>
              <span className="block">Automating Success.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              A future-facing technology agency blending state-of-the-art AI, automation, 
              and digital transformation for next-generation businesses.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="cta-button">
              Explore Solutions
            </button>
            <button className="px-8 py-4 border border-border rounded-xl font-semibold transition-all duration-300 hover:bg-secondary">
              Book a Demo
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <p className="text-sm text-muted-foreground mb-4">Trusted by innovative companies</p>
            <div className="flex flex-wrap gap-6 opacity-60">
              <div className="px-4 py-2 border border-border rounded-lg text-sm">GPT-4.1</div>
              <div className="px-4 py-2 border border-border rounded-lg text-sm">LangChain</div>
              <div className="px-4 py-2 border border-border rounded-lg text-sm">OpenCV</div>
              <div className="px-4 py-2 border border-border rounded-lg text-sm">FastAPI</div>
            </div>
          </div>
        </div>

        {/* Right Side - 3D Model */}
        <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative rounded-2xl overflow-hidden aspect-square animate-float">
            {/* Spline 3D Model */}
            <iframe 
              src='https://my.spline.design/nexbotrobotcharacterconcept-ywMjtMxG2D4kJV3XLPxkasdx/' 
              frameBorder='0' 
              width='100%' 
              height='100%'
              className="rounded-2xl"
              title="Autonyze AI Robot"
            />
            
            {/* Glow Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none rounded-2xl"></div>
          </div>
          
          {/* Floating UI Elements */}
          <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">AI Active</span>
            </div>
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="text-sm">
              <div className="text-muted-foreground">Processing</div>
              <div className="font-semibold">247% Faster</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-muted-foreground">Discover More</span>
          <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;