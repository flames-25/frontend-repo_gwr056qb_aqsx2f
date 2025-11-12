import { AlertTriangle } from "lucide-react";

export default function StickyWarning() {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 text-white border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center gap-3">
          <AlertTriangle className="w-4 h-4 text-[#b4d7ff]" />
          <p className="text-xs sm:text-sm tracking-wide">
            Ostrzeżenie: Ten produkt zawiera nikotynę – substancję silnie uzależniającą. Tylko dla osób 18+.
          </p>
        </div>
      </div>
    </div>
  );
}
