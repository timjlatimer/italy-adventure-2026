// DESIGN: "Dolce Vita" — Italian Cinema & Editorial
// RouteMap: Interactive Google Maps with route segments and location markers
import Navigation from '@/components/Navigation';
import { motion } from 'framer-motion';
import { ITINERARY, ROUTE_SEGMENTS } from '@/lib/tripData';
import { useTextSize } from '@/contexts/TextSizeContext';
import { useState, useCallback } from 'react';
import { MapPin, Navigation as NavIcon, Clock, Car } from 'lucide-react';
import { MapView } from '@/components/Map';

const ROUTE_COLORS = ['#C75B39', '#D4A853', '#2E5090', '#3B7A57', '#8B4513', '#6B3FA0', '#1A5276'];

export default function RouteMap() {
  const { textClass } = useTextSize();
  const [selectedSegment, setSelectedSegment] = useState<number | null>(null);
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);

  const onMapReady = useCallback((map: google.maps.Map) => {
    setMapInstance(map);

    // Add markers for each unique location
    const uniqueLocations = ITINERARY.filter((day, i, arr) =>
      arr.findIndex(d => d.location === day.location) === i
    );

    uniqueLocations.forEach((day, i) => {
      const marker = new google.maps.marker.AdvancedMarkerElement({
        map,
        position: day.coordinates,
        title: day.location,
      });

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="font-family: 'DM Sans', sans-serif; padding: 8px; max-width: 220px;">
            <h3 style="font-family: 'DM Serif Display', serif; margin: 0 0 4px; font-size: 16px; color: #1C1C1C;">
              ${day.location}
            </h3>
            <p style="margin: 0; font-size: 12px; color: #666; font-style: italic;">
              ${day.dateShort} — ${day.title}
            </p>
          </div>
        `,
      });

      marker.addListener('click', () => {
        infoWindow.open({ anchor: marker, map });
      });
    });

    // Draw route lines using DirectionsService
    const directionsService = new google.maps.DirectionsService();

    ROUTE_SEGMENTS.forEach((seg, i) => {
      const origin = ITINERARY.find(d => d.location === seg.from)?.coordinates;
      const dest = ITINERARY.find(d => d.location === seg.to)?.coordinates;

      if (origin && dest) {
        directionsService.route(
          {
            origin: new google.maps.LatLng(origin.lat, origin.lng),
            destination: new google.maps.LatLng(dest.lat, dest.lng),
            travelMode: google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === 'OK' && result) {
              new google.maps.DirectionsRenderer({
                map,
                directions: result,
                suppressMarkers: true,
                polylineOptions: {
                  strokeColor: ROUTE_COLORS[i % ROUTE_COLORS.length],
                  strokeWeight: 4,
                  strokeOpacity: 0.8,
                },
              });
            }
          }
        );
      }
    });

    // Fit bounds to show all locations
    const bounds = new google.maps.LatLngBounds();
    uniqueLocations.forEach(day => {
      bounds.extend(new google.maps.LatLng(day.coordinates.lat, day.coordinates.lng));
    });
    map.fitBounds(bounds, 60);
  }, []);

  const focusSegment = (index: number) => {
    setSelectedSegment(index);
    if (!mapInstance) return;

    const seg = ROUTE_SEGMENTS[index];
    const origin = ITINERARY.find(d => d.location === seg.from)?.coordinates;
    const dest = ITINERARY.find(d => d.location === seg.to)?.coordinates;

    if (origin && dest) {
      const bounds = new google.maps.LatLngBounds();
      bounds.extend(new google.maps.LatLng(origin.lat, origin.lng));
      bounds.extend(new google.maps.LatLng(dest.lat, dest.lng));
      mapInstance.fitBounds(bounds, 80);
    }
  };

  return (
    <div className={`min-h-screen bg-background ${textClass}`}>
      <Navigation />

      {/* Header */}
      <section className="pt-24 pb-8 bg-charcoal">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="scene-number text-terracotta-light text-sm mb-2">Scena III — The Road</p>
            <h1 className="font-display text-ivory text-4xl md:text-6xl mb-3">Route Map</h1>
            <p className="font-accent italic text-ivory/60 text-lg">
              Interactive map of the Southern Italy road trip
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map + Sidebar */}
      <section className="flex flex-col lg:flex-row" style={{ height: 'calc(100vh - 180px)' }}>
        {/* Sidebar — Route Segments */}
        <div className="lg:w-96 flex-shrink-0 bg-card border-r border-border overflow-y-auto order-2 lg:order-1">
          <div className="p-4">
            <h3 className="font-display text-lg mb-4">Route Segments</h3>
            <div className="space-y-2">
              {ROUTE_SEGMENTS.map((seg, i) => (
                <button
                  key={i}
                  onClick={() => focusSegment(i)}
                  className={`w-full text-left p-3 rounded-sm border transition-all ${
                    selectedSegment === i
                      ? 'border-terracotta bg-terracotta/5 shadow-sm'
                      : 'border-border hover:border-terracotta/30 hover:bg-secondary/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: ROUTE_COLORS[i % ROUTE_COLORS.length] }}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 text-sm font-medium">
                        <span>{seg.from}</span>
                        <NavIcon size={12} className="text-muted-foreground" />
                        <span>{seg.to}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                        <span className="flex items-center gap-1">
                          <Car size={10} />
                          {seg.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={10} />
                          {seg.duration}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground font-accent italic mt-1 truncate">
                        {seg.highlight}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Total */}
            <div className="mt-4 p-3 bg-charcoal rounded-sm">
              <div className="flex items-center justify-between text-ivory">
                <span className="font-semibold text-sm">Total Route</span>
                <div className="text-right">
                  <p className="text-gold font-bold">
                    ~{Math.round(ROUTE_SEGMENTS.reduce((a, s) => a + parseFloat(s.distance), 0))} km
                  </p>
                </div>
              </div>
            </div>

            {/* Location List */}
            <div className="mt-6">
              <h4 className="font-display text-sm mb-3 text-muted-foreground uppercase tracking-wider">All Stops</h4>
              <div className="space-y-2">
                {ITINERARY.filter((d, i, a) => a.findIndex(x => x.location === d.location) === i).map((day) => (
                  <button
                    key={day.id}
                    onClick={() => {
                      if (mapInstance) {
                        mapInstance.panTo(day.coordinates);
                        mapInstance.setZoom(13);
                      }
                    }}
                    className="w-full text-left flex items-center gap-3 p-2 rounded-sm hover:bg-secondary/50 transition-colors"
                  >
                    <MapPin size={14} className="text-terracotta flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium">{day.location}</p>
                      <p className="text-xs text-muted-foreground">{day.dateShort}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 order-1 lg:order-2 min-h-[400px]">
          <MapView
            className="w-full h-full"
            initialCenter={{ lat: 40.5, lng: 15.5 }}
            initialZoom={7}
            onMapReady={onMapReady}
          />
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
