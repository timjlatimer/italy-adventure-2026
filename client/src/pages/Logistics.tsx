// DESIGN: "Dolce Vita" — Italian Cinema & Editorial
// Logistics: Car rental details, packing checklist, emergency contacts
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { RENTAL_CAR_INFO, PACKING_ESSENTIALS, EMERGENCY_INFO, TRAVELERS } from '@/lib/tripData';
import { useTextSize } from '@/contexts/TextSizeContext';
import { useState } from 'react';
import { Car, CheckSquare, Square, AlertTriangle, Phone, Users, Shield, Luggage } from 'lucide-react';

const NAPLES_IMG = 'https://private-us-east-1.manuscdn.com/sessionFile/TgxIK46OECSzMBNa5tbsfo/sandbox/ElsRA5hrcp1Rjqmoj6DFgp-img-3_1770467817000_na1fn_bmFwbGVzLXN0cmVldA.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVGd4SUs0Nk9FQ1N6TUJOYTV0YnNmby9zYW5kYm94L0Vsc1JBNWhyY3AxUmpxbW9qNkRGZ3AtaW1nLTNfMTc3MDQ2NzgxNzAwMF9uYTFmbl9ibUZ3YkdWekxYTjBjbVZsZEEuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=B6yuPAqQTxkufAvQm6OrRnDlyBXb8djuX1Oian1EiBCdzAYhuUChvRKfxIMiBkd11dw08vt9kvGqSh5TBfnhZN3x19PuAq4aCYYb-jE5O83Q03C9QQsplCR5W4-3zs9rBFuhFEOstMlL0NWgwoWa5E6yWJo5t-UTRdqJ8aQK5x2DOLJDMANwZbk7QtIICz~vLUzPfjgsOTBEWW-JT1ZQlNhk64lS4aP0-r80gO~OfQvN3aAcDzQVJAjrty4hHdoVLBIJTB-KDyxA3Fg9dBLM5b5yMm46X2n1ST2viv1H-nb-LvmH6RIhUHgQAUwHlHI48W5SghWVcQl4YOGBaGAthw__';

export default function Logistics() {
  const { textClass } = useTextSize();
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const toggleItem = (item: string) => {
    setCheckedItems(prev => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });
  };

  const categories = Array.from(new Set(PACKING_ESSENTIALS.map(p => p.category)));
  const checkedCount = checkedItems.size;
  const totalItems = PACKING_ESSENTIALS.length;

  return (
    <div className={`min-h-screen bg-background ${textClass}`}>
      <Navigation />

      {/* Header with Naples image */}
      <section className="pt-24 pb-12 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={NAPLES_IMG} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/70" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="scene-number text-terracotta-light text-sm mb-2">Scena V — Preparation</p>
            <h1 className="font-display text-ivory text-4xl md:text-6xl mb-4">Logistics</h1>
            <p className="font-accent italic text-ivory/60 text-lg max-w-xl">
              Everything you need to prepare — car rental, packing, and emergency contacts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Travelers */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-6">
              <Users size={20} className="text-terracotta" />
              <h2 className="font-display text-2xl">Travel Party</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TRAVELERS.map((traveler, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-sm p-5"
              >
                <h4 className="font-display text-lg mb-1">{traveler.name}</h4>
                <p className="text-muted-foreground text-sm font-accent italic mb-3">{traveler.role}</p>
                <div className="flex flex-wrap gap-1.5">
                  {traveler.phases.map(phase => (
                    <span
                      key={phase}
                      className="text-[10px] px-2 py-0.5 rounded-sm bg-secondary text-muted-foreground"
                    >
                      {phase}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Rental */}
      <section className="py-16 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-6">
              <Car size={20} className="text-gold" />
              <h2 className="font-display text-ivory text-2xl">Rental Car</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pickup/Dropoff */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-charcoal-light/50 border border-white/10 rounded-sm p-5"
            >
              <h4 className="font-display text-ivory text-lg mb-4">Route Details</h4>
              <div className="space-y-3">
                <div>
                  <span className="text-ivory/50 text-xs uppercase tracking-wider">Pickup</span>
                  <p className="text-ivory font-medium">{RENTAL_CAR_INFO.pickup}</p>
                </div>
                <div>
                  <span className="text-ivory/50 text-xs uppercase tracking-wider">Dropoff</span>
                  <p className="text-ivory font-medium">{RENTAL_CAR_INFO.dropoff}</p>
                </div>
                <div>
                  <span className="text-ivory/50 text-xs uppercase tracking-wider">Type</span>
                  <p className="text-gold font-medium">{RENTAL_CAR_INFO.type}</p>
                </div>
                <div>
                  <span className="text-ivory/50 text-xs uppercase tracking-wider">Recommended Companies</span>
                  <p className="text-ivory">{RENTAL_CAR_INFO.recommended.join(', ')}</p>
                </div>
              </div>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-charcoal-light/50 border border-white/10 rounded-sm p-5"
            >
              <h4 className="font-display text-ivory text-lg mb-4">Requirements</h4>
              <ul className="space-y-2">
                {RENTAL_CAR_INFO.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-ivory/80 text-sm">
                    <Shield size={14} className="text-gold flex-shrink-0 mt-0.5" />
                    {req}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Warnings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 bg-terracotta/10 border border-terracotta/30 rounded-sm p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle size={18} className="text-terracotta" />
              <h4 className="font-display text-ivory text-lg">Important Warnings</h4>
            </div>
            <ul className="space-y-2">
              {RENTAL_CAR_INFO.warnings.map((warn, i) => (
                <li key={i} className="text-ivory/70 text-sm flex items-start gap-2">
                  <span className="text-terracotta mt-0.5 flex-shrink-0">•</span>
                  {warn}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Packing Checklist */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Luggage size={20} className="text-terracotta" />
                <h2 className="font-display text-2xl">Packing Checklist</h2>
              </div>
              <span className="text-sm text-muted-foreground">
                {checkedCount}/{totalItems} packed
              </span>
            </div>

            {/* Progress bar */}
            <div className="relative h-2 bg-secondary rounded-full overflow-hidden mb-8">
              <motion.div
                animate={{ width: `${(checkedCount / totalItems) * 100}%` }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-terracotta to-gold rounded-full"
                transition={{ type: 'spring', stiffness: 100 }}
              />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map(cat => (
              <div key={cat}>
                <h4 className="font-display text-lg mb-3 text-muted-foreground">{cat}</h4>
                <div className="space-y-2">
                  {PACKING_ESSENTIALS.filter(p => p.category === cat).map((item, i) => {
                    const isChecked = checkedItems.has(item.item);
                    return (
                      <button
                        key={i}
                        onClick={() => toggleItem(item.item)}
                        className={`w-full text-left flex items-center gap-3 p-3 rounded-sm border transition-all ${
                          isChecked
                            ? 'bg-terracotta/5 border-terracotta/30'
                            : 'border-border hover:border-terracotta/20 hover:bg-secondary/30'
                        }`}
                      >
                        {isChecked ? (
                          <CheckSquare size={18} className="text-terracotta flex-shrink-0" />
                        ) : (
                          <Square size={18} className="text-muted-foreground flex-shrink-0" />
                        )}
                        <span className={`text-sm ${isChecked ? 'line-through text-muted-foreground' : ''}`}>
                          {item.item}
                        </span>
                        {item.critical && !isChecked && (
                          <span className="ml-auto text-[10px] px-1.5 py-0.5 bg-terracotta/10 text-terracotta rounded-sm font-semibold">
                            CRITICAL
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-2 mb-6">
              <Phone size={20} className="text-terracotta" />
              <h2 className="font-display text-ivory text-2xl">Emergency Contacts</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-charcoal-light/50 border border-white/10 rounded-sm p-5">
              <h4 className="text-ivory/50 text-xs uppercase tracking-wider mb-3">Emergency Numbers (Italy)</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-ivory">
                  <span>General Emergency</span>
                  <span className="font-mono font-bold text-gold">{EMERGENCY_INFO.emergency}</span>
                </div>
                <div className="flex justify-between text-ivory/80">
                  <span>Police</span>
                  <span className="font-mono">{EMERGENCY_INFO.police}</span>
                </div>
                <div className="flex justify-between text-ivory/80">
                  <span>Ambulance</span>
                  <span className="font-mono">{EMERGENCY_INFO.ambulance}</span>
                </div>
              </div>
            </div>

            <div className="bg-charcoal-light/50 border border-white/10 rounded-sm p-5">
              <h4 className="text-ivory/50 text-xs uppercase tracking-wider mb-3">Canadian Embassy</h4>
              <div className="space-y-2 text-ivory/80 text-sm">
                <p>{EMERGENCY_INFO.canadianEmbassy.rome}</p>
                <p className="text-gold font-medium">24/7 Emergency: {EMERGENCY_INFO.canadianEmbassy.emergency}</p>
              </div>
            </div>

            <div className="md:col-span-2 bg-terracotta/10 border border-terracotta/30 rounded-sm p-5">
              <div className="flex items-center gap-2 mb-2">
                <Shield size={16} className="text-terracotta" />
                <h4 className="text-ivory font-semibold text-sm">Travel Insurance</h4>
              </div>
              <p className="text-ivory/70 text-sm">{EMERGENCY_INFO.travelInsurance}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-charcoal border-t border-white/5">
        <div className="container text-center">
          <p className="font-accent italic text-ivory/30 text-sm">
            Italy Adventure 2026 — La Dolce Vita
          </p>
        </div>
      </footer>
    </div>
  );
}
