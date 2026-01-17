import { Users } from 'lucide-react';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';

// 1. Extract table data as constants
const awardedPhdData = [
  {
    name: 'Manoj Kumar (Currently Post-Doc in Canada)',
    title: 'Design and synthesis of prospective antimalarials by [4+1] multicomponent reaction',
    year: '2011 - 2015',
    status: 'Awarded',
  },
  {
    name: 'Debasmita Saha (Currently a post-Docatthe University of Arkansas, USA)',
    title: 'Design and synthesis of prospective chemotherapeutic agents',
    year: '2012 - 2017',
    status: 'Awarded',
  },
  {
    name: 'Preeti Wadhwa (Currently a D S Kothari Post Doc in BHU)',
    title: 'Synthesis of novel heterocycles through MCR sequences',
    year: '2013 - 2017',
    status: 'Awarded',
  },
{
    name: 'Shaily (Assistant Professor in a Government College)',
    title: 'Design, synthesis and characterization of coumarin derivatives as chemosensors',
    year: '---   -2018',
    status: 'Awarded',
  },

  {
    name: 'Anuj Kumar',
    title:
      'Design and Synthesis of anti-cancer molecules',
    year: '2013 - 2017',
    status: 'Awarded',
  },
  {
    name: 'Saurav Bagchi',
    title:
      'Design and synthesis of novel chemotherapeutic agents through MCR sequences',
    year: '2014 - 2019',
    status: 'Awarded',
  },

  {
    name: 'Abdul Kadir Shaube (Ethiopian exchange student)',
    title:
      'Design and Synthesis of novel heterocycles through sustainable chemistry',
    year: '2015 - 2019',
    status: 'Awarded',
  },

  {
    name: 'Aparna Monga',
    title:
      'Functionalization of Csp2 bonds using transition metal free strategies',
    year: '2016 - 2020',
    status: 'Awarded',
  },
  {
    name: 'Nihal Singh',
    title:
      'Visible light induced electron donor acceptor based alkylation (Csp2-Csp3) and arylation (Csp2-Csp2) reactions',
    year: '---   -2025',
    status: 'Awarded',
  },
  {
    name: 'Anoop Shamra',
    title:
      'Decarboxylative strategies to forge C-C and C-X (X = N, S) bonds using ball milling and visible light',
    year: '---   -2025',
    status: 'Awarded',
  },
 
 {
    name: 'Barakha Saxena',
    title:
      'Harnessing light and mechanochemistry for green and sustainable sulfonylation reactions',
    year: '---   -2025',
    status: 'Awarded',
  },
];

const ongoingPhdData = [
 
 {
    name: 'Amrita Sharma',
    title: '',
    year: ' 2026- Present',
    status: 'Ongoing',
  },
{
    name: 'Deepa yadav',
    title: '',
    year: ' 2026- Present',
    status: 'Ongoing',
  },

  {
    name: 'Aman Dhutwani',
    title: '',
    year: ' 2026- Present',
    status: 'Ongoing',
  },

  {
    name: 'Rohit',
    title: '',
    year: ' 2026- Present',
    status: 'Ongoing',
  },

  {
    name: 'Omkar Patil',
    title: 'Organic synthesis of biologically active molecules using visible-light Photoredox and Mechanochemistry',
    year: ' 2025- Present',
    status: 'Ongoing',
  },
{
    name: 'Kajal',
    title: `Visible-light and mechanochemical assisted C-C/C-X bond formation strategies`,
    year: ' 2024- Present',
    status: 'Ongoing',
  },
 
  
  {
    name: 'Akshay Prasad',
    title: `Photoredox and  Mechanochemistry `,
    year: ' 2024- Present',
    status: 'Ongoing',
  },

{
    name: 'Shashwat Subhankar Khuntia',
    title: `Photoredox chemistry and Mechanochemistry`,
    year: ' 2024- Present',
    status: 'Ongoing',
  },


   {
    name: 'Anjali Garg',
    title: `Novel C-C bond formation using visible-light and ball milling`,
    year: ' 2023- Present',
    status: 'Ongoing',
  },

    {
   name: 'Himanshu Chauhan',
    title: 'Synthesis of transient radical using Mechanochemistry and Photoredox catalysis  ',
    year: ' 2022- Present',
    status: 'Ongoing',
  },

  {
   name: 'Raman Kumar',
    title: 'Sustainable approaches in C-S bond formation ',
    year: ' 2019- Present',
    status: 'Ongoing',
  },

  {
   name: 'Ajay Kumar Dahiya',
    title: 'Green and Sustainable methodologies for synthesis and functionalization of biologically potent heterocyclic scaffolds',
    year: ' 2019- Present',
    status: 'Ongoing',
  },
{
    name: 'Roshan I. Patel',
    title: `Efficient methods for C-H/X functionalization using contemporary methods`,
    year: ' 2021- Present',
    status: 'Ongoing',
  },
  {
    name: 'Jaya Tripathi',
    title: 'Photocatalytic manipulations in the design of novel synthetic molecules',
    year: ' 2018- Present',
    status: 'Ongoing',
  },


  {
    name: 'Harshita (part-time)',
    title: `Development of C-C and C-X bond functionalization using visible light Photoredox catalysis`,
    year: ' 2021- Present',
    status: 'Ongoing',
  },
  {
    name: 'Amar P. Pandey (part-time)',
    title:
      'Visible light photocatalysis',
    year: ' - Present',
    status: 'Ongoing',
  },
  {
    name: 'Sehdev Kumar(part-time)',
    title: `Visible light photocatalysis`,
    year: ' - Present',
    status: 'Ongoing',
  },
 

  
  
  



];

// 2. Create a reusable table component
interface PhdTableProps {
  data: { name: string; title: string; year: string; status: string }[];
  statusType: 'Awarded' | 'Ongoing';
}

function PhdTable({ data, statusType }: PhdTableProps) {
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b bg-muted/50">
          <th className="px-4 py-3 text-left text-sm font-medium">
            Student Name
          </th>
          <th className="px-4 py-3 text-left text-sm font-medium">
            Topic
          </th>
          <th className="px-4 py-3 text-left text-sm font-medium">
            {statusType === 'Awarded' ? 'Year' : 'Year Started'}
          </th>
          <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr className="border-b" key={idx}>
            <td className="px-4 py-3 text-sm">{row.name}</td>
            <td className="px-4 py-3 text-sm">{row.title}</td>
            <td className="px-4 py-3 text-sm">{row.year}</td>
            <td className="px-4 py-3 text-sm">
              <Badge
                className={
                  statusType === 'Awarded'
                    ? 'bg-green-100 text-green-800 hover:bg-green-100'
                    : 'bg-amber-100 text-amber-800 hover:bg-amber-100'
                }
              >
                {row.status}
              </Badge>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// 3. Use the component in the main section
export default function PhdSection() {
  return (
    <section id="students" className="py-12 scroll-mt-20">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Users className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">PhD Supervision</h2>
        </div>
        <p className="text-muted-foreground">
          Doctoral students guided and their research topics.
        </p>
      </div>
      <div className="mt-8">
        <Tabs defaultValue="awarded" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="awarded">Awarded</TabsTrigger>
            <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          </TabsList>
          <TabsContent value="awarded" className="mt-4">
            <div className="rounded-md border">
              <div className="overflow-x-auto">
                <PhdTable data={awardedPhdData} statusType="Awarded" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="ongoing" className="mt-4">
            <div className="rounded-md border">
              <div className="overflow-x-auto">
                <PhdTable data={ongoingPhdData} statusType="Ongoing" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
