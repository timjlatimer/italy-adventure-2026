// DESIGN: "Dolce Vita" — Italian Cinema & Editorial
// Itinerary: Day-by-day cards with expandable details, film-strip horizontal scroll for phases
import Navigation from '@/components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ITINERARY, TRIP_PHASES } from '@/lib/tripData';
import { useTextSize } from '@/contexts/TextSizeContext';
import { ChevronDown, MapPin, Utensils, Eye, Lightbulb, Car } from 'lucide-react';

export default function Itinerary() {
  const { textClass } = useTextSize();
  const [activePhase, setActivePhase] = useState<string | null>(null);
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const filteredDays = activePhase
    ? ITINERARY.filter(d => d.phase === activePhase)
    : ITINERARY;

  return (
    <div className={`min-h-screen bg-background ${textClass}`}>
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-12 bg-charcoal">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="scene-number text-terracotta-light text-sm mb-2">Scena II — The Full Story</p>
            <h1 className="font-display text-ivory text-4xl md:text-6xl mb-4">Day by Day</h1>
            <p className="font-accent italic text-ivory/60 text-lg max-w-xl">
              Every day of the journey, from Rome to Edmonton — with restaurants, sights, and cultural insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Phase Filter — Film Strip Style */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border py-3">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => setActivePhase(null)}
              className={`flex-shrink-0 px-4 py-2 rounded-sm text-sm font-medium transition-all ${
                !activePhase
                  ? 'bg-charcoal text-ivory'
                  : 'bg-secondary text-muted-foreground hover:bg-charcoal/10'
              }`}
            >
              All Days
            </button>
            {TRIP_PHASES.map(phase => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-sm text-sm font-medium transition-all whitespace-nowrap ${
                  activePhase === phase.id
                    ? 'text-ivory'
                    : 'bg-secondary text-muted-foreground hover:opacity-80'
                }`}
                style={activePhase === phase.id ? { backgroundColor: phase.color } : {}}
              >
                <span className="font-accent italic text-xs mr-1.5">{phase.label}</span>
                {phase.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Day Cards */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase || 'all'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-4"
            >
              {filteredDays.map((day) => {
                const isExpanded = expandedDay === day.id;
                const phase = TRIP_PHASES.find(p => p.id === day.phase);

                return (
                  <motion.div
                    key={day.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card border border-border rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Card Header — always visible */}
                    <button
                      onClick={() => setExpandedDay(isExpanded ? null : day.id)}
                      className="w-full text-left p-5 md:p-6 flex items-start gap-4"
                    >
                      {/* Day number badge */}
                      <div
                        className="flex-shrink-0 w-14 h-14 rounded-sm flex flex-col items-center justify-center text-ivory"
                        style={{ backgroundColor: phase?.color || '#C75B39' }}
                      >
                        <span className="text-[10px] font-accent italic leading-none opacity-80">Day</span>
                        <span className="text-xl font-bold leading-none">{day.id}</span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="scene-number text-xs" style={{ color: phase?.color }}>
                            Scena {day.scena}
                          </span>
                          <span className="text-muted-foreground text-xs">•</span>
                          <span className="text-muted-foreground text-xs">{day.dateShort}</span>
                        </div>
                        <h3 className="font-display text-foreground text-xl md:text-2xl mb-1">{day.title}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <MapPin size={14} />
                          <span>{day.location}</span>
                          {day.driveInfo && (
                            <>
                              <span className="text-border">|</span>
                              <Car size={14} />
                              <span>{day.driveInfo.distance} • {day.driveInfo.duration}</span>
                            </>
                          )}
                        </div>
                      </div>

                      <ChevronDown
                        size={20}
                        className={`flex-shrink-0 text-muted-foreground transition-transform duration-300 mt-2 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 md:px-6 pb-6 border-t border-border pt-5">
                            {/* Description */}
                            <p className="text-foreground/80 leading-relaxed mb-6">{day.description}</p>

                            {/* Drive Info */}
                            {day.driveInfo && (
                              <div className="bg-secondary/50 rounded-sm p-4 mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                  <Car size={16} className="text-terracotta" />
                                  <span className="font-semibold text-sm">Driving Details</span>
                                </div>
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                  <div>
                                    <span className="text-muted-foreground">Distance</span>
                                    <p className="font-semibold">{day.driveInfo.distance}</p>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">Duration</span>
                                    <p className="font-semibold">{day.driveInfo.duration}</p>
                                  </div>
                                  <div>
                                    <span className="text-muted-foreground">Route</span>
                                    <p className="font-semibold">{day.driveInfo.route}</p>
                                  </div>
                                </div>
                              </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Sights */}
                              {day.sights.length > 0 && (
                                <div>
                                  <div className="flex items-center gap-2 mb-3">
                                    <Eye size={16} className="text-gold-dark" />
                                    <span className="font-semibold text-sm uppercase tracking-wider">See</span>
                                  </div>
                                  <div className="space-y-3">
                                    {day.sights.map((sight, i) => (
                                      <div key={i} className="border-l-2 border-gold/30 pl-3">
                                        <p className="font-medium text-sm">{sight.name}</p>
                                        <p className="text-muted-foreground text-xs">{sight.description}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Restaurants */}
                              {day.restaurants.length > 0 && (
                                <div>
                                  <div className="flex items-center gap-2 mb-3">
                                    <Utensils size={16} className="text-terracotta" />
                                    <span className="font-semibold text-sm uppercase tracking-wider">Eat</span>
                                  </div>
                                  <div className="space-y-3">
                                    {day.restaurants.map((rest, i) => (
                                      <div key={i} className="border-l-2 border-terracotta/30 pl-3">
                                        <p className="font-medium text-sm">{rest.name}</p>
                                        <p className="text-muted-foreground text-xs font-accent italic">{rest.specialty}</p>
                                        <p className="text-muted-foreground text-xs mt-0.5">{rest.note}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>

                            {/* Cultural Tips */}
                            {day.culturalTips.length > 0 && (
                              <div className="mt-6 bg-gold/5 border border-gold/20 rounded-sm p-4">
                                <div className="flex items-center gap-2 mb-3">
                                  <Lightbulb size={16} className="text-gold-dark" />
                                  <span className="font-semibold text-sm uppercase tracking-wider">Cultural Tips</span>
                                </div>
                                <ul className="space-y-2">
                                  {day.culturalTips.map((tip, i) => (
                                    <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                                      <span className="text-gold-dark mt-1 flex-shrink-0">•</span>
                                      {tip}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Cost Estimate */}
                            <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                              <span className="font-semibold uppercase tracking-wider">Est. Daily Cost:</span>
                              <span>Accommodation CA${day.estimatedCost.accommodation}</span>
                              <span>Food CA${day.estimatedCost.food}</span>
                              <span>Transport CA${day.estimatedCost.transport}</span>
                              {day.estimatedCost.activities > 0 && (
                                <span>Activities CA${day.estimatedCost.activities}</span>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
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
