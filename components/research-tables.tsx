// Table rendering component
interface ResearchTableProps {
  title: string;
  columns: string[];
  data: string[][];
}

function ResearchTable({ title, columns, data }: ResearchTableProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              {columns.map((col: string, idx: number) => (
                <th key={idx} className="border border-gray-300 px-4 py-2">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row: string[], i: number) => (
              <tr key={i}>
                {row.map((cell: string, j: number) => (
                  <td key={j} className="border border-gray-300 px-4 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Table data as constants
const projectInvestigatorColumns = [
  'S.No',
  'Title',
  'Patent No.',
  'Inventors',
];
const projectInvestigatorData = [
  [
    '1.',
    'The Preparation of β-Keto Sulfone',
    'Indian Patent Application No-202411058425',
    'Prof. Anuj Sharma, Barakha Sexena',
  ],
 [
    '2.',
    'A Process of Photoacid-Assisted Esterification of Carboxylic Acids',
    'Indian Patent Application No-202311075970',
    'Prof. Anuj Sharma, Jaya Tripathi',
  ],

   [
    '3.',
    'Method for synthesizing C-3 substituted Quinoxalin-2(1H)-one compounds',
    'Indian Patent Application No-202311081034',
    'Prof. Anuj Sharma, N. Sharma',
  ],
  [
    '4.',
    'Catalyst Free Method for C-2Alkylattion in Heteroarene-N-Oxide Using Katritzky salts',
    'Indian Patent No- 534656',
    'Prof. Anuj Sharma, N. Singh, S. Sharma',
  ],

  [
    '5.',
    'A Microwave Induced Process for the Preparation of Substituted 4-Vinylphenols (Technology transferred to Industry.) ',
    'US Patent No.06989467',
    'AK Sinha, BP Joshi, A. Sharma',
  ],
  [
    '6.',
    'A Microwave Induced One Pot Process for the Preparation of Arylethenes  ',
    'US Patent No. US7759527B2',
    'AK Sinha, A Sharma, V Kumar',
  ],

[
    '7.',
    'Single Step Green Process for the Preparation of Substituted Cinnamic Esters with trans-Selectivity',
    'US Patent No.20080045742',
    ' AK Sinha, A Sharma, A Swaroop, V Kumar',
  
  ],

[
'8.',
'A Single Step Microwave Induced Process for the Preparation Of Substituted Stilbenes and its Analogs',
'US Patent Application No.20070276172',
 'AK Sinha, A Sharma, V Kumar',

],

[
'9.',
'A Microwave Induced Process for the Chemoselective Reduction of Olefinic Bond of α,β-Unsaturated Carbonyl Compounds.',
'Filed No.0189 NF 2005',
'A Sharma, V Kumar,AK Sinha',

],


[
  '10.',
'Microwave Induced Green Process for Decarboxylation of Substituted Cinnamic ',
'Filed in USA/India (846 Del/2006)',
'AK Sinha, V Kumar, A  Sharma',

],

[
'11.',
'A process for isolation of vanillin and other phenolic compounds from Vanilla Beans',
'filed in USA/India, ( C.S.I.R. No.  0107NF2006)',
' by AK Sinha, UK Sharma, A Sharma',
],




]




const coPiColumns = [
  'S.No',
  'Title of Project',
  'Funding Agency',
  'Financial Outlay',
  'Year of Start & Total Period',
  'Name of P.I. and other Investigators',
  'Status Started or completed or in progress',
];
const coPiColumns1 = [
  'S.No',
  'Title of Project',
  'Funding Agency',
  'Financial Outlay',
  'Year of Start & Total Period',
  'Name of P.I. and other Investigators',
  'Status Started or completed or in progress',
];
const coPiColumns2 = [
  'S.No',
  'Title of Project',
  'Funding Agency',
  'Financial Outlay',
  'Year of Start & Total Period',
  'Name of P.I. and other Investigators',
  'Status Started or completed or in progress',
];
const coPiData = [
  [
    '1.',
    'Need assessment of Ganga Water for rituals',
    'Motilal Bhimaji Trust',
    '67 lakhs',
    '2014 6 Months',
    'Dr. Rajat Agrawal',
    'Completed',
  ],
  [
    '2.',
    'A study on cost-benefit analysis of inland waterways',
    'Motilal Bhimaji Trust',
    '2.5 Lakhs',
    '2015',
    'Dr. Rajat Agrawal',
    'In Progress',
  ],
  [
    '3.',
    'Conducted 50 Full Day Workshops for BHEL, THDC, Power Grid Corporations for Middle to Top Executives',
    'BHEL, THDC, Power Grid Corp',
    '15 Lakhs',
    '2011-2018',
    'Prof. S. Ranganekar',
    'Ongoing',
  ],
  [
    '4.',
    'Socio and Commercialization aspect of Forest Bio-Residue Briquetting Machine',
    'Dept. of Forest, Govt. of Uttarakhand',
    '7.5 Lakhs',
    '01/05/2018 to 30/04/2019',
    'Prof. R.P. Saini HRED Prof. M.P. Sharma HRED',
    'Completed',
  ],
  [
    '5.',
    'Carrying Capacity Assessment of the Tourist Destination of Auli keeping Eco sensitivity of the place in mind',
    'Govt. of Uttarakhand',
    'Around 5 Lakhs',
    'April 2021, Mar 2022',
    'Dr. Rajat Agrawal',
    'Completed',
  ],
];

const coPiData1 = [
  [
    '1.',
    'Drudgery reduction and Income enhancement of the Handloom weavers through technology intervention in Tripura',
    'Department of Science & Technology, Government of India',
    'Rs.75,27,634',
    'June, 2024-May, 2027',
    'Dr.Bibhuti Ranjan Bhattachariya, IIT Roorkee (PI) Prof. Inderdeep Singh (Co-PI), Prof. Rajat Agrawal, IIT Roorkee (Co-PI) Dr. Mamoni Kalita & Prof. Sujoy Hazari, ICFAI University, Tripura (Co-PI)',
    'Ongoing',
  ],
  [
    '2.',
    'Participatory Action Research in Select Micro Watersheds in Uttarakhand',
    'IIT Roorkee',
    'Rs. 3750000',
    'August 2022-July 2025',
    'Professor S P Singh HSS (PI) Professor R P Saini HRED (Co-PI) Professor H C Pokhriyal Member BoG IIT Roorkee (Co-PI)',
    'Ongoing',
  ],
  [
    '3.',
    'Building a network on Social Entrepreneurship, Co-creation and Innovation with partners from Copenhagen Business School, Denmark, FGV-EAESP, Sao Paulo, Brazil VUZF University, Sofia Bulgaria and IMT, Ghaziabad, India',
    'Danish Innovation Council, Denmark',
    '500,000 DKK',
    '2014 1 Year',
    'Sudhanshu Rai Associate Professor Copenhagen Business School, Denmark Dr.Rajat Agrawal, DoMS, IIT R',
    'Completed',
  ],
  [
    '4.',
    'Developing Traditional Weaver Clusters near Roorkee Period of Two Years',
    'FIG-B Project Funded by IITR',
    'Rs. 3.50 Lakhs',
    '2014 2 Years',
    'Dr Rajat Agrawal, DoMS, IIT R Dr Z. Rahman, DoMS, IITR',
    'Completed',
  ],
  [
    '5.',
    'International Project entitled "Promoting the International dimensions of Research in Higher Educational Institutes"',
    'Funded by European Commission',
    'Not specified',
    '2014 1.5 years',
    'Professor P.K. Ghosh, Metallurgy Department Dr. Rajat Agrawal, DoMS, IIT R',
    'Completed',
  ],
  [
    '6.',
    'Mapping the transition in Knowledge Economy',
    'MCIT Govt. of India',
    '495 Lakhs',
    '07/01/2008 to 10/31/2011',
    'Prof. V.K. Nangia, Prof. S. Rangnekar, Dr.Rajat Agrawal, DoMS, IIT R',
    'Project Complete Carried Out as (Co-Adviser)',
  ],
  [
    '7.',
    'Ganga River Basin Environment Management Plan',
    'Government of India',
    'Not specified',
    '2011-2014',
    'Prof. Vinod Tare, IIT Kanpur Prof. I. M. Mishra, Prof. S. P. Singh',
    'A Team Member of IIT Consortium Team',
  ],
];

const coPiData2 = [
  [
    '1.',
    'Develpoment of antidote against nerve agent (NA) poisoning: HNK-102 as universal reactivator of Acetylcholinesterase inhibited organophophorous nerve agents',
    'DRDE-DRDO',
    '12,40,000/-',
    '2024-2025',
    'Prof. Anuj Sharma',
    'Ongoing',
  ],
  [
    '2.',
    'Visible light-driven synthesis of fused O-heterocycles via radical cross-coupling methodologies',
    'SERB',
    '21,94,500/-',
    '2022-2025',
    'Prof. Anuj Sharma',
    'Ongoing',
  ],
  [
    '3.',
    "Conversion of biomass from flora of Utttrakhand into high valued products like biofuels using green and sustainable radical deoxygenation and decarboxylation processes.",
    'UCOST',
    '8,00,000/-',
    '2021-2023',
    'Prof. Anuj Sharma',
    'Completed',
  ],
  [
    '4.',
    "Novel Mechanochemical (Ball milling) assisted synthesis of heterocyclic scaffolds and their biological evaluation",
    'CSIR',
    '14,00,000/-',
    '2019-2022',
    'Prof. Anuj Sharma',
    'Completed',
  ],
  [
    '5.',
    'Copper catalyzed Novel bond forming strategies for potent Therapeutic Heterocyclic scaffolds',
    'SERB',
    '33,50,000/-',
    '2016-2019',
    'Prof. Anuj Sharma',
    'Completed',
  ],

  [
    '6.',
    'Design and synthesis of novel small molecules as a putative Pf-DHFR antagonist in malarial Chemotherapy',
    'CSIR',
    '14,00,000/-',
    '2013-2016',
    'Prof. Anuj Sharma',
    'Completed',
  ],
[
    '7.',
    'Rationale guided Design and preparation of novel anti-Tuberculosis chemotherapeutic agents through contemporary Synthetic interventions',
    'OSDD',
    '8,50,000/-',
    '2016-2017',
    'Prof. Anuj Sharma',
    'Completed',
  ],

[
    '8.',
    'Glyoxalic acid as an effective formaldehyde equivalent in imine-mediated isocyanide based multicomponent reaction cascades',
    'DST (Under Young Scientist Award)',
    '26,60,000/-',
    '2012-2015',
    'Prof. Anuj Sharma',
    'Completed',
  ],

[
    '9.',
    'A Diversity Oriented Synthesis of Cyclopenta-azulenones as Prospective Hemazoin Inhibitors in Malarial Chemotherapy',
    'FIG',
    '4,75,000/-',
    '2012-2014',
    'Prof. Anuj Sharma',
    'Completed',
  ],


];

export default function ResearchTables() {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <ResearchTable
        title="Details of Patents:"
        columns={projectInvestigatorColumns}
        data={projectInvestigatorData}
      />
    
      <ResearchTable
        title="Details of Sponsored Research Project as a Project Investigator:"
        columns={coPiColumns2}
        data={coPiData2}
      />
    </div>
  );
}
