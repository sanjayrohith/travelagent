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
