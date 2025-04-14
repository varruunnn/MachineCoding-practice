import React from 'react';
import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [targetTime, setTargetTime] = useState('');
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    if (!targetTime) return;
    
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(targetTime);
      const diff = target - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({});
        return;
      }

      const seconds = Math.floor(diff / 1000) % 60;
      const minutes = Math.floor(diff / 1000 / 60) % 60;
      const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
      const days = Math.floor(diff / 1000 / 60 / 60 / 24);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <div className="bg-black/30 rounded-xl p-6 shadow-lg border border-white/10">
      <h2 className="text-2xl font-semibold mb-4 text-center text-cyan-300">Countdown Timer</h2>
      
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <label className="text-sm text-indigo-200 font-medium">Select Target Date & Time:</label>
        <input 
          type="datetime-local" 
          value={targetTime} 
          onChange={(e) => setTargetTime(e.target.value)}
          className="bg-white/10 border border-indigo-400/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full sm:w-auto"
        />
      </div>

      {timeLeft.days !== undefined ? (
        <div className="grid grid-cols-4 gap-3 text-center">
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Minutes' },
            { value: timeLeft.seconds, label: 'Seconds' }
          ].map((item, index) => (
            <div key={index} className="bg-indigo-900/60 rounded-lg p-4 backdrop-blur">
              <div className="text-3xl font-bold text-white">{item.value}</div>
              <div className="text-xs uppercase tracking-wider text-indigo-200">{item.label}</div>
            </div>
          ))}
        </div>
      ) : targetTime ? (
        <div className="text-center py-6">
          <p className="text-2xl font-bold text-rose-300">Time's Up!</p>
        </div>
      ) : (
        <div className="text-center py-6 text-indigo-200 italic">
          Select a future date and time to start the countdown
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;