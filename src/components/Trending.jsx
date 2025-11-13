import { Star, Heart } from 'lucide-react';

const games = [
  {
    title: 'Neon Drift',
    cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9,
  },
  {
    title: 'Sky Forge',
    cover: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
  },
  {
    title: 'Quantum Dash',
    cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    rating: 4.7,
  },
];

export default function Trending() {
  return (
    <section id="trending" className="relative bg-[#0B0C14] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Trending now</h2>
            <p className="mt-2 text-white/70">Handpicked hits the community loves this week.</p>
          </div>
          <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">View all</button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img src={g.cover} alt={g.title} className="h-60 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">{g.title}</div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star size={16} />
                    <span className="text-sm">{g.rating}</span>
                  </div>
                </div>
                <button className="mt-3 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-medium text-white hover:bg-white/20">
                  <Heart size={14} /> Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
