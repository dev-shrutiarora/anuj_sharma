import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

export default function BriquettingMachine() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Hydraulic Briquetting Machine</CardTitle>
        <CardDescription>
          Converting pine needles into energy briquettes without electricity or
          heating
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="Hydraulic Briquetting Machine"
            width={400}
            height={300}
            className="rounded-lg object-cover w-full"
          />
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="font-semibold mb-1">Key Features</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>No electricity required</li>
              <li>No heating required</li>
              <li>Hydraulic compression technology</li>
              <li>Portable design for remote areas</li>
              <li>Simple operation for community use</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Environmental Impact</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Reduces forest fire risk</li>
              <li>Creates renewable energy source</li>
              <li>Covers 500,000+ hectares in Uttarakhand</li>
              <li>Carbon credit potential</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Social Impact</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Creates micro-entrepreneurship opportunities</li>
              <li>Empowers women in Himalayan communities</li>
              <li>Provides sustainable income source</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
