import React from 'react';
import CountdownTimer from './components/CountdownTimer';
import WorldClock from './components/WorldClock';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 p-8 text-white">
      <div className="max-w-4xl mx-auto bg-black/20 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/10">
        <h1 className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-3">
          <span className="text-3xl">🕒</span> 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-indigo-300">
            Countdown Timer + World Clock
          </span>
        </h1>
        
        <div className="space-y-8">
          <CountdownTimer />
          
          <div className="border-t border-white/10 my-8"></div>
          
          <WorldClock />
        </div>
      </div>
    </div>
  );
};

export default App;