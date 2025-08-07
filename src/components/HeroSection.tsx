import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const headlineRef = useRef(null);
  const splineRef = useRef(null);
  const orbsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Spline fade in from top
    tl.fromTo(splineRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    // Headline animation with delay
    tl.fromTo(headlineRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.5"
    );

    // Subtle floating orbs animation
    orbsRef.current.forEach((orb, index) => {
      if (orb) {
        gsap.to(orb, {
          y: "random(-20, 20)",
          x: "random(-15, 15)",
          duration: "random(4, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3
        });
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Neon Orbs - Subtle */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (orbsRef.current[i] = el)}
          className="absolute w-1.5 h-1.5 bg-accent rounded-full opacity-15 blur-sm"
          style={{
            left: `${25 + i * 20}%`,
            top: `${20 + (i % 2) * 60}%`,
            boxShadow: '0 0 15px hsl(var(--accent) / 0.3)'
          }}
        />
      ))}
      
      {/* Spline 3D Model - Centered Main Visual */}
      <div ref={splineRef} className="absolute inset-0 w-full h-[70vh] top-0">
        <iframe 
          src='https://my.spline.design/genkubgreetingrobot-o4Z8mTIONq4TDkIyWTc2Al77/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
          title="Autonyze AI Agent"
        />
      </div>

      {/* Welcome Text - Clearly Below Model */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-16 pt-8">
        <div ref={headlineRef} className="text-center px-4 space-y-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-orbitron font-light text-foreground tracking-wide leading-relaxed">
            Welcome to Autonyze — Where Intelligence Meets Aesthetics.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground font-space-grotesk font-light max-w-3xl mx-auto">
            Experience the future of AI automation with stunning visual design
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;