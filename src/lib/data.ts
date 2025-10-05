import type { Car } from './types';

export const initialCars: Car[] = [
  {
    id: '1',
    name: 'Corolla',
    type: 'Sedan',
    price: 50,
    licensePlate: 'TSLA-S3XY',
    availability: 'Available',
    amenities: ['Air Conditioning', 'Bluetooth', 'GPS'],
    imageUrl: 'https://picsum.photos/seed/car1/600/400',
    imageHint: 'silver sedan'
  },
  {
    id: '2',
    name: 'RAV4',
    type: 'SUV',
    price: 75,
    licensePlate: 'JEEP-WRLR',
    availability: 'Unavailable',
    amenities: ['Air Conditioning', 'Bluetooth', 'Sunroof'],
    imageUrl: 'https://picsum.photos/seed/car2/600/400',
    imageHint: 'red suv'
  },
  {
    id: '3',
    name: 'F-150',
    type: 'Truck',
    price: 100,
    licensePlate: 'FORD-F150',
    availability: 'Available',
    amenities: ['Air Conditioning', 'Bluetooth'],
    imageUrl: 'https://picsum.photos/seed/car3/600/400',
    imageHint: 'blue truck'
  },
  {
    id: '4',
    name: 'Civic',
    type: 'Hatchback',
    price: 45,
    licensePlate: 'HNDA-CVIC',
    availability: 'Available',
    amenities: ['Air Conditioning', 'Bluetooth', 'GPS', 'Sunroof'],
    imageUrl: 'https://picsum.photos/seed/car4/600/400',
    imageHint: 'white hatchback'
  },
  {
    id: '5',
    name: 'Model S',
    type: 'Sedan',
    price: 120,
    licensePlate: 'ELON-MUSK',
    availability: 'Unavailable',
    amenities: ['Air Conditioning', 'Bluetooth', 'GPS', 'Sunroof'],
    imageUrl: 'https://picsum.photos/seed/car5/600/400',
    imageHint: 'black sedan'
  },
];
