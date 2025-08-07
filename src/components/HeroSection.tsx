import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const headlineRef = useRef(null);
  const ctaRef = useRef(null);
  const splineRef = useRef(null);
  const orbsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Headline animation
    tl.fromTo(headlineRef.current, 
      { opacity: 0, y: 50, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
    );

    // CTA animation
    tl.fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.5"
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

    // CTA hover animation
    const ctaElement = ctaRef.current;
    if (ctaElement) {
      ctaElement.addEventListener('mouseenter', () => {
        gsap.to(ctaElement, { scale: 1.05, duration: 0.3 });
      });
      ctaElement.addEventListener('mouseleave', () => {
        gsap.to(ctaElement, { scale: 1, duration: 0.3 });
      });
    }
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

      {/* Content Overlay */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-end pb-32 text-center px-4">
        {/* Large Animated Headline */}
        <h1 
          ref={headlineRef}
          className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold text-foreground tracking-tight mb-8 max-w-5xl leading-tight"
        >
          Welcome to Autonyze — Where Intelligence Meets Aesthetics.
        </h1>

        {/* Subtitle and Glowing CTA */}
        <div className="flex flex-col items-center space-y-6">
          <p className="text-lg md:text-xl text-muted-foreground font-space-grotesk max-w-2xl">
            Experience the future of AI automation with stunning visual design
          </p>
          
          <Button
            ref={ctaRef}
            className="px-8 py-6 text-lg font-semibold bg-accent text-accent-foreground hover:bg-accent/90 rounded-full relative overflow-hidden group"
            style={{
              boxShadow: '0 0 30px hsl(var(--accent) / 0.5)',
            }}
          >
            <span className="relative z-10">Let's Build Together</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;