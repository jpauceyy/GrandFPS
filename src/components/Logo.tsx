import React from 'react';

export function Logo({ className = "w-10 h-10", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#003319" stroke="#00ff7f" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round">
        {/* Main C-shape */}
        <path d="M 54 22 L 22 22 L 22 78 L 58 78 L 58 66 L 34 66 L 34 34 L 66 34 Z" />
        {/* Top-right triangle */}
        <path d="M 66 22 L 78 22 L 78 34 Z" />
        {/* Right stem and arrow */}
        <path d="M 66 78 L 78 78 L 78 44 L 54 44 L 40 50 L 54 56 L 66 56 Z" />
      </g>
    </svg>
  );
}
