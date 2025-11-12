import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";

export default function AgeGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ok = localStorage.getItem("age_ok");
    if (!ok) setTimeout(() => setOpen(true), 300);
  }, []);

  const confirm = () => {
    localStorage.setItem("age_ok", "1");
    setOpen(false);
  };

  return (
    <Dialog.Root open={open}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"/>
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-[60] flex items-center justify-center p-6"
              >
                <div className="w-full max-w-md rounded-2xl bg-[#0b0d16]/90 border border-white/10 shadow-2xl text-white">
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-semibold tracking-tight">Potwierdź wiek</h3>
                    <p className="text-sm text-white/70">
                      Ta strona jest przeznaczona wyłącznie dla osób pełnoletnich (18+). Potwierdź swój wiek, aby kontynuować.
                    </p>
                    <div className="flex gap-3 pt-2">
                      <button onClick={confirm} className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#5f61ff] to-[#a174ff] hover:opacity-90 transition-opacity font-medium">
                        Mam 18+
                      </button>
                      <a href="https://google.com" className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white text-center">
                        Wyjdź
                      </a>
                    </div>
                    <p className="text-[10px] text-white/60 pt-2">
                      Uwaga: Nikotyna jest substancją silnie uzależniającą.
                    </p>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
