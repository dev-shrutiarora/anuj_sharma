import React from "react";

export default function Page() {
  const deptUrl =
    "https://iitr.ac.in/Departments/Chemistry%20Department/Announcements/Join%20Us%20Job%20Offers.html";
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScW45ly0oDJoYu9MBO4HlUARzCA3Y92HrTeqfAx8pizV3TIkQ/viewform?embedded=true";

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold">Open Positions</h1>
            <p className="mt-1 text-sm text-gray-600 max-w-xl">
              We are inviting motivated candidates to join our research group in
              the Department of Chemistry, IIT Roorkee. Please visit the link for detailed advertisements and application process.
            </p>
          </div>

          <a
            href={deptUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-indigo-600 text-white text-sm font-medium px-5 py-2 rounded-md shadow hover:bg-indigo-700 transition"
          >
            Apply (Department Website)
          </a>
        </div>
      </header>

      {/* Description */}
      <section className="max-w-5xl mx-auto px-6 py-8 space-y-6">
        <article className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold">About the Openings</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Our group focuses on developing new methodologies in sustainable
            organic synthesis, including visible-light photoredox catalysis,
            mechanochemical transformations, and hybrid electro-photoredox
            systems. We are seeking students and researchers interested in
            working at the intersection of photochemistry, catalysis, and green
            chemistry.
          </p>

          <ul className="mt-3 list-disc list-inside text-gray-700">
            <li>Research Scholar</li>
            <li>Postdoctoral Fellow</li>
            <li>Project Associate</li>
          </ul>

          <p className="mt-3 text-sm text-gray-600">
            Note: The “Apply (Department Website)” button redirects to the IIT
            Roorkee Chemistry Department homepage for official announcements and
            application forms.
          </p>
        </article>

        {/* Embedded Google Form */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b">
            <h3 className="text-sm font-medium">Direct Contact Form</h3>
            <p className="text-xs text-gray-500 mt-1">
              You can also express your interest or reach out directly through
              this form.
            </p>
          </div>

          <div className="w-full">
            <iframe
              src={formUrl}
              width="100%"
              height="1200"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              title="Application Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </main>
  );
}


