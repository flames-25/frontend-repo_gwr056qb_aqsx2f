import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const REVIEWS = [
  { name: 'Marta', text: 'Violet Ice to mój nowy faworyt. Delikatnie słodki, mega gładki – sztos.' },
  { name: 'Piotr', text: 'Wygląd robi wrażenie. Moonlight błyszczy jak biżuteria pod neonem.' },
  { name: 'Aleks', text: 'Smak Nebula Mint – świeży, elegancki, nie męczy. 10/10.' },
  { name: 'Ola', text: 'To jest premium vibe. Minimal, szklany look i świetna jakość.' },
];

function Card({ r, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="min-w-[260px] max-w-sm p-6 rounded-2xl bg-white/5 border border-white/10 text-white/90"
    >
      <p className="text-sm">“{r.text}”</p>
      <p className="mt-4 text-xs text-white/60">{r.name}</p>
    </motion.div>
  );
}

export default function Reviews() {
  return (
    <section className="relative py-20" style={{ background: '#0b0d16' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl text-white font-semibold">Opinie</h3>
        <div className="mt-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-4 pr-6">
            {REVIEWS.map((r, i) => <Card key={i} r={r} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
