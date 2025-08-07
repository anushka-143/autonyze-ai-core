import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const headlineRef = useRef(null);
  const splineRef = useRef(null);
  const orbsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Headline animation
    tl.fromTo(headlineRef.current, 
      { opacity: 0, y: 50, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
    );

    // Spline fade in from right
    tl.fromTo(splineRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
      "-=1"
    );

    // Floating orbs animation
    orbsRef.current.forEach((orb, index) => {
      if (orb) {
        gsap.to(orb, {
          y: "random(-30, 30)",
          x: "random(-20, 20)",
          duration: "random(3, 5)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5
        });
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Spotlight Effect */}
      <div className="absolute inset-0 hero-spotlight"></div>
      
      {/* Floating Neon Orbs */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (orbsRef.current[i] = el)}
          className="absolute w-2 h-2 bg-accent rounded-full opacity-20 blur-sm"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
            boxShadow: '0 0 20px hsl(var(--accent))'
          }}
        />
      ))}

      {/* Fullscreen Spline 3D Model */}
      <div ref={splineRef} className="absolute inset-0 w-full h-full">
        <iframe 
          src='https://my.spline.design/genkubgreetingrobot-o4Z8mTIONq4TDkIyWTc2Al77/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
          title="Autonyze AI Agent"
        />
      </div>

      {/* Content Below Model */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-end pb-20 text-center px-4">
        {/* Minimal Text Below Agent */}
        <div ref={headlineRef} className="space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-orbitron font-light text-foreground tracking-wide">
            Welcome to Autonyze — Where Intelligence Meets Aesthetics.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground font-space-grotesk font-light">
            Experience the future of AI automation with stunning visual design
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;