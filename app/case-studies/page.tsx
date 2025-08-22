import { FileText } from 'lucide-react';
import React from 'react';

export default function page() {
  return (
    <div className="container mx-auto py-8 px-6 md:px-12">
      <div className="space-y-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Case Studies</h2>
          </div>
        </div>

        {/* <hr /> */}
        <p className="text-muted-foreground">
          Contributions to Conference Publications in the field of marketing.
        </p>
      </div>
      <ol className="mt-8 list-decimal pl-6 space-y-6">
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sengar, A., Sharma, V., & Agrawal R. (2017). Market development
            through integrating value chains – a case of Patanjali Food and
            Herbal Park. Emerald Emerging Markets Case Studies, 7(4), 1-22.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sengar A., Sharma V., Agrawal R., Jain N., & Jain, P. (2016). A case
            study of Patanjali Ayurved Ltd - Offering consumer products with ‘a
            blue ocean strategy. Case Centre, Reference No. 316-0428-1.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V. (2011). Think people’s development- Focus on means- build
            trust- Do business for ever-A case study on the strategic
            development of TATAs as an organization and their contribution in
            the societal and national development. European Case Clearing House
            posted on www.ecch.com.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Nangia, V. K., Agarwal, R., Sharma, V., & Reddy, K. S. (2011).
            Conglomerate diversification through cross-continent acquisition:
            Vedanta weds Cairn India. Emerald Emerging Markets Case Studies,
            1(1), 1-15.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Nangia, V. K., Agrawal, R. & Sharma, V. (2013). Faridabad Small
            Industries Association (FSIA): Role model for MSME association,
            European Case Clearing House (ECCH) Case No. 213-031-1 and Teaching
            notes, 213-031-8.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Nangia, V. K., Agrawal, R. & Sharma, V. (2013). Integrated
            Association of Micro, Small and Medium Enterprises of India (I am
            SME of India): Making of an Institution. European Case Clearing
            House (ECCH), Case No. 213-032-1 and Teaching notes, 213-032-8.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Nangia, V. K., Agrawal, R., Sharma, V. & Arora, S. (2011). Supplier
            buyer relationship and revival-An important stage between decline
            and turnaround-The Case of Jauss Polymers. European Case Clearing
            House (ECCH), Case No. 311-2618.
          </p>
        </li>
        <li className="pl-2">
          <p className="text-sm sm:text-base">
            Sharma, V., & Agrawal R. (2011). “Case Analysis- Tata Gold Plus: The
            success story of the ‘Nano’ of the jewellery market”. Vikalpa,
            36(3), 140-141.
          </p>
        </li>
      </ol>
    </div>
  );
}
