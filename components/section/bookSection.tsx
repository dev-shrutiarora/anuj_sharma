import React from 'react';
import Image from 'next/image';
import { BookOpenText } from 'lucide-react';
import { Button } from '../ui/button';

// Book data constant - all book information stored here
const BOOKS_DATA = [
  {
    id: 1,
    image: '/book/book6.jpg',
    alt: 'Multi-Target Drug Design Book',
    title:
      'Multi-Target Drug Design Using Chem-Bioinformatic Approaches. Methods in Pharmacology',
    description:
      'Contribution: Design of Novel Dual-Target Hits Against Malaria and Tuberculosis Using Computational Docking , Pages: 419-442',
    link: 'https://link.springer.com/book/10.1007/978-1-4939-8733-7',
  },
  {
    id: 2,
    image: '/book/book7.jpg',
    alt: 'Studies in Natural Product Chemistry Book',
    title:
      'Studies in Natural Product Chemistry Year: 2020, A. Monga, A. Sharma | Elsevier',
    description:
      'Contribution: Natural Products Encompassing Anti Tuberculosis Activities , Pages: 263-301',
    link: 'https://www.sciencedirect.com/bookseries/studies-in-natural-products-chemistry',
  },
];

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
      <section className="  mt-10">
        <div className="container grid gap-1 drop-shadow-xl ">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <BookOpenText className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">Books</h2>
            </div>
            <p className="text-muted-foreground"></p>
          </div>

          <div className=" mt-8  grid grid-cols-1 gap-6 sm:grid-cols-2  lg:grid-cols-3   xl:grid-cols-4">
            {BOOKS_DATA.map((book) => (
              <div
                key={book.id}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Image
                  src={book.image}
                  alt={book.alt}
                  width={400}
                  height={600}
                  className="h-[250px] w-full object-cover transition-opacity duration-300 group-hover:opacity-80"
                  style={{ aspectRatio: '400/600', objectFit: 'cover' }}
                />
                <div className="bg-background p-4">
                  <h3 className="mb-2 text-xl font-medium">{book.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {book.description}
                  </p>
                  <Button size="sm" variant="link">
                    <a
                      href={book.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
