import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const headlineRef = useRef(null);
  const splineRef = useRef(null);
  const orbsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    // Spline model animation - fade in from center
    tl.fromTo(splineRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
    );

    // Headline animation with slight delay
    tl.fromTo(headlineRef.current, 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.6"
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

    // Enhanced parallax effect on Spline model during scroll
    gsap.to(splineRef.current, {
      yPercent: -15,
      scale: 0.95,
      ease: "none",
      scrollTrigger: {
        trigger: splineRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background Spotlight Effect */}
      <div className="absolute inset-0 hero-spotlight"></div>
      
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

      {/* Main Content Container */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 space-y-1">
        
        {/* Spline 3D Model - Larger and Prominent */}
        <div ref={splineRef} className="w-full max-w-6xl mx-auto">
          <div className="relative w-full h-[70vh] md:h-[75vh] lg:h-[80vh]">
            <iframe 
              src='https://my.spline.design/genkubgreetingrobot-o4Z8mTIONq4TDkIyWTc2Al77/' 
              frameBorder='0' 
              width='100%' 
              height='100%'
              className="w-full h-full"
              title="Autonyze AI Agent"
            />
          </div>
        </div>

        {/* Welcome Text - Closer to Model */}
        <div ref={headlineRef} className="text-center space-y-4 max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-orbitron font-light text-foreground tracking-wide leading-relaxed">
            Welcome to Autonyze — Where Intelligence Meets Aesthetics.
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-space-grotesk font-light max-w-4xl mx-auto">
            Experience the future of AI automation with stunning visual design
          </p>
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-16 md:h-20"></div>
    </section>
  );
};

export default HeroSection;