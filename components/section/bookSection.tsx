import React from 'react';
import Image from 'next/image';
import { ArrowRightIcon, BookOpenText } from 'lucide-react';
import { Button } from '../ui/button';

const BookSection = () => {
  return (
    <div>
      <div>
        <BookCard />
      </div>
    </div>
  );
};

export default BookSection;

export const BookCard = () => {
  return (
    <div>
      <section className="w-full ">
        <div className="container grid gap-1 drop-shadow-2xl ">
          {/* <div className="mb-12 space-y-3 text-center sm:mb-20">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Explore Our Book Collection
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover a world of knowledge and inspiration in our carefully
              curated selection of books.
            </p>
          </div> */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpenText className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Books</h2>
            </div>
            <p className="text-muted-foreground">
              
            </p>
          </div>

          <div className=" mt-8  grid grid-cols-1 gap-6 sm:grid-cols-2  lg:grid-cols-3   xl:grid-cols-4">
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Image
                src="/book/book6.jpg"
                alt="Sapiens"
                width={400}
                height={600}
                className="h-[400px] w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                style={{ aspectRatio: '400/600', objectFit: 'cover' }}
              />
              <div className="bg-background p-4">
                <h3 className="mb-2 text-xl font-medium">
                  Multi-Target Drug Design Using Chem-Bioinformatic Approaches. Methods in Pharmacology and Toxicology
Year: 2018 ,
                  M. Sharma, A. Sharma* | Humana Press, New York, NY© 2018

                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Contribution: Design of Novel Dual-Target Hits Against Malaria and Tuberculosis Using Computational Docking , Pages: 419-442 ,

                </p>
                <Button size="sm" variant="link">

                  <a
                    href="https://link.springer.com/book/10.1007/978-1-4939-8733-7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    Read more <ArrowRightIcon size={20} />
                  </a>
                  
                </Button>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Image
                src="/book/book7.jpg"
                alt="Atomic Habits"
                width={400}
                height={600}
                className="h-[400px] w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                style={{ aspectRatio: '400/600', objectFit: 'cover' }}
              />
              <div className="bg-background p-4">
                <h3 className="mb-2 text-xl font-medium">
                Studies in Natural Product Chemistry
              Year: 2020, A. Monga, A. Sharma | Elsevier

</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Contribution: Natural Products Encompassing Anti Tuberculosis Activities , Pages: 263-301 ,

                </p>

                <Button asChild size="sm" variant="link">
                  <a
                    href="https://www.sciencedirect.com/bookseries/studies-in-natural-products-chemistry"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more <ArrowRightIcon size={20} />
                  </a>
                </Button>
              </div>
            </div>
           
            
          </div>
        </div>
      </section>
    </div>
  );
};
