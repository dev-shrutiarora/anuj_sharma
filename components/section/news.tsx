'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Newspaper } from 'lucide-react';
import { useRef, useEffect } from 'react';

export default function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const newsUpdates = [
    {
      id: 1,
      title: 'Congratulations Jaya for the grant of an Indian Patent',
      content:
        'This patent filed for a mild, sustainable, light assisted method for Fischer like estrification.',
      lastUpdate: '2025-08-28',
    },
    {
      id: 2,
      title: 'Vacancies !!!!!',
      content:
        'Please contact Prof Anuj sharma for this. Applications from highly motivated students to join the group for Ph.D. (JRF qualified candidates can directly approach) and Post Doc in the topics of our research interests are welcome.',
      lastUpdate: '2025-08-23',
    },

    {
      id: 3,
      title: 'Congratulations Barakha for successfully defending your PhD Work',
      content:
        "Barakha successfully defended PhD work on topic 'Harnessing Light and Mechanochemistry for Green and Sustainable Sulfonylation Reactions' ",
      lastUpdate: '2025-10-06',
    },

     {
      id: 4,
      title: 'Congratulations Jaya!!!! A recent one from our laborartory in ACS cataysis',
      content:
        "Photoinduced iron-catalysed Aryl ester synthesis via C(sp2)-O cross-coupling of carboxylic acids with anisoles ",
      lastUpdate: '2025-10-04',
    },

    {
      id: 5,
      title: 'Latest from our laboratory in ChemComm',
      content:
        "Photocatalyst-Free Decarboxylative Cross-Coupling of alpha-Keto Acids With Aryl Sulfinates for synthesis of S-Aryl Thioesters, H. Gupta, J. Tripathi, and A. Sharma*, Chem. Commun., 2025.",
      lastUpdate: '2025-10-15',
    },
 {
      id: 6,
      title: 'Congratulations Dr. Barakha!!!! Got Post Doc in the Jirgensons group at the Latvian Institute of Organic Synthesis, Riga, Latvia',
      content:
        "Development of greener synthetic pathways and catalytic strategies contributing to environmentally reasponsible pharmaceutical manufacturing in Europe ",
      lastUpdate: '2025-10-15',
    },

    {
      id: 7,
      title: 'And Here comes another one for our lab. Congratulations Ajay!!!',
      content:
        'Published in J. Org. Chem., "Deoxygenetive Route to Alkynylation of Heterocyclic N-Oxides under Ball Milling"',
      lastUpdate: '2025-07-25',
    },

    {
      id: 8,
      title:
        'Our perspective on the use of the thianthrenium salts under light mediated protocols...',
      content:
        'Published in J. Org. Chem.,"Photoactivation of Thianthrenium salts: An Electron-Donor-Acceptor(EDA)- Complex Approach."',
      lastUpdate: '2025-05-14',
    },
    {
      id: 9,
      title:
        'Prof Anuj appointed as an associate editer of Molecular Diversity',
      content:
        'Prof Anuj Sharma appointed as an associate editer of Molecular Diversity (Spring Nature) from January 2025.',
      lastUpdate: '2025-28-01',
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
              <div className="flex items-center gap-2">
                <Newspaper className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold tracking-tight">
                  Latest Updates
                </h2>
              </div>

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
