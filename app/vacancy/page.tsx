// app/page.tsx  (or pages/index.tsx if using pages router)
import React from "react";

export default function Page() {
  // Replace this with your actual form URL (remove ?embedded=true if present)
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScW45ly0oDJoYu9MBO4HlUARzCA3Y92HrTeqfAx8pizV3TIkQ/viewform";

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header / Hero */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">Open Vacancies</h1>
            <p className="mt-1 text-sm text-gray-600 max-w-xl">
              We’re hiring! Please read the description below and submit your application using the form.
              Shortlisted candidates will be contacted for the next steps.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-md">
              Hiring Now
            </span>
            <a
              href={formUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-md shadow hover:bg-indigo-700 transition"
            >
              Apply (opens form)
            </a>
          </div>
        </div>
      </header>

      {/* Page content */}
      <section className="max-w-5xl mx-auto px-6 py-8 space-y-6">
        {/* Short description / vacancy details */}
        <article className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold">About the openings</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            We have multiple positions available across research and teaching roles. Candidates with
            experience in computational chemistry, materials modeling, or pedagogy are encouraged to
            apply. Please ensure you attach an updated CV and a short cover message in the application
            form.
          </p>

          <ul className="mt-3 list-disc list-inside text-gray-700">
            <li>Position: Research Scholar — Computational Chemistry</li>
            <li>Position: Teaching Associate — Undergraduate Chemistry</li>
            <li>Location: IIT Roorkee (onsite/hybrid as mentioned in the posting)</li>
          </ul>

          <p className="mt-3 text-sm text-gray-600">
            Note: Clicking “Apply (opens form)” will open the application form in a new tab. Below you
            can also view and submit the form directly on this page.
          </p>
        </article>

        {/* Iframe container */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b">
            <h3 className="text-sm font-medium">Application Form</h3>
            <p className="text-xs text-gray-500 mt-1">If you prefer a full page, use the Apply button above.</p>
          </div>

          <div className="w-full">
            <div className="w-full max-w-4xl mx-auto">
              <iframe
                src={formUrl}
                width="100%"
                /* set a big height so Google form doesn't show an inner scrollbar */
                height="1200"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                title="Application Form"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <footer className="text-xs text-gray-500">
          Tip: If some respondents still see a scrollbar, increase the iframe `height` value above to match
          the full length of your form (e.g., 1500 or 2000). Because the form is hosted on Google, automatic
          height resizing is restricted by cross-origin rules.
        </footer>
      </section>
    </main>
  );
}
