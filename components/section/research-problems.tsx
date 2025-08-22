import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { Leaf, Users, BookOpen, Building, HeartPulse } from 'lucide-react';

export default function ResearchProblems() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Research
      </h1>

      <div className="space-y-8">
        {/* Forest Bio-Residue */}
        <Card>

           <CardHeader>
            
            <CardTitle>
              1. Photoredox Chemistry
            </CardTitle>
            <CardDescription>
              We develop visible-light catalytic platforms that use radical, energy-transfer, and EDA (electron-donor-acceptor) systems for selective C–C/C–X bond construction and late-stage diversification. Our current focus includes photo acid catalysis for redox-neutral functional group interconversion, EDA-enabled aryl/alkyl radical generation from safe precursors like Katritzky salts and thianthrenium salts, and HAT cascades for site-selective C–H functionalization. Mechanistically, we utilize excited-state charge transfer, energy transfer to triplet acceptors, and radical-polar crossover to enable transformations under mild, sustainable conditions; this often requires no photocatalyst when substrate activation can occur through in situ EDA pairing.
            </CardDescription>
          </CardHeader>
        
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-1g font-semibold mb-4"></h3>
              <ul className="list-disc pl-5 space-y-2">
                
              <li className="pl-2">
          <p className="text-sm sm:text-base">
            Nihal Singh, A. Sharma, J. Singh, A. P. Pandey and Anuj Sharma*, "Visible light-induced electron-donor-acceptor-mediated C-3 coupling of quinoxalin-2(1H)-ones with unactivated aryl iodides", Org. Lett., 2024, 26, 6471-6476.
            
            <a
              href="https://doi.org/10.1021/acs.orglett.3c03365"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
             https://doi.org/10.1021/acs.orglett.3c03365
             </a>
          </p>
        </li>

         <li className="pl-2">
          <p className="text-sm sm:text-base">
            "Photoacid-Catalyzed Esterification of Carboxylatic Acid Using Eosin-Y "
             Org. Lett.  2025, 27, 4, 1018-1023.

            <a
              href="https://doi.org/10.1021/acs.orglett.4c04639"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1021/acs.orglett.4c04639
            </a> 
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Barakha Saxena, Roshan I. Patel and Anuj Sharma*, "Visible Light-Induced Bromine Radical Enhanced Hydrogen Atom Transfer (HAT) Reactions in Organic Synthesis", RSC Sustain., 2024, 2, 2169-2189.
          <a
              href="https://doi.org/10.1039/D4SU00214H"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1039/D4SU00214H
            </a>

          </p>
        </li>


      
              </ul>
            </div>

          
          </CardContent>
        </Card>

        {/* Bottom of the Pyramid */}
        <Card>
          <CardHeader>
            
            <CardTitle>
              2. Mechanochemistry
            </CardTitle>
            <CardDescription>
            We use mechanical energy from ball-milling to carry out reactions that are usually hard to access or that need a lot of solvents. Our goal is to achieve solvent-free, atom-efficient results. This work covers decarboxylative cross-couplings like sulfonylations and alkylations, building and modifying heterocycles, and activating high-energy intermediates in solid-state reactions. These include generating sulfonyl and aryl radicals from sulfinate and sulfonium systems. Besides improving the process and reducing waste, the solid-state setup offers unique selectivity. This includes less competitive solvolysis and changes in ion pairing. It also allows for scalability that fits with eco-friendly manufacturing.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2"></h3>
              <ul className="list-disc pl-5 space-y-2">
             <li className="pl-2">
          <p className="text-sm sm:text-base">
          Raman Kumar, Anoop Sharma and Anuj Sharma*, "Mechanochemically induced Thianthrenium Salts-Based Arylation of Diverse Heterocyclic Scaffolds", ASC Sustainable Chem. Eng., 2024, 12, 34, 12808-12818.
          
            <a
              href="https://doi.org/10.1021/acssuschemeng.4c03163"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1021/acssuschemeng.4c03163E
            </a>

          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
             A.P. Pandey, A. Sharma, N. Singh, R. Kumar, and A. Sharma, "Mechanochemically Triggered Deaminative Alkylation of Heterocycles Using Katritzky’s Salts", J. Org. Chem. 2025, 90, 24, 8034–8042.

            <a
              href="https://doi.org/10.1021/acs.joc.5c00023"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1021/acs.joc.5c00023
            </a> 
          </p>
        </li>
        
          
      
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Management Education */}
        <Card>
          <CardHeader>
           
            <CardTitle>
              3. Electrophotoredox (under development)
            </CardTitle>
            <CardDescription>
            We are building a hybrid electro-photo platform that integrates electrochemical bias with visible-light excitation to modulate redox windows and reactive-state populations synergistically. 
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2"></h3>
              
            </div>

          
          </CardContent>
        </Card>

        




        
      </div>
    </div>




  );
}
