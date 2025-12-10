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
             Photocatalyst-free decarboxylative cross-coupling of α-keto acids with aryl sulfinates for the synthesis of S-aryl thioesters, H. Gupta, J. Tripathi and A. Sharma*, Chem. Commun., 2025.

            <a
              href="https://doi.org/10.1039/D5CC05050B"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1039/D5CC05050B
            </a>
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
           	Photoinduced Iron-catalyzed aryl ester synthesis via C(sp2)-O cross-coupling of carboxylic acids with anisoles, J. Tripathi and A. Sharma*, ACS Catal., 2025, 15, 17292–17300.

            <a
              href="https://doi.org/10.1021/acscatal.5c04512"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1021/acscatal.5c04512
            </a>
          </p>
        </li>



        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Deoxygenative route to alkynylation of heterocyclic N-oxides under ball milling, A. K. Dhiya, M. Kaur, and A. Sharma*, J. Org. Chem., 2025, 90, 11033–11042.  

            
            
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
            Mechanochemically triggered deaminative alkylation of heterocycles using Katritzky’s salts, A. P. Pandey, A. Sharma, N. Singh, R. Kumar, and A. Sharma*, J. Org. Chem., 2025, 90, 8034–8042. 
            
            
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
            Visible light-induced energy transfer mediated regioselective C-3 thiolation of imidazoheterocycles using Bunte salts, S. Kumar, A. Sharma, R. Kumar, and A. Sharma*, Chem. Asian J., 2025, 20, e202401875.
        
          
            
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
           Photoacid catalyzed esterification of carboxylic acids using Eosin-Y, J. Tripathi, H. Gupta and A. Sharma*, Org. Lett., 2025, 27, 1018-1023.

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
          Photoactivation of thianthrenium salts: an electron-donor-acceptor (EDA)-complex approach, R. I. Patel, B. Saxena, and A. Sharma*, J. Org. Chem., 2025, 90, 6617-6643.
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
             Visible light-driven α-sulfonylation of ketone-derived silyl enol ethers via an electron donor–acceptor complex, B. Saxena, R. I Patel and A. Sharma*, Green Chem., 2024, 26, 11650-11661.

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
            General electron-donor-acceptor complex mediated thioesterification reaction via site-selective C-H functionalization using aryl sulfonium salts, R. I. Patel, B. Saxena, and A. Sharma*, Green Chem., 2024, 26, 10265-10274.
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

        {/* //  */}

        <li className="pl-2">
          <p className="text-sm sm:text-base">
           	Mechanochemically induced thianthrenium salt-based arylation of diverse heterocyclic scaffolds, R. Kumar, A. Sharma, and A. Sharma*, ACS Sustainable Chem. Eng., 2024, 12, 12808–12818. 
            
            <a
              href="https://doi.org/10.1021/acssuschemeng.4c03163"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1021/acssuschemeng.4c03163
            </a>

          </p>
           
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
          Visible light-induced electron–donor–acceptor-mediated C-3 coupling of quinoxalin-2(1H)-ones with unactivated aryl iodides, N. Singh, A. Sharma, J. Singh, A. P. Pandey and A. Sharma*, Org. Lett., 2024, 26, 6471–6476.
            <a
              href="https://doi.org/10.1021/acs.orglett.4c02296"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://doi.org/10.1021/acs.orglett.4c02296
            </a>

          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            	Visible light-induced bromine radical enhanced hydrogen atom transfer (HAT) reactions in organic synthesis, B. Saxena, R. I. Patel, and A. Sharma*, RSC Sustain., 2024, 2, 2169-2189.
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
            		Visible light promoted synthesis of allenes, J. Singh, B. Saxena and A. Sharma*, Catal. Sci. Technol., 2024, 14, 5143-5160.

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
        
      

      </ol>
      <div className="mt-5 flex justify-center">
        <Link href="/journal">
          <Button variant="outline">View All </Button>
        </Link>
      </div>
      
    </div>
  );
}
