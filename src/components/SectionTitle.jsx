import React, { useEffect, useRef, useState } from "react";

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true,
  light = false,
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className}`}
    >
      <h2 
        className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 ${
          light ? "text-white" : "gradient-text"
        } ${isVisible ? "animate-title" : "opacity-0"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={`text-lg md:text-xl max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-white/80" : "text-muted-foreground"
          } ${isVisible ? "animate-fade-up stagger-2" : "opacity-0"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
