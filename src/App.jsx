import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Footer from './components/Footer';

function Section({ id, title, children }) {
  return (
    <section id={id} className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">{title}</h2>
        <div className="mt-4 text-gray-600">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <main className="flex-1">
        <Hero />

        <Section id="about" title="About Starinfoservices">
          <p>
            Starinfoservices is focused on practical, mentor-led education that turns ambition into
            employable skill. Our approach blends structured curriculum with real-world projects and
            personalized guidance.
          </p>
        </Section>

        <Section id="services" title="Services">
          <ul className="list-disc pl-5 space-y-2">
            <li>Instructor-led training programs</li>
            <li>Career guidance and portfolio reviews</li>
            <li>Corporate upskilling workshops</li>
            <li>Project mentoring and code reviews</li>
          </ul>
        </Section>

        <Courses />

        <Section id="contact" title="Contact">
          <form className="grid sm:grid-cols-2 gap-4 max-w-2xl">
            <input type="text" placeholder="Your name" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
            <input type="email" placeholder="Email address" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
            <input type="text" placeholder="Subject" className="sm:col-span-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" />
            <textarea placeholder="Your message" rows="4" className="sm:col-span-2 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"></textarea>
            <button type="submit" className="sm:col-span-2 inline-flex justify-center rounded-md bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-gray-800">Send Message</button>
          </form>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
