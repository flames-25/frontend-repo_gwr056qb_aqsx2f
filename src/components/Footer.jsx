export default function Footer(){
  return (
    <footer className="relative py-10" style={{ background: '#0b0d16' }}>
      <div className="max-w-7xl mx-auto px-6 text-white/60 text-sm">
        <p>© {new Date().getFullYear()} Moonlight Drop — ElfBar 40K. Wszystkie prawa zastrzeżone.</p>
        <p className="mt-2 text-xs">Uwaga: Produkt zawiera nikotynę – substancję silnie uzależniającą. Tylko dla osób 18+.</p>
      </div>
    </footer>
  );
}
