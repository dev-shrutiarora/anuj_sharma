'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Newspaper } from 'lucide-react';
import { useRef, useEffect } from 'react';

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const newsUpdates = [
    {
      id: 1,
      title: 'New Product Launch Success',
      content:
        "We're excited to announce that our latest product has exceeded all expectations with over 10,000 pre-orders in the first week!",
      lastUpdate: '2024-01-15',
    },
    {
      id: 2,
      title: 'Team Expansion Update',
      content:
        "Happy to share that we're growing our engineering team by 50% this quarter. Looking forward to building amazing things together!",
      lastUpdate: '2024-01-10',
    },
    {
      id: 3,
      title: 'Partnership Announcement',
      content:
        'Thrilled to announce our strategic partnership with TechCorp. This collaboration will bring innovative solutions to our customers.',
      lastUpdate: '2024-01-05',
    },
    {
      id: 4,
      title: 'Research Breakthrough',
      content:
        'Our research team has made significant progress in sustainable energy solutions. New findings will be published next month.',
      lastUpdate: '2024-01-01',
    },
    {
      id: 5,
      title: 'Conference Presentation',
      content:
        'Prof. Sharma will present our latest research findings at the International Chemistry Conference in Berlin next month.',
      lastUpdate: '2023-12-28',
    },
    {
      id: 6,
      title: 'Publication Milestone',
      content:
        'Our team has reached a milestone of 100+ publications in peer-reviewed journals. Thank you to all contributors!',
      lastUpdate: '2023-12-20',
    },
    {
      id: 7,
      title: 'Student Achievement',
      content:
        'Congratulations to our PhD students who successfully defended their theses this semester. Great work!',
      lastUpdate: '2023-12-15',
    },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;

        // If we've reached the end, scroll back to the beginning
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Otherwise, scroll right by one card width
          container.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" bg-background">
      {/* Hero Section */}

      {/* News Section */}
      <section className="py-16 px-4"> 
        <div className=" ">
          <div className="flex items-center justify-between mb-12">
            <div>
              <Newspaper />
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Latest Updates
              </h2>
              <p className="text-muted-foreground">
                Stay informed with the most recent news and announcements
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={scrollLeft}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={scrollRight}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {newsUpdates.map((update) => (
              <Card
                key={update.id}
                className="min-w-[320px] max-w-[320px] flex-shrink-0 hover:shadow-lg transition-shadow duration-300 snap-start"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-end mb-3">
                    <p className="text-xs text-muted-foreground">
                      {new Date(update.lastUpdate).toLocaleDateString()}
                    </p>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {update.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm leading-relaxed">
                    {update.content}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
        </div>
      </section>
    </div>
  );
}
