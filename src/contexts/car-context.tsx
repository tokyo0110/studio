'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { Car } from '@/lib/types';
import { initialCars } from '@/lib/data';

interface CarContextType {
  cars: Car[];
  addCar: (car: Car) => void;
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export function CarProvider({ children }: { children: ReactNode }) {
  const [cars, setCars] = useState<Car[]>(initialCars);

  const addCar = (car: Car) => {
    setCars((prevCars) => [...prevCars, car]);
  };

  return (
    <CarContext.Provider value={{ cars, addCar }}>
      {children}
    </CarContext.Provider>
  );
}

export function useCar() {
  const context = useContext(CarContext);
  if (context === undefined) {
    throw new Error('useCar must be used within a CarProvider');
  }
  return context;
}
