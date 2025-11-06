'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Profile type definition
type Profile = {
  id: string;
  name: string;
  role: string;
  department?: string;
  bio: string;
  image: string;
  email?: string;
  website?: string;
  category: 'instructor' | 'researcher' | 'scholar' | 'alumni';
};

// Sample profile data
const profiles: Profile[] = [
  {
    id: '1',
    name: 'Prof. Anuj Sharma',
    role: '',
    department: 'Department of Chemistry',
    bio: 'Leading researcher in Medicinal and Organic Chemistry with 20+ years of experience and 100+ Publications',
    image: '/people1/p1.jpg?height=400&width=300',
    email: 'anuj.sharma@cy.iitr.ac.in',
    website: 'https://example.edu/sjohnson',
    category: 'instructor',
  },
  {
    id: '2',
    name: 'Barakha',
    role: 'PhD ',
    department: ' ---- -2025',
    bio: 'Thesis Title: Harnessing light and mechanochemistry for green and sustainable sulfonylation reactions',
    image: '/people1/p12.jpg?height=400&width=300',
    category: 'alumni',
  },

  {
    id: '3',
    name: 'Jaya Tripathi',
    role: 'CSIR-SRF',
    department: '2018 - Present',
    bio: 'Working on "Photocatalytic manipulations in the design of novel synthetic molecules"',
    image: '/people1/p3.jpg?height=400&width=300',
    email: 'jtripathi@cy.iitr.ac.in',
    category: 'scholar',
  },
  {
    id: '4',
    name: 'Roshan I. Patel',
    role: 'UGC-SRF',
    department: '2019 - Present',
    bio: 'working on "Efficient methods for C-H/X functionalization using contemporary methods"',
    image: '/people1/p4.jpg?height=400&width=300',
    email: 'roshan@cy.iitr.ac.in',
    category: 'scholar',
  },
  {
    id: '5',
    name: 'Ajay Kumar Dhiya',
    role: 'MHRD',
    department: '2019 - Present',
    bio: 'working on "Green and Sustainable methodologies for synthesis and functionalization of biologically potent heterocyclic scaffolds"',
    image: '/people1/p5.jpg?height=400&width=300',
    email: 'akumardhiya@cy.iitr.ac.in',
    category: 'scholar',
  },

  {
    id: '6',
    name: 'Raman Kumar',
    role: 'UGC-SRF',
    department: '2019 - Present',
    bio: 'working on "Sustainable approaches in C-S bond formation "',
    image: '/people1/p6.jpg?height=400&width=300',
    email: 'ramansingh79545@gmail.com',
    category: 'scholar',
  },
  {
    id: '7',
    name: 'Himanshu Chauhan',
    role: 'PMRF',
    department: '2022 - Present',
    bio: 'working on "Synthesis of transient radical using Mechanochemistry and Photoredox catalysis "',
    image: '/people1/p7.jpg?height=400&width=300',
    email: 'himanshu_c@cy.iitr.ac.in',
    category: 'scholar',
  },
  {
    id: '8',
    name: 'Anjali Garg',
    role: 'Golden Girl (Ph.D)',
    department: '2023 - Present',
    bio: 'working on "Novel C-C bond formation using visible-light and ball milling"',
    image: '/people1/p8.jpg?height=400&width=300',
    email: 'anjali_g@cy.iitr.ac.in',
    category: 'scholar',
  },
  {
    id: '9',
    name: 'Shashwat Subhankar Khuntia',
    role: 'MHRD',
    department: '2024 - Present',
    bio: 'working on "Photoredox chemistry and Mechanochemistry"',
    image: '/people1/p9.jpg?height=400&width=300',
    email: 'shshwat_sk@cy.iitr.ac.in',
    category: 'scholar',
  },
  {
    id: '10',
    name: 'Akshay Prasad',
    role: 'CSIR-JRF',
    department: '2024 - Present',
    bio: 'working on "Photoredox and  Mechanochemistry "',
    image: '/people1/p10.jpg?height=400&width=300',
    email: 'akshay_p@cy.iitr.ac.in',
    category: 'scholar',
  },
  {
    id: '11',
    name: 'Kajal',
    role: 'MHRD',
    department: '2024 - Present',
    bio: 'working on "Visible-light and mechanochemical assisted C-C/C-X bond formation strategies"',
    image: '/people1/p11.jpg?height=400&width=300',
    email: 'kajal@cy.iitr.ac.in',
    category: 'scholar',
  },
  {
    id: '12',
    name: 'Omkar Patil',
    role: 'MHRD',
    department: '2025 - Present',
    bio: 'working on "Organic synthesis of biologically active molecules using visible-light Photoredox and Mechanochemistry"',
    image: '/people1/p13.jpg?height=400&width=300',
    email: 'Omkar_pp@cy.iitr.ac.in',
    category: 'scholar',
  },
  {
    id: '13',
    name: 'Harshita Gupta',
    role: 'Part-Time',
    department: '2021 - Present',
    bio: 'working on "Development of C-C and C-X bond functionalization using visible light Photoredox catalysis"',
    image: '/people1/av.png?height=400&width=300',
    email: 'harshita_g@cy.iitr.ac.in',
    category: 'scholar',
  },

  {
    id: '14',
    name: 'Amar P. Pandey',
    role: 'Part-Time',
    department: '..... - Present',
    bio: 'working on "................."',
    image: '/people1/av.png?height=400&width=300',
    category: 'scholar',
  },

  {
    id: '15',
    name: 'Sehdev Kumar',
    role: 'Part-Time',
    department: '..... - Present',
    bio: 'working on "................."',
    image: '/people1/av.png?height=400&width=300',
    category: 'scholar',
  },
  {
    id: '16',
    name: 'Manoj Kumar',
    role: 'currently a post-Doc in Canada',
    department: 'Viva Voice held on 04.09.2015',
    bio: 'Thesis title : Design and synthesis of prospective antimalarials by [4+1] multicomponent reaction ',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '17',
    name: 'Debasmita Saha',
    role: 'Currently a post-Doc in the University of Arkansas, USA',
    department: 'Viva Voice held on 09.06.2017',
    bio: 'Thesis title : Synthesis of Privileged dibenzothiazepine and dibenzooxazepine scaffolds through contemporary methods. ',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '18',
    name: 'Preeti Wadhwa ',
    role: 'Currently a D S Kothari Post Doc in BHU',
    department: 'Viva Voice held on 09.06.2017',
    bio: 'Thesis title: Synthesis of N, S-heterocycles via multicomponent approach.',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '19',
    name: 'Anuj Kumar ',
    role: 'Currently a D S Kothari Post Doc in BHU',
    department: 'Viva Voice held on 22.08.2017',
    bio: '/Thesis title: Synthesis of N, S-heterocycles via multicomponent approach.',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },

  {
    id: '20',
    name: 'Shaily ',
    role: 'Assistant Professor in a Government College',
    department: 'Viva Voice held on 30.01.2018',
    bio: 'Thesis title: Design, synthesis and characterization of coumarin derivatives as chemosensors ',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },

  {
    id: '21',
    name: 'Abdulkadir Shube Hussen (Ethiopian exchange student) ',
    role: '',
    department: 'Viva Voice held on 13.09.2019',
    bio: 'Thesis title: Solvent free multicomponent reactions for the synthesis of heterocyclic scaffolds',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },

  {
    id: '22',
    name: 'Dr. Tanpreet',
    role: 'Post-Doc',
    department: '2015-2018',
    bio: '',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },

  {
    id: '23',
    name: 'Sourav Bagchi ',
    role: '',
    department: 'Viva Voice held on 12.09.2019',
    bio: 'Thesis title: Synthesis of potent organic assemblies through multicomponent reactions',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },

  {
    id: '24',
    name: 'Dr. Ankita garg',
    role: 'Post-Doc',
    department: '2016-2017',
    bio: '',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '25',
    name: ' Aparna Monga',
    role: '',
    department: 'Viva Voice held on 23.07.2020',
    bio: 'Thesis title: Functionalization of Csp2 bonds using transition metal free strategies',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },

  {
    id: '26',
    name: 'Dr. Prashant Gehtori',
    role: 'Post-Doc',
    department: '2017-2018',
    bio: '',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },

  {
    id: '27',
    name: 'Dr. Shivani Sharma',
    role: 'Post-Doc',
    department: '2019-2021',
    bio: '',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },

  {
    id: '28',
    name: 'Dr. Manpreet Kaur',
    role: 'Post-Doc',
    department: '2023-2024',
    bio: '',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '29',
    name: ' Nihal Singh',
    role: '',
    department: 'Viva Voice held on 07.03.2025',
    bio: 'Thesis title: Visible light induced electron donor acceptor based alkylation (Csp2-Csp3) and arylation (Csp2-Csp2) reactions',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },

  {
    id: '30',
    name: ' Anoop Sharma',
    role: '',
    department: 'Viva Voice held on 18.03.2025',
    bio: 'Thesis title: Decarboxylative strategies to forge C-C and C-X (X = N, S) bonds using ball milling and visible light',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },

  {
    id: '31',
    name: 'Anuradha Dagar ',
    role: '',
    department: 'M.Tech, 2012',
    bio: 'Thesis title: In-silico docking studies of bioactive natural products as putative Pf-DHFR antagonists',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },

  {
    id: '32',
    name: 'Barnita Makhal ',
    role: '',
    department: ' M.Tech, 2013',
    bio: 'Thesis title: In-silico studies of imidazo-azines as potent NTD inhibitor by multi-target screening approach',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },

  {
    id: '33',
    name: ' Sourav Bagchi',
    role: '',
    department: ' M.Tech, 2014',
    bio: 'Thesis title: Analysis of therapeutical potential of novel xanthones and allied structures through rational drug design',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '34',
    name: 'Pritam Surkar ',
    role: '',
    department: ' M.Tech, 2015',
    bio: 'Thesis title: Design and novel synthesis of imidazoazines as putative drug candidates',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '35',
    name: 'Ravi Kant Yadav',
    role: '',
    department: ' M.Tech, 2016',
    bio: 'Thesis title: Design and Synthesis of Novel Scaffolds of Pharmaceutical Importance',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '36',
    name: ' Raj Kumar Soni',
    role: '',
    department: ' M.Tech, 2020',
    bio: 'Thesis title: Environmentally benign approach to quinoxaline-2(1H)-ones via click mechanochemical- (Hand Grinding) under solvent- and catalyst-free conditions',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '37',
    name: ' Pritam Kadam',
    role: '',
    department: ' M.Sc., 2012, ',
    bio: 'Thesis title: In-silico docking studies of 4-acetamidocyclohex-1-enecarboxylic acids as H1N1 Neuraminidase inhibitors',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '38',
    name: 'Bhaskar Sen',
    role: '',
    department: ' M.Sc., 2013 ',
    bio: 'Thesis title: In-silico studies of xanthones as putative Pf-DHFR inhibitors',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '39',
    name: ' Tapas Adak',
    role: '',
    department: ' M.Sc., 2014 ',
    bio: 'Thesis title: Ecofriendly and benign synthesis of formamides and their medicinal relevance',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '40',
    name: 'Ram Nayan Gautam ',
    role: '',
    department: ' M.Sc., 2014 ',
    bio: 'Thesis title: Rational Design and Synthesis of Putative heterocyclic Scaffolds of Therapeutic Potential.',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '41',
    name: ' Ananya',
    role: '',
    department: ' M.Sc., 2016',
    bio: 'Thesis title: In-silico docking studies of the derivatives of dibenzothiazepine/dibenzoxazepine on warfarin binding site of boven Serum Albumin.',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '42',
    name: ' Anupreet Kharbanda',
    role: '',
    department: ' M.Sc., 2017 ',
    bio: 'Thesis title: Design and synthesis of novel imidazothiazole analogues through green methodologies',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '43',
    name: 'Parul Rathee ',
    role: '',
    department: ' M.Sc., 2018',
    bio: 'Thesis title: Synthesis and characterization of 3-phenacylidene-2-oxindole scaffolds',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '44',
    name: 'Deeksha ',
    role: '',
    department: ' M.Sc., 2019',
    bio: 'Thesis title: Microwave assisted DABCO catalyzed solvent free synthesis of 2,6-disustituted imidazo [2,1-b][1,3,4]thiadiazole',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '45',
    name: ' Rahul',
    role: '',
    department: ' M.Sc., 2019',
    bio: 'Thesis title: Synthesis and applications of aryl mesityliodonium triflates  ',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '46',
    name: ' Anushka Rastogi ',
    role: '',
    department: ' M.Sc., 2020',
    bio: 'Thesis title: Mechanochemical approach for the synthesis of 2-phenylquinoxalines',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '47',
    name: 'Abhishek Singh ',
    role: '',
    department: ' M.Sc., 2020',
    bio: 'Thesis title: A visible light photocatalytic synthesis of pyridyl-benzamides',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '48',
    name: 'Abdul Basil ',
    role: '',
    department: ' M.Sc., 2020',
    bio: 'Thesis title: Synthesis of Katritzky salts from pyrylium cation used as alkyl radical precursors',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },

  {
    id: '49',
    name: ' Payal Rani',
    role: '',
    department: ' M.Sc., 2021 ',
    bio: 'Thesis title: Mechanochemical Synthesis of 2-Phenylimidazo[1,2-a]pyridine and its Derivative',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '50',
    name: 'Archana Rai',
    role: '',
    department: ' M.Sc., 2021',
    bio: 'Thesis title: Mechanochemical Solvent-Free Approach for the Synthesis of 3-Iodo Substituted Imidazopyridine',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '51',
    name: ' Manish Pundir',
    role: '',
    department: ' M.Sc., 2022',
    bio: 'Thesis title: Synthesis of aryl alpha ketoacid by oxidation of aryl ketones',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '52',
    name: ' Komal',
    role: '',
    department: ' M.Sc., 2022 ',
    bio: 'Thesis title: Sustainable approach for the synthesis of 2(1H)-Quinolinone and its derivatives via ball milling',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
  {
    id: '53',
    name: 'Naihnu Ram Meena ',
    role: '',
    department: ' M.Sc., 2022',
    bio: 'Thesis title: Mechano-chemical approach for the synthesis of 2h benzo[b][1,4,]orazin-2-one',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },

  {
    id: '54',
    name: 'Shruti Sharma ',
    role: '',
    department: ' M.Sc., 2023',
    bio: 'Thesis title: Decarboxylative functionalization of cinnamic acid under visible light',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },

  {
    id: '55',
    name: 'Amisha Bansal ',
    role: '',
    department: ' M.Sc., 2023',
    bio: 'Thesis title: Synthesis of Sulfonamides from Thiosulfonates under Mild Conditions',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },

  {
    id: '56',
    name: 'Pavan Yadav ',
    role: '',
    department: ' M.Sc., 2024',
    bio: 'Thesis title: Persulfate-assisted synthesis of 2-aryl benzothiazoles under ball milling',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },

  {
    id: '57',
    name: 'Dr. Tanpreet',
    role: 'Post-Doc',
    department: '2015-2018',
    bio: '',
    image: '/people1/av.png?height=400&width=300',
    category: 'alumni',
  },
];

export function ProfileGallery() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter profiles based on search query and selected category
  const filterProfiles = (category: string, query: string) => {
    return profiles.filter(
      (profile) =>
        (category === 'all' || profile.category === category) &&
        (profile.name.toLowerCase().includes(query.toLowerCase()) ||
          profile.role.toLowerCase().includes(query.toLowerCase()) ||
          profile.bio.toLowerCase().includes(query.toLowerCase()))
    );
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">
          Our Community
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Meet our distinguished instructors, researchers, scholars, and alumni
          who contribute to our academic excellence and innovation.
        </p>

        <div className="relative max-w-md mx-auto mt-6">
          <input
            type="text"
            placeholder="Search by name, role, or keywords..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="instructor">Instructors</TabsTrigger>

            <TabsTrigger value="scholar">Scholars</TabsTrigger>
            <TabsTrigger value="alumni">Alumni</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <ProfileGrid profiles={filterProfiles('all', searchQuery)} />
        </TabsContent>

        <TabsContent value="instructor" className="mt-0">
          <ProfileGrid profiles={filterProfiles('instructor', searchQuery)} />
        </TabsContent>

        <TabsContent value="researcher" className="mt-0">
          <ProfileGrid profiles={filterProfiles('researcher', searchQuery)} />
        </TabsContent>

        <TabsContent value="scholar" className="mt-0">
          <ProfileGrid profiles={filterProfiles('scholar', searchQuery)} />
        </TabsContent>

        <TabsContent value="alumni" className="mt-0">
          <ProfileGrid profiles={filterProfiles('alumni', searchQuery)} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ProfileGrid({ profiles }: { profiles: Profile[] }) {
  if (profiles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          No profiles match your search criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {profiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
}

function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-[3/4] relative overflow-hidden mt-[-24px] ">
        <Image
          src={profile.image || '/people/p1.jpg'}
          alt={profile.name}
          fill
          className="object-cover  transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4 ">
        <h3 className="font-semibold text-lg">{profile.name}</h3>
        <p className="text-sm text-primary">{profile.role}</p>
        {profile.department && (
          <p className="text-xs text-muted-foreground mt-1">
            {profile.department}
          </p>
        )}
        <p className="text-sm mt-3 line-clamp-3">{profile.bio}</p>
      </CardContent>
      <CardFooter className="flex justify-start gap-2 p-4 pt-0">
        {profile.email && (
          <Button variant="outline" size="sm" className="h-8 w-8 p-0" asChild>
            <a
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.name}`}
            >
              <Mail className="h-4 w-4" />
            </a>
          </Button>
        )}
        {profile.website && (
          <Button variant="outline" size="sm" className="h-8 w-8 p-0" asChild>
            <a
              href={profile.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${profile.name}'s website`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
