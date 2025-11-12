import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" style={{ background: '#0b0d16' }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* subtle gradient veil for readability */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_rgba(11,13,22,0)_0%,_rgba(11,13,22,0.3)_55%,_rgba(11,13,22,0.8)_100%)]" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-xs tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5f61ff] animate-pulse" />
            Limited Edition — Moonlight Drop
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl leading-tight font-semibold text-white">
            Zanurz się w Moonlight — odkryj nowy drop.
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            ElfBar 40K Moonlight — 40 tysięcy chwil pod światłem księżyca. Edycja limitowana z neonowym blaskiem i szklaną elegancją.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#product" className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#5f61ff] to-[#a174ff] text-white font-medium shadow-[0_0_25px_rgba(97,99,255,0.25)] hover:shadow-[0_0_40px_rgba(161,116,255,0.35)] transition-shadow">Kup teraz – zanim zgaśnie światło dropu.</a>
            <a href="#drop" className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium">Discover the drop</a>
          </div>
        </motion.div>
      </div>

      {/* floating light spots */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{ x: [ -30, 30, -20 ], y: [10, -10, 15], opacity: [0.25, 0.4, 0.3] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-64 h-64 bg-[#5f61ff]/30 blur-3xl rounded-full left-[10%] top-[20%]"
        />
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ x: [ 20, -20, 25 ], y: [0, 15, -10], opacity: [0.2, 0.35, 0.25] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-72 h-72 bg-[#a174ff]/30 blur-3xl rounded-full right-[10%] top-[35%]"
        />
      </div>
    </section>
  );
}
