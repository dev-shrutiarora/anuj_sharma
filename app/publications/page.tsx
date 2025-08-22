import { FileText } from 'lucide-react';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Link from 'next/link';

export default function page() {
  return (
    <div>
      <section
        id="research"
        className="  scroll-mt-20 container mx-auto py-8 px-6 md:px-12"
      >
        <div className="space-y-4">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">
                Research & Publications
              </h2>
            </div>
          </div>

          {/* <hr /> */}
          <p className="text-muted-foreground">
            Contributions to academic literature and research.
          </p>
        </div>
        <div className="mt-8 space-y-8">
          {/* <div>
                <h3 className="text-xl font-semibold mb-4">Major Contributions</h3>
                <ul className="grid gap-3 md:grid-cols-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>Coined terminology in IMM literature</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>Chapter in Kotler&apos;s Principles of Marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>Developed framework for rural market penetration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>
                      Pioneer in sustainability metrics for emerging markets
                    </span>
                  </li>
                </ul>
              </div> */}
          <div id="publications">
            <h3 className="text-xl font-semibold mb-4">Select Publications</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  &quot;Rural Market Segmentation in Emerging Economies (Journal
                  of Marketing Research, 2023)&quot;
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    This paper presents a novel framework for segmenting rural
                    markets in emerging economies, with a focus on behavioral
                    and psychographic variables.
                  </p>
                  <Link
                    href="#"
                    className="text-sm text-primary hover:underline"
                  >
                    DOI: 10.1234/jmr.2023.123456
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  &quot;Sustainable Innovation in Bottom of Pyramid Markets
                  (Journal of Business Ethics, 2022)&quot;
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    This research examines how sustainable innovation practices
                    can be effectively implemented in bottom of pyramid markets
                    to create shared value.
                  </p>
                  <Link
                    href="#"
                    className="text-sm text-primary hover:underline"
                  >
                    DOI: 10.1234/jbe.2022.789012
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  &quot;Digital Transformation in Traditional Retail (Harvard
                  Business Review, 2021)&quot;
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    A comprehensive analysis of how traditional retail
                    businesses are navigating digital transformation in the
                    post-pandemic era.
                  </p>
                  <Link
                    href="#"
                    className="text-sm text-primary hover:underline"
                  >
                    DOI: 10.1234/hbr.2021.345678
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  &quot;Consumer Behavior in Rural India: A Longitudinal Study
                  (Journal of Consumer Research, 2020)&quot;
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    This 10-year longitudinal study tracks changing consumer
                    behavior patterns in rural India, identifying key trends and
                    implications for marketers.
                  </p>
                  <Link
                    href="#"
                    className="text-sm text-primary hover:underline"
                  >
                    DOI: 10.1234/jcr.2020.901234
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  &quot;Sustainability Metrics for SMEs (Journal of Small
                  Business Management, 2019)&quot;
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    This paper proposes a practical framework for small and
                    medium enterprises to measure and report on sustainability
                    initiatives.
                  </p>
                  <Link
                    href="#"
                    className="text-sm text-primary hover:underline"
                  >
                    DOI: 10.1234/jsbm.2019.567890
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  &quot;Sustainability Metrics for SMEs (Journal of Small
                  Business Management, 2019)&quot;
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    This paper proposes a practical framework for small and
                    medium enterprises to measure and report on sustainability
                    initiatives.
                  </p>
                  <Link
                    href="#"
                    className="text-sm text-primary hover:underline"
                  >
                    DOI: 10.1234/jsbm.2019.567890
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>
                  &quot;Sustainability Metrics for SMEs (Journal of Small
                  Business Management, 2019)&quot;
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    This paper proposes a practical framework for small and
                    medium enterprises to measure and report on sustainability
                    initiatives.
                  </p>
                  <Link
                    href="#"
                    className="text-sm text-primary hover:underline"
                  >
                    DOI: 10.1234/jsbm.2019.567890
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-8">
                <AccordionTrigger>
                  &quot;Sustainability Metrics for SMEs (Journal of Small
                  Business Management, 2019)&quot;
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    This paper proposes a practical framework for small and
                    medium enterprises to measure and report on sustainability
                    initiatives.
                  </p>
                  <Link
                    href="#"
                    className="text-sm text-primary hover:underline"
                  >
                    DOI: 10.1234/jsbm.2019.567890
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger>
                  &quot;Sustainability Metrics for SMEs (Journal of Small
                  Business Management, 2019)&quot;
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    This paper proposes a practical framework for small and
                    medium enterprises to measure and report on sustainability
                    initiatives.
                  </p>
                  <Link
                    href="#"
                    className="text-sm text-primary hover:underline"
                  >
                    DOI: 10.1234/jsbm.2019.567890
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger>
                  &quot;Sustainability Metrics for SMEs (Journal of Small
                  Business Management, 2019)&quot;
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    This paper proposes a practical framework for small and
                    medium enterprises to measure and report on sustainability
                    initiatives.
                  </p>
                  <Link
                    href="#"
                    className="text-sm text-primary hover:underline"
                  >
                    DOI: 10.1234/jsbm.2019.567890
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-11">
                <AccordionTrigger>
                  &quot;Sustainability Metrics for SMEs (Journal of Small
                  Business Management, 2019)&quot;
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    This paper proposes a practical framework for small and
                    medium enterprises to measure and report on sustainability
                    initiatives.
                  </p>
                  <Link
                    href="#"
                    className="text-sm text-primary hover:underline"
                  >
                    DOI: 10.1234/jsbm.2019.567890
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-12">
                <AccordionTrigger>
                  &quot;Sustainability Metrics for SMEs (Journal of Small
                  Business Management, 2019)&quot;
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    This paper proposes a practical framework for small and
                    medium enterprises to measure and report on sustainability
                    initiatives.
                  </p>
                  <Link
                    href="#"
                    className="text-sm text-primary hover:underline"
                  >
                    DOI: 10.1234/jsbm.2019.567890
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          {/* <div>
                <h3 className="text-xl font-semibold mb-4">Case Studies</h3>
                <Card>
                  <CardHeader>
                    <CardTitle>Patanjali: Disrupting FMCG in India</CardTitle>
                    <CardDescription>
                      Published with Emerald Publishing
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      This comprehensive case study examines how Patanjali disrupted
                      the FMCG market in India through its unique positioning,
                      distribution strategy, and product innovation.
                    </p>
                    <div className="flex items-center gap-4">
                      <Image
                        src="/placeholder.svg?height=40&width=120"
                        alt="Emerald Publishing Logo"
                        width={120}
                        height={40}
                        className="object-contain"
                      />
                      <Image
                        src="/placeholder.svg?height=40&width=120"
                        alt="Case Centre Logo"
                        width={120}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div> */}
        </div>
      </section>
    </div>
  );
}
