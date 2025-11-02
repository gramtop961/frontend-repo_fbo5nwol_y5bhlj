import React from 'react';
import { Sword, Users, Trophy, Shield } from 'lucide-react';

const ModeCard = ({ icon: Icon, title, desc, cta }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-sky-400/30 hover:bg-white/10">
    <div className="pointer-events-none absolute -inset-10 -z-0 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100">
      <div className="h-full w-full bg-gradient-to-tr from-sky-500/10 via-blue-500/10 to-fuchsia-500/10" />
    </div>
    <div className="relative z-10 flex items-start gap-4">
      <div className="rounded-xl bg-sky-500/10 p-3 text-sky-300 ring-1 ring-inset ring-sky-500/20">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-300">{desc}</p>
        <button className="mt-4 inline-flex items-center rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-sky-400/30 hover:bg-white/20">
          {cta}
        </button>
      </div>
    </div>
  </div>
);

export default function Modes() {
  return (
    <section id="modes" className="relative w-full bg-slate-950 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Choose Your Battlefield</h2>
          <p className="mt-3 text-slate-300">Jump into fast-paced arenas or battle through structured tournaments. Earn real rewards and build your legacy.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <ModeCard
            icon={Sword}
            title="Arena Matches"
            desc="Quick, skill-focused bouts. Climb seasonal ladders and claim instant rewards."
            cta="Play Now"
          />
          <ModeCard
            icon={Trophy}
            title="Tournaments"
            desc="Bracket-based events with seeding, live brackets, and big prize pools."
            cta="View Events"
          />
          <ModeCard
            icon={Shield}
            title="Leagues & Teams"
            desc="Form or join teams, scrim weekly, and qualify for pro-circuits."
            cta="Find a Team"
          />
        </div>
        <div className="mt-10 flex items-center justify-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-300 backdrop-blur">
          <Users className="h-5 w-5 text-sky-300" />
          <p className="text-sm">Thousands of players competing daily — fair matchmaking and anti-cheat built-in.</p>
        </div>
      </div>
    </section>
  );
}
