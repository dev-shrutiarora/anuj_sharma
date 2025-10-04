import { GallerySection } from '@/components/section/gallery-section';

export default function ProfessorGalleryPage() {
  // Replace these with your real image paths in /public or remote URLs
  const images = [

    {
      src: '/gallery/p19.jpg',
      alt: 'Lab research activity',
      caption: "Teacher's day and convocation day celebration",
    },
    {
      src: '/gallery/p18.jpg',
      alt: 'Lab research activity',
      caption: "Teacher's day and convocation day celebration",
    },
    {
      src: '/gallery/p17.jpg',
      alt: 'Conference presentation',
      caption: "Teacher's day and convocation day celebration",
    },
     
    {
      src: '/gallery/p16.jpg',
      alt: 'Field work',
      caption: 'BGroup photo (11 December 2024)',
    },

    {
      src: '/gallery/p15.jpg',
      alt: 'Field work',
      caption: 'Roshan, Poster presentation at the CRSI-ACS Early Career Researchers Symposium 2024, Bhubaneswar, Odisha, India.',
    },
    {
      src: '/gallery/p14.jpg',
      alt: 'Field work',
      caption: 'Barkha, a poster presentation at the 7th International Symposium on C-H Activation, 2024, IIT bombay, Mumbai, Maharashtra, India. ',
    },
    {
      src: '/gallery/p13.jpg',
      alt: 'Field work',
      caption: 'Barkha, Poster presentation at the CRSI-ACS Early Career Researchers Symposium 2024, Bhubaneswar, Odisha, India.',
    },

    {
      src: '/gallery/p12.jpg',
      alt: 'Field work',
      caption: 'Roshan, Poster presentation at the 7th International Symposium on C-H Activation, 2024, IIT bombay, Mumbai, Maharashtra, India.',

    },

    {
      src: '/gallery/p11.jpg',
      alt: 'Field work',
      caption: 'Roshan gave a poster presentation at the 15th European Conference on Organic Free Radicals (ECOFRXV-2024), United Kingdom.',
    },

    {
      src: '/gallery/p10.jpg',
      alt: 'Field work',
      caption: "Teachers's Day celebration with the group. (05 September 2024) ",
    },    

    {
      src: '/gallery/p9.jpg',
      alt: 'Field work',
      caption: ' Congratulations to Barakha for the Best Poster award in IIT Roorkee Institute Research Day ​on 14/03/24.',
    },

    {
      src: '/gallery/p8.jpg',
      alt: 'Field work',
      caption: ' Congratulations to Barakha for the Best Poster award in IIT Roorkee Institute Research Day ​on 14/03/24.',
    },
    
    {
      src: '/gallery/p7.jpg',
      alt: 'Field work',
      caption: 'Group photo',
    },

     {
      src: '/gallery/p6.jpg',
      alt: 'Field work',
      caption: 'Group photo',
    },

     {
      src: '/gallery/p5.jpg',
      alt: 'Field work',
      caption: 'Group photo',
    },
     {
      src: '/gallery/p4.jpg',
      alt: 'Field work',
      caption: 'Group photo',
    },

     {
      src: '/gallery/p3.jpg',
      alt: 'Field work',
      caption: 'Group photo',
    },

     {
      src: '/gallery/p2.jpg',
      alt: 'Field work',
      caption: 'Group photo',
    },

     {
      src: '/gallery/p1.jpg',
      alt: 'Field work',
      caption: 'Group photo',
    },
{
      src: '/gallery/p20.jpg',
      alt: 'Field work',
      caption: 'Group photo',
    },
    {
      src: '/gallery/p21.jpg',
      alt: 'Field work',
      caption: 'Group photo',
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
