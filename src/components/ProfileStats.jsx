import React from 'react';
import { Award, Crown, Target, BarChart3 } from 'lucide-react';

const Stat = ({ label, value, icon: Icon }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
    <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/10 text-sky-300 ring-1 ring-inset ring-sky-500/20">
      <Icon className="h-5 w-5" />
    </div>
    <div className="text-2xl font-bold text-white">{value}</div>
    <div className="mt-1 text-xs uppercase tracking-wide text-slate-400">{label}</div>
  </div>
);

export default function ProfileStats() {
  return (
    <section id="profile" className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Performance That Speaks</h2>
            <p className="mt-3 max-w-prose text-slate-300">
              Every match updates your profile in real-time: win rates, streaks, tournament finishes, and more. Showcase your journey and share it with the world.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Stat icon={Award} label="Win Rate" value="63%" />
              <Stat icon={Crown} label="Top Finishes" value="18" />
              <Stat icon={Target} label="K/D Ratio" value="2.1" />
              <Stat icon={BarChart3} label="Matches Played" value="742" />
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 shrink-0 rounded-xl bg-gradient-to-tr from-sky-400/30 via-blue-400/20 to-fuchsia-400/30 ring-1 ring-white/10" />
                <div>
                  <h3 className="text-xl font-semibold text-white">HoloBadge Profile</h3>
                  <p className="text-sm text-slate-300">Iridescent, verifiable identity with live stats and achievements.</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {["Ace", "Gladiator", "Strategist", "Sharpshooter", "MVP", "Champion"].map((tag) => (
                  <div
                    key={tag}
                    className="rounded-lg border border-white/10 bg-gradient-to-br from-sky-500/10 to-fuchsia-500/10 px-3 py-2 text-center text-xs font-medium text-white"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-sky-400/20 bg-slate-950/60 p-4 text-slate-300">
                Customize banners, frames, and animations with cosmetic collectibles you unlock as you play.
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-6 z-0 blur-3xl">
              <div className="h-full w-full rounded-3xl bg-gradient-to-tr from-sky-500/20 via-cyan-400/10 to-fuchsia-500/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
