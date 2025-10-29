export default function Hero() {
  return (
    <section id="home" className="pt-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              Empowering Careers with Practical Tech Training
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Starinfoservices helps learners build real-world skills through instructor-led
              programs, hands-on projects, and supportive mentorship.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#courses"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-800"
              >
                Explore Courses
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 text-gray-800 px-5 py-2.5 text-sm font-medium hover:bg-gray-100"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video w-full rounded-xl bg-white shadow-sm border border-gray-200 flex items-center justify-center">
              <div className="p-6 text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-gray-900/90 text-white grid place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
                </div>
                <p className="mt-4 text-sm text-gray-600 max-w-sm mx-auto">
                  Learn modern technologies with a project-first approach and guidance from
                  experienced mentors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
