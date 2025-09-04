import { GallerySection } from '@/components/section/gallery-section';

export default function ProfessorGalleryPage() {
  // Replace these with your real image paths in /public or remote URLs
  const images = [
    {
      src: '/gallery/p1.jpg',
      alt: 'Lab research activity',
      caption: 'Experimental setup in the materials lab.',
    },
    {
      src: '/gallery/p2.jpg',
      alt: 'Conference presentation',
      caption: 'Keynote presentation at the annual conference.',
    },
     
    {
      src: '/gallery/p3.jpg',
      alt: 'Field work',
      caption: 'Collecting samples during field research.',
    },

    {
      src: '/gallery/p4.jpg',
      alt: 'Field work',
      caption: 'Collecting samples during field research.',
    },
    {
      src: '/gallery/p5.jpg',
      alt: 'Field work',
      caption: 'Collecting samples during field research.',
    },
    {
      src: '/gallery/p6.jpg',
      alt: 'Field work',
      caption: 'Collecting samples during field research.',
    },

    {
      src: '/gallery/p7.jpg',
      alt: 'Field work',
      caption: 'Collecting samples during field research.',
    },

    {
      src: '/gallery/p8.jpg',
      alt: 'Field work',
      caption: 'Collecting samples during field research.',
    },

    {
      src: '/gallery/p9.jpg',
      alt: 'Field work',
      caption: 'Collecting samples during field research.',
    },    

    {
      src: '/gallery/p10.jpg',
      alt: 'Field work',
      caption: 'Collecting samples during field research.',
    },

    {
      src: '/gallery/p11.jpg',
      alt: 'Field work',
      caption: 'Collecting samples during field research.',
    },
    



    
  ];

  return (
    <main className="min-h-screen">
      <GallerySection
        title="Highlights"
        description="A curated selection of images from projects, labs, conferences, and more."
        images={images}
        className="pb-12"
      />
    </main>
  );
}
