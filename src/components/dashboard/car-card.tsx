import Image from 'next/image';
import type { Car, Amenity } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  AirVent,
  Bluetooth,
  Navigation,
  Sun,
  CircleCheck,
  CircleX,
  Car as CarIcon,
  Truck,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type CarCardProps = {
  car: Car;
};

const amenityIcons: Record<Amenity, React.ReactNode> = {
  'Air Conditioning': <AirVent className="h-4 w-4" />,
  'Bluetooth': <Bluetooth className="h-4 w-4" />,
  'GPS': <Navigation className="h-4 w-4" />,
  'Sunroof': <Sun className="h-4 w-4" />,
};

const typeIcons: Record<Car['type'], React.ReactNode> = {
  'Sedan': <CarIcon className="h-4 w-4" />,
  'SUV': <CarIcon className="h-4 w-4" />,
  'Hatchback': <CarIcon className="h-4 w-4" />,
  'Truck': <Truck className="h-4 w-4" />,
};

export default function CarCard({ car }: CarCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={car.imageUrl}
            alt={car.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={car.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <div className="flex items-start justify-between">
            <CardTitle className="text-xl">{car.name}</CardTitle>
            <Badge variant={car.type === "SUV" || car.type === "Truck" ? "secondary" : "default"}>
                {typeIcons[car.type]}
                <span className="ml-1">{car.type}</span>
            </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{car.licensePlate}</p>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-2xl font-bold text-primary">${car.price}<span className="text-sm font-normal text-muted-foreground">/day</span></p>
          <Badge variant={car.availability === 'Available' ? 'outline' : 'destructive'} className={cn(
              "flex items-center gap-1",
              car.availability === 'Available' && "border-green-600 text-green-600"
          )}>
            {car.availability === 'Available' ? <CircleCheck size={14} /> : <CircleX size={14} />}
            {car.availability}
          </Badge>
        </div>
        
        <div className="mt-4">
            <h4 className="text-sm font-medium text-muted-foreground">Amenities</h4>
            <div className="mt-2 flex flex-wrap gap-2">
            {car.amenities.map(amenity => (
                <div key={amenity} className="flex items-center gap-1 rounded-full bg-muted px-2 py-1 text-xs">
                {amenityIcons[amenity]}
                <span>{amenity}</span>
                </div>
            ))}
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
