import React from "react";

const Logo = ({ size = "default", showText = true, className = "" }) => {
  const sizes = {
    small: { icon: 32, text: "text-lg" },
    default: { icon: 44, text: "text-xl" },
    large: { icon: 64, text: "text-3xl" },
  };

  const { icon, text } = sizes[size] || sizes.default;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative" style={{ width: icon, height: icon }}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4A7FA7" />
              <stop offset="50%" stopColor="#1A3D63" />
              <stop offset="100%" stopColor="#0A1931" />
            </linearGradient>
            <linearGradient id="logoGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6BA3C7" />
              <stop offset="100%" stopColor="#4A7FA7" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.3" />
            </filter>
          </defs>
          
          {/* Diamond shape background */}
          <g filter="url(#shadow)">
            <rect
              x="15"
              y="15"
              width="70"
              height="70"
              rx="16"
              transform="rotate(45 50 50)"
              fill="url(#logoGradient)"
            />
          </g>
          
          {/* Inner diamond highlight */}
          <rect
            x="22"
            y="22"
            width="56"
            height="56"
            rx="12"
            transform="rotate(45 50 50)"
            fill="url(#logoGradientLight)"
            opacity="0.3"
          />
          
          {/* Letter M */}
          <text
            x="50"
            y="62"
            textAnchor="middle"
            fontSize="42"
            fontWeight="700"
            fontFamily="Montserrat, sans-serif"
            fill="white"
            style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))" }}
          >
            M
          </text>
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col leading-tight">
          <span className={`font-heading font-bold text-mak-dark ${text}`}>
            MAK
          </span>
          <span className="font-heading text-mak-medium text-xs tracking-widest uppercase">
            Corporation
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
