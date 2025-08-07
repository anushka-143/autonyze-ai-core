const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="space-y-4 mb-16">
            <h2 className="display-title text-foreground">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <p className="text-2xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              A future-facing technology agency blending state-of-the-art AI, automation, 
              and digital transformation for next-generation businesses.
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in building intelligent systems that don't just automate tasks—they 
              transform how businesses think, operate, and scale in an AI-driven world.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">500%</div>
              <div className="text-muted-foreground">Average Efficiency Gain</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">AI-Powered Operations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-muted-foreground">Automated Workflows</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default AboutSection;