import { useState } from 'react';
import Reel from './Reel';
import SpinButton from './SpinButton';

import copperImg from '../assets/copper.png';
import diamondImg from '../assets/diamond.png';
import goldImg from '../assets/gold.png';

const SYMBOLS = [copperImg, diamondImg, goldImg];

export default function SlotMachine() {
  const [reels, setReels] = useState([SYMBOLS[1], SYMBOLS[1], SYMBOLS[1]]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  const spin = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    setResultMessage('');

    // Animating the "spin" for 2 seconds before showing the result
    setTimeout(() => {
      const newReels = [
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
      ];
      
      setReels(newReels);
      setIsSpinning(false);
      
      if (newReels[0] === newReels[1] && newReels[1] === newReels[2]) {
        setResultMessage('¡GANASTE!');
      } else {
        setResultMessage('Sigue intentando...');
      }
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center bg-neutral-900 border-8 border-neutral-950 p-8 sm:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative">
      {/* Decorative Lights Wrapper */}
      <div className="absolute inset-0 border-[6px] border-dotted border-yellow-500 rounded-[1.6rem] opacity-50 animate-pulse pointer-events-none"></div>
      
      <div className="w-full flex justify-center mb-8 bg-neutral-950 p-4 rounded-xl border border-neutral-800">
        <h2 className="text-3xl sm:text-4xl font-black tracking-widest bg-gradient-to-b from-yellow-300 to-yellow-600 bg-clip-text text-transparent uppercase drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">
          Tragamonedas
        </h2>
      </div>

      <div className="flex gap-4 sm:gap-6 mb-12 bg-neutral-950 p-6 sm:p-8 rounded-2xl shadow-inner border border-neutral-800">
        <Reel symbol={reels[0]} isSpinning={isSpinning} />
        <Reel symbol={reels[1]} isSpinning={isSpinning} />
        <Reel symbol={reels[2]} isSpinning={isSpinning} />
      </div>

      <div className="h-12 mb-8 flex items-center justify-center">
        {resultMessage && (
          <div className={`text-2xl sm:text-3xl font-bold uppercase tracking-wider ${resultMessage === '¡GANASTE!' ? 'text-green-400 animate-bounce' : 'text-neutral-500'}`}>
            {resultMessage}
          </div>
        )}
      </div>

      <SpinButton onSpin={spin} isSpinning={isSpinning} />
    </div>
  );
}
