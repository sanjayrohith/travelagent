export type Package = {
  id: string;
  imageId: string;
  title: string;
  description:string;
  duration: string;
  price: number;
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
    imageId: 'package-paris',
    title: 'Romantic Paris Escape',
    description: 'Experience the magic of Paris with a romantic getaway.',
    duration: '7 Days',
    price: 1800,
  },
  {
    id: 'pkg2',
    imageId: 'package-tokyo',
    title: 'Tokyo Adventure',
    description: 'Explore the vibrant culture and futuristic cityscapes of Tokyo.',
    duration: '10 Days',
    price: 2500,
  },
  {
    id: 'pkg3',
    imageId: 'package-santorini',
    title: 'Santorini Dream',
    description: 'Relax and unwind on the beautiful island of Santorini.',
    duration: '5 Days',
    price: 1500,
  },
  {
    id: 'pkg4',
    imageId: 'package-safari',
    title: 'African Safari',
    description: 'Witness the majestic wildlife of the Serengeti.',
    duration: '12 Days',
    price: 4000,
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
