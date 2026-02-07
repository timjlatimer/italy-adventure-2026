// DESIGN: "Dolce Vita" — Italian Cinema & Editorial
// Budget: Interactive budget breakdown with visual charts and flight comparison tables
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { BUDGET_BREAKDOWN, FLIGHTS_LAMEZIA_AMSTERDAM, FLIGHTS_AMSTERDAM_EDMONTON, ITINERARY } from '@/lib/tripData';
import { useTextSize } from '@/contexts/TextSizeContext';
import { useState, useMemo } from 'react';
import { DollarSign, Plane, TrendingUp, PieChart, Check } from 'lucide-react';

export default function Budget() {
  const { textClass } = useTextSize();
  const [selectedLamezia, setSelectedLamezia] = useState<number | null>(null);
  const [selectedEdmonton, setSelectedEdmonton] = useState<number | null>(null);

  const totalBudget = BUDGET_BREAKDOWN.reduce((a, b) => a + b.estimated, 0);

  // Daily cost breakdown
  const dailyCosts = useMemo(() => {
    return ITINERARY.map(day => ({
      day: day.id,
      label: day.dateShort,
      location: day.location,
      total: day.estimatedCost.accommodation + day.estimatedCost.food + day.estimatedCost.transport + day.estimatedCost.activities,
      ...day.estimatedCost,
    }));
  }, []);

  const maxDailyCost = Math.max(...dailyCosts.map(d => d.total));

  // Budget categories for visual bars
  const maxCategory = Math.max(...BUDGET_BREAKDOWN.map(b => b.estimated));

  return (
    <div className={`min-h-screen bg-background ${textClass}`}>
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-12 bg-charcoal">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="scene-number text-terracotta-light text-sm mb-2">Scena IV — The Numbers</p>
            <h1 className="font-display text-ivory text-4xl md:text-6xl mb-4">Budget & Flights</h1>
            <p className="font-accent italic text-ivory/60 text-lg max-w-xl">
              Estimated costs, flight options, and daily spending breakdown
            </p>
          </motion.div>

          {/* Total Budget Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            <div className="bg-charcoal-light/50 border border-white/10 rounded-sm p-6">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign size={18} className="text-gold" />
                <span className="text-ivory/60 text-sm">Estimated Total (per person)</span>
              </div>
              <p className="font-display text-gold text-3xl">CA${totalBudget.toLocaleString()}</p>
              <p className="text-ivory/40 text-xs mt-1">~US${Math.round(totalBudget * 0.72).toLocaleString()}</p>
            </div>
            <div className="bg-charcoal-light/50 border border-white/10 rounded-sm p-6">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={18} className="text-terracotta-light" />
                <span className="text-ivory/60 text-sm">Average Daily Cost</span>
              </div>
              <p className="font-display text-terracotta-light text-3xl">
                CA${Math.round(dailyCosts.reduce((a, d) => a + d.total, 0) / dailyCosts.length)}
              </p>
              <p className="text-ivory/40 text-xs mt-1">Per person, per day</p>
            </div>
            <div className="bg-charcoal-light/50 border border-white/10 rounded-sm p-6">
              <div className="flex items-center gap-2 mb-2">
                <PieChart size={18} className="text-ivory/60" />
                <span className="text-ivory/60 text-sm">Budget Target</span>
              </div>
              <p className="font-display text-ivory text-3xl">CA$10,000</p>
              <p className={`text-xs mt-1 ${totalBudget <= 10000 ? 'text-green-400' : 'text-terracotta-light'}`}>
                {totalBudget <= 10000 ? `CA$${(10000 - totalBudget).toLocaleString()} under budget` : `CA$${(totalBudget - 10000).toLocaleString()} over budget`}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl mb-8">Budget Breakdown</h2>
          </motion.div>

          <div className="space-y-4">
            {BUDGET_BREAKDOWN.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border rounded-sm p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">{item.category}</h4>
                  <span className="font-display text-terracotta text-lg">CA${item.estimated}</span>
                </div>
                <div className="relative h-2 bg-secondary rounded-full overflow-hidden mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.estimated / maxCategory) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.05 }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-terracotta to-gold rounded-full"
                  />
                </div>
                <p className="text-xs text-muted-foreground">{item.notes}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Cost Chart */}
      <section className="py-16 bg-charcoal">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-ivory text-3xl mb-2">Daily Spending</h2>
            <p className="font-accent italic text-ivory/50 text-sm mb-8">Estimated cost per day by category</p>
          </motion.div>

          <div className="space-y-3">
            {dailyCosts.map((day, i) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-3"
              >
                <div className="w-20 flex-shrink-0 text-right">
                  <span className="text-ivory/60 text-xs">{day.label}</span>
                </div>
                <div className="flex-1 flex h-7 rounded-sm overflow-hidden bg-charcoal-light/50">
                  {day.accommodation > 0 && (
                    <div
                      className="bg-terracotta/80 flex items-center justify-center text-[9px] text-ivory/80 font-medium"
                      style={{ width: `${(day.accommodation / maxDailyCost) * 100}%` }}
                      title={`Accommodation: CA$${day.accommodation}`}
                    >
                      {day.accommodation > 30 ? `$${day.accommodation}` : ''}
                    </div>
                  )}
                  {day.food > 0 && (
                    <div
                      className="bg-gold-dark/80 flex items-center justify-center text-[9px] text-charcoal font-medium"
                      style={{ width: `${(day.food / maxDailyCost) * 100}%` }}
                      title={`Food: CA$${day.food}`}
                    >
                      {day.food > 30 ? `$${day.food}` : ''}
                    </div>
                  )}
                  {day.transport > 0 && (
                    <div
                      className="bg-[#2E5090]/80 flex items-center justify-center text-[9px] text-ivory/80 font-medium"
                      style={{ width: `${(day.transport / maxDailyCost) * 100}%` }}
                      title={`Transport: CA$${day.transport}`}
                    >
                      {day.transport > 30 ? `$${day.transport}` : ''}
                    </div>
                  )}
                  {day.activities > 0 && (
                    <div
                      className="bg-[#3B7A57]/80 flex items-center justify-center text-[9px] text-ivory/80 font-medium"
                      style={{ width: `${(day.activities / maxDailyCost) * 100}%` }}
                      title={`Activities: CA$${day.activities}`}
                    >
                      {day.activities > 15 ? `$${day.activities}` : ''}
                    </div>
                  )}
                </div>
                <div className="w-16 flex-shrink-0 text-right">
                  <span className="text-ivory font-semibold text-sm">CA${day.total}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center gap-4 mt-6 justify-center">
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-terracotta/80" /><span className="text-ivory/50 text-xs">Accommodation</span></div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-gold-dark/80" /><span className="text-ivory/50 text-xs">Food</span></div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-[#2E5090]/80" /><span className="text-ivory/50 text-xs">Transport</span></div>
            <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-[#3B7A57]/80" /><span className="text-ivory/50 text-xs">Activities</span></div>
          </div>
        </div>
      </section>

      {/* Flight Options */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl mb-2">Flight Options</h2>
            <p className="font-accent italic text-muted-foreground mb-8">Click to select and compare flights</p>
          </motion.div>

          {/* Lamezia → Amsterdam */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Plane size={18} className="text-terracotta" />
              <h3 className="font-display text-xl">Lamezia Terme (SUF) → Amsterdam (AMS)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Date</th>
                    <th className="text-left py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Departure</th>
                    <th className="text-left py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Arrival</th>
                    <th className="text-left py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Airline</th>
                    <th className="text-left py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Stops</th>
                    <th className="text-left py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Duration</th>
                    <th className="text-right py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Price (CAD)</th>
                    <th className="py-3 px-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {FLIGHTS_LAMEZIA_AMSTERDAM.map((flight, i) => (
                    <tr
                      key={i}
                      onClick={() => setSelectedLamezia(selectedLamezia === i ? null : i)}
                      className={`border-b border-border/50 cursor-pointer transition-colors ${
                        selectedLamezia === i ? 'bg-terracotta/10' : 'hover:bg-secondary/50'
                      }`}
                    >
                      <td className="py-3 px-3 font-medium">{flight.date}</td>
                      <td className="py-3 px-3">{flight.departure}</td>
                      <td className="py-3 px-3">{flight.arrival}</td>
                      <td className="py-3 px-3 font-accent italic">{flight.airline}</td>
                      <td className="py-3 px-3 text-muted-foreground">{flight.stops}</td>
                      <td className="py-3 px-3">{flight.duration}</td>
                      <td className="py-3 px-3 text-right font-semibold text-terracotta">${flight.priceCAD}</td>
                      <td className="py-3 px-2">
                        {selectedLamezia === i && <Check size={16} className="text-terracotta" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Amsterdam → Edmonton */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane size={18} className="text-terracotta" />
              <h3 className="font-display text-xl">Amsterdam (AMS) → Edmonton (YEG)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Date</th>
                    <th className="text-left py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Departure</th>
                    <th className="text-left py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Arrival</th>
                    <th className="text-left py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Airline</th>
                    <th className="text-left py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Stops</th>
                    <th className="text-left py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Duration</th>
                    <th className="text-right py-3 px-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Price (CAD)</th>
                    <th className="py-3 px-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {FLIGHTS_AMSTERDAM_EDMONTON.map((flight, i) => (
                    <tr
                      key={i}
                      onClick={() => setSelectedEdmonton(selectedEdmonton === i ? null : i)}
                      className={`border-b border-border/50 cursor-pointer transition-colors ${
                        selectedEdmonton === i ? 'bg-terracotta/10' : 'hover:bg-secondary/50'
                      }`}
                    >
                      <td className="py-3 px-3 font-medium">{flight.date}</td>
                      <td className="py-3 px-3">{flight.departure}</td>
                      <td className="py-3 px-3">{flight.arrival}</td>
                      <td className="py-3 px-3 font-accent italic">{flight.airline}</td>
                      <td className="py-3 px-3 text-muted-foreground">{flight.stops}</td>
                      <td className="py-3 px-3">{flight.duration}</td>
                      <td className="py-3 px-3 text-right font-semibold text-terracotta">${flight.priceCAD}</td>
                      <td className="py-3 px-2">
                        {selectedEdmonton === i && <Check size={16} className="text-terracotta" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Selected flights summary */}
            {(selectedLamezia !== null || selectedEdmonton !== null) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 bg-charcoal rounded-sm p-6"
              >
                <h4 className="font-display text-ivory text-lg mb-4">Selected Flight Summary</h4>
                <div className="space-y-2 text-sm">
                  {selectedLamezia !== null && (
                    <div className="flex justify-between text-ivory/80">
                      <span>SUF → AMS: {FLIGHTS_LAMEZIA_AMSTERDAM[selectedLamezia].date}, {FLIGHTS_LAMEZIA_AMSTERDAM[selectedLamezia].airline}</span>
                      <span className="text-gold font-semibold">CA${FLIGHTS_LAMEZIA_AMSTERDAM[selectedLamezia].priceCAD}</span>
                    </div>
                  )}
                  {selectedEdmonton !== null && (
                    <div className="flex justify-between text-ivory/80">
                      <span>AMS → YEG: {FLIGHTS_AMSTERDAM_EDMONTON[selectedEdmonton].date}, {FLIGHTS_AMSTERDAM_EDMONTON[selectedEdmonton].airline}</span>
                      <span className="text-gold font-semibold">CA${FLIGHTS_AMSTERDAM_EDMONTON[selectedEdmonton].priceCAD}</span>
                    </div>
                  )}
                  {selectedLamezia !== null && selectedEdmonton !== null && (
                    <div className="flex justify-between text-ivory border-t border-white/10 pt-2 mt-2">
                      <span className="font-semibold">Total Flights (per person)</span>
                      <span className="text-gold font-display text-lg">
                        CA${FLIGHTS_LAMEZIA_AMSTERDAM[selectedLamezia].priceCAD + FLIGHTS_AMSTERDAM_EDMONTON[selectedEdmonton].priceCAD}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
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
