import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FileText } from 'lucide-react';

export default function Journal() {
  return (
    <div className="container mx-auto  ">
      <div className="space-y-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">
              Journal Publications
            </h2>
          </div>
        </div>

        {/* <hr /> */}
        <p className="text-muted-foreground">
          Contributions to Journal Publications
        </p>
      </div>
      <ol className="mt-8 list-decimal pl-6 space-y-6">
      
<li className="pl-2">
          <p className="text-sm sm:text-base">
             Deoxygenative Route to Alkynylation of Heterocyclic N-oxides under Ball Milling
A Dhiya, M. Kaur, Manpreet and A. Sharma*, J. Org. Chem., 2025, 90, 11033−11042.

            
            
            <a
              href="https://doi.org/10.1021/acs.joc.5c00737"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1021/acs.joc.5c00737
            </a>
          </p>
        </li>

        <li className="pl-2">
          <p className="text-sm sm:text-base">
             Roshan Patel, Barakha Saxena, and  Anuj Sharma*, "Photoactivation of Thianthrenium Salts: An Electron-Donor-Acceptor (EDA)-Complex Approach"
             J. Org. Chem. 2025, Just accepted.
            
            
            <a
              href="https://doi.org/10.1021/acs.joc.5c00194"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1021/acs.joc.5c00194
            </a>
          </p>
        </li>

        <li className="pl-2">
          <p className="text-sm sm:text-base">
            
        
            Sehdev kumar, Annop Sharma, Raman Kumar, and Anuj Sharma*, "Visible light-induced energy transfer mediated regioselective C-3 thiolation of imidazoheterocycles using Bunte salts"
            Chem. Asian J. 2025, e202401875.
            
            <a
              href="https://doi.org/10.1002/asia.202401875"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1002/asia.202401875
            </a>
          </p>
        </li>

        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Jaya Tripathi, Harshita Gupta, and Anuj Sharma*, "Photoacid-Catalyzed Esterification of Carboxylatic Acid Using Eosin-Y "
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

         <li className="pl-2">
          <p className="text-sm sm:text-base">
            Barakha Saxena, Roshan I. Patel, and Anuj Sharma*, ''Visible light driven a-sulfonylation of ketone-driven silyl enol ether via electron-donor-acceptor complex", Green Chem. 2024, 26, 11650-11661.
            <a
              href="https://doi.org/10.1039/D4GC04554H"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1039/D4GC04554H
            </a>
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Roshan I. Patel, Barakha Saxena, and Anuj Sharma*, ''General electron-donor-acceptor complex mediated thioesterification reaction via site-selective C-H functionalization using aryl sulfonium salts", Green Chem., 2024, 26, 10265-10274.
            
            <a
              href="https://doi.org/10.1039/D4GC03768E"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1039/D4GC03768E
            </a>

          </p>
           
        </li>

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

        <li className="pl-2">
          <p className="text-sm sm:text-base">
             Jitender Singh, Barakha Saxena and Anuj Sharma*, "Visible Light Promoted Synthesis of Allenes, Catal. Sci. Technol, 2024, 14, 5143-5160.
            <a
              href="https://doi.org/10.1039/D4CY00361F"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
             https://doi.org/10.1039/D4CY00361F
            </a>

          </p>
        </li>
         <li className="pl-2">
          <p className="text-sm sm:text-base">
            Barakha Saxena, Roshan I. Patel, and Anuj Sharma*, ''Mechnochemical-assisted decarboxylative sulfonylation of a,b-unsaturated carboxylic acids with sodium sulfinate salts"
             Green Chem. 2024, 26, 2721-2729.
           <a
              href="https://doi.org/10.1039/d3gc04954j"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
             https://doi.org/10.1039/d3gc04954j
            </a>
          
          </p>
        </li>
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
           Anoop Sharma, Jitender Singh, and Anuj Sharma*, "Synthesis of quinazolinones and benzothiazoles using a-keto Acids under ball milling", J. Org. Chem.,  2024, 89, 8, 5229-5238.

           <a
              href="https://doi.org/10.1021/acs.joc.3c02435"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
             https://doi.org/10.1021/acs.joc.3c02435
             </a>
          </p>
        </li>
      </ol>
      <div className="mt-5 flex justify-center">
        <Link href="/journal">
          <Button variant="outline">View All </Button>
        </Link>
      </div>
      
    </div>
  );
}
