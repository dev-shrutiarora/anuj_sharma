import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';


const researchSections = [
  {
    title: '1. Photoredox Chemistry',
    description:
      'We develop visible-light catalytic platforms that use radical, energy-transfer, and EDA (electron-donor-acceptor) systems for selective C–C/C–X bond construction and late-stage diversification. Our current focus includes photo acid catalysis for redox-neutral functional group interconversion, EDA-enabled aryl/alkyl radical generation from safe precursors like Katritzky salts and thianthrenium salts, and HAT cascades for site-selective C–H functionalization. Mechanistically, we utilize excited-state charge transfer, energy transfer to triplet acceptors, and radical-polar crossover to enable transformations under mild, sustainable conditions; this often requires no photocatalyst when substrate activation can occur through in situ EDA pairing.',
    items: [
      {
        text: 'Nihal Singh, A. Sharma, J. Singh, A. P. Pandey and Anuj Sharma*, "Visible light-induced electron-donor-acceptor-mediated C-3 coupling of quinoxalin-2(1H)-ones with unactivated aryl iodides", Org. Lett., 2024, 26, 6471-6476.',
        href: 'https://doi.org/10.1021/acs.orglett.3c03365',
      },
      {
        text: '"Photoacid-Catalyzed Esterification of Carboxylatic Acid Using Eosin-Y " Org. Lett. 2025, 27, 4, 1018-1023.',
        href: 'https://doi.org/10.1021/acs.orglett.4c04639',
      },
      {
        text: 'Barakha Saxena, Roshan I. Patel and Anuj Sharma*, "Visible Light-Induced Bromine Radical Enhanced Hydrogen Atom Transfer (HAT) Reactions in Organic Synthesis", RSC Sustain., 2024, 2, 2169-2189.',
        href: 'https://doi.org/10.1039/D4SU00214H',
      },
    ],
  },
  {
    title: '2. Mechanochemistry',
    description:
      'We use mechanical energy from ball-milling to carry out reactions that are usually hard to access or that need a lot of solvents. Our goal is to achieve solvent-free, atom-efficient and sustianable organic transformations. This work covers decarboxylative cross-couplings like sulfonylations and alkylations, building and modifying heterocycles, and activating high-energy intermediates in solid-state reactions. These include generating sulfonyl and aryl radicals from sulfinate and sulfonium systems. Besides improving the process and reducing waste, the solid-state setup offers unique selectivity. This includes less competitive solvolysis and changes in ion pairing. It also allows for scalability that fits with eco-friendly manufacturing.',
    items: [
      {
        text: 'Raman Kumar, Anoop Sharma and Anuj Sharma*, "Mechanochemically induced Thianthrenium Salts-Based Arylation of Diverse Heterocyclic Scaffolds", ASC Sustainable Chem. Eng., 2024, 12, 34, 12808-12818.',
        href: 'https://doi.org/10.1021/acssuschemeng.4c03163',
      },
      {
        text: 'A.P. Pandey, A. Sharma, N. Singh, R. Kumar, and A. Sharma, "Mechanochemically Triggered Deaminative Alkylation of Heterocycles Using Katritzky’s Salts", J. Org. Chem. 2025, 90, 24, 8034–8042.',
        href: 'https://doi.org/10.1021/acs.joc.5c00023',
      },
    ],
  },
  {
    title: '3. Electrophotoredox',
    description:
      'We are building a hybrid electro-photo platform that integrates electrochemical bias with visible-light excitation to modulate redox windows and reactive-state populations synergistically.',
    items: [],
  },
];

export default function ResearchProblems() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Research</h1>
     <p className="text-lg leading-relaxed text-gray-700 mb-10 max-w-4xl mx-auto text-justify">
        Our research focuses on developing innovative methodologies at the 
        interface of photoredox catalysis, radical chemistry, and sustainable 
        organic synthesis. By combining mechanistic insights with practical 
        synthetic strategies, we aim to provide new tools for efficient 
        functional group transformations and their applications in 
        pharmaceuticals, materials, and energy sciences. Our laboratory is located at the second floor in the department at IIT Roorkee. The lab houses basic modular facilities for an organic synthesis lab. In addition, In our lab, we have an indigenous photochemical reactor and high-end ball milling instrument for mechanochemical reactions. In addition, we have access to all the modern sophisticated analytical instruments in the department and the Institute as a common facility like, LCMS, HRMS, GCMS, 500MHz NMR, CHN analyzer, Param Ganga National Supercomputing facility and addition to this list is ongoing.

More importantly, every research student in the department gets a hands on experience in all the above mentioned instruments.
      </p>


      <div className="space-y-8">
        {researchSections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold">
                {section.title}
              </CardTitle>
              <CardDescription className="text-base md:text-lg">
                {section.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {section.items.length > 0 ? (
                <div>
                  <h3 className="text-lg font-semibold mb-2"></h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {section.items.map((item) => (
                      <li className="pl-2" key={item.href}>
                        <p className="text-sm sm:text-base">
                          {item.text}
                          <a
                            href={item.href}
                            className="block text-blue-600 hover:underline mt-1"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.href}
                          </a>
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
