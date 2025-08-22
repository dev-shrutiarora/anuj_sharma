import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Award } from 'lucide-react';
import Link from 'next/link';

export default function AwardsSetion() {
  return (
    <section id="awards" className="py-12 scroll-mt-20">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Award className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">Awards & Fellowships</h2>
        </div>
        <p className="text-muted-foreground">
          Recognition for excellence in research and academic contributions.
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
      
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="flex h-12 w-12 items-center shrink-0 justify-center rounded-full bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="">
                RSC, Fellow of Royal Society of Chemistry(FRSC)
              </CardTitle>
            </div>
          </CardHeader>
        </Card>
          <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="flex h-12 w-12 items-center shrink-0 justify-center rounded-full bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="">
                Young Scientist Award by DST
              </CardTitle>
            </div>
          </CardHeader>
        </Card>
         
        
       


        


      </div>
    </section>
  );
}
