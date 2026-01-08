"use client";

import { Container } from "@/components/ui/Container";
import { useEffect, useRef, useState } from "react";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
}

function StatItem({ value, suffix, label }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={itemRef} className="text-center">
      <div className="text-4xl md:text-5xl font-serif font-bold text-gold mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-ivory/80 font-light tracking-wide">
        {label}
      </div>
    </div>
  );
}

export function Stats() {
  const stats = [
    {
      value: 100,
      suffix: "+",
      label: "Happy Guests",
    },
    {
      value: 5,
      suffix: "",
      label: "Rooms",
    },
    {
      value: 24,
      suffix: "/7",
      label: "Room Service",
    },
    {
      value: 10,
      suffix: "★",
      label: "Ratings",
    },
  ];

  return (
    <section className="relative py-16 md:py-20 bg-charcoal text-ivory overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/images/about/stats-bg.jpg')"
        }}
      />
      <Container className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
