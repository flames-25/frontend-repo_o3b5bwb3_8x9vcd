import { useState } from 'react';
import { Menu, X, Gamepad2, Search, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
          <nav className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white">
                <Gamepad2 size={22} />
              </div>
              <span className="text-lg font-semibold tracking-wide text-white">PlayVerse</span>
            </div>
            <div className="hidden items-center gap-8 md:flex">
              <a href="#features" className="text-sm text-white/80 hover:text-white transition">Features</a>
              <a href="#trending" className="text-sm text-white/80 hover:text-white transition">Trending</a>
              <a href="#community" className="text-sm text-white/80 hover:text-white transition">Community</a>
            </div>
            <div className="hidden items-center gap-3 md:flex">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={18} />
                <input
                  placeholder="Search games"
                  className="w-48 rounded-xl border border-white/10 bg-white/5 py-2 pl-9 pr-3 text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-fuchsia-500/50"
                />
              </div>
              <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-90">
                <ShoppingCart size={16} /> Store
              </button>
            </div>
            <button onClick={() => setOpen(!open)} className="md:hidden text-white">
              {open ? <X /> : <Menu />}
            </button>
          </nav>
          {open && (
            <div className="border-t border-white/10 px-6 py-4 md:hidden">
              <div className="flex flex-col gap-3">
                <a href="#features" className="text-white/80 hover:text-white">Features</a>
                <a href="#trending" className="text-white/80 hover:text-white">Trending</a>
                <a href="#community" className="text-white/80 hover:text-white">Community</a>
                <div className="relative mt-2">
                  <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/60" size={18} />
                  <input
                    placeholder="Search games"
                    className="w-full rounded-xl border border-white/10 bg-white/5 py-2 pl-9 pr-3 text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-fuchsia-500/50"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
