const courses = [
  {
    title: 'Full-Stack Web Development',
    level: 'Beginner to Advanced',
    duration: '12 weeks',
    description:
      'Master frontend and backend fundamentals, build REST APIs, and deploy production-ready apps with confidence.',
  },
  {
    title: 'Data Science & Analytics',
    level: 'Intermediate',
    duration: '10 weeks',
    description:
      'Learn Python for data analysis, visualization, and machine learning with hands-on case studies.',
  },
  {
    title: 'Cloud & DevOps Foundations',
    level: 'Beginner',
    duration: '8 weeks',
    description:
      'Understand CI/CD pipelines, containers, and cloud deployment best practices using industry tools.',
  },
  {
    title: 'UI/UX Design Essentials',
    level: 'Beginner',
    duration: '6 weeks',
    description:
      'Explore design principles, wireframing, and accessible interfaces to create delightful user experiences.',
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Popular Programs</h2>
          <p className="mt-3 text-gray-600">Curated, mentor-guided learning paths to accelerate your growth.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => (
            <article key={c.title} className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 flex flex-col">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{c.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{c.description}</p>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-700">
                <span className="inline-flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-500"></span>{c.level}</span>
                <span>{c.duration}</span>
              </div>
              <a href="#contact" className="mt-5 inline-flex justify-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-gray-800">Enroll Now</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
