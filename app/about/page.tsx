import ProfessionalProfile from '@/components/professional-profile';
import React from 'react';

export default function page() {
  return (
    <div className="container mx-auto py-8 px-6 md:px-12">
      <section className=" ">
        <div className="px-3">
          <div className="grid gap-10">
            <div className="aspect-video overflow-hidden rounded-lg">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/t3319BG6GdQ"
                title="Prof  Vinay Sharma"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              {/* <iframe
              className="h-full w-full"
              src="https://www.youtube.com/watch?v=t3319BG6GdQ"
              title="Introductory Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
            </div>
            <div className="grid gap-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Prof. Anuj Sharma
              </h2>
              <div className="prose prose-gray dark:prose-invert max-w-none space-y-5">
                <p>
                 Professor Anuj Sharma, Ph.D., FRSC, is a distinguished professor in the Department of Chemistry at the Indian Institute of Technology Roorkee (IIT Roorkee). He has over 20 years of research and teaching experience and expert in organic synthesis, green chemistry, mechanochemistry, and visible light photocatalysis.
                 Following his Ph.D. at CSIR–Institute of Himalayan Bioresource Technology (IHBT), Palampur, Dr. Sharma pursued coveted postdoctoral fellowships at Katholieke Universiteit Leuven, Belgium, and the University of Arizona, USA. His formative research improved the design of therapeutic molecules like anti-cancer and anti-malarial drugs immensely. He joined IIT Roorkee in 2011 and is now Professor of Chemistry.
                </p>
                <p>
                  Professor Sharma's research team sets new trends in sustainable synthetic routes, including multicomponent reactions, radical processes for bond construction, and environmentally friendly methods for the synthesis of heterocycles and bioactive compounds. His laboratory, supported by leading agencies such as DST, CSIR, SERB, DRDO, and UCOST, resulted in 150+ high-impact papers, 11 patents, and transfer of technology to industry.
He is presently Associate Editor of the journal Molecular Diversity and a member of several editorial and scientific committees.

                </p>
                <p>
                 He is also a fellow of various national and international societies, such as the Royal Society of Chemistry, American Chemical Society, Indian Chemical Society, Indian National Science Association, Indian Council of Chemists, and Chemical Research Society of India.
Professor Sharma has given large number of invited/keynote lectures at research institutions, Indian universities, and overseas international conferences in India and elsewhere where he has communicated his research on radical chemistry, photocatalysis, and drug discovery. He has organized national conferences on modern organic synthesis (CFOS-2017, CFOS-2022) at IIT Roorkee.
 
                </p>
                <p>
                 At IIT Roorkee, he is an accomplished mentor, having guided several Ph.D., M.Tech., and M.Sc. dissertations. His teaching curriculum includes advanced organic chemistry, heterocyclic chemistry, and pharmaceutical synthesis, topics that are always top rated by students. He has also made significant contributions to IIT-PAL and MHRD e-learning modules, allowing quality Chemistry education to reach a broader population.
                </p>
                  
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="   mt-30">
        {/* Employment Details Section */}

        <ProfessionalProfile />
      </div>
    </div>
  );
}
