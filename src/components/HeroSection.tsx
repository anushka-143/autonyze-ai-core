const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Spotlight Effect */}
      <div className="absolute inset-0 hero-spotlight"></div>
      
      {/* Centered Agent Container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        
        {/* 3D Agent Model - Centerpiece */}
        <div className="relative w-full max-w-4xl h-[70vh] animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-full h-full rounded-2xl overflow-hidden animate-float">
            {/* Spline 3D Agent */}
            <iframe 
              src='https://my.spline.design/genkubgreetingrobot-o4Z8mTIONq4TDkIyWTc2Al77/' 
              frameBorder='0' 
              width='100%' 
              height='100%'
              className="rounded-2xl"
              title="Autonyze AI Agent"
            />
            
            {/* Subtle Overlay for Integration */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none rounded-2xl"></div>
          </div>
        </div>

        {/* Minimal Welcome Text */}
        <div className="relative z-20 text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-light text-foreground tracking-wide">
            Welcome to the future of AI automation
          </h1>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
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