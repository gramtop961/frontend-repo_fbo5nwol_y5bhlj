import React from 'react';
import { Sparkles, Star } from 'lucide-react';

const Item = ({ name, rarity }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
    <div className="pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100">
      <div className="h-full w-full bg-gradient-to-br from-fuchsia-500/10 via-sky-500/10 to-violet-500/10" />
    </div>
    <div className="relative z-10 flex items-center gap-3">
      <div className="rounded-lg bg-gradient-to-tr from-sky-500/20 to-fuchsia-500/20 p-2 text-sky-200 ring-1 ring-white/10">
        <Sparkles className="h-5 w-5" />
      </div>
      <div>
        <div className="font-medium text-white">{name}</div>
        <div className="text-xs text-slate-400">{rarity}</div>
      </div>
    </div>
  </div>
);

export default function Collectibles() {
  const items = [
    { name: 'Holo Frame: Aurora', rarity: 'Legendary' },
    { name: 'Banner: Neon Grid', rarity: 'Epic' },
    { name: 'Emblem: Zenith', rarity: 'Rare' },
    { name: 'Pose: Victory Stance', rarity: 'Rare' },
    { name: 'Trail: Ion Surge', rarity: 'Epic' },
    { name: 'Badge: Verified Pro', rarity: 'Legendary' },
  ];

  return (
    <section id="collectibles" className="relative w-full bg-slate-950 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Cosmetics & Collectibles</h2>
          <p className="mt-3 text-slate-300">Unlock cosmetic rewards to personalize your identity: frames, banners, poses, and animated badges.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {items.map((it) => (
            <Item key={it.name} name={it.name} rarity={it.rarity} />
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-2 text-slate-300">
          <Star className="h-5 w-5 text-sky-300" />
          <p className="text-sm">Seasonal drops and event-limited items keep your profile fresh.</p>
        </div>
      </div>
    </section>
  );
}
