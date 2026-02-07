// DESIGN: "Dolce Vita" — Italian Cinema & Editorial
// Navigation: Cinematic top bar with scene-number styling and text size control
import { Link, useLocation } from 'wouter';
import { useState } from 'react';
import { Menu, X, Type } from 'lucide-react';
import { useTextSize } from '@/contexts/TextSizeContext';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { path: '/', label: 'Home', scena: 'I' },
  { path: '/itinerary', label: 'Itinerary', scena: 'II' },
  { path: '/map', label: 'Route Map', scena: 'III' },
  { path: '/budget', label: 'Budget', scena: 'IV' },
  { path: '/logistics', label: 'Logistics', scena: 'V' },
];

const TEXT_SIZES = [
  { value: 'sm' as const, label: 'A', size: 'text-xs' },
  { value: 'md' as const, label: 'A', size: 'text-sm' },
  { value: 'lg' as const, label: 'A', size: 'text-base' },
  { value: 'xl' as const, label: 'A', size: 'text-lg' },
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTextSize, setShowTextSize] = useState(false);
  const { textSize, setTextSize } = useTextSize();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md border-b border-white/10">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="font-accent italic text-gold text-sm tracking-[0.2em] uppercase">Scena</span>
          <span className="font-display text-ivory text-xl">Italy 2026</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = location === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-gold'
                    : 'text-ivory/70 hover:text-ivory'
                }`}
              >
                <span className="font-accent italic text-[10px] tracking-wider text-terracotta-light mr-1.5">{item.scena}</span>
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-terracotta"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Text Size Control */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={() => setShowTextSize(!showTextSize)}
            className="text-ivory/60 hover:text-ivory transition-colors p-2"
            aria-label="Adjust text size"
          >
            <Type size={18} />
          </button>
          <AnimatePresence>
            {showTextSize && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="flex items-center gap-1 bg-charcoal-light rounded-full px-2 py-1"
              >
                {TEXT_SIZES.map((ts) => (
                  <button
                    key={ts.value}
                    onClick={() => setTextSize(ts.value)}
                    className={`${ts.size} px-2 py-0.5 rounded-full transition-all ${
                      textSize === ts.value
                        ? 'bg-terracotta text-ivory'
                        : 'text-ivory/50 hover:text-ivory'
                    }`}
                  >
                    {ts.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-ivory p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal border-t border-white/10 overflow-hidden"
          >
            <div className="container py-4 space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = location === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-terracotta/20 text-gold'
                        : 'text-ivory/70 hover:bg-white/5 hover:text-ivory'
                    }`}
                  >
                    <span className="font-accent italic text-xs tracking-wider text-terracotta-light mr-2">{item.scena}</span>
                    {item.label}
                  </Link>
                );
              })}
              {/* Mobile text size */}
              <div className="flex items-center gap-2 px-4 pt-3 border-t border-white/10 mt-3">
                <Type size={16} className="text-ivory/50" />
                <span className="text-ivory/50 text-xs mr-2">Text Size:</span>
                {TEXT_SIZES.map((ts) => (
                  <button
                    key={ts.value}
                    onClick={() => setTextSize(ts.value)}
                    className={`${ts.size} px-2 py-1 rounded transition-all ${
                      textSize === ts.value
                        ? 'bg-terracotta text-ivory'
                        : 'text-ivory/40 hover:text-ivory'
                    }`}
                  >
                    {ts.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
