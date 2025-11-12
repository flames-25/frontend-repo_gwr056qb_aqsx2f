import { CheckCircle2, Droplets, Sparkles, Shield } from 'lucide-react';

const Item = ({ icon: Icon, title, desc }) => (
  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
    <div className="flex items-center gap-3 text-white">
      <Icon className="w-5 h-5 text-[#b4d7ff]" />
      <h4 className="font-semibold">{title}</h4>
    </div>
    <p className="mt-2 text-white/70 text-sm">{desc}</p>
  </div>
);

export default function WhyMoonlight() {
  return (
    <section className="relative py-20" style={{ background: '#0b0d16' }}>
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl text-white font-semibold">Dlaczego Moonlight?</h3>
        <p className="mt-3 text-white/70 max-w-2xl">Nocturnal, premium i niezwykle gładkie doświadczenie – smak, który mieni się jak światło księżyca na szkle.</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Item icon={Sparkles} title="Holograficzny blask" desc="Glassy body z neonowymi odbiciami i srebrnymi akcentami." />
          <Item icon={Droplets} title="Kremowa chmura" desc="Gęsta, satynowa para z aksamitnym finiszem." />
          <Item icon={Shield} title="Jakość i bezpieczeństwo" desc="Zgodność z normami UE, precyzyjna kontrola i czyste składy." />
          <Item icon={CheckCircle2} title="Limitowany Drop" desc="Edycja specjalna – tylko do wyczerpania zapasów." />
        </div>
      </div>
    </section>
  );
}
