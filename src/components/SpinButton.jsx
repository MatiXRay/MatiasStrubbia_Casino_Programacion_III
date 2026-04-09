import React from 'react';

export default function SpinButton({ onSpin, isSpinning }) {
  return (
    <button
      onClick={onSpin}
      disabled={isSpinning}
      className={`
        relative px-8 py-4 sm:px-12 sm:py-6 text-2xl sm:text-3xl font-black uppercase tracking-widest text-white rounded-full 
        transition-all duration-300 transform shadow-2xl
        ${isSpinning 
          ? 'bg-neutral-600 scale-95 cursor-not-allowed opacity-75' 
          : 'bg-gradient-to-b from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 hover:scale-105 active:scale-95 hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] border-t-2 border-yellow-200'
        }
      `}
    >
      <span className="drop-shadow-md">
        {isSpinning ? 'Girando...' : 'Girar'}
      </span>
      {/* Decorative inner glow */}
      {!isSpinning && (
        <div className="absolute inset-0 rounded-full border-2 border-yellow-300 opacity-50 mix-blend-overlay"></div>
      )}
    </button>
  );
}
