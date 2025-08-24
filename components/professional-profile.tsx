import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Award,
  BookOpen,
  Briefcase,
  Building,
  Clock,
  FileText,
  GraduationCap,
  Users,
} from 'lucide-react';

// 1. Extract education data as a constant array
const educationData = [
  
  
  {
    qualification: 'Graduation B.Sc.',
    university: 'Himachal Pradesh University, Shimla',
    year: '1998',
  },
  {
    qualification: 'Master Degree M.Sc. Chemistry',
    university: 'Himachal Pradesh University, Shimla, Organic Chemistry as Specialization',
    year: '2000',
  },

  {
    qualification: 'Ph.D.',
    university: 'Institute of Himalayan Bioresource Technology (IHBT), CSIR, Palampur, Himachal Pradesh(Supervisor: Dr Arun K Sinha)',
    year: '2006',
  },
  {
    qualification: 'TWAS Postdoc',
    university: 'Department of Chemistry, Federal University of Santa Maria, Santa Maria, RS, Brasil (Mentor: Prof. A. L. Braga).',
    year: 'Aug. 2006',
  },

  {
    qualification: 'Postdoctoral Research Associate',
    university: 'Department of Chemistry, Katholiek University, Leuven, Belgium (Mentor: Prof. E. Van der Eyken)',
    year: '2006-2007',
  },
{
    qualification: 'NIH Postdoc',
    university: 'Department of Pharmacology, University of Arizona, Tucson, USA (Mentor: Prof. L. H. Hurley and Dr. B. De)',
    year: 'Dec 2007-2011',
    },

];



// 2. Create a reusable EducationCard component
interface EducationCardProps {
  qualification: string;
  university: string;
  year: string;
}

function EducationCard({
  qualification,
  university,
  year,
}: EducationCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border rounded-lg">
      <div className="md:col-span-3">
        <h3 className="font-bold text-lg">Qualification: {qualification}</h3>

        <p>
          <strong>University:</strong> {university}
        </p>
      </div>
      <div className="flex items-center justify-center md:justify-end">
        <span className="text-lg font-semibold bg-slate-100 px-4 py-2 rounded-full">
          {year}
        </span>
      </div>
    </div>
  );
}

// EMPLOYMENT DETAILS DATA & COMPONENT
const employmentData = [
  {
    title: 'PROFESSOR',
    period: 'April 2021 - Present',
    employer: 'Department of Chemsitry, INDIAN INSTITUTE OF TECHNOLOGY (IIT) ROORKEE',
    },
  {
    title: 'ASSOCIATE PROFESSOR',
    period: 'Nov-2015 - April 2021',
    employer: 'IDepartment of Chemsitry, NDIAN INSTITUTE OF TECHNOLOGY (IIT) ROORKEE',
     },
  {
    title: 'ASSISTANT PROFESSOR',
    period: 'May 2011 - Nov 2015',
    employer: 'Department of Chemsitry, INDIAN INSTITUTE OF TECHNOLOGY (IIT) ROORKEE',
  },
  
];




interface EmploymentCardProps {
  title: string;
  period: string;
  employer: string;
  
}

function EmploymentCard({
  title,
  period,
  employer,
  
}: EmploymentCardProps) {
  return (
    <div className="p-4 border rounded-lg">
      <div className="flex flex-col md:flex-row justify-between mb-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <div className="bg-slate-100 px-4 py-1 rounded-full text-sm font-medium inline-flex items-center mt-2 md:mt-0">
          {period}
        </div>
      </div>
      <p>
        <strong>Employer:</strong> {employer}
      </p>
      
    </div>
  );
}



// 3. Use the component in the main section
export default function ProfessionalProfile() {
  return (
    <div className="container mx-auto py-8">
      <div className="space-y-8">
        <Card>
          <CardHeader className="">
            <CardTitle className="text-2xl flex items-center gap-2">
              <GraduationCap className="h-6 w-6" />
              EDUCATIONAL DETAILS
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <EducationCard key={idx} {...edu} />
              ))}
            </div>
          </CardContent>
        </Card>

       
        {/* employment details*/}
        <Card>
          <CardHeader className="">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Clock className="h-6 w-6" />
              EMPLOYEMENT DETAILS
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {employmentData.map((job, idx) => (
                <EmploymentCard key={idx} {...job} />
              ))}
            </div>
          </CardContent>
        </Card>

         {/* INSTITUTIONAL REVIVAL AND DEVELOPMENT */}
        <Card>
          <CardHeader className="">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Building className="h-6 w-6" />
              
              EDITOR/EDITORIAL BOARD MEMBER

            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <ul className="list-disc pl-6 space-y-3">
              
                
                <li>Associate Editor for Molecular Diversity (December 2024-till date), a springer journal, impact factor 3.8</li>

              <li>
                Member of the Editorial Board for Molecular Diversity (March 2021-December 2024), a springer journal, impact factor 3.8
              </li>
            </ul>
          </CardContent>
        </Card>


        {/* invited lectures*/}
        <Card>
          <CardHeader className="">
            <CardTitle className="text-2xl flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              INVITED LECTURES
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <ul className="list-disc pl-6 space-y-3">
            

                
        <strong>AS CHAIR:</strong>
        <ul className="list-disc pl-6 mt-2">
          <li> 	At Ullappuzha, Kerela, In Interdisciplinary Initiative in Chemical Sciences IICS-FORCE, during 3rd Oct -6th Oct, 2024
</li>
<li>At IIT Mandi , Earth sciences and Renewable energy,
in 3rd Himachal Pradesh Science Congress organised by Himachal Pradesh Council for Science Technology and Environment (HIMCOSTE) and IIT Mandi during 21st Oct -23rd Oct, 2018.

</li>
        </ul>
        
  <strong>KEY-NOTE LECTURE:</strong>
  <ul className="list-disc pl-6 mt-2">

      <li> At NIH Hamirpur, on topic "1,4 Cycloadditions: A Gateway to Diversified Heterocyclic scaffolds of Pharmaceutical Interventions" in a National Conference on “Analytical Chemistry and Spectroscopy (ACMS-16)” dated 13th Oct, 2016.</li>
      <li> 	At NIT Hamirpur, on topic "Rational Drug Design: A Paradigm of New Hope in Drug Discovery"
in a National Conference on “Interdisciplinary Approaches in Chemical Science” dated 16th December, 2015
</li>
  </ul>

     <strong>AS MENTOR/RESOURCE PERSON</strong>
  <ul className="list-disc pl-6 mt-2">
    <li>At Kurukshetra University, on topic "Recent advancements in organic synthesis" in interdisciplinary Refresher Course for the University/Colleges teachers between 10th-23rd December 2024 
 </li>
 <li>At Kurukshetra University, on topic "Green Chemistry: The Core of Central Science  
	in interdisciplinary Refresher Course on the theme “Chemistry: The central science” for the University/Colleges teachers on 6.10.2020
 </li>
<li> At Kurukshetra University, on topic "Drug Discovery: History and Current Scenario"  
in interdisciplinary Refresher Course on the theme “Recent Developments in Basic Science and Engineering” for the University/Colleges teachers on 21.12.2019 
</li>
<li>8.	At IIT Roorkee, on topic "Art of Teaching"  
in a QIP sponsored Short term course on “Advance Pedagogy and Digital Tools” conducted by Humanities department dated 3rd -7th June 2019
 </li>
<li> 9.	At HNB Garhwal Central University, Srinagar, on topic "Curious case of separation science" 
in a DST sponsored Inspire Science Camp in January, 2019
</li>
 <li> 10.	At HNB Garhwal Central University, Srinagar, on topic "The story of Chromatography" in two different DST sponsored Inspire Science Camp on dated 17th & 29th January, 2017and 18th March, 2017.  
</li>At HNB Garhwal Central University Srinagar on topic "Drug Discovery: Opportunity at the Bottom of the Pyramid"
in DST sponsored Inspire Science Camp dated 17th January, 2015

</ul>
 <strong>AS GUEST LECTURE</strong>
  <ul className="list-disc pl-6 mt-2">

    <li> At Central university Jammu, on topic "Pursuit of radicals in organic synthesis"
during an official visit to the university on 13th December, 2024

</li>
<li> At Ravenshaw University, on topic "Organic synthesis in pursuit of radicals 
during an official visit to the university on 16th August, 2024
</li>

<li>At Kenilworth Resort, Goa, India on topic "Pursuit of Electron Donor-Acceptor (EDA) Complexes under Visible Light Assisted Manipulations" in International conference on Sustainable Chemistry-II, 2024
 conference during 20-22 February 2024.
 </li>
<li> At ITC Hotel Rama International, Aurangabad on topic "Pursuit of Electron Donor-Acceptor (EDA) Complexes under Visible Light Assisted Manipulations" in National Organic Symposium Trust (NOST-2023) Conference during 17-20 February 2023.
</li>
<li>At the Hyatt Regency, Kathmandu, Nepal on topic "Pursuit of Electron Donor-Acceptor (EDA) Complexes under Visible Light Assisted Manipulations" in FORCE-IICS Conference 2023 during 28 September-01 October 2023 
 </li>
<li> At Govt College Rajouri, University of Jammu on topic "Design of visible light Photocatalysis in novel bond forming reactions"
in, “Virtual International Conference on Emerging Research Trends in Chemical Sciences (ERTCS-2020)” during 24-26th July 2020
</li>
<li>At Baharampur University, Orissa on topic "Design of visible light Photocatalysis in the design of novel C-H activation reactions"
in “National Organic Synthesis Conference”  N-COS- 2020, during  02nd -03rd March 2020.
 </li>
<li>At Panjab University Chandigarh, on topic "Synthesis of N,S-Heterocycles using a Toolbox of Environmentally Benign Methods"
in a National Conference on “Triumphs of Sustainable Progress in Chemistry” dated 22nd-23rd February, 2018.
</li>
<li>At Vignan University, Guntur AP, on topic "1,4 Cycloadditions: A new paradigm in Organic Synthesis Toolbox"
in a National Conference on “Advanced Chemical Materials and Processes for Technological Applications in Life Sciences, Pharmacy and Healthcare” dated 18th -19th August, 2017.
 </li>
<li> At IIT Roorkee, on topic "Green Chemistry: Relevance to Pharmaceuticals"
in a QIP sponsored Short term course on “Green chemistry for Cleaner Technology” conducted by Chemical Engineering and Chemistry dated 9th January-13th January 2017.
</li>

<li>At SGPG College, Panipat, on topic "Rational Drug Design: A fast track approach to drug discovery"
in a National Conference on “Recent Advances in Chemical Sciences” dated 30-31st March, 2016.
 </li>
<li> At K L University, Guntur AP, on topic "Light within the Tunnel: A contemporary Approach in Drug Discovery"
in a National Conference on “New Challenges of Chemistry in Biomedical Research (NCCBR-16)” dated 8-9thJanuary, 2016
</li>
<li>At HNB Garhwal Central University Srinagar, on topic "Drug Discovery: New Opportunities"
in DST sponsored Inspire Science Camp in January 2016
 </li>
<li>At Jamia Milia Islamia, New Delhi, on topic "Rational Drug Design: Rational Drug Design: A Light within the Tunnel Approach"
in a National Conference on “Interdisciplinary Approaches in Chemical Science” dated 16th December, 2015.
 </li>

 <li> At FRI Shimla, on topic "Rational Drug Design in quest for novel putative drug candidates against tropical diseases"
in Second Annual National conference on “Science: Emerging Scenario and Future Challenges” dated 17th-18th May, 2014.
</li>

<li>At Radisson Hyderabad, on topic "In silico docking studies of Bioactive Natural Plant Products as Putative DHFR Antagonists"
in International Conference on “Pharmacognosy, Phytochemistry and Natural Products” dated 21st -23rd October, 2013
 </li>

  </ul>

      
               
                  
               
            </ul>
          </CardContent>
        </Card>


        {/* TEACHING AND TRAINING */}
        <Card>
          <CardHeader className="">
            <CardTitle className="text-2xl flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              TEACHING : Courses taught (2016 onwards)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Organic and Inorganic Chemistry (CYN-002)
              </li>
              <li>
                Organic Chemistry-I (CYN-203)
              </li>
              <li>
                Two online courses:
                <ul className="list-disc pl-6 mt-2">
                  <li>
                  “Chemistry in day to day life” under IIT-PAL Scheme
                   <a
              href="https://youtu.be/A3AxJihycB8?si=qAnYNgFKByVTidB7"
              className="block text-blue-600 hover:underline mt-1"
              target="_blank"
              rel="noopener noreferrer"
            >
             ​https://youtu.be/A3AxJihycB8?si=qAnYNgFKByVTidB7
             </a>
                  </li>
                  <li>
                   "Principles of chromatography” under NME-ICT (MHRD) e–module 
                  </li>
                  
                </ul>
              </li>
              <li>
                Heterocyclic Chemistry (CYN-514)
              </li>
              <li>
                Advanced Organic Chemistry-I (CYN-621O)
              </li>
              <li>Advanced Analytical Chemistry -II (CYN-631A)</li>
               <li>Modern Organic Synthetic Methods (CYN-619)</li> 
            <li>Analytical Methods (CYN-721)</li>
            <li>Pharmaceutical Organic Synthesis (CYN-722)</li>
             <li>Organic Chemistry - V (CYN-523)</li>
             <li>Organic Chemistry - IV (CYN-306)</li>
            </ul>
          </CardContent>
        </Card>

        {/* ADMINISTRATION */}
        <Card>
          <CardHeader className="">
            <CardTitle className="text-2xl flex items-center gap-2">
              <FileText className="h-6 w-6" />
              ADMINISTRATION
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <ul className="list-disc pl-6 space-y-3">
              <li>
                JEE Vice Chairperson, Indian Institute of Technology, Roorkee (11 Aug 2023 - 10 Aug 2024)
              </li>
              <li>
                Chairman JEE advanced office, Indian Institute of Technology, Roorkee, India (12 Aug 2024 - July 2025)
              </li>
              <li>
                Charperson DAPC, Depatment of Chemistry, IIT Roorkee (1 Jan 2023 - 1 Jan 2024)
              </li>
              <li>
                Faculty Adviser (literary section), Cultural Society, Indian Institute of Technology, Roorkee (4 Aug 2020 - Present)
              </li>
              <li>
                 Warden, Ganga Bhawan, Indian Institute of Technology, Roorkee (4 Aug 2020 - Present)
              </li>
              <li>
                Faculty advisor, Cultural council, IIT Roorkee (i Jan 2012 - 1 Jan 2014)
              </li>
              <li>
                Member, DAC, Indian Institute of Technology, Roorkee (1 Jan 2014 - 1 Jan 2015)
              </li>
              <li> Warden, IIT Roorkee (1 Jan 2013 - 1 Jan 2014)</li>
              <li>Member, Department Purchase Commitee, Indian Institute of Technology, Roorkee (4 AUg 2020 - Present)
</li>
              <li> Faculty Adviser, Department Cognizance team, Indian Institute of Technology, Roorkee (4 Aug 2020 - Present)</li>
              <li>Member, DPC, IIT Roorkee (1 Jan 2013 - 1 Jan 2016)</li>
              <li>OC, Safety, IIT Roorkee, (1 Jan 2014 - Present)</li>
              <li>Member, DPC, Department of Design, IIT Roorkee.</li>
              
      
            </ul>
          </CardContent>
        </Card>

        {/* INDUSTRY */}
        <Card>
          <CardHeader className="">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
             MEMBERSHIPS / ORGANIZATIONS ASSOCIATED 
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="list-disc pl-6 space-y-3">
            <li>  	Fellow of Royal Chemical Society </li>
            <li>Life member of Indian National Science Association</li>
            <li>	Life member of Indian Chemical Society</li>
            <li> 	Life member of Indian Council of Chemists</li>
            <li>Life member of Chemical Research Society of India</li>  
            <li>Member of American Chemical Society</li>

            </ul>
          </CardContent>
        </Card>

      

        {/* CORE BUSINESS CONSULTING PROJECTS */}
        <Card>
          <CardHeader className="">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Users className="h-6 w-6" />
              CONFERENCES/WORKSHOPS ORGANIZED
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-6">
            <ul className="list-disc pl-6 space-y-3">
              <li>
              	Organized 1st national conference on Contemporary Facets in Organic Synthesis (CFOS) at IIT Roorkee campus during 22nd December-24th December, 2017.
              </li>
              <li>
               Organized 2nd national conference on Contemporary Facets in Organic Synthesis (CFOS) at IIT Roorkee campus during 1st December-4th December, 2022.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* ORGANIZATIONAL PROJECT */}
        <Card>
          <CardHeader className="">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Award className="h-6 w-6" />
              TECHNOLOGY TRANSFERRED:
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p>
             Based on US Patent No.06989467 one method was sold to a reputed Flavor and Fragrance industry on non-exclusive basis.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
