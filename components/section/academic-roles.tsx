import { Check } from 'lucide-react';

export default function AcademicRoles() {
  return (
    <div className="   ">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
        Academic/Non-Academic Positions
      </h2>

      <div className="space-y-4">
        {roles.map((role, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-1 flex-shrink-0">
              <Check className="h-5 w-5 text-emerald-600" />
            </div>
            <p className="text-gray-700">{role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const roles = [
  'Head of Department, Chemistry, IIT Roorkee (Jan 2026 - till date)',
  'Member of Board of studies, School of Basic Sciences, Central University of Punjab, Bathinda (2025- till date)',
  'Member, Institute Human Ethics Committee (March 2025-till date)',
  'Chairman, JEE (July 2024 - July 2025)',
  'Vice-Chairman, JEE (Aug 2023-July 2024)',
  'Chairperson, DAPC (Jan 2023-July 2024)',
  'Member of academic committee for Army Cadet College, IMA, Dehradun (May 2023-till date)',
  'Member, Departmental Administrative Committee (DAC) (Aug 2022- till date)',
  'Member, DRC (Nov 2019-Nov 2022)',
  'Member, DAPC (2017-Nov 2019)',
  'Member, Institute lecture series (March 2016-March 2020)',
  'Chairman, Department Safety Committee (March 2017-March 2019)',
  'Member, Department Purchase Committee from 2013-2016',
  'Warden, Ganga Bhawan (capacity 500 students) from March 2013-June 2014',
  'Staff adviser, Cultural council (January 2012-May 2014)',
];
