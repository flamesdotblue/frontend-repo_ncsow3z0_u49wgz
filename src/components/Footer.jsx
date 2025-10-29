export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-lg font-semibold text-gray-900">Starinfoservices</p>
            <p className="mt-2 text-sm text-gray-600 max-w-sm">
              Building careers with practical, mentor-led learning and real-world projects.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Navigation</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#home" className="hover:text-gray-900">Home</a></li>
              <li><a href="#about" className="hover:text-gray-900">About</a></li>
              <li><a href="#services" className="hover:text-gray-900">Services</a></li>
              <li><a href="#courses" className="hover:text-gray-900">Courses</a></li>
              <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Get in touch</p>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>Email: hello@starinfoservices.com</li>
              <li>Phone: +91 00000 00000</li>
              <li>Address: Your City, Country</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>© {year} Starinfoservices. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-800">Terms</a>
            <a href="#" className="hover:text-gray-800">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
