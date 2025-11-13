import { Twitter, Youtube, Instagram, Gamepad2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#090A12] py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white">
              <Gamepad2 size={22} />
            </div>
            <span className="text-lg font-semibold tracking-wide text-white">PlayVerse</span>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <a className="hover:text-white" href="#"><Twitter size={18} /></a>
            <a className="hover:text-white" href="#"><Youtube size={18} /></a>
            <a className="hover:text-white" href="#"><Instagram size={18} /></a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} PlayVerse. All rights reserved.</div>
      </div>
    </footer>
  );
}
