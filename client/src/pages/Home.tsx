// DESIGN: "Dolce Vita" — Italian Cinema & Editorial
// Home: Cinematic landing page with gamified top banner, large CTA, and trip overview
import Navigation from '@/components/Navigation';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Car, Plane, ChevronDown } from 'lucide-react';
import { TRIP_PHASES, ITINERARY, ROUTE_SEGMENTS } from '@/lib/tripData';
import { useTextSize } from '@/contexts/TextSizeContext';

const HERO_IMG = 'https://private-us-east-1.manuscdn.com/sessionFile/TgxIK46OECSzMBNa5tbsfo/sandbox/ElsRA5hrcp1Rjqmoj6DFgp-img-1_1770467818000_na1fn_aGVyby1hbWFsZmktY29hc3Q.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVGd4SUs0Nk9FQ1N6TUJOYTV0YnNmby9zYW5kYm94L0Vsc1JBNWhyY3AxUmpxbW9qNkRGZ3AtaW1nLTFfMTc3MDQ2NzgxODAwMF9uYTFmbl9hR1Z5YnkxaGJXRnNabWt0WTI5aGMzUS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=CFc8J1CHyIBZGXXlBg1OhOjzqZROyOuzSmmsHNMvINFP7ktknIJpH3hzyyGUWPlwTrxCBhU6~F7rCQuvXb1mTu8ETtcnha56hPX8z-FYIao2gb5cBpuJIdjycfk6fwOZhLUwRHlXvzw0VQQcaLfiEEX8g8-8i-kpy~qGWEHyVvIbd-uOJEon100s4Z4rd20nqHHDOP~iWeIiDV-ngQeJ7Bd9egTeaReNJYB4ISPTrT8F1LsjHlQlVu~n5AO1WteBk0dgHzC3Uy6tpwC8J4uBJ8arprceFTACDWWUlr5~-LHSBBlqNFXHTLYDEwzegPQyzlYDZ9bhOK8du8SjbhiSQQ__';

const ROME_IMG = 'https://private-us-east-1.manuscdn.com/sessionFile/TgxIK46OECSzMBNa5tbsfo/sandbox/ElsRA5hrcp1Rjqmoj6DFgp-img-2_1770467808000_na1fn_cm9tZS1jb2xvc3NldW0.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVGd4SUs0Nk9FQ1N6TUJOYTV0YnNmby9zYW5kYm94L0Vsc1JBNWhyY3AxUmpxbW9qNkRGZ3AtaW1nLTJfMTc3MDQ2NzgwODAwMF9uYTFmbl9jbTl0WlMxamIyeHZjM05sZFcwLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=qvB4-Hzv-zvJIe0cxHwrgeAxs89qqAcFx4X-9qDTv0iZlliCf1IZodNPjUo2h9f8gGtUluMtoCET7Mv~OVpTc88VGv7WBk7CC51~HoSGWTktlINEi7cuCouDhXizUc7dEcaId8FJ-3~D7~6U8UbHRg-0yeG9xiKV9FluDH0wgG7wDbGaNxdUDEe4r~gPKVna48PoRMwyzr7TG-wxHMpFS2QI2p5~PRv~iZQqobpa1pVL1IrLzY4Vu1kUhr2~5ePKlDFjmEadBIO8B7KjkR-kQd2mVY2wKivQVR5BfMtjVSz1xaNSyzXW5SLk6O9F0e2duRv~2284VDOCwc9bfkGvoA__';

const BARI_IMG = 'https://private-us-east-1.manuscdn.com/sessionFile/TgxIK46OECSzMBNa5tbsfo/sandbox/ElsRA5hrcp1Rjqmoj6DFgp-img-4_1770467805000_na1fn_YmFyaS1wYXN0YS1sYWRpZXM.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVGd4SUs0Nk9FQ1N6TUJOYTV0YnNmby9zYW5kYm94L0Vsc1JBNWhyY3AxUmpxbW9qNkRGZ3AtaW1nLTRfMTc3MDQ2NzgwNTAwMF9uYTFmbl9ZbUZ5YVMxd1lYTjBZUzFzWVdScFpYTS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=LOO5xNFlb3Kn7gylCJ28eP54ZdTJcYzEsdPgpWg9G3xuEsWB6Ip9t47RGDRw19lAN9BJqN2kmnsAIsknxh0~FUbrnUakI2Z676s2UNCfXwnQYuPE7-gcny79Kz-aqc6xAGxb~7tHYVJ0IGczEonlpLergY3bQZHLi99utSwSlS3FP2lcsA5qeHyaf3EQptqKIF6yWNqRcks~xbhP4qHV73K5wE~DpSLTwuQ58BKzSwr4NQ9i4mh2-9JTOY9k~GywkIUDdiL-0FF1Qx9MYTxXXNR6oK6qsXiJ9QMRjrm3adozQspxyBdsVo8X45217ZcTjk0THU2L~EzpOQWOXDDVLA__';

const AMSTERDAM_IMG = 'https://private-us-east-1.manuscdn.com/sessionFile/TgxIK46OECSzMBNa5tbsfo/sandbox/ElsRA5hrcp1Rjqmoj6DFgp-img-5_1770467821000_na1fn_YW1zdGVyZGFtLWNhbmFs.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVGd4SUs0Nk9FQ1N6TUJOYTV0YnNmby9zYW5kYm94L0Vsc1JBNWhyY3AxUmpxbW9qNkRGZ3AtaW1nLTVfMTc3MDQ2NzgyMTAwMF9uYTFmbl9ZVzF6ZEdWeVpHRnRMV05oYm1Gcy5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=tXIV~hnnCbg29GeJHi2Jl8y6ohclCS4gG~LUmqxSUW68KKMB6HcrZ6JytLxvpnu0-0ajjUXJOacLNTMjxA9ocpbkkBrpak3kjCLaBSBRLUr45O5V-IlTZhXdRASek0uoJ2vxGV9kx-8PAV0nEQ-2NfmEzJW5j8ZpUrBGZ~WBW6LChycXYnLDOpCsDyhdycxyDL8WzvqdWiD1AaJ-U4o07B7xhIfq1qYH2z~kJwvVf4ecXdW7Aot7mifzOG3LMaRB6LluJ2l04EE3Fy~8MI6AO~E-uFtg8KXLqkR56KAVt3PDwjsTtC2Zv8IXX9LW678mYTw-TyqTy0Gg-wh0NMArcw__';

const totalKm = ROUTE_SEGMENTS.reduce((acc, s) => acc + parseFloat(s.distance), 0);

export default function Home() {
  const { textClass } = useTextSize();

  return (
    <div className={`min-h-screen bg-background ${textClass}`}>
      <Navigation />

      {/* ===== HERO / GAMIFIED TOP BANNER ===== */}
      <section className="relative h-screen overflow-hidden film-grain">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="Amalfi Coast"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        </div>

        {/* Letterbox bars */}
        <div className="absolute top-0 left-0 right-0 h-[3%] bg-charcoal z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[3%] bg-charcoal z-10" />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="font-accent italic text-gold text-lg md:text-xl tracking-[0.3em] uppercase mb-4">
              Scena Prima — February & March 2026
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-display text-ivory text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-6 max-w-5xl"
          >
            Italy Adventure
            <span className="block text-terracotta">2026</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-accent italic text-ivory/80 text-lg md:text-2xl max-w-2xl mb-10 leading-relaxed"
          >
            From the curling ice of Milan to the sun-drenched roads of Southern Italy,
            through ancient ruins and living culture, ending in the canals of Amsterdam.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <Link
              href="/itinerary"
              className="inline-flex items-center gap-3 bg-terracotta hover:bg-terracotta-light text-ivory px-10 py-5 rounded-sm text-lg font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_40px_rgba(199,91,57,0.4)] hover:scale-105"
            >
              <Calendar size={22} />
              Explore the Journey
            </Link>
          </motion.div>

          {/* Quick Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="absolute bottom-[8%] left-0 right-0 flex justify-center"
          >
            <div className="flex items-center gap-6 md:gap-10 text-ivory/70 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gold" />
                <span>15 Days</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gold" />
                <span>9 Cities</span>
              </div>
              <div className="flex items-center gap-2">
                <Car size={16} className="text-gold" />
                <span>{Math.round(totalKm)} km</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} className="text-gold" />
                <span>4 Travelers</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-[4%] left-1/2 -translate-x-1/2 z-20"
        >
          <ChevronDown size={24} className="text-ivory/40" />
        </motion.div>
      </section>

      {/* ===== TRIP PHASES TIMELINE ===== */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,rgba(199,91,57,0.3),transparent_70%)]" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="scene-number text-terracotta-light text-sm mb-3">The Journey</p>
            <h2 className="font-display text-ivory text-4xl md:text-5xl mb-4">Six Acts, One Adventure</h2>
            <p className="font-accent italic text-ivory/60 text-lg max-w-xl mx-auto">
              From Olympic ice to Mediterranean sun, every chapter tells a story
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRIP_PHASES.map((phase, i) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-charcoal-light/50 border border-white/10 rounded-sm p-6 hover:border-terracotta/40 transition-all duration-500"
              >
                <div
                  className="absolute top-0 left-0 w-1 h-full rounded-l-sm transition-all duration-500 group-hover:w-1.5"
                  style={{ backgroundColor: phase.color }}
                />
                <div className="pl-4">
                  <p className="scene-number text-xs mb-2" style={{ color: phase.color }}>
                    {phase.label}
                  </p>
                  <h3 className="font-display text-ivory text-xl mb-1">{phase.title}</h3>
                  <p className="text-ivory/50 text-sm">{phase.dates}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CINEMATIC SCENE CARDS ===== */}
      <section className="py-24 bg-ivory">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="scene-number text-terracotta text-sm mb-3">Highlights</p>
            <h2 className="font-display text-charcoal text-4xl md:text-5xl mb-4">Scenes from the Journey</h2>
          </motion.div>

          {/* Scene 1: Rome */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-12 rounded-sm overflow-hidden shadow-2xl"
          >
            <div className="relative h-72 lg:h-auto">
              <img src={ROME_IMG} alt="Rome Colosseum" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:bg-gradient-to-l" />
              <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-sm px-3 py-1 rounded-sm">
                <span className="scene-number text-gold text-xs">Scena III</span>
              </div>
            </div>
            <div className="bg-charcoal p-8 lg:p-12 flex flex-col justify-center">
              <p className="font-accent italic text-terracotta-light text-sm tracking-wider mb-2">February 24–28</p>
              <h3 className="font-display text-ivory text-3xl lg:text-4xl mb-4">Roma Eterna</h3>
              <p className="text-ivory/70 leading-relaxed mb-6">
                Five days in the Eternal City. Meet John Frank and Giulio Potestio on the 26th,
                and let the real Italy begin. With fluent Italian as your key, doors open that
                guidebooks cannot unlock.
              </p>
              <Link href="/itinerary" className="text-gold hover:text-terracotta transition-colors font-medium text-sm tracking-wider uppercase">
                View Full Itinerary →
              </Link>
            </div>
          </motion.div>

          {/* Scene 2: Bari */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-12 rounded-sm overflow-hidden shadow-2xl"
          >
            <div className="bg-charcoal p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
              <p className="font-accent italic text-terracotta-light text-sm tracking-wider mb-2">March 1–8</p>
              <h3 className="font-display text-ivory text-3xl lg:text-4xl mb-4">The Grand Southern Loop</h3>
              <p className="text-ivory/70 leading-relaxed mb-6">
                888 kilometers of pure Southern Italian magic. From Neapolitan pizza to the
                Amalfi Coast cliffs, through the untouched mountains of Calabria, to the
                pasta grandmothers of Bari. This is Italy as Italians know it.
              </p>
              <Link href="/map" className="text-gold hover:text-terracotta transition-colors font-medium text-sm tracking-wider uppercase">
                Explore the Route →
              </Link>
            </div>
            <div className="relative h-72 lg:h-auto order-1 lg:order-2">
              <img src={BARI_IMG} alt="Bari Pasta Ladies" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/20 lg:bg-gradient-to-r" />
              <div className="absolute top-4 right-4 bg-charcoal/80 backdrop-blur-sm px-3 py-1 rounded-sm">
                <span className="scene-number text-gold text-xs">Scena IV</span>
              </div>
            </div>
          </motion.div>

          {/* Scene 3: Amsterdam */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-sm overflow-hidden shadow-2xl"
          >
            <div className="relative h-72 lg:h-auto">
              <img src={AMSTERDAM_IMG} alt="Amsterdam Canals" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 lg:bg-gradient-to-l" />
              <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-sm px-3 py-1 rounded-sm">
                <span className="scene-number text-gold text-xs">Scena V</span>
              </div>
            </div>
            <div className="bg-charcoal p-8 lg:p-12 flex flex-col justify-center">
              <p className="font-accent italic text-terracotta-light text-sm tracking-wider mb-2">March 8–11</p>
              <h3 className="font-display text-ivory text-3xl lg:text-4xl mb-4">Amsterdam & Home</h3>
              <p className="text-ivory/70 leading-relaxed mb-6">
                A palette cleanser before the journey home. One or two days among the canals
                and bicycles of Amsterdam, then KLM direct to Edmonton. The adventure ends,
                but the stories are just beginning.
              </p>
              <Link href="/budget" className="text-gold hover:text-terracotta transition-colors font-medium text-sm tracking-wider uppercase">
                View Budget & Flights →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== ROUTE OVERVIEW ===== */}
      <section className="py-24 bg-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="scene-number text-terracotta text-sm mb-3">The Road</p>
            <h2 className="font-display text-charcoal text-4xl md:text-5xl mb-4">Southern Italy by Car</h2>
            <p className="font-accent italic text-warm-gray text-lg">
              ~{Math.round(totalKm)} kilometers across the boot of Italy
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {ROUTE_SEGMENTS.map((seg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-4 mb-0"
              >
                {/* Timeline dot and line */}
                <div className="flex flex-col items-center flex-shrink-0 w-8">
                  <div className="w-3 h-3 rounded-full bg-terracotta border-2 border-terracotta-light mt-1.5" />
                  {i < ROUTE_SEGMENTS.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-terracotta/40 to-terracotta/10" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-6 flex-1">
                  <div className="flex items-baseline justify-between">
                    <h4 className="font-display text-charcoal text-lg">
                      {seg.from} → {seg.to}
                    </h4>
                    <span className="text-terracotta font-semibold text-sm">{seg.distance}</span>
                  </div>
                  <div className="flex items-center gap-3 text-warm-gray text-sm mt-1">
                    <span>{seg.duration}</span>
                    <span className="text-border">|</span>
                    <span className="font-accent italic">{seg.highlight}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/map"
              className="inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-light text-ivory px-8 py-4 rounded-sm font-medium transition-all duration-300"
            >
              <MapPin size={18} />
              View Interactive Map
            </Link>
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS FOOTER ===== */}
      <section className="py-16 bg-charcoal">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Link href="/itinerary" className="group text-center p-6 border border-white/10 rounded-sm hover:border-terracotta/40 transition-all">
              <Calendar size={28} className="mx-auto text-gold mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-display text-ivory text-lg mb-1">Day-by-Day</h4>
              <p className="text-ivory/50 text-sm">Full 15-day itinerary</p>
            </Link>
            <Link href="/map" className="group text-center p-6 border border-white/10 rounded-sm hover:border-terracotta/40 transition-all">
              <MapPin size={28} className="mx-auto text-gold mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-display text-ivory text-lg mb-1">Route Map</h4>
              <p className="text-ivory/50 text-sm">Interactive driving route</p>
            </Link>
            <Link href="/budget" className="group text-center p-6 border border-white/10 rounded-sm hover:border-terracotta/40 transition-all">
              <Plane size={28} className="mx-auto text-gold mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-display text-ivory text-lg mb-1">Budget & Flights</h4>
              <p className="text-ivory/50 text-sm">Costs and flight options</p>
            </Link>
            <Link href="/logistics" className="group text-center p-6 border border-white/10 rounded-sm hover:border-terracotta/40 transition-all">
              <Car size={28} className="mx-auto text-gold mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-display text-ivory text-lg mb-1">Logistics</h4>
              <p className="text-ivory/50 text-sm">Car, packing, emergencies</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-charcoal border-t border-white/5">
        <div className="container text-center">
          <p className="font-accent italic text-ivory/30 text-sm">
            Italy Adventure 2026 — A journey through culture, history, and la dolce vita
          </p>
        </div>
      </footer>
    </div>
  );
}
