import PropTypes from 'prop-types';

const Logo = ({ className = "w-10 h-10", color = "currentColor" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className={className}
      fill="none"
    >
      {/* Defs for gradients and filters */}
      <defs>
        {/* Primary gradient */}
        <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        
        {/* Accent gradient */}
        <linearGradient id="accentGradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        
        {/* Subtle glow */}
        <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Main logo group */}
      <g>
        {/* Hexagon background - representing a code block */}
        <path 
          d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 Z" 
          fill="url(#primaryGradient)"
          opacity="0.9"
          filter="url(#subtleGlow)"
        />
        
        {/* Code elements */}
        <g stroke={color} strokeWidth="3" strokeLinecap="round">
          {/* Left angle bracket */}
          <path d="M35,35 L25,50 L35,65" stroke="white" />
          
          {/* Right angle bracket */}
          <path d="M65,35 L75,50 L65,65" stroke="white" />
          
          {/* Forward slash - representing coding */}
          <path d="M45,30 L55,70" stroke="white" strokeDasharray="2,3" />
        </g>
        
        {/* Central dot - focal point */}
        <circle cx="50" cy="50" r="4" fill="white" />
        
        {/* Decorative elements */}
        <g fill="white" opacity="0.7">
          <circle cx="25" cy="30" r="1.5" />
          <circle cx="75" cy="30" r="1.5" />
          <circle cx="25" cy="70" r="1.5" />
          <circle cx="75" cy="70" r="1.5" />
        </g>
        
        {/* Accent line */}
        <path 
          d="M30,80 L70,80" 
          stroke="url(#accentGradient)" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string
};

export default Logo;