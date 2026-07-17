import React from 'react';
import logoUrl from '../assets/logo.png';

const Logo = ({ className = "" }) => {
  return (
    <img 
      src={logoUrl} 
      alt="CAP'N ROBBY" 
      className={`w-auto object-contain h-12 md:h-16 ${className}`} 
    />
  );
};

export default Logo;
