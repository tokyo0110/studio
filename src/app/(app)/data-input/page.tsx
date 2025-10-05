import { DataInputForm } from '@/components/dashboard/data-input-form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function DataInputPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Add New Car</CardTitle>
          <CardDescription>
            Fill in the details below to add a new car to the fleet.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataInputForm />
        </CardContent>
      </Card>
    </div>
  );
}
