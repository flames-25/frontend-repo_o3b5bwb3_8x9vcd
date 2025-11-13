import { Sparkles, Users, Shield, Trophy } from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: <Sparkles className="text-fuchsia-500" size={22} />,
      title: 'Gorgeous 3D Worlds',
      desc: 'Explore immersive, interactive scenes powered by cutting-edge 3D tech.'
    },
    {
      icon: <Users className="text-indigo-400" size={22} />,
      title: 'Play With Friends',
      desc: 'Create squads, chat live, and team up for epic raids and matches.'
    },
    {
      icon: <Shield className="text-emerald-400" size={22} />,
      title: 'Safe & Secure',
      desc: 'Account protection, parental controls, and fair matchmaking.'
    },
    {
      icon: <Trophy className="text-amber-400" size={22} />,
      title: 'Seasonal Rewards',
      desc: 'Earn skins, emotes, and collectibles from events and battle passes.'
    }
  ];

  return (
    <section id="features" className="relative bg-[#090A12] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Built for gamers</h2>
          <p className="mt-2 text-white/70">Everything you need to discover, play, and thrive.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                {it.icon}
              </div>
              <div className="text-lg font-semibold">{it.title}</div>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
