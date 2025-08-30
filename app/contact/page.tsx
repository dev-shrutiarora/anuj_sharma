import { CheckIcon, MailIcon, PhoneIcon } from 'lucide-react';
import React from 'react';

const page = () => {
  return (
    <div className="px-4 min-h-screen  flex items-center justify-center">
      <div className="rounded-lg p-1 ">
        <div className="mb-6 flex items-center space-x-4">
          <div>
            <h1 className="text-2xl font-bold">Prof. ANUJ SHARMA</h1>
            <p className="text-muted-foreground">
              Department of Chemistry, Indian Institute of Technology
              (IIT), Roorkee – 247667
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <h2 className="mb-2 text-2xl font-semibold">
              Fields of Specialization
            </h2>
            <div className="text-muted-foreground">
              <CheckIcon className="mr-2 inline-block h-4 w-4" /> Synthetic Organic Chemistry
            </div>
            <div className="text-muted-foreground">
              <CheckIcon className="mr-2 inline-block h-4 w-4" /> Photoredox Chemistry
            </div>
            <div className="text-muted-foreground">
              <CheckIcon className="mr-2 inline-block h-4 w-4" /> Mechanochemistry
            </div>
            <div className="text-muted-foreground">
              <CheckIcon className="mr-2 inline-block h-4 w-4" /> Green and sustainable Chemistry
            </div>
            <div className="text-muted-foreground">
              <CheckIcon className="mr-2 inline-block h-4 w-4" /> Electrophotoredox (under development)
            </div>
            <div className="text-muted-foreground">
              <CheckIcon className="mr-2 inline-block h-4 w-4" /> Electron Donor-Acceptor (EDA) complxes in Synthetic Transformation
            </div>
             </div>
          <div>
            <h2 className="text-2xl font-bold">Address for Correspondence</h2>
            <div className="space-y-2">
              <div>
                <p className="text-muted-foreground">
                  Second Floor, Room 303D, Department of Chemistry,
                  <br />
                  Indian Institute of Technology (IIT),
                  <br />
                  Roorkee
                   <br />
                   ORCID: 0000-0003-1035-979X
                   <br />
                   Publons: U-6306-2019
                    <br />
                   Google Scholar: anujs77@gmail.com
                    <br />

                </p>
              </div>
              <div className="grid gap-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <PhoneIcon className="h-5 w-5" />
                  <span>+91 1332 284751</span>
                </div>
                <div className="flex items-center gap-2">
                  <MailIcon className="h-5 w-5" />
                  <span>anuj.sharma@cy.iitr.ac.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
