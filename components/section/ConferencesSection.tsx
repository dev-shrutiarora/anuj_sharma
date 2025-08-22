import { Calendar } from 'lucide-react';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export default function ConferencesSection() {
  return (
    <section id="conferences" className="py-12 scroll-mt-20">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Conferences</h2>
        </div>
        <p className="text-muted-foreground">
          Keynote presentations and panel participations.
        </p>
      </div>
      <div className="mt-8 space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Keynote Presentations</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle>AMA Annual Conference</CardTitle>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xs font-medium">2023</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  &ldquo;The Future of Marketing in Rural Economies: Challenges and
                  Opportunities&rdquo;
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle>HDCA Conference</CardTitle>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xs font-medium">2022</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  &ldquo;Capability Approach in Marketing: Empowering Rural
                  Communities&rdquo;
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle>AIMS International Conference</CardTitle>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xs font-medium">2021</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  &ldquo;Sustainable Innovation in Emerging Markets: A Framework for
                  Success&rdquo;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Panel Participation</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>2023</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  <li className="text-sm">
                    <span className="font-medium">World Marketing Summit:</span>{' '}
                    &ldquo;Digital Transformation in Rural Markets&rdquo;
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Sustainability Forum:</span>{' '}
                    &ldquo;Green Marketing Strategies for the Future&rdquo;
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">IIM Conclave:</span>{' '}
                    &ldquo;Academia-Industry Collaboration in Marketing Research&rdquo;
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>2022</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  <li className="text-sm">
                    <span className="font-medium">
                      Global Marketing Conference:
                    </span>{' '}
                    &ldquo;Post-Pandemic Marketing Strategies&rdquo;
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">
                      Rural Development Summit:
                    </span>{' '}
                    &ldquo;Marketing for Social Impact&rdquo;
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>2021</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  <li className="text-sm">
                    <span className="font-medium">Innovation Forum:</span>{' '}
                    &ldquo;Frugal Innovation in Emerging Markets&rdquo;
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">
                      Digital Marketing Summit:
                    </span>{' '}
                    &ldquo;Reaching Rural Consumers Digitally&rdquo;
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">
                      Sustainability Conference:
                    </span>{' '}
                    &ldquo;Green Marketing in Practice&rdquo;
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
