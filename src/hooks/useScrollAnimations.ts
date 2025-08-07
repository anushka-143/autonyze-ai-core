import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useScrollAnimations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate sections on scroll
    const sections = gsap.utils.toArray('.animate-on-scroll');
    sections.forEach((section: any) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    // Animate cards with stagger effect
    const cards = gsap.utils.toArray('.card-animate');
    cards.forEach((card: any, index: number) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 60,
          rotateY: 15
        },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.1
        }
      );
    });

    // Animate text elements sliding in from sides
    const textLeft = gsap.utils.toArray('.slide-in-left');
    textLeft.forEach((element: any) => {
      gsap.fromTo(element,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    const textRight = gsap.utils.toArray('.slide-in-right');
    textRight.forEach((element: any) => {
      gsap.fromTo(element,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};