// ============================================================
// DESIGN: "Dolce Vita" — Italian Cinema & Editorial
// Data layer for the Italy Adventure 2026 travel website
// ============================================================

export interface DayItinerary {
  id: number;
  date: string;
  dateShort: string;
  phase: string;
  scena: string;
  title: string;
  location: string;
  coordinates: { lat: number; lng: number };
  driveInfo?: { distance: string; duration: string; route: string };
  description: string;
  culturalTips: string[];
  restaurants: { name: string; specialty: string; note: string }[];
  sights: { name: string; description: string }[];
  accommodation: string;
  estimatedCost: { accommodation: number; food: number; transport: number; activities: number };
}

export interface FlightOption {
  date: string;
  departure: string;
  arrival: string;
  airline: string;
  route: string;
  stops: string;
  duration: string;
  priceCAD: number;
}

export interface BudgetCategory {
  category: string;
  estimated: number;
  notes: string;
}

export const TRIP_PHASES = [
  { id: 'olympics', label: 'Scena I', title: 'Olympics Curling', dates: 'Feb 6–22', color: '#2E5090' },
  { id: 'northern', label: 'Scena II', title: 'Northern Italy', dates: 'Feb 22–26', color: '#3B7A57' },
  { id: 'rome', label: 'Scena III', title: 'Roma', dates: 'Feb 24–28', color: '#C75B39' },
  { id: 'roadtrip', label: 'Scena IV', title: 'The Grand Southern Loop', dates: 'Mar 1–7', color: '#D4A853' },
  { id: 'amsterdam', label: 'Scena V', title: 'Amsterdam', dates: 'Mar 8–9', color: '#1A5276' },
  { id: 'home', label: 'Finale', title: 'Edmonton', dates: 'Mar 10–11', color: '#5D4E37' },
];

export const TRAVELERS = [
  { name: 'You & Your Wife', role: 'Lead Travelers', phases: ['olympics', 'northern', 'rome', 'roadtrip', 'amsterdam', 'home'] },
  { name: 'Your Daughter', role: 'Northern Italy Companion', phases: ['northern'] },
  { name: 'John Frank Potestio', role: 'Cultural Guide & Italian Speaker', phases: ['rome', 'roadtrip'] },
  { name: 'Giulio Potestio', role: 'Rome & Southern Italy', phases: ['rome', 'roadtrip'] },
];

export const ROUTE_SEGMENTS = [
  { from: 'Rome', to: 'Naples', distance: '228 km', duration: '2h 25m', highlight: 'Highway A1 (Autostrada del Sole)' },
  { from: 'Naples', to: 'Pompeii', distance: '27.6 km', duration: '24m', highlight: 'Coastal drive past Mt. Vesuvius' },
  { from: 'Pompeii', to: 'Amalfi Coast', distance: '35.9 km', duration: '57m', highlight: 'Scenic, winding coastal roads' },
  { from: 'Amalfi Coast', to: 'Salerno', distance: '27.4 km', duration: '53m', highlight: 'Famous SS163 "Blue Highway"' },
  { from: 'Salerno', to: 'Cosenza', distance: '256 km', duration: '2h 33m', highlight: 'Southern highway through mountains' },
  { from: 'Cosenza', to: 'Grimaldi', distance: '29.1 km', duration: '26m', highlight: 'Inland hills of Calabria' },
  { from: 'Grimaldi', to: 'Bari', distance: '284 km', duration: '3h 18m', highlight: 'Cross-country to Puglia' },
];

export const ITINERARY: DayItinerary[] = [
  {
    id: 1,
    date: 'February 24, 2026',
    dateShort: 'Feb 24',
    phase: 'rome',
    scena: 'III',
    title: 'Arrival in Rome',
    location: 'Rome',
    coordinates: { lat: 41.9028, lng: 12.4964 },
    description: 'Arrive in the Eternal City after your Northern Italy journey with your daughter. Settle into your accommodation and begin soaking in the atmosphere of Rome. The city is yours to explore at a leisurely pace.',
    culturalTips: [
      'Romans eat dinner late — 8:30 PM or later is normal',
      'The best espresso is at the bar (standing), not sitting at a table',
      'Watch for ZTL zones — restricted traffic areas with heavy fines'
    ],
    restaurants: [
      { name: 'Trattoria Da Enzo al 29', specialty: 'Classic Carbonara & Cacio e Pepe', note: 'Trastevere institution, arrive early — no reservations' },
      { name: 'Roscioli Salumeria', specialty: 'Artisan cured meats & Roman cuisine', note: 'Book ahead — tiny and legendary' },
    ],
    sights: [
      { name: 'Trastevere Quarter', description: 'Wander the cobblestone streets of Rome\'s most charming neighborhood at golden hour' },
      { name: 'Piazza Navona', description: 'Baroque masterpiece with Bernini\'s Fountain of the Four Rivers' },
    ],
    accommodation: 'Airbnb or B&B in Trastevere or Centro Storico',
    estimatedCost: { accommodation: 120, food: 80, transport: 20, activities: 0 },
  },
  {
    id: 2,
    date: 'February 25, 2026',
    dateShort: 'Feb 25',
    phase: 'rome',
    scena: 'III',
    title: 'Exploring Rome',
    location: 'Rome',
    coordinates: { lat: 41.8902, lng: 12.4922 },
    description: 'A full day to experience Rome\'s living culture. Rather than rushing through museums, walk the streets, sit in piazzas, and let the city reveal itself. John Frank\'s Italian will open doors that guidebooks cannot.',
    culturalTips: [
      'Visit the Pantheon early morning when it\'s nearly empty — it\'s free',
      'The best gelato shops never have brightly colored, piled-high displays',
      'Take the "passeggiata" — the evening stroll locals take around 6-7 PM'
    ],
    restaurants: [
      { name: 'Pizzarium Bonci', specialty: 'Pizza al taglio (by the slice)', note: 'Gabriele Bonci is the "Michelangelo of Pizza"' },
      { name: 'Armando al Pantheon', specialty: 'Traditional Roman trattoria', note: 'Family-run since 1961, book ahead' },
    ],
    sights: [
      { name: 'The Pantheon', description: 'Free entry — the oculus and the rain falling through it is unforgettable' },
      { name: 'Campo de\' Fiori Market', description: 'Morning market with fresh produce, spices, and local life' },
    ],
    accommodation: 'Same as Day 1',
    estimatedCost: { accommodation: 120, food: 90, transport: 15, activities: 20 },
  },
  {
    id: 3,
    date: 'February 26, 2026',
    dateShort: 'Feb 26',
    phase: 'rome',
    scena: 'III',
    title: 'Meeting the Potestios',
    location: 'Rome',
    coordinates: { lat: 41.9009, lng: 12.4833 },
    description: 'The day you\'ve been waiting for — meeting John Frank Potestio and Giulio Potestio in Rome. This is where the trip transforms from sightseeing to cultural immersion. With John Frank\'s fluent Italian, you\'ll experience Rome the way Romans do.',
    culturalTips: [
      'Let John Frank order at restaurants — Italians respect when you speak the language',
      'Aperitivo hour (6-8 PM) is sacred — order a Negroni or Aperol Spritz with free snacks',
      'Romans greet with two kisses on the cheek — left first, then right'
    ],
    restaurants: [
      { name: 'Da Felice a Testaccio', specialty: 'The legendary Carbonara', note: 'In the Testaccio food district — Rome\'s culinary heart' },
      { name: 'Aperitivo at Hotel de Russie', specialty: 'Cocktails in a secret garden', note: 'Splurge for the atmosphere — worth every euro' },
    ],
    sights: [
      { name: 'Testaccio Neighborhood', description: 'Rome\'s authentic food district — far from tourist traps' },
      { name: 'Colosseum at Sunset', description: 'View from the outside at golden hour — no ticket needed for the magic' },
    ],
    accommodation: 'Same as Day 1',
    estimatedCost: { accommodation: 120, food: 120, transport: 20, activities: 30 },
  },
  {
    id: 4,
    date: 'February 27, 2026',
    dateShort: 'Feb 27',
    phase: 'rome',
    scena: 'III',
    title: 'Rome — Final Day',
    location: 'Rome',
    coordinates: { lat: 41.9022, lng: 12.4539 },
    description: 'One more day in Rome before the road trip begins. Pick up the rental car today or tomorrow morning. Use this day for anything you missed, or simply enjoy the Roman pace of life.',
    culturalTips: [
      'Pick up rental car from Rome Termini or Via Sardegna — avoid airport pickup if staying in center',
      'Get a Telepass transponder for highway tolls if the car doesn\'t have one',
      'Stock up on snacks and water for the road — Italian Autogrill rest stops are excellent'
    ],
    restaurants: [
      { name: 'Supplizio', specialty: 'Gourmet supplì (Roman fried rice balls)', note: 'Perfect grab-and-go Roman street food' },
      { name: 'Grazia & Graziella', specialty: 'Roman classics in Trastevere', note: 'Beautiful piazza setting for a farewell dinner' },
    ],
    sights: [
      { name: 'Vatican Museums & St. Peter\'s', description: 'If you haven\'t been — book skip-the-line tickets' },
      { name: 'Gianicolo Hill', description: 'Best panoramic view of Rome — locals\' secret sunset spot' },
    ],
    accommodation: 'Same as Day 1',
    estimatedCost: { accommodation: 120, food: 80, transport: 30, activities: 25 },
  },
  {
    id: 5,
    date: 'February 28, 2026',
    dateShort: 'Feb 28',
    phase: 'rome',
    scena: 'III',
    title: 'Rome — Preparation Day',
    location: 'Rome',
    coordinates: { lat: 41.9028, lng: 12.4964 },
    description: 'Final preparations before the Southern adventure. Pick up the rental car if not already done. Enjoy a relaxed morning in Rome before the road beckons.',
    culturalTips: [
      'Ensure your International Driving Permit (IDP) is with your license',
      'Check that the rental has winter tires — mandatory in Italy through April',
      'Download offline maps for Calabria — cell service can be spotty in the mountains'
    ],
    restaurants: [
      { name: 'Antico Forno Roscioli', specialty: 'Fresh bread and pizza bianca', note: 'The best bakery in Rome — perfect road trip provisions' },
    ],
    sights: [
      { name: 'Morning at a Roman café', description: 'Cornetto and cappuccino — the Italian breakfast ritual' },
    ],
    accommodation: 'Same as Day 1',
    estimatedCost: { accommodation: 120, food: 60, transport: 80, activities: 0 },
  },
  {
    id: 6,
    date: 'March 1, 2026',
    dateShort: 'Mar 1',
    phase: 'roadtrip',
    scena: 'IV',
    title: 'Rome to Naples',
    location: 'Naples',
    coordinates: { lat: 40.8518, lng: 14.2681 },
    driveInfo: { distance: '228 km', duration: '2h 25m', route: 'A1 Autostrada del Sole' },
    description: 'The Grand Southern Loop begins! Head south on the legendary Autostrada del Sole toward Naples — the birthplace of pizza, the city of a thousand contradictions, and one of the most alive places on Earth. With John Frank speaking Italian, you\'ll penetrate the real Naples.',
    culturalTips: [
      'Naples is chaotic and beautiful — embrace it, don\'t fight it',
      'Keep valuables secure but don\'t be paranoid — Neapolitans are incredibly warm',
      'The "centro storico" (historic center) is a UNESCO World Heritage Site — get lost in it'
    ],
    restaurants: [
      { name: 'Gino e Toto Sorbillo', specialty: 'World-famous Neapolitan pizza', note: 'The queue is part of the experience — worth every minute' },
      { name: 'Pizzeria Da Michele', specialty: 'Only two pizzas: Margherita and Marinara', note: 'Since 1870 — purists say this is THE pizza' },
    ],
    sights: [
      { name: 'Sansevero Chapel Museum', description: 'The Veiled Christ sculpture — one of the most breathtaking artworks in the world' },
      { name: 'Naples Underground (Napoli Sotterranea)', description: 'Ancient Greek-Roman tunnels 40 meters below the streets' },
      { name: 'Spaccanapoli', description: 'The street that "splits Naples" — pure sensory overload in the best way' },
    ],
    accommodation: 'Airbnb or B&B in Centro Storico',
    estimatedCost: { accommodation: 90, food: 60, transport: 40, activities: 25 },
  },
  {
    id: 7,
    date: 'March 2, 2026',
    dateShort: 'Mar 2',
    phase: 'roadtrip',
    scena: 'IV',
    title: 'Naples to Pompeii',
    location: 'Pompeii',
    coordinates: { lat: 40.7462, lng: 14.4989 },
    driveInfo: { distance: '27.6 km', duration: '24m', route: 'Coastal drive past Mt. Vesuvius' },
    description: 'A short drive brings you to one of the most extraordinary archaeological sites on Earth. Walk the streets of a city frozen in time since 79 AD. Allow at least 4 hours — the scale is staggering.',
    culturalTips: [
      'Arrive early (8:30 AM opening) to beat the crowds and the heat',
      'Bring water and wear comfortable shoes — the site is enormous',
      'The Villa of Mysteries frescoes are the highlight — don\'t miss them'
    ],
    restaurants: [
      { name: 'Caupona Pompei Ristorante', specialty: 'Ancient Roman-themed dining', note: 'Period-inspired dishes in a unique setting near the ruins' },
      { name: 'President Ristorante', specialty: 'Michelin-starred seafood', note: 'In nearby Pompei town — a splurge-worthy dinner' },
    ],
    sights: [
      { name: 'Archaeological Park of Pompeii', description: 'The Forum, Villa of Mysteries, amphitheater — a city preserved in volcanic ash' },
      { name: 'View of Mt. Vesuvius', description: 'The volcano that buried Pompeii looms above — still active' },
    ],
    accommodation: 'Airbnb near Pompeii or in Sorrento',
    estimatedCost: { accommodation: 85, food: 55, transport: 15, activities: 18 },
  },
  {
    id: 8,
    date: 'March 3, 2026',
    dateShort: 'Mar 3',
    phase: 'roadtrip',
    scena: 'IV',
    title: 'The Amalfi Coast',
    location: 'Amalfi Coast',
    coordinates: { lat: 40.6333, lng: 14.6029 },
    driveInfo: { distance: '35.9 km', duration: '57m', route: 'Scenic, winding coastal roads' },
    description: 'This is the drive you\'ve been dreaming about — the legendary Amalfi Coast road. Carved into sheer cliffs above the turquoise Mediterranean, every turn reveals another postcard view. Take it slow, stop often, and let the beauty sink in.',
    culturalTips: [
      'Leave early morning to avoid traffic — the road gets congested by 10 AM',
      'Consider parking outside towns and using ferries between villages',
      'Limoncello is made from local Amalfi lemons — try it at a family-run shop, not a tourist stand'
    ],
    restaurants: [
      { name: 'Da Gemma', specialty: 'Fresh seafood with Amalfi lemon', note: 'In Amalfi town — a local institution since 1872' },
      { name: 'Il Ritrovo', specialty: 'Mountain-top dining above Positano', note: 'In Montepertuso village — authentic and away from tourist prices' },
    ],
    sights: [
      { name: 'Duomo di Amalfi', description: 'Stunning 9th-century cathedral with Arab-Norman architecture' },
      { name: 'Villa Rufolo, Ravello', description: 'Cliffside gardens with the most breathtaking views on the coast' },
      { name: 'Path of the Gods (Sentiero degli Dei)', description: 'If weather permits — a spectacular coastal hiking trail' },
    ],
    accommodation: 'B&B in Amalfi or Ravello',
    estimatedCost: { accommodation: 130, food: 70, transport: 20, activities: 15 },
  },
  {
    id: 9,
    date: 'March 4, 2026',
    dateShort: 'Mar 4',
    phase: 'roadtrip',
    scena: 'IV',
    title: 'Amalfi Coast to Salerno',
    location: 'Salerno',
    coordinates: { lat: 40.6824, lng: 14.7681 },
    driveInfo: { distance: '27.4 km', duration: '53m', route: 'SS163 "Blue Highway"' },
    description: 'Continue along the famous SS163 "Blue Highway" to Salerno — a real working Italian city that tourists often skip. This is where you\'ll feel the authentic Southern Italian rhythm of daily life.',
    culturalTips: [
      'Salerno\'s historic center is walkable and wonderfully un-touristy',
      'The Lungomare (seafront promenade) is perfect for an evening passeggiata',
      'Try "mozzarella di bufala" — the buffalo mozzarella here is the freshest you\'ll ever taste'
    ],
    restaurants: [
      { name: 'Ristorante Cicirinella', specialty: 'Authentic Salerno cuisine', note: 'Local favorite — ask John Frank to order in Italian' },
      { name: 'Vicolo della Neve', specialty: 'Traditional Campanian dishes', note: 'Hidden in the old town alleys — the kind of place only locals know' },
    ],
    sights: [
      { name: 'Salerno Cathedral', description: 'Stunning crypt and medieval architecture — far less crowded than Rome\'s churches' },
      { name: 'Garden of Minerva', description: 'Medieval botanical garden with panoramic views — Europe\'s first botanical garden' },
    ],
    accommodation: 'B&B or hotel in Salerno Centro',
    estimatedCost: { accommodation: 80, food: 55, transport: 15, activities: 10 },
  },
  {
    id: 10,
    date: 'March 5, 2026',
    dateShort: 'Mar 5',
    phase: 'roadtrip',
    scena: 'IV',
    title: 'Salerno to Cosenza',
    location: 'Cosenza',
    coordinates: { lat: 39.3088, lng: 16.2518 },
    driveInfo: { distance: '256 km', duration: '2h 33m', route: 'A2 through the mountains of Calabria' },
    description: 'The longest drive of the trip takes you deep into Calabria — the "toe" of Italy\'s boot. The landscape transforms dramatically as you leave the coast and enter the rugged mountains. Cosenza, known as the "Athens of Calabria," is a hidden gem.',
    culturalTips: [
      'Calabria is Italy\'s least-touristed region — you\'ll be treated like honored guests',
      'The dialect here is very different from standard Italian — even John Frank may notice!',
      'Calabrian food is spicier than the rest of Italy — \'nduja (spicy spreadable salami) is the star'
    ],
    restaurants: [
      { name: 'A Cantina Cosentina', specialty: 'Hearty Calabrian specialties', note: 'Try the \'nduja, soppressata, and local Cirò wine' },
      { name: 'Ristorante L\'Arco Vecchio', specialty: 'Traditional Calabrian pasta', note: 'In the old town — handmade pasta with local ragù' },
    ],
    sights: [
      { name: 'Swabian Castle', description: 'Medieval fortress overlooking the historic center — panoramic views of the valley' },
      { name: 'MAB Open-Air Museum', description: 'Contemporary sculptures along Corso Mazzini — art meets daily life' },
      { name: 'Old Town (Centro Storico)', description: 'Winding medieval streets — this is the real, untouched Italy' },
    ],
    accommodation: 'B&B or Airbnb in Cosenza Centro Storico',
    estimatedCost: { accommodation: 65, food: 45, transport: 50, activities: 10 },
  },
  {
    id: 11,
    date: 'March 6, 2026',
    dateShort: 'Mar 6',
    phase: 'roadtrip',
    scena: 'IV',
    title: 'Cosenza & Grimaldi',
    location: 'Grimaldi',
    coordinates: { lat: 39.1417, lng: 16.0889 },
    driveInfo: { distance: '29.1 km', duration: '26m', route: 'Inland hills of Calabria' },
    description: 'A short drive to Grimaldi — a quiet, authentic Calabrian hilltop village where time moves differently. This is the Italy that most tourists never see. If John Frank has family connections here, this could be a deeply personal day.',
    culturalTips: [
      'In small Calabrian villages, the bar (café) is the social center — sit and observe',
      'Older residents may speak Calabrian dialect, not standard Italian',
      'If invited into someone\'s home, never refuse food — it\'s a sign of deep respect'
    ],
    restaurants: [
      { name: 'Ristorante Pizzeria l\'Incanto', specialty: 'Relaxed local Calabrian meal', note: 'Village restaurant — simple, honest, delicious' },
      { name: 'Local bar/café', specialty: 'Espresso and pastries', note: 'The village bar is where you\'ll meet the real Grimaldi' },
    ],
    sights: [
      { name: 'Grimaldi Village', description: 'Wander the hilltop streets — every corner tells a story of centuries past' },
      { name: 'Calabrian Countryside', description: 'Olive groves, citrus orchards, and mountain views — pure Southern Italian beauty' },
    ],
    accommodation: 'B&B or agriturismo near Grimaldi',
    estimatedCost: { accommodation: 55, food: 40, transport: 15, activities: 0 },
  },
  {
    id: 12,
    date: 'March 7, 2026',
    dateShort: 'Mar 7',
    phase: 'roadtrip',
    scena: 'IV',
    title: 'To Bari — Across the Peninsula',
    location: 'Bari',
    coordinates: { lat: 41.1171, lng: 16.8719 },
    driveInfo: { distance: '284 km', duration: '3h 18m', route: 'Cross-country to the Puglia region' },
    description: 'The final major drive crosses the entire Italian peninsula from the Tyrrhenian to the Adriatic coast. Bari is a revelation — a gritty, authentic port city with one of Italy\'s most magical old towns. The famous "Pasta Ladies" of Bari Vecchia are not to be missed.',
    culturalTips: [
      'Bari Vecchia (Old Bari) is safe and wonderful — don\'t believe outdated warnings',
      'The "Strada delle Orecchiette" is where grandmothers make pasta in the street — buy some!',
      'Pugliese cuisine is simpler than Campanian — olive oil, bread, and vegetables are the stars'
    ],
    restaurants: [
      { name: 'Al Sorso Preferito', specialty: 'Spaghetti all\'Assassina (charred, spicy pasta)', note: 'Bari\'s signature dish — you can\'t leave without trying it' },
      { name: 'Panificio Fiore', specialty: 'Focaccia Barese', note: 'The best focaccia in Puglia — crispy, oily, topped with tomatoes and olives' },
    ],
    sights: [
      { name: 'Basilica San Nicola', description: 'Where Saint Nicholas (yes, Santa Claus) is buried — stunning Romanesque architecture' },
      { name: 'Strada delle Orecchiette', description: 'Watch grandmothers hand-roll orecchiette pasta in the narrow streets of Old Bari' },
      { name: 'Bari Vecchia', description: 'The labyrinthine old town — get lost, find treasures' },
    ],
    accommodation: 'B&B or hotel in Bari Vecchia',
    estimatedCost: { accommodation: 75, food: 50, transport: 50, activities: 10 },
  },
  {
    id: 13,
    date: 'March 8, 2026',
    dateShort: 'Mar 8',
    phase: 'roadtrip',
    scena: 'IV',
    title: 'Bari to Lamezia Terme',
    location: 'Lamezia Terme',
    coordinates: { lat: 38.9684, lng: 16.3101 },
    driveInfo: { distance: '~330 km', duration: '~3h 30m', route: 'A14 south then A2 west to Calabria' },
    description: 'The final driving day — head back across to the western coast and Lamezia Terme. Drop off the rental car at the airport. Depending on your flight timing, you may have time for one last Calabrian meal.',
    culturalTips: [
      'Drop off the rental car at Lamezia Terme Airport — most major companies have desks there',
      'The airport shuttle (Bus Line 90) connects the train station to the terminal in 10 minutes',
      'Buy some \'nduja and local products at the airport to bring home — they make incredible gifts'
    ],
    restaurants: [
      { name: 'Airport area restaurants', specialty: 'Last Calabrian meal', note: 'Simple but authentic — one final taste of the South' },
    ],
    sights: [
      { name: 'Lamezia Terme', description: 'Gateway to Calabria — a working Italian town, not a tourist destination' },
    ],
    accommodation: 'Flight day — no accommodation needed (or hotel near airport if late flight)',
    estimatedCost: { accommodation: 0, food: 40, transport: 60, activities: 0 },
  },
  {
    id: 14,
    date: 'March 8–9, 2026',
    dateShort: 'Mar 8–9',
    phase: 'amsterdam',
    scena: 'V',
    title: 'Amsterdam Stopover',
    location: 'Amsterdam',
    coordinates: { lat: 52.3676, lng: 4.9041 },
    description: 'Fly from Lamezia Terme to Amsterdam Schiphol. After the warmth of Southern Italy, Amsterdam offers a completely different European experience — canals, bicycles, and Dutch directness. One or two nights to decompress before the long flight home.',
    culturalTips: [
      'Amsterdam is extremely walkable — the Jordaan neighborhood is charming',
      'Try a "broodje haring" (herring sandwich) from a street stand — it\'s a Dutch rite of passage',
      'The Rijksmuseum is world-class if you have time for one museum'
    ],
    restaurants: [
      { name: 'Foodhallen', specialty: 'Indoor food market with dozens of stalls', note: 'Perfect for trying Dutch and international street food' },
      { name: 'Café Winkel 43', specialty: 'The best apple pie in Amsterdam', note: 'In the Jordaan — a local institution' },
    ],
    sights: [
      { name: 'Canal Ring Walk', description: 'UNESCO World Heritage canals — beautiful at any time of day' },
      { name: 'Jordaan Neighborhood', description: 'Charming streets, independent shops, and cozy "brown cafés"' },
    ],
    accommodation: 'Hotel near Centraal Station or Jordaan',
    estimatedCost: { accommodation: 150, food: 70, transport: 30, activities: 20 },
  },
  {
    id: 15,
    date: 'March 10–11, 2026',
    dateShort: 'Mar 10–11',
    phase: 'home',
    scena: 'Finale',
    title: 'Home to Edmonton',
    location: 'Edmonton',
    coordinates: { lat: 53.5461, lng: -113.4938 },
    description: 'KLM direct from Amsterdam Schiphol to Edmonton International. The adventure ends, but the memories — and John Frank\'s stories — will last forever. Welcome home.',
    culturalTips: [
      'KLM flies AMS→YEG about 4 times per week — check for the cheapest day',
      'Flight duration is approximately 9 hours direct',
      'Schiphol Airport has excellent duty-free — pick up some Dutch cheese and stroopwafels'
    ],
    restaurants: [],
    sights: [],
    accommodation: 'Home sweet home',
    estimatedCost: { accommodation: 0, food: 30, transport: 0, activities: 0 },
  },
];

export const FLIGHTS_LAMEZIA_AMSTERDAM: FlightOption[] = [
  { date: 'Fri, Mar 6', departure: '6:10 AM', arrival: '11:00 AM', airline: 'ITA Airways', route: 'SUF → AMS', stops: '1 stop (Rome)', duration: '4h 50m', priceCAD: 240 },
  { date: 'Fri, Mar 6', departure: '11:15 AM', arrival: '7:15 PM', airline: 'ITA Airways', route: 'SUF → AMS', stops: '2 stops', duration: '8h 0m', priceCAD: 177 },
  { date: 'Sat, Mar 7', departure: '6:10 AM', arrival: '11:00 AM', airline: 'ITA Airways', route: 'SUF → AMS', stops: '1 stop (Rome)', duration: '4h 50m', priceCAD: 195 },
  { date: 'Sat, Mar 7', departure: '4:35 PM', arrival: '9:20 PM', airline: 'ITA/KLM', route: 'SUF → AMS', stops: '1 stop', duration: '4h 45m', priceCAD: 306 },
  { date: 'Sun, Mar 8', departure: '6:10 AM', arrival: '11:00 AM', airline: 'ITA Airways', route: 'SUF → AMS', stops: '1 stop (Rome)', duration: '4h 50m', priceCAD: 175 },
  { date: 'Sun, Mar 8', departure: '3:35 PM', arrival: '9:40 PM', airline: 'ITA/KLM', route: 'SUF → AMS', stops: '1 stop', duration: '6h 5m', priceCAD: 341 },
  { date: 'Mon, Mar 9', departure: '6:10 AM', arrival: '11:00 AM', airline: 'ITA Airways', route: 'SUF → AMS', stops: '1 stop', duration: '4h 50m', priceCAD: 195 },
  { date: 'Mon, Mar 9', departure: '7:15 PM', arrival: '5:05 PM+1', airline: 'ITA Airways', route: 'SUF → AMS', stops: '1 stop', duration: '21h 50m', priceCAD: 166 },
];

export const FLIGHTS_AMSTERDAM_EDMONTON: FlightOption[] = [
  { date: 'Wed, Mar 11', departure: '10:20 AM', arrival: '9:20 PM', airline: 'KLM / WestJet', route: 'AMS → YEG', stops: '2 stops', duration: '18h 0m', priceCAD: 582 },
  { date: 'Wed, Mar 11', departure: '10:35 AM', arrival: '7:37 PM', airline: 'Air France / WestJet', route: 'AMS → YEG', stops: '2 stops', duration: '16h 2m', priceCAD: 981 },
  { date: 'Tue, Mar 10', departure: '2:00 PM', arrival: '9:00 PM', airline: 'KLM', route: 'AMS → YEG', stops: 'Direct', duration: '~9h', priceCAD: 860 },
];

export const BUDGET_BREAKDOWN: BudgetCategory[] = [
  { category: 'Flights (Lamezia → Amsterdam, per person)', estimated: 190, notes: 'ITA Airways, 1 stop via Rome, ~CA$175-195' },
  { category: 'Flights (Amsterdam → Edmonton, per person)', estimated: 580, notes: 'KLM/WestJet, mid-week departure for best price' },
  { category: 'Accommodation (15 nights, shared)', estimated: 1400, notes: 'Mix of Airbnbs, B&Bs, and budget hotels — CA$55-150/night' },
  { category: 'Food & Dining (15 days)', estimated: 900, notes: 'Mix of restaurants, street food, and market meals — ~CA$60/day' },
  { category: 'Rental Car (10 days, one-way Rome→Lamezia)', estimated: 450, notes: 'Compact car with insurance, one-way fee included' },
  { category: 'Fuel & Tolls', estimated: 200, notes: '~888 km driving, Italian highway tolls' },
  { category: 'Activities & Entrance Fees', estimated: 150, notes: 'Pompeii, select museums, experiences' },
  { category: 'Amsterdam Expenses (1-2 days)', estimated: 250, notes: 'Hotel, food, transport, one activity' },
  { category: 'Miscellaneous & Emergency', estimated: 300, notes: 'SIM card, parking, souvenirs, unexpected costs' },
];

export const RENTAL_CAR_INFO = {
  pickup: 'Rome (Termini Station or Via Sardegna)',
  dropoff: 'Lamezia Terme International Airport (SUF)',
  type: 'One-way rental',
  recommended: ['Locauto', 'Hertz', 'Sixt', 'Maggiore'],
  requirements: [
    'International Driving Permit (IDP) — required for non-EU licenses',
    'Credit card in main driver\'s name for security deposit',
    'Winter tires or snow chains — mandatory through mid-April',
    'Telepass transponder for highway tolls (ask at pickup)',
  ],
  warnings: [
    'ZTL Zones — Restricted traffic zones in Rome, Naples, Bari. Check with hotels to register your plate.',
    'Amalfi Coast parking — Very limited and expensive. Consider parking outside towns.',
    'One-way fee — Expect an additional charge for dropping off in a different city.',
  ],
};

export const PACKING_ESSENTIALS = [
  { item: 'International Driving Permit', category: 'Documents', critical: true },
  { item: 'Passport (valid 6+ months)', category: 'Documents', critical: true },
  { item: 'Travel insurance documents', category: 'Documents', critical: true },
  { item: 'Credit card (Visa/Mastercard preferred)', category: 'Documents', critical: true },
  { item: 'Layers for variable weather', category: 'Clothing', critical: false },
  { item: 'Comfortable walking shoes', category: 'Clothing', critical: true },
  { item: 'Rain jacket (March can be rainy)', category: 'Clothing', critical: false },
  { item: 'Universal power adapter (Type C/L for Italy)', category: 'Tech', critical: true },
  { item: 'Portable phone charger', category: 'Tech', critical: false },
  { item: 'Offline maps downloaded', category: 'Tech', critical: true },
  { item: 'Basic Italian phrasebook (backup for John Frank!)', category: 'Misc', critical: false },
  { item: 'Reusable water bottle', category: 'Misc', critical: false },
  { item: 'Small daypack for walking days', category: 'Misc', critical: false },
];

export const EMERGENCY_INFO = {
  emergency: '112 (European emergency number)',
  police: '113 (Polizia di Stato)',
  ambulance: '118',
  canadianEmbassy: {
    rome: 'Via Zara 30, 00198 Rome — +39 06 854441',
    emergency: '+39 06 854441 (24/7 consular emergency)',
  },
  travelInsurance: 'Carry your policy number and 24-hour assistance phone number at all times',
};
