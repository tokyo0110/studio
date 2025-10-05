'use client';

import CarCard from '@/components/dashboard/car-card';
import OverviewChart from '@/components/dashboard/overview-chart';
import { useCar } from '@/contexts/car-context';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';

export default function OverviewPage() {
  const { cars } = useCar();

  const availableCars = cars.filter(car => car.availability === 'Available').length;
  const unavailableCars = cars.length - availableCars;

  return (
    <div className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Cars</CardTitle>
            <CardDescription>Total fleet size</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{cars.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Available</CardTitle>
            <CardDescription>Cars ready for booking</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">{availableCars}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Unavailable</CardTitle>
            <CardDescription>Cars currently in use or maintenance</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-red-600">{unavailableCars}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Car Types</CardTitle>
            <CardDescription>Diversity of your car fleet</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{new Set(cars.map(c => c.type)).size}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cars by Type</CardTitle>
          <CardDescription>A summary of car counts based on their type.</CardDescription>
        </CardHeader>
        <CardContent>
          <OverviewChart cars={cars} />
        </CardContent>
      </Card>
      
      <div>
        <h2 className="mb-4 text-2xl font-bold">Car Fleet</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}
