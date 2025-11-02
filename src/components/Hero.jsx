import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[88vh] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          {/* Left: Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sky-300 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-sky-400" />
              Live esports events, rewards, and profiles
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              Compete. Win. Shine.
            </h1>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-slate-300 md:text-lg">
              Join arenas and tournaments, climb leaderboards, and earn prizes. Your performance is tracked and showcased on a fully customizable profile powered by collectible cosmetics.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#modes"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-5 py-3 font-medium text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
              >
                <Rocket className="h-5 w-5" />
                Enter an Arena
              </a>
              <a
                href="#profile"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <Trophy className="h-5 w-5" />
                View Profiles
              </a>
            </div>
          </div>

          {/* Right: Spline scene */}
          <div className="relative aspect-[4/3] w-full md:aspect-[5/4]">
            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-sky-500/10 via-blue-500/10 to-fuchsia-500/10 p-1">
              <div className="h-full w-full overflow-hidden rounded-xl bg-slate-950">
                <Spline
                  scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
            {/* Decorative glow behind the card */}
            <div className="pointer-events-none absolute -inset-8 blur-3xl">
              <div className="h-full w-full rounded-[2rem] bg-gradient-to-tr from-sky-500/20 via-cyan-400/10 to-fuchsia-500/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
