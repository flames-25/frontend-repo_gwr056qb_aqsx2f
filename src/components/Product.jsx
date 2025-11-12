import { motion } from 'framer-motion';
import { Star, Sparkles, Droplets } from 'lucide-react';

const specItem = (label, value) => (
  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
    <p className="text-xs text-white/60">{label}</p>
    <p className="text-lg text-white font-medium">{value}</p>
  </div>
);

export default function Product() {
  return (
    <section id="product" className="relative py-24" style={{ background: '#0b0d16' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-[#5f61ff]/20 via-[#a174ff]/10 to-transparent blur-2xl rounded-3xl" />
              <div className="relative aspect-[3/4] rounded-3xl bg-gradient-to-b from-white/10 to-white/0 border border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(180,215,255,0.25),rgba(161,116,255,0.12)_40%,rgba(11,13,22,0)_70%)]" />
                <img alt="ElfBar Moonlight 40K" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover mix-blend-lighten opacity-90" />
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 className="text-3xl sm:text-4xl text-white font-semibold">ElfBar 40K Moonlight</h2>
            <p className="mt-4 text-white/70">Limitowany egzemplarz z neonowym połyskiem, szklanym wykończeniem i kremową chmurą smaku.</p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {specItem('Puffs', '40 000')}
              {specItem('Bateria', '850 mAh')}
              {specItem('Pojemność', '18 ml')}
              {specItem('Tryb', 'Boost / Smooth')}
              {specItem('Ładowanie', 'USB-C')}
              {specItem('Nikoty­na', '0–20 mg')}
            </div>

            <div className="mt-10">
              <h3 className="text-white/90 font-medium flex items-center gap-2"><Sparkles className="w-4 h-4 text-[#b4d7ff]"/> Smaki Dropu</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Midnight Blueberry','Violet Ice','Silver Citrus','Nebula Mint','Cosmic Berry'].map(f => (
                  <span key={f} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm hover:bg-white/10 transition-colors">{f}</span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a href="#buy" className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#5f61ff] to-[#a174ff] text-white font-medium shadow-[0_0_25px_rgba(97,99,255,0.25)]">Kup teraz</a>
              <a href="#drop" className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium">Szczegóły</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
