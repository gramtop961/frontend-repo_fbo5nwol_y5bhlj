import React from 'react';
import Hero from './components/Hero';
import Modes from './components/Modes';
import ProfileStats from './components/ProfileStats';
import Collectibles from './components/Collectibles';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Modes />
      <ProfileStats />
      <Collectibles />
      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} HoloArena. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-slate-300">
            <a href="#modes" className="hover:text-white">Play</a>
            <a href="#profile" className="hover:text-white">Profiles</a>
            <a href="#collectibles" className="hover:text-white">Collectibles</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
