"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnimationObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll:not(.observed)');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const delay = index * 100;
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, Math.min(delay, 400));
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
      el.classList.add('observed');
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, [pathname]);

  return null;
}
