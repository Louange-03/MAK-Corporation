import React, { useEffect, useRef, useState } from "react";

const AnimatedTitle = ({ 
  children, 
  className = "", 
  as = "h1",
  animate = true,
  gradient = true 
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

  const text = typeof children === "string" ? children : "";
  const words = text.split(" ");

  const content = animate ? (
    words.map((word, wordIndex) => (
      <span key={wordIndex} className="inline-block mr-[0.3em]">
        {word.split("").map((letter, letterIndex) => (
          <span
            key={letterIndex}
            className={`inline-block ${gradient ? "gradient-text" : "text-white"} ${
              isVisible ? "animate-letter" : "opacity-0"
            }`}
            style={{
              animationDelay: `${(wordIndex * word.length + letterIndex) * 0.04}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </span>
    ))
  ) : (
    <span className={gradient ? "gradient-text" : ""}>{children}</span>
  );

  const Tag = as;

  return (
    <Tag ref={ref} className={className}>
      {content}
    </Tag>
  );
};

export default AnimatedTitle;
