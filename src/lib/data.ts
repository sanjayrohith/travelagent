export type PackageDay = {
  day: number;
  title: string;
  activities: string;
};

export type Package = {
  id: string;
  imageId: string;
  title: string;
  duration: string;
  price: number;
  itinerary: PackageDay[];
};

export type Accommodation = {
  id: string;
  imageId: string;
  name: string;
  priceRange: string;
  amenities: string[];
};

export type Vehicle = {
  id: string;
  imageId: string;
  name: string;
  capacity: string;
  description: string;
};

export const packages: Package[] = [
  {
    id: 'pkg1',
    imageId: 'package-manali',
    title: 'Manali Package',
    duration: '3 Days',
    price: 500,
    itinerary: [
      { day: 1, title: "Arrival in Manali", activities: 'Mall Road, Old Manali, Hadimba Temple.' },
      { day: 2, title: "Adventure Day", activities: 'Rohtang Pass, Atal Tunnel, Koksar.' },
      { day: 3, title: "Scenic Views", activities: 'Solang Valley.' },
    ],
  },
  {
    id: 'pkg2',
    imageId: 'package-shimla',
    title: 'Shimla Package',
    duration: '3 Days',
    price: 450,
    itinerary: [
        { day: 1, title: "Shimla Sightseeing", activities: 'Shimla Mall Road, Naldhera, President House.' },
        { day: 2, title: "Fun and Parks", activities: "Kufri Fun Park, Children's Activity." },
        { day: 3, title: "Day Trip to Chail", activities: 'Explore the serene town of Chail.' },
    ],
  },
];

export const accommodations: Accommodation[] = [
  {
    id: 'acc1',
    imageId: 'accom-maldives',
    name: 'Maldives Overwater Bungalow',
    priceRange: '$800 - $1500 / night',
    amenities: ['Private Pool', 'Ocean View', 'Gourmet Dining', 'Spa Access'],
  },
  {
    id: 'acc2',
    imageId: 'accom-alps',
    name: 'Swiss Alps Chalet',
    priceRange: '$500 - $900 / night',
    amenities: ['Ski-in/Ski-out', 'Fireplace', 'Sauna', 'Mountain View'],
  },
  {
    id: 'acc3',
    imageId: 'accom-kyoto',
    name: 'Kyoto Ryokan',
    priceRange: '$400 - $700 / night',
    amenities: ['Onsen (Hot Spring)', 'Traditional Tatami Rooms', 'Kaiseki Dinner'],
  },
  {
    id: 'acc4',
    imageId: 'accom-bali',
    name: 'Bali Jungle Villa',
    priceRange: '$300 - $600 / night',
    amenities: ['Infinity Pool', 'Yoga Deck', 'Lush Gardens', 'Open-air Living'],
  },
];

export const vehicles: Vehicle[] = [
    {
      id: 'veh1',
      imageId: 'vehicle-sedan',
      name: 'Sedan',
      capacity: '5 Seater',
      description: 'Comfortable and stylish sedan, perfect for small families or couples.',
    },
    {
      id: 'veh2',
      imageId: 'vehicle-innova',
      name: 'Innova',
      capacity: '7 Seater',
      description: 'A spacious and reliable choice for larger families or groups.',
    },
    {
      id: 'veh3',
      imageId: 'vehicle-ertiga',
      name: 'Ertiga',
      capacity: '8 Seater',
      description: 'A versatile and spacious MPV for comfortable group travel.',
    },
    {
      id: 'veh4',
      imageId: 'vehicle-tempo-12',
      name: 'Tempo Traveller',
      capacity: '12 Seater',
      description: 'Ideal for medium-sized groups, offering ample space and comfort.',
    },
     {
      id: 'veh5',
      imageId: 'vehicle-tempo-17',
      name: 'Tempo Traveller',
      capacity: '17 Seater',
      description: 'The perfect solution for large group travel, ensuring everyone travels together.',
    },
  ];
