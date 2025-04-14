import React from "react";
import { useEffect, useState } from "react";

const timezones = [
  { label: "New York", zone: "America/New_York", icon: "🗽" },
  { label: "London", zone: "Europe/London", icon: "🏛️" },
  { label: "Tokyo", zone: "Asia/Tokyo", icon: "🗼" },
  { label: "India", zone: "Asia/Kolkata", icon: "🏯" },
  { label: "Sydney", zone: "Australia/Sydney", icon: "🏄‍♂️" },
];

const WorldClock = () => {
  const [clocks, setClocks] = useState({});

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      const updated = {};
      timezones.forEach(({ label, zone }) => {
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: zone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        updated[label] = formatter.format(now);
      });
      setClocks(updated);
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/30 rounded-xl p-6 shadow-lg border border-white/10">
      <h2 className="text-2xl font-semibold mb-6 text-center text-cyan-300">
        🌍 World Clock
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        {timezones.map(({ label, icon }) => (
          <div 
            key={label} 
            className="bg-indigo-900/60 rounded-lg p-4 backdrop-blur flex flex-col items-center justify-center hover:bg-indigo-800/70 transition-colors"
          >
            <div className="text-xl mb-1">{icon}</div>
            <div className="text-lg font-medium text-indigo-200">{label}</div>
            <div className="text-2xl font-mono mt-2 text-white">
              {clocks[label] || "--:--:--"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldClock;