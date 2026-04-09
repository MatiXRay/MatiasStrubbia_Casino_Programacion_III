import React from 'react';

export default function Reel({ symbol, isSpinning }) {
  return (
    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-neutral-800 rounded-xl border-4 border-neutral-700 shadow-[inset_0_4px_12px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden relative">
      <div className={`transition-all duration-300 ${isSpinning ? 'animate-slot-spin' : ''}`}>
        <img 
          src={symbol} 
          alt="Slot Symbol" 
          className="w-16 h-16 sm:w-24 sm:h-24 object-contain drop-shadow-md" 
        />
      </div>
    </div>
  );
}
