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
const projectInvestigatorColumns = ['S.No', 'Title', 'Patent No.', 'Inventors'];
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

const coPiData2 = [
  [
    '1.',
    'Develpoment of antidote against nerve agent (NA) poisoning: HNK-102 as universal reactivator of Acetylcholinesterase inhibited organophophorous nerve agents',
    'DRDE-DRDO',
    '12,40,000/-',
    '2024-2025',
    'Prof. Anuj Sharma, Prof. Debasis Banerjee',
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
    'Conversion of biomass from flora of Utttrakhand into high valued products like biofuels using green and sustainable radical deoxygenation and decarboxylation processes.',
    'UCOST',
    '8,00,000/-',
    '2021-2023',
    'Prof. Anuj Sharma',
    'Completed',
  ],
  [
    '4.',
    'Novel Mechanochemical (Ball milling) assisted synthesis of heterocyclic scaffolds and their biological evaluation',
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
