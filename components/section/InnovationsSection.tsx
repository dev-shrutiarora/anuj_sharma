import { Lightbulb } from 'lucide-react';
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';

export default function InnovationsSection() {
  return (
    <section id="innovations" className="py-12 scroll-mt-20">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">
            Innovations & Patents
          </h2>
        </div>
        <p className="text-muted-foreground">
          Technological innovations and intellectual property.
        </p>
      </div>
      <div className="mt-8 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Briquetting Machine</CardTitle>
            <CardDescription>12-year development journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative mb-6">
              <div className="space-y-8 relative">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm shrink-0">
                    1
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium">Initial Concept</h4>
                    <p className="text-sm text-muted-foreground">
                      Development of the initial concept for sustainable biomass
                      processing.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm shrink-0">
                    2
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium">Prototype Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Creation and testing of multiple prototypes to optimize
                      efficiency.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm shrink-0">
                    3
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium">Field Testing</h4>
                    <p className="text-sm text-muted-foreground">
                      Extensive field testing in rural communities to validate
                      performance.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm shrink-0">
                    4
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium">Commercial Production</h4>
                    <p className="text-sm text-muted-foreground">
                      Scaling to commercial production with implementation
                      across multiple regions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Watch Demo Video
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Gharats Revival</CardTitle>
            <CardDescription>
              Traditional water mills modernization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Project to revitalize traditional water mills (gharats) by
              incorporating modern engineering principles while preserving
              cultural heritage. This innovation has increased efficiency by
              300% while maintaining traditional designs.
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-muted p-4 text-center">
                <div className="text-2xl font-bold">120+</div>
                <p className="text-xs text-muted-foreground">
                  Mills Revitalized
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4 text-center">
                <div className="text-2xl font-bold">300%</div>
                <p className="text-xs text-muted-foreground">
                  Efficiency Increase
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4 text-center">
                <div className="text-2xl font-bold">500+</div>
                <p className="text-xs text-muted-foreground">
                  Families Impacted
                </p>
              </div>
              <div className="rounded-lg bg-muted p-4 text-center">
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  Districts Covered
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div id="patents">
          <h3 className="text-xl font-semibold mb-4">Patents</h3>
          <Card>
            <CardHeader>
              <CardTitle>Sustainable Biomass Processing Method</CardTitle>
              <CardDescription>Patent No. IN123456789</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Novel method for processing agricultural waste into
                high-efficiency fuel briquettes using minimal energy input. This
                patent has been implemented in over 50 rural communities.
              </p>
              <Button variant="outline">View Patent Details</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
