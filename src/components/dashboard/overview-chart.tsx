'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltipContent } from '@/components/ui/chart';
import type { Car } from '@/lib/types';
import { carTypes } from '@/lib/types';

type OverviewChartProps = {
  cars: Car[];
};

const chartConfig = {
  count: {
    label: "Count",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function OverviewChart({ cars }: OverviewChartProps) {
  const data = carTypes.map((type) => ({
    type,
    count: cars.filter((car) => car.type === type).length,
  }));

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="type"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <YAxis allowDecimals={false} />
          <Tooltip
            cursor={false}
            content={<ChartTooltipContent />}
          />
          <Bar dataKey="count" fill="var(--color-count)" radius={4} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
