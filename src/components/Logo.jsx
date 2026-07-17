import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`relative inline-flex flex-col items-center justify-center select-none ${className}`}>
      {/* Yellow Square Background */}
      <div className="absolute bg-primary w-[38%] h-[160%] top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"></div>
      
      {/* Main Brand Name */}
      <div className="text-2xl md:text-3xl font-black tracking-wider z-10 uppercase whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif" }}>
        CAP N ROBBY
      </div>
      
      {/* Sub Title */}
      <div className="flex items-center justify-center w-full mt-1 z-10 px-1">
        <div className="h-[1.5px] flex-1 bg-current"></div>
        <span className="text-[0.55rem] md:text-[0.65rem] font-bold tracking-[0.3em] px-2 uppercase whitespace-nowrap">
          MEN'S WEAR
        </span>
        <div className="h-[1.5px] flex-1 bg-current"></div>
      </div>
    </div>
  );
};

export default Logo;
