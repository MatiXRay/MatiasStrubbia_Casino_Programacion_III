import SlotMachine from './components/SlotMachine';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-900 to-black text-white flex flex-col items-center justify-center p-4">
      <div className="text-center w-full max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent mb-12 drop-shadow-lg">
          Casino Loco
        </h1>
        
        <SlotMachine />
        
        <p className="mt-12 text-sm text-neutral-500 font-medium tracking-wide">
          Haz clic en Girar para jugar
        </p>
      </div>
    </div>
  );
}

export default App;
