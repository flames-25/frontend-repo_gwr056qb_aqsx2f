import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function getTimeLeft(target) {
  const total = Math.max(0, target - Date.now());
  const d = Math.floor(total / (1000*60*60*24));
  const h = Math.floor((total / (1000*60*60)) % 24);
  const m = Math.floor((total / (1000*60)) % 60);
  const s = Math.floor((total / 1000) % 60);
  return { d, h, m, s };
}

export default function Countdown() {
  const target = Date.now() + 1000*60*60*72; // 72h from now
  const [left, setLeft] = useState(getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, []);

  const box = (label, value) => (
    <div className="w-20 sm:w-24 text-center">
      <div className="rounded-2xl bg-white/5 border border-white/10 p-3 sm:p-4">
        <p className="text-2xl sm:text-3xl font-semibold text-white tabular-nums">{String(value).padStart(2,'0')}</p>
      </div>
      <p className="mt-2 text-xs text-white/60">{label}</p>
    </div>
  );

  return (
    <section id="drop" className="relative py-20" style={{ background: '#0b0d16' }}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <motion.div className="absolute -top-24 left-1/3 w-72 h-72 bg-[#5f61ff]/20 blur-3xl rounded-full" animate={{ y: [0, 10, -5, 0] }} transition={{ duration: 18, repeat: Infinity }}/>
      </div>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl text-white font-semibold">Odliczanie do Dropu</h2>
        <p className="mt-3 text-white/70">Złap swój egzemplarz – limitowana ilość.</p>
        <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4">
          {box('Dni', left.d)}
          {box('Godz.', left.h)}
          {box('Min.', left.m)}
          {box('Sek.', left.s)}
        </div>
      </div>
    </section>
  );
}
