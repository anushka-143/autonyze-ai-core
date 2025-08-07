const TechStackSection = () => {
  const technologies = [
    "GPT-4.1", "Gemini", "Claude", "LangChain", "Streamlit", "FastAPI", 
    "Vapi", "OpenCV", "Tesseract", "TensorFlow", "PyTorch", "React", 
    "Next.js", "Supabase", "AWS", "Docker"
  ];

  return (
    <section className="py-16 bg-secondary/10 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Built with Industry-Leading Technology
          </h3>
          <p className="text-muted-foreground">
            Leveraging the most advanced AI platforms and development tools
          </p>
        </div>

        {/* Scrolling Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-8">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 bg-card border border-border rounded-full text-sm font-medium text-foreground whitespace-nowrap hover:bg-secondary transition-colors duration-200"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;