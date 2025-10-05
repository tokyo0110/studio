export type Amenity = 'Air Conditioning' | 'Bluetooth' | 'GPS' | 'Sunroof';

export const carTypes = ['Sedan', 'SUV', 'Truck', 'Hatchback'] as const;
export type CarType = typeof carTypes[number];

export const carAmenities: Amenity[] = ['Air Conditioning', 'Bluetooth', 'GPS', 'Sunroof'];

export const carAvailability = ['Available', 'Unavailable'] as const;
export type CarAvailability = typeof carAvailability[number];

export type Car = {
  id: string;
  name: string;
  type: CarType;
  price: number;
  licensePlate: string;
  availability: CarAvailability;
  amenities: Amenity[];
  imageUrl: string;
  imageHint: string;
};
