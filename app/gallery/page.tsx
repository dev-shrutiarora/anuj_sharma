import { GallerySection } from '@/components/section/gallery-section';

export default function ProfessorGalleryPage() {
  // Replace these with your real image paths in /public or remote URLs
  const images = [

    {
      src: '/gallery1/p24.jpg',
      alt: 'Collaboration for innovation',
      caption: "Session on 'Unlocking Research and Funding Opportunities' GSFC University",
    },

    {
      src: '/gallery1/p23.jpg',
      alt: 'Collaboration for innovation',
      caption: "Session on 'Unlocking Research and Funding Opportunities' GSFC University",
    },
    {
      src: '/gallery1/p22.jpg',
      alt: 'Collaboration for innovation',
      caption: "Session on 'Unlocking Research and Funding Opportunities' GSFC University",
    },
    {
      src: '/gallery1/p19.jpg',
      alt: 'Lab research activity',
      caption: "Teacher's day and convocation day celebration",
    },
    {
      src: '/gallery1/p18.jpg',
      alt: 'Lab research activity',
      caption: "Teacher's day and convocation day celebration",
    },
    {
      src: '/gallery1/p17.jpg',
      alt: 'Conference presentation',
      caption: "Teacher's day and convocation day celebration",
    },
     
    {
      src: '/gallery1/p16.jpg',
      alt: 'Field work',
      caption: 'BGroup photo (11 December 2024)',
    },

    {
      src: '/gallery1/p15.jpg',
      alt: 'Field work',
      caption: 'Roshan, Poster presentation at the CRSI-ACS Early Career Researchers Symposium 2024, Bhubaneswar, Odisha, India.',
    },
    {
      src: '/gallery1/p14.jpg',
      alt: 'Field work',
      caption: 'Barkha, a poster presentation at the 7th International Symposium on C-H Activation, 2024, IIT bombay, Mumbai, Maharashtra, India. ',
    },
    {
      src: '/gallery1/p13.jpg',
      alt: 'Field work',
      caption: 'Barkha, Poster presentation at the CRSI-ACS Early Career Researchers Symposium 2024, Bhubaneswar, Odisha, India.',
    },

    {
      src: '/gallery1/p12.jpg',
      alt: 'Field work',
      caption: 'Roshan, Poster presentation at the 7th International Symposium on C-H Activation, 2024, IIT bombay, Mumbai, Maharashtra, India.',

    },

    {
      src: '/gallery1/p11.jpg',
      alt: 'Field work',
      caption: 'Roshan gave a poster presentation at the 15th European Conference on Organic Free Radicals (ECOFRXV-2024), United Kingdom.',
    },

    {
      src: '/gallery1/p10.jpg',
      alt: 'Field work',
      caption: "Teachers's Day celebration with the group. (05 September 2024) ",
    },    

    {
      src: '/gallery1/p9.jpg',
      alt: 'Field work',
      caption: ' Congratulations to Barakha for the Best Poster award in IIT Roorkee Institute Research Day ​on 14/03/24.',
    },

    {
      src: '/gallery1/p8.jpg',
      alt: 'Field work',
      caption: ' Congratulations to Barakha for the Best Poster award in IIT Roorkee Institute Research Day ​on 14/03/24.',
    },
    
    {
      src: '/gallery1/p7.jpg',
      alt: 'Field work',
      caption: 'Group photo',
    },

     {
      src: '/gallery1/p6.jpg',
      alt: 'Field work',
      caption: 'Group photo',
    },

     {
      src: '/gallery1/p5.jpg',
      alt: 'Field work',
      caption: 'Group photo',
    },
     {
      src: '/gallery1/p4.jpg',
      alt: 'Field work',
      caption: 'Group photo',
    },

     {
      src: '/gallery1/p3.jpg',
      alt: 'Field work',
      caption: 'Group photo',
    },

     {
      src: '/gallery1/p2.jpg',
      alt: 'Field work',
      caption: 'Group photo',
    },

     {
      src: 'gallery1/p1.jpg',
      alt: 'Field work',
      caption: 'Group photo',
    },
{
      src: 'gallery1/p20.jpg',
      alt: 'Field work',
      caption: 'Group photo',
    },
    {
      src: 'gallery1/p21.jpg',
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
